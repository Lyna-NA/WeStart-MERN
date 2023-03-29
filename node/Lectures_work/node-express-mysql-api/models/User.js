const { check } = require("express-validator");
const db = require("../utils/database");

module.exports = class User {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static validationRules = [
    check("name").notEmpty().isAlpha().isLength({ min: 3, max: 20 }),
    check("email").normalizeEmail().isEmail(),
    check("password")
      .notEmpty()
      .isAlpha()
      .isNumeric()
      .isStrongPassword({
        minLength: 4,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
      .isLength({ min: 3, max: 15 }),
  ];

  static async findAll(columns = "*") {
    let result = await db.execute(`SELECT ${columns} FROM users`);
    return result[0];
  }

  static async findById(id, columns = "*") {
    let result = await db.execute(
      `SELECT ${columns} FROM users WHERE id = ${id} `
    );
    // return result[0].length > 0 ? result[0] : null;
    if (result[0].length != 0) {
      let object = result[0][0];
      let user = new User(
        object.id,
        object.name,
        object.email
        // object.password
      );
      return user;
    }
    return null;
  }

  async save() {
    try {
      let result = await db.execute(
        "INSERT INTO users(name, email, password) VALUES (?, ?, ?)",
        [this.name, this.email, this.password]
      );
      //   console.log(result);
      this.id = result[0].insertId;
      return true;
    } catch (error) {
      return false;
    }
  }

  async update() {
    try {
      let result = await db.execute(
        "UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?",
        [this.name, this.email, this.password, this.id]
      );
      return result[0].affectedRows > 0;
    } catch (error) {
      return false;
    }
  }

  async delete() {
    let result = await db.execute(`DELETE FROM users WHERE id = ?`, [this.id]);
    return result[0].affectedRows > 0;
  }

  //hasMany - Notes  1 => *
  async notes() {
    let result = await db.execute(
      "SELECT * FROM notes n JOIN users U ON n.user_id = u.id WHERE u.id = ?",
      [this.id]
    );
    return result[0];
  }
};