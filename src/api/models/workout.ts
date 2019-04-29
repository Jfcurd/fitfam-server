import { WorkoutExercise } from "./workout_exercise";

export class Workout {
  public id?: number;
  public userId?: number;
  public name?: string;
  public startedAt?: Date;
  public endedAt?: Date;
  public createdAt?: Date;
  public updatedAt?: Date;
  public exercises?: WorkoutExercise[];
}
