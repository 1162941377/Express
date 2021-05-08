const express = require("express");
const router = express.Router();
const stuServ = require("../../services/studentService");
const { asyncHanlder } = require("../getSendResult");

router.get(
  "/",
  asyncHanlder(async (req, res) => {
    const page = req.query.page || 1; // 根据 page 过滤数据的页数
    const limit = req.query.limit || 10; // 根据 limit 过滤数据的条数
    const sex = req.query.sex || -1; // 根据 sex 过滤数据的性别，默认是全选
    const name = req.query.name || ""; // 根据 name 模拟匹配查询数据，默认是全选
    return await stuServ.getStudents(page, limit, sex, name); // 将变量值传递
  })
);

router.get(
  "/:id",
  asyncHanlder(async (req, res) => {
    return await stuServ.getStudentById(req.params.id); // 根据 id 过滤数据
  })
);

router.post(
  "/",
  asyncHanlder(async (req, res, next) => {
    return await stuServ.addStudent(req.body);
  })
);

router.delete(
  "/:id",
  asyncHanlder(async (req, res, next) => {
    return await stuServ.deleteStudent(req.params.id);
  })
);

router.put(
  "/:id",
  asyncHanlder(async (req, res, next) => {
    return await stuServ.updateStudent(req.params.id, req.body);
  })
);

module.exports = router;
