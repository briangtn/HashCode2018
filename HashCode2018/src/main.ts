import { Vector2 } from './Vector2';
import { Trip } from './Trip';
import { Car } from './Car';
import { Map } from './Map';

let map: Map = Map.init_map(process.argv[2]);
console.log(map);