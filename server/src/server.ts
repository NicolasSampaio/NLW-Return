import express from "express";
import cors from "cors";
import { routes } from "./routes";

const app = express();
app.use(cors());
// app.use(
//   cors({
//     origin: "https://www.section.io",
//   })
// );
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log(`Prod -- Server is running at ${process.env.PORT}`);
  console.log("Local -- Server is running at http://localhost:3333");
});
