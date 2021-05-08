const express = require("express");
const router = express.Router();
const bookServ = require("../../services/bookService");
const { asyncHanlder } = require("../getSendResult");

router.get(
  "/",
  asyncHanlder(async (req, res) => {
    const page = req.query.page;
    const limit = req.query.limit;
    const keywords = req.query.keyword;
    return await bookServ.getBooks(page, limit, keywords);
  })
);

router.get(
  "/:id",
  asyncHanlder(async (req, res) => {
    const id = req.params.id;
    return await bookServ.getBookById(id);
  })
);

router.delete(
  "/",
  asyncHanlder(async (req, res, next) => {
    const id = req.params.id;
    return await bookServ.getBookById(id);
  })
);

router.put(
  "/",
  asyncHanlder(async (req, res, next) => {
    const id = req.params.id;
    const obj = req.body;
    return await bookServ.updateBook(id, obj);
  })
);

router.post(
  "/",
  asyncHanlder(async (req, res, next) => {
    const obj = req.body;
    return bookServ.addBook(id);
  })
);

router.module.exports = router;
