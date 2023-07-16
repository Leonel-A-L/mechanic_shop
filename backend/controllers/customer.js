const Customer = require("../models/Customer");

// Gets all customers
async function getAllCustomer(req, res) {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    res.json({ message: "error fetching customer" });
  }
}

// Gets customer by the ID
async function getCustomerById(req, res) {
  try {
    const { id } = req.params;
    const customer = await Customer.findById(id);
    if (!customer) throw new Error("error retrieving customer");
    res.json(customer);
  } catch (error) {
    res.json({ message: "error fetching customer" });
  }
}

// Creates the customers
async function createCustomer(req, res) {
  try {
    if (!req.body.image) req.body.image = undefined;
    const customer = await new Customer(req.body).save();
    const id = customer.id;
    res.status(201).json({ message: "customer created", id });
  } catch (error) {
    res.json({ message: "error creating customer" });
  }
}
// Updates customer by the ID
async function updateCustomerById(req, res) {
  try {
    const { id } = req.params;
    if (!req.body.image) req.body.image = undefined;
    await Customer.findByIdAndUpdate(id, req.body);
    res.status(204).json({ message: "customer updated" });
  } catch (error) {
    res.json({ message: "error updating customer" });
  }
}

// Deletes customer by the ID
async function deleteCustomerById(req, res) {
  try {
    const { id } = req.params;
    await Customer.findByIdAndDelete(id);
    res.status(204).json({ message: "customer deleted" });
  } catch (error) {
    res.json({ message: "error deleting customer" });
  }
}

module.exports = {
  getAllCustomer,
  getCustomerById,
  createCustomer,
  deleteCustomerById,
  updateCustomerById,
};
