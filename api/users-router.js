import crypto from "crypto";
import jwt from "jsonwebtoken";
import express from "express";

const SECRET = "TAMEIMPALA";
const usersRouter = express.Router();

let Users = null;

const initApi = async (db) => {
  Users = await db.collection("users");
};

/* Handle a login request. */
usersRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;
  
  /* If the request query is missing a username property or the username is empty, return an error. */
  if (!username || username === "") {
    res.status(400).send({ error: "Username field cannot be empty." });
    return;
  }

  /* If the request query is missing a password property or the password is empty, return an error. */
  if (!password || password === "") {
    res.status(400).send({ error: "Password field cannot be empty." });
    return;
  }

  const user = await Users.findOne({ username });

  /* Hash the password. */
  const hash = crypto.createHash("sha256");
  hash.update(password);

  if (user) {
    hash.update(user.salt);
    
    /* Check if passwords don't match. */
    const hashedPassword = hash.digest("base64");
    if (hashedPassword !== user.password) {
      res.status(403).json({ error: "Password is incorrect." });
      return;
    }
  } else {
    res.status(404).json({ error: "User doesn't exist." });
    return;
  }

  const apiKey = jwt.sign({ username }, SECRET, { expiresIn: "1d" });

  delete user._id;
  delete user.password;
  delete user.salt;
  
  res.status(200).send({ user, apiKey });
});

/* Get the user's favourite exams. */
usersRouter.get("/:id/favourites", async (req, res) => {
  const { id } = req.params;

  const { favourites } = await Users.findOne({ id });

  res.status(200).json({ favourites });
});

/* Add a new favourite paper to the user's profile. */
usersRouter.post("/:id/favourites", async (req, res) => {
  const { id } = req.params;
  const { examId } = req.body;

  const paper = await Users.findOne({ id, favourites: examId });

  /* If the paper is already in the user's favourites, return an error. */
  if (paper) {
    res.status(400).send({ error: "Paper is already a favourite." });
    return;
  }

  await Users.updateOne({ id }, { $push: { favourites: examId }});

  res.status(200).json({ success: true });
});

export { initApi, usersRouter };