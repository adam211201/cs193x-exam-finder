import { v4 as uuidv4 } from "uuid";
import express from "express";

const examsRouter = express.Router();

let Exams = null;
let Errors = null;

const initApi = async (db) => {
  Exams = await db.collection("exams");
  Errors = await db.collection("errors");
};

/* Retrieve an exam paper from the DB. */
examsRouter.get("/", async (req, res) => {
  const { language, certificate, level, subject, year } = req.query;

  /* If the request query is missing a language property or the language is empty, return an error. */
  if (!language || language === "") {
    res.status(400).send({ error: "Language field must not be empty." });
    return;
  }

  /* If the request query is missing a certificate property or the certificate is empty, return an error. */
  if (!certificate || certificate === "") {
    res.status(400).send({ error: "Certificate field must not be empty." });
    return;
  }

  /* If the request query is missing a level property or the level is empty, return an error. */
  if (!level || level === "") {
    res.status(400).send({ error: "Level field must not be empty." });
    return;
  }

  /* If the request query is missing a subject property or the subject is empty, return an error. */
  if (!subject || subject === "") {
    res.status(400).send({ error: "Subject field must not be empty." });
    return;
  }
  
  /* If the request query is missing a year property or the year is empty, return an error. */
  if (!year || year === "") {
    res.status(400).send({ error: "Year field must not be empty." });
    return;
  }

  const exam = await Exams.findOne({ language, certificate, level, subject, year: parseInt(year) });

  res.json({ id: exam.id, examPaper: exam.papers.exam, markingScheme: exam.papers.markingScheme });
});

/* Get all the errors from the DB. */
examsRouter.get("/errors", async (req, res) => {
  const errors = await Errors.find({}).toArray();

  res.status(200).json({ errors });  
});

/* Create a new error, adding it to the DB. */
examsRouter.post("/errors", async (req, res) => {
  const { subject, description } = req.body;

  /* If the request body is missing a subject property or the subject is empty, return an error. */
  if (!subject || subject === "") {
    res.status(400).json({ error: "Subject cannot be empty." });
    return;
  }

  /* If the request body is missing a description property or the description is empty, return an error. */
  if (!description || description === "") {
    res.status(400).json({ error: "Description cannot be empty." });
    return;
  }

  /* Insert error into the DB. */
  await Errors.insertOne({
    id: uuidv4(),
    subject,
    description
  });  

  res.status(200).json({ success: true });
});

/* Retrieve an exam by id. */
examsRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  const exam = await Exams.findOne({ id });

  res.status(200).json({ exam });  
});

/* Delete an error from the DB. */
examsRouter.delete("/errors/:id", async (req, res) => {
  const { id } = req.params;

  await Errors.deleteOne({ id });

  res.status(200).json({ success: true });
});

export { initApi, examsRouter };