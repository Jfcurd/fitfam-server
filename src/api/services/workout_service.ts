import { workoutRepository } from "../repositories/workout_repository";

// Services contain all of the business logic of the API
export class WorkoutService {
  public GetAll() {
    return workoutRepository.GetAll();
  }

  public CreateEmpty() {
    return workoutRepository.CreateEmpty();
  }
}

// Exporting a singleton service here since it has no dependencies
// This will get created on start and we don't have to allocate it again
export const workoutService = new WorkoutService();