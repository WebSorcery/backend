"use strict";
const express = require("express");
const router = express.Router();
const getGitDetail= require("../controllers/getGitDetail.js")
router.post(
    "/git",
    async (req, res) => {
        try {
            const data=await getGitDetail.gitDetail(req, res);
            res.json(data);
        } catch (error) {
            console.log(error);
        res.status(500).json({
            success: false,
            message: "It's not you. It's on us. We're working on it",
        });
        }
    }
    );
module.exports = router;