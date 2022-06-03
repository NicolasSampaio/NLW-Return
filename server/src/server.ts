import express from "express";
import cors from "cors";
import { routes } from "./routes";

const app = express();
const rateLimit = require("express-rate-limit");

// const apiRequestLimiter = rateLimit({
//   windowMs: 1 * 60 * 1000, // 1 minute
//   max: 2, // limit each IP to 2 requests per windowMs
//   handler: function (req: express.Request, res: express.Response) {
//     return res.status(429).json({
//       error: "You sent too many requests. Please wait a while then try again",
//     });
//   },
// });

// app.use((req, res, next) => {
//   res.header(
//     "Access-Control-Allow-Methods",
//     "https://nicolassampaioreturn.vercel.app"
//   );
//   res.header("Access-Control-Allow-Methods", "POST");
//   app.use(cors());
//   next();
// });

app.use(
  cors({
    origin: "https://nlw-return-production-b195.up.railway.app",
    methods: ["POST"],
  })
);
// app.use(cors());
// app.use(apiRequestLimiter);
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log(`Prod -- Server is running at ${process.env.PORT}`);
  console.log("Local -- Server is running at http://localhost:3333");
});
