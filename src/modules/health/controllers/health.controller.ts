import { Response } from "express";

class HealthController {
  async handle(res: Response): Promise<Response> {
    return res.status(200).json({ message: "This is a health check route." });
  }
}

export { HealthController };
