const express = require("express");
const router = express.Router();
const classServ = require("../../services/classService");
const { asyncHanlder } = require("../getSendResult");

router.get(
  "/",
  asyncHanlder(async (req, res) => {
    return await classServ.getClasses();
  })
);

router.get(
  "/:id",
  asyncHanlder(async (req, res) => {
    const id = req.params.id;
    return await classServ.getClassById(id);
  })
);

router.delete(
  "/:id",
  asyncHanlder(async (req, res, next) => {
    const id = req.params.id;
    return await classServ.deleteClassById(id);
  })
);

router.put(
  "/",
  asyncHanlder(async (req, res, next) => {
    const id = req.params.id;
    const obj = req.body;
    return await classServ.updateClassById(id, obj);
  })
);

router.post(
  "/",
  asyncHanlder(async (req, res, next) => {
    const obj = req.body;
    return await classServ.addClass(obj);
  })
);

module.exports = router;
