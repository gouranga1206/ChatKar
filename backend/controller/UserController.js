const asyncHandler = require("express-async-handler");

//desc
//to get all users
//route GET /api/users
//access public
const getUsers = asyncHandler(async(req, res) => {
  res.send("get USer");
});


//desc
//to create a user
//route POST /api/users
//access public
const createUser = asyncHandler(async(req, res) => {
  const [name, email, password] = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }

  res.send("Create USer");
});


//desc
//to get a user by ID
//route GET /api/users/:id
//access public
const getUserById = asyncHandler(async(req, res) => {
  res.send("get USer via Id");
});

//desc
//to update a user by ID
//route PUT /api/users/:id
//access public
const updateUser = asyncHandler(async(req, res) => {
  res.send("Update USer via ID");
});

//desc
//to delete a user by ID
//route DELETE /api/users/:id
//access public
const deleteUser = asyncHandler(async(req, res) => {
  res.send("Delete USer via ID");
});

module.exports = { getUsers, createUser, getUserById, updateUser, deleteUser };
