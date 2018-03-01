import { Vector2 } from './Vector2';
import { Trip } from './Trip';
import { Car } from './Car';
import { Map } from './Map';

function trip_length(trip: Trip) {
	var x: number = Math.abs(trip.start.x - trip.end.x);
	var y: number = Math.abs(trip.start.y - trip.end.y);
	return (x + y);
}

function goto_trip_len(veh: Car, trip: Trip) {
	var x: number = Math.abs(veh.position.x - trip.start.x);
	var y: number = Math.abs(veh.position.y - trip.start.y);
	return (x + y);
}

function check_shortest(veh: Car, array: Trip[])
{
	var shortest: Trip[] = null;
	var shortest_len: number = -1;

	array.forEach(elem => {
		if (shortest_len == -1) {
			shortest_len = goto_trip_len(veh, elem);
			shortest.push(elem);
			return;
		}
		if (goto_trip_len(veh, elem) < shortest_len) {
			shortest = [];
			shortest.push(elem);
			shortest_len = goto_trip_len(veh, elem);
			return;
		} else if (goto_trip_len(veh, elem) == shortest_len) {
			shortest.push(elem);
			shortest_len = goto_trip_len(veh, elem);
			return;
		}
	});
	return (array);
}

function filter_freetrips(trips: Trip[]) {
	trips.forEach(elem => {
		if (elem.car != null)
			trips.splice(trips.indexOf(elem), 1);
	});
}

function get_shortest(trips: Trip[]) {
	var shortest: Trip = null;

	trips.forEach(elem => {
		if (shortest == null) {
			shortest = elem;
			return;
		}
		if (trip_length(elem) < trip_length(shortest)) {
			shortest = elem;
			return;
		}
	});
	return (shortest);
}

let map: Map = Map.init_map(process.argv[2]);
console.log(map);
var trip1: Trip = new Trip(new Vector2(0, 0), new Vector2(0, 3), 0, 9);
var trip2: Trip = new Trip(new Vector2(5, 0), new Vector2(1, 3), 0, 9);
var arr_trip: Trip[] = [trip1, trip2];
var arr_veh: Car[] = [];
var step: number = 0;

arr_trip.forEach(element => {
	console.log(element);
});

while (step < map.stepCount) {
	arr_veh.forEach(veh => {
		var shortest_trips: Trip[] = check_shortest(veh, arr_trip);
		filter_freetrips(shortest_trips);
		var trip: Trip = get_shortest(shortest_trips);
		trip.car = veh;
		veh.trip = trip;
	});
	arr_veh.forEach(veh => {
		veh.navigate();
	});
	step += 1;
}