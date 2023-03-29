const db = require("../utils/database");

module.exports = class Note {
  mySQLQuery = "";

  constructor(title, info, userId, id) {
    this.id = id;
    this.title = title;
    this.info = info;
    this.userId = userId;
  }

  static async findAll(columns = "*") {
    let result = await db.execute(`SELECT ${columns} FROM notes`);
    return result[0];
  }

  static async findById(id, columns = "*") {
    let result = await db.execute(
      `SELECT ${columns} FROM notes WHERE id = ${id}`
    );
    if (result[0].length > 0) {
      let object = result[0][0];
      return new Note(object.title, object.info, object.user_id, object.id);
    }
    return null;
  }

  async save() {
    try {
      let result = await db.execute(
        "INSERT INTO notes(title, info, user_id) VALUES (?, ?, ?)",
        [this.title, this.info, this.userId]
      );
      this.id = result[0].insertId;
      return result[0].affectedRows > 0;
    } catch (error) {
      return false;
    }
  }

  async update() {
    try {
      let result = await db.execute(
        "UPDATE notes SET title = ?, info = ?, user_id = ? WHERE id = ?",
        [this.title, this.info, this.userId, this.id]
      );
      return result[0].affectedRows > 0;
    } catch (error) {
      return false;
    }
  }

  async delete() {
    let result = await db.execute("DELETE FROM notes WHERE id = ?", [this.id]);
    return result[0].affectedRows > 0;
  }

  //belongsTo - User  1 => 1
  async user() {
    let result = await db.execute(
      "SELECT u.id, u.name, u.email FROM users u JOIN notes n ON u.id = n.user_id WHERE n.id = ?",
      [this.id]
    );
    return result[0];
  }

  static where(column, operator = "=", value = "", condition = "") {
    //WHERE name = value OR/AND
    if (this.mySQLQuery === undefined) {
      this.mySQLQuery = `WHERE ${column} ${operator} ${value} ${condition}`;
    } else {
      this.mySQLQuery += ` ${column} ${operator} ${value} ${condition}`;
    }
    return this;
  }

  static orderBy(columns = "id", type = "ASC") {
    this.mySQLQuery += ` ORDER BY ${columns} ${type}`;
    return this;
  }

  //EXECUTIVE FUNCTIONS
  static async get(columns = "*") {
    let result = await db.execute(
      `SELECT ${columns} FROM notes ${this.mySQLQuery}`
    );
    return result[0];
  }

  static async count() {
    let result = await db.execute(
      `SELECT COUNT(*) AS count FROM notes ${this.mySQLQuery}`
    );
    return result[0];
  }
};
