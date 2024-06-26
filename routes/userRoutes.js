const userController = require("../controllers/userController");
const router = require("express").Router();

router.post("/user", userController.addUser);
router.get("/user", userController.getAllUser);
router.get("/user/:id", userController.getUser);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);
router.get("/verify-ip", async (req, res) => {
  try {
    res.status(200).json(req);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
