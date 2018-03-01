import { Vector2 } from './Vector2';
import { Trip } from './Trip';

var trip1: Trip = new Trip(new Vector2(0, 0), new Vector2(0, 3));
var trip2: Trip = new Trip(new Vector2(5, 0), new Vector2(1, 3));

console.log(trip1);
console.log(trip2);