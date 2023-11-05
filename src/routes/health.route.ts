import { Router } from "express";
import { HealthController } from "../modules/health/controllers/health.controller";

const healthRoutes = Router();

const healthController = new HealthController();

healthRoutes.get("/", (req, res) => {
  healthController.handle(res);
});

export { healthRoutes };
