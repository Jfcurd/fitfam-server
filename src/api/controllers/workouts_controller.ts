import { workoutService } from "../services/workout_service";

// Controllers are a very thin layer that accept a request,
// validate the request, then convert into to the necessary
// payload to call the service layer
export class WorkoutsController {
  public GetAll() {
    return workoutService.GetAll();
  }

  public CreateEmpty() {
    return workoutService.CreateEmpty();
  }
}
