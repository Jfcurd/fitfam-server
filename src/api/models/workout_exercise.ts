import { ExerciseSet } from "./exercise_set";
import { Exercise } from "./exercise";

export class WorkoutExercise {
  public id?: number;
  public workoutId?: number;
  public exerciseId?: number;
  public createdAt?: Date;
  public updatedAt?: Date;
  public exercise?: Exercise;
  public sets?: ExerciseSet[];
}
