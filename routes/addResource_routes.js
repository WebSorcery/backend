"use strict";
const express = require("express");
const router = express.Router();
const { uploadDoc } = require("../configs/multer_config");
const rules = require("../middlewares/validation-rules");
const resourcesDBApis = require("../controllers/addResourcesDBApis.js");
const getResourcesDBApis = require("../controllers/getResourcesDBApis.js");
router.post(
  "/add",
  rules.resourcesForms,
  uploadDoc.single("resource"),
  async (req, res) => {
    try {
      await resourcesDBApis.addResources(req, res);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "It's not you. It's on us. We're working on it",
      });
    }
  }
);
router.get(
  "/getresources",
  async (req, res) => {
    try {
      const data=await getResourcesDBApis.getResources(req, res);
      res.json(data);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "It's not you. It's on us. We're working on it",
      });
    }
  }
);
module.exports = router;
