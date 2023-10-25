import { initApi as examsApi, examsRouter } from "./exams-router.js";
import { initApi as usersApi, usersRouter } from "./users-router.js";
import { MongoClient } from "mongodb";

let DATABASE_NAME = "examfinder";

if (process.env.DATABASE_NAME) DATABASE_NAME = process.env.DATABASE_NAME;

const initApi = async (app) => {
  const conn = await MongoClient.connect(
    "mongodb://localhost"
  );
  const db = conn.db(DATABASE_NAME);

  app.set("json spaces", 2);
  
  app.use("/exams", examsRouter);
  await examsApi(db);

  app.use("/users", usersRouter);
  await usersApi(db);
};

export default initApi;
