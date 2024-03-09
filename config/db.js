const mysql = require("mysql2")
require('dotenv').config();

const db = mysql.createConnection(process.env.MYSQL_URI)
// const db = mysql.createConnection({
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.MYSQL_DB,
//     port: process.env.MYSQL_PORT,
//     waitForConnections: true,
//     connectionLimit: 5,
//     queueLimit: 0,
// })


// const jsonData = [];



// Insert JSON data into MySQL table
//   jsonData.forEach((product) => {
//     const sql = `INSERT INTO mens (id, endpoint, ProductLink, images, brand, title, price, originalprice, discount, offerprice, stock) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
//     const values = [
//       product.id,
//       product.endpoint,
//       product.ProductLink,
//       JSON.stringify(product.images),
//       product.brand,
//       product.title,
//       product.price,
//       product.originalprice,
//       product.discount,
//       product.offerprice,
//       product.stock
//     ];

//     db.query(sql, values, (err, result) => {
//       if (err) {
//         console.error('Error inserting data: ' + err.stack);
//         return;
//       }
//       console.log(`Inserted ${result.affectedRows} row(s)`);
//     });
//   });



module.exports = db;