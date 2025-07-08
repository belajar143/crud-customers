const db = require('../config/db');

exports.getAllCustomers = (req, res) => {
  db.query('SELECT * FROM customers', (err, results) => {
    if (err) throw err;
    res.render('index', { customers: results });
  });
};

exports.showAddForm = (req, res) => {
  res.render('add');
};

exports.addCustomer = (req, res) => {
  const { name, phone, address } = req.body;
  db.query('INSERT INTO customers SET ?', { name, phone, address }, (err) => {
    if (err) throw err;
    res.redirect('/');
  });
};

exports.showEditForm = (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM customers WHERE id = ?', [id], (err, results) => {
    if (err) throw err;
    res.render('edit', { customer: results[0] });
  });
};

exports.updateCustomer = (req, res) => {
  const id = req.params.id;
  const { name, phone, address } = req.body;
  db.query('UPDATE customers SET ? WHERE id = ?', [{ name, phone, address }, id], (err) => {
    if (err) throw err;
    res.redirect('/');
  });
};

exports.deleteCustomer = (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM customers WHERE id = ?', [id], (err) => {
    if (err) throw err;
    res.redirect('/');
  });
};

exports.searchCustomers = (req, res) => {
  const keyword = req.body.keyword;
  db.query("SELECT * FROM customers WHERE name LIKE ?", [`%${keyword}%`], (err, results) => {
    if (err) throw err;
    res.render('index', { customers: results });
  });
};

exports.searchCustomers = (req, res) => {
  const keyword = req.body.keyword;
  db.query("SELECT * FROM customers WHERE name LIKE ?", [`%${keyword}%`], (err, results) => {
    if (err) throw err;
    res.render('index', { customers: results, isSearch: true });
  });
};

exports.getAllCustomers = (req, res) => {
  db.query("SELECT * FROM customers", (err, results) => {
    if (err) throw err;
    res.render('index', { customers: results, isSearch: false });
  });
};
