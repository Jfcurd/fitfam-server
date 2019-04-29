import express from "express";
import { WorkoutsController } from "../controllers/workouts_controller";

export function RegisterRoutes(app: express.Express) {
  app.get("/ping", (_, res) => {
    res.send("pong");
  });

  // TODO: Probably break out routes by controller for cleanliness
  // Eg. workouts.routes.ts

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

// Nest response under data prop for client read consistency
// TODO: Add other props to the response, like pagination
function success(data: any) {
  return {
    data: data,
  };
}
