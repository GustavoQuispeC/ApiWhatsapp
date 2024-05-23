const express = require("express");
const router = express.Router();
const whatsappController = require("../controllers/whatsappControllers");

router
  .get("/", whatsappController.VerifyToken)
  .post("/", whatsappController.RecivedMessage);

module.exports = router;
