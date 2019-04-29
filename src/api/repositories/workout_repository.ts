import { Workout } from './../models/workout';

class WorkoutRepository {
  private workouts: Workout[];

  constructor() {
    // TODO: This should all be stored in PSQL,
    // probably in a table called `workouts`,
    // scoped to user in the request context

    this.workouts = [
      {
        id: 1,
        name: 'Test Workout 1',
        createdAt: new Date(),
        exercises: [{ exercise: { name: 'Squats' } }, { exercise: { name: 'Deadlifts' } }],
      },
      {
        id: 2,
        name: 'Test Workout 2',
        createdAt: new Date(),
        exercises: [{ exercise: { name: 'Bench press' } }, { exercise: { name: 'Dumbbell shoulder press' } }],
      },
      {
        id: 3,
        name: 'Test Workout 3',
        createdAt: new Date(),
        exercises: [],
      },
    ];
  }

  public GetAll(): Workout[] {
    return this.workouts;
  }

  public CreateEmpty(): Workout {
    const workout: Workout = {
      id: Math.max(...this.workouts.map(w => w.id), 1),
      createdAt: new Date(),
    };
    this.workouts.push(workout);
    return workout;
  }
}

export const workoutRepository = new WorkoutRepository();