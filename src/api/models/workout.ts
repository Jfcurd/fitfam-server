import { WorkoutExercise } from "./workout_exercise";

// Models are very thin data model objects, essentially structs
// These would probably map directly to a repository and may
// be rows in a db table, result of a view, or some kind of query result
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
