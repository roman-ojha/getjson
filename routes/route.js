import express from "express";
const router = express.Router();

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ name: "Roman ojah", id: id });
});

export default router;
