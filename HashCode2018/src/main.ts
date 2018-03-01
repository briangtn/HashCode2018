import { Vector2 } from './Vector2';
import { Trip } from './Trip';
import { Car } from './Car';

var trip1: Trip = new Trip(new Vector2(0, 0), new Vector2(0, 3));
var trip2: Trip = new Trip(new Vector2(5, 0), new Vector2(1, 3));
var arr_trip: Trip[] = [trip1, trip2];
var arr_veh: Car[] = [];

arr_trip.forEach(element => {
	console.log(element);
});

while (1) {
	arr_veh.forEach(veh => {
		var shortest_trips: Trip[] = check_shortest(arr_trip);
		var free_trips: Trip = filter_freetrips(shortest_trips);
		var trip: Trip = get_shortest(free_trip);
		veh.trip = trip;
	});
	arr_veh.forEach(veh => {
		veh.navigate();
	});
}