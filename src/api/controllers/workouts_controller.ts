import { workoutRepository } from "../repositories/workout_repository";

export class WorkoutsController {
  public GetAll() {
    return workoutRepository.GetAll();
  }

  public CreateEmpty() {
    return workoutRepository.CreateEmpty();
  }
}
