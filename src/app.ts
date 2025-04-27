import { configDotenv } from "dotenv";
import express, { Application } from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import authRoutes from "./routes/authRoutes";
import { swaggerOptions } from "./config/swagger";
import { errorHandler } from "./middlewares/errorMiddleware";

configDotenv();

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

const specs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use(errorHandler);

export default app;
