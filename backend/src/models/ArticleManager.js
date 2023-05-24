const AbstractManager = require("./AbstractManager");

class ArticleManager extends AbstractManager {
  constructor() {
    super({ table: "articles" });
  }

  findAll() {
    return this.database.query(
      `SELECT a.id, a.title, i.src , i.alt FROM ${this.table} AS a INNER JOIN images AS i ON i.id = a.image_id`
    );
  }

  find(id) {
    return this.database.query(
      `SELECT a.id, a.title, a.subtitle,a.resume, a.text,  i.src , i.alt FROM  ${this.table} AS a INNER JOIN images AS i ON i.id = a.image_id where a.id = ?`,
      [id]
    );
  }

  insert(article) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      article.title,
    ]);
  }

  update(article) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [article.title, article.id]
    );
  }
}

module.exports = ArticleManager;
