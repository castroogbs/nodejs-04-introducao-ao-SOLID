import express from "express";
import swaggerUi from "swagger-ui-express";

import { usersRoutes } from "./routes/users.routes";
import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json());

// Docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Routes
app.use("/users", usersRoutes);

export { app };
