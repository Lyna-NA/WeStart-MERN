const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AuthClients = require("../models/auth-clients");
const TokenController = require("./token-controller");
const { addDays } = require("../utils/date-utils");

exports.login = async (req, res) => {
  /**
   * 1- Get user by unique login entity (ex: email)
   * 2- If exists, compare hashes
   *    - The original hashed password in document with the sent password in request (must be hashed)
   * 3- If true, create Token
   * 4- Set User data in ????
   */

  try {
    let user = await User.findOne({ email: req.body.email });
    if (user != null) {
      let correctPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (correctPassword) {
        if (user.verified) {
          /**
           * Scenarios:
           *
           * First: Check if active tokens exists
           *    - Pre Action: call @allowSignIn
           *        - False => Don't execute sign
           *        - True => Execute sign and generate New Token
           *            - Post Actions:
           *                1) Execute SignIn
           *                2) Save new token
           *
           * Second: Multi Token
           *    - No actions to be taken
           *
           * Third: Revoke Previous Token
           *    - Pre Action : none
           *    - Post Actions:
           *        1) Revoke previous token
           *        2) Execute SignIn
           *        3) Save new token
           */

          //First Scenario:
          let client = await AuthClients.findOne({ provider: "users" });
          // console.log("********");
          // console.log(client._id);
          // console.log(client.id);
          // console.log("********");
          let isAllowed = await TokenController.allowSignIn(user.id, client.id);

          if (isAllowed) {
            let expiryDate = addDays(30);

            let newToken = await TokenController.saveNewToken(
              user.id,
              client.id,
              expiryDate
            );
            // console.log("New Token: ", newToken.id);

            let token = jwt.sign(
              { id: user._id, tokenId: newToken.id },
              "we-start-secret-key-jwt-$*",
              {
                expiresIn: expiryDate,
              }
            );

            user["_doc"].token = token;

            // let data = { ...user._doc, token };
            return res.status(200).json({
              status: true,
              message: "Logged in successfully",
              user: user,
            });
          }
          return res.status(401).json({
            stauts: false,
            message: "Login rejected due to an existing login session",
          });
        }
        return res.status(400).json({
          status: false,
          message: "Account is not verified, verify to login",
        });
      }
      return res.status(400).json({
        status: false,
        message: "Error credentials, check email or password",
      });
    }
    return res.status(400).json({
      status: false,
      message: "No account attached to this email",
    });
  } catch (error) {}
};

exports.multiLogin = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user != null) {
      let correctPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (correctPassword) {
        if (user.verified) {
          //Second Scenario:
          let client = await AuthClients.findOne({ provider: "users" });

          let expiryDate = addDays(30);

          let newToken = await TokenController.saveNewToken(
            user.id,
            client.id,
            expiryDate
          );
          // console.log("New Token: ", newToken.id);

          let token = jwt.sign(
            { id: user._id, tokenId: newToken.id },
            "we-start-secret-key-jwt-$*",
            {
              expiresIn: expiryDate,
            }
          );

          user["_doc"].token = token;

          // let data = { ...user._doc, token };
          return res.status(200).json({
            status: true,
            message: "Logged in successfully",
            user: user,
          });
        }
        return res.status(400).json({
          status: false,
          message: "Account is not verified, verify to login",
        });
      }
      return res.status(400).json({
        status: false,
        message: "Error credentials, check email or password",
      });
    }
    return res.status(400).json({
      status: false,
      message: "No account attached to this email",
    });
  } catch (error) {}
};

exports.loginWithPreviousRevoke = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user != null) {
      let correctPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (correctPassword) {
        if (user.verified) {
          //Third Scenario:
          await TokenController.revokePreviousToken(user.id);

          let client = await AuthClients.findOne({ provider: "users" });

          let expiryDate = addDays(30);

          let newToken = await TokenController.saveNewToken(
            user.id,
            client.id,
            expiryDate
          );
          // console.log("New Token: ", newToken.id);

          let token = jwt.sign(
            { id: user._id, tokenId: newToken.id },
            "we-start-secret-key-jwt-$*",
            {
              expiresIn: expiryDate,
            }
          );

          user["_doc"].token = token;

          // let data = { ...user._doc, token };
          return res.status(200).json({
            status: true,
            message: "Logged in successfully",
            user: user,
          });
        }
        return res.status(400).json({
          status: false,
          message: "Account is not verified, verify to login",
        });
      }
      return res.status(400).json({
        status: false,
        message: "Error credentials, check email or password",
      });
    }
    return res.status(400).json({
      status: false,
      message: "No account attached to this email",
    });
  } catch (error) {}
};

exports.signout = async (req, res) => {
  TokenController.revokePreviousToken(req.userId);
  res.status(200).json({ stauts: true });
};

exports.verify = async (req, res) => {
  let email = req.body.email;
  let code = req.body.code;

  let user = await User.findOne({ email: email });

  if (user != null) {
    if (user.verification_code != null) {
      const isCorrectCode = await bcrypt.compare(code, user.verification_code);
      if (isCorrectCode) {
        user.verified = true;
        user.verification_code = null;
        let updatedResult = await User.updateOne(
          { _id: user._id },
          { $set: user }
        );
        let isUpdated = updatedResult.modifiedCount == 1;
        return res.status(isUpdated ? 200 : 400).json({
          status: isUpdated,
          message: isUpdated
            ? "Account verified successfully"
            : "Process failed, try again",
        });
      }
      return res.status(400).json({
        status: false,
        message: "Incorrect verification code",
      });
    }
    return res.status(400).json({
      status: false,
      message: "No verification code to be verified, process rejected",
    });
  }
  return res.status(400).json({
    status: false,
    message: "Process rejected",
  });
};

exports.forgotPassword = async (req, res) => {
  let email = req.body.email;
  let user = await User.findOne({ email: email });
  if (user != null) {
    if (user.reset_code == null) {
      const resetCode = Math.round(Math.random() * 10000);
      const hashedResetCode = await bcrypt.hash(resetCode.toString(), 12);

      user.reset_code = hashedResetCode;
      const updateResult = await User.updateOne(
        { _id: user.id },
        { $set: user }
      );
      const updated = updateResult.modifiedCount == 1;
      return res.status(updated ? 200 : 400).json({
        status: updated,
        message: updated
          ? "Reset code sent successfully"
          : "Reset process failed, try again.",
        code: resetCode,
      });
    }
    return res.status(400).json({
      status: false,
      message: "Password reset code requested before, check email",
    });
  }
  return res
    .status(400)
    .json({ status: false, message: "Email is not registered in our records" });
};

exports.resetPassword = async (req, res) => {
  let email = req.body.email;
  let user = await User.findOne({ email: email });

  if (user != null) {
    if (user.reset_code != null) {
      let isCorrectCode = await bcrypt.compare(req.body.code, user.reset_code);
      if (isCorrectCode) {
        user.reset_code = null;
        user.password = await bcrypt.hash(req.body.password, 12);
        const updateResult = await User.updateOne(
          { _id: user._id },
          { $set: user }
        );
        const updated = updateResult.modifiedCount == 1;
        return res.status(updated ? 200 : 400).json({
          status: updated,
          message: updated
            ? "Password reset successfully"
            : "Failed to reset password",
        });
      }
      return res.status(400).json({
        status: false,
        message: "Reset code is not correct",
      });
    }
    return res.status(400).json({
      status: false,
      message: "Process rejected, no reset request",
    });
  }
  return res.status(400).json({
    status: false,
    message: "Email is not registered in our records",
  });
};

exports.info = async (req, res) => {
  let user = await User.findById(req.userId);
  return res
    .status(200)
    .json({ message: "Autorized/Authenticated", user: user });
};

exports.addClients = async (req, res) => {
  /**
   * 1) Hashed ClientId
   * 2) Hashed Secret Key
   */

  let result = await AuthClients.insertMany([
    {
      name: "user-client",
      secret: "-",
      provider: "users",
      revoked: false,
    },
  ]);

  if (result.length != 0) {
    let secret = bcrypt.hashSync(result[0].id, 12);
    await AuthClients.updateOne(
      { _id: result[0].id },
      { $set: { secret: secret } }
    );
  }

  return res.status(200).json({ status: true });
};