const crudService = require("./crud.service");
exports.createUser = async (req, res) => {
  try {
    const response = await crudService.createUser(req.body);
    res.json({ data: response, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.editUser = async (req, res) => {
  try {
    console.log(req.params.id);
    req.body.id=req.params.id
    const response = await crudService.editUser(req.body);
    res.json({ data: response, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    console.log(req.params.id);
    req.body.id=req.params.id
    const response = await crudService.getUser(req.body);
    res.json({ data: response, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.deleteUser = async (req, res) => {
  try {
    console.log(req.params.id);
    req.body.id=req.params.id
    const response = await crudService.deleteUser(req.body);
    res.json({ data: response, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
   // req.body.id=req.params.id
    const response = await crudService.getUsers(req.query);
    res.json({ data: response, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
