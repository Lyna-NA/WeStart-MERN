//require: models
const Product = require("../models/Product");
const Category = require("../models/Category");

const sequelize = require("./database");

module.exports = class SequelizeManager {
  authenticate() {
    sequelize
      .authenticate()
      .then(() => {
        console.log("Connected Successfully");
      })
      .catch((error) => {
        console.log("connection Failed");
      });
  }

  modifyRelations() {
    // Category hasMany Products: 1 => *
    Category.hasMany(Product, {   
      //   foreignKey: "category_id",
    });
    //addProduct() - addProducts() - setProducts()
    //createProduct()
    //getPrducts() 
    //countProducts()
    //hasProduct()
    //hasProducts()
    //removeProduct()
    //removeProducts()

    // Product belongsTo Category
    Product.belongsTo(Category, {
      onDelete: "CASCADE",
      //   foreignKey: "category_id",
    });
    //getCategory() - setCategory() - createCategory()
  }

  syncModels(callback) {
    sequelize
      .sync(/*{ force: true }*/)
      .then((result) => {
        // console.log("Tables Created");
        callback("Tables Created!", true);
      })
      .catch((error) => {
        // console.log("Failed to create tables!");
        callback("Failed!", false);
      });
  }
};
