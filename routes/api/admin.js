const express = require("express");
const router = express.Router();
const adminServ = require("../../services/adminService");
const { asyncHanlder } = require("../getSendResult.js");

router.get(
  "/",
  asyncHanlder(async (req, res) => {
    return await adminServ.getAdmins();
  })
);

router.get(
  "/:id",
  asyncHanlder(async (req, res) => {
    const id = req.params.id;
    return adminServ.getAdmins(id);
  })
);

router.delete(
  "/:id",
  asyncHanlder(async (req, res, next) => {
    const id = req.params.id;
    return await adminServ.deleteAdmin(id);
  })
);

router.put(
  "/",
  asyncHanlder(async (req, res, next) => {
    const id = req.params.id;
    const adminObj = req.body;
    return adminServ.updateAdmin(id, adminObj);
  })
);

router.post(
  "/",
  asyncHanlder(async (req, res, next) => {
    const adminObj = req.body;
    return adminServ.addAdmin(adminObj);
  })
);

router.post(
  "/:id",
  asyncHanlder(async (req, res, next) => {
    const loginId = req.query.loginId;
    const loginPwd = req.query.loginPwd;
    return adminServ.login(loginId, loginPwd);
  })
);

module.exports = router;
