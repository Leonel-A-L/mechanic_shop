const router = require("express").Router();
const { createAppointment } = require("../controllers/appointment");
const {
  getAllCustomer,
  getCustomerById,
  createCustomer,
  deleteCustomerById,
  updateCustomerById,
  userLogin,
} = require("../controllers/customer");
// GET / get all customers
router.get("/", getAllCustomer);

// GET /:id get customers by id
router.get("/:id", getCustomerById);

//POST / create customers
router.post("/createcustomer", createCustomer);

router.post("/userlogin", userLogin);

router.post("/createappointment", createAppointment);

// PUT /:id update
router.put("/:id", updateCustomerById);

// DELETE /:id delete customer by id
router.delete("/:id", deleteCustomerById);

module.exports = router;
