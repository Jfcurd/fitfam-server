import express from "express";
import { WorkoutsController } from "../controllers/workouts_controller";

export function RegisterRoutes(app: express.Express) {
  app.get("/ping", (_, res) => {
    res.send("pong");
  });

  app.get("/workouts", (_, res) => {
    const controller = new WorkoutsController();
    const data = controller.GetAll();
    res.status(200).json(success(data));
  });

  app.post("/workouts", (_, res) => {
    const controller = new WorkoutsController();
    const data = controller.CreateEmpty();
    res.status(200).json(success(data));
  });
}

function success(data: any) {
  return {
    data: data,
  };
}
