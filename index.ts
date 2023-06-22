import { VacuumCleaner } from './services/VacuumCleaner';
import { Position, Orientation } from './models/position';

// Exemple d'utilisation
const initialPosition: Position = {
  x: 5,
  y: 5,
  orientation: Orientation.North,
};

const instructions = 'DADADADAA';
const maxX = 15;
const maxY = 15;

const vacuumCleaner = new VacuumCleaner(initialPosition, maxX, maxY);
vacuumCleaner.executeInstructions(instructions);

const finalPosition = vacuumCleaner.getPosition();
console.log(
  `Position finale : x=${finalPosition.x} y=${finalPosition.y} orientation=${finalPosition.orientation}`
);
