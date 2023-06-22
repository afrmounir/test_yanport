import { Position, Orientation } from '../models/position';

export class VacuumCleaner {
  private position: Position;
  private maxX: number;
  private maxY: number;

  constructor(position: Position, maxX: number, maxY: number) {
    this.position = position;
    this.maxX = maxX;
    this.maxY = maxY;
  }

  executeInstructions(instructions: string): void {
    for (const instruction of instructions) {
      switch (instruction) {
        case 'D':
          this.turnRight();
          break;
        case 'G':
          this.turnLeft();
          break;
        case 'A':
          this.moveForward();
          break;
        default:
          throw new Error(`Invalid instruction: ${instruction}`);
      }

      console.log(`y: ${this.position.y}, x: ${this.position.x}`)
    }
  }

  private turnRight(): void {
    switch (this.position.orientation) {
      case Orientation.North:
        this.position.orientation = Orientation.East;
        break;
      case Orientation.East:
        this.position.orientation = Orientation.South;
        break;
      case Orientation.South:
        this.position.orientation = Orientation.West;
        break;
      case Orientation.West:
        this.position.orientation = Orientation.North;
        break;
    }
  }

  private turnLeft(): void {
    switch (this.position.orientation) {
      case Orientation.North:
        this.position.orientation = Orientation.West;
        break;
      case Orientation.West:
        this.position.orientation = Orientation.South;
        break;
      case Orientation.South:
        this.position.orientation = Orientation.East;
        break;
      case Orientation.East:
        this.position.orientation = Orientation.North;
        break;
    }
  }

  private moveForward(): void {
    switch (this.position.orientation) {
      case Orientation.North:
        if (this.position.y < this.maxY) {
          this.position.y++;
        }
        break;
      case Orientation.East:
        if (this.position.x < this.maxX) {
          this.position.x++;
        }
        break;
      case Orientation.South:
        if (this.position.y > 0) {
          this.position.y--;
        }
        break;
      case Orientation.West:
        if (this.position.y > 0) {
          this.position.x--;
        }
        break;
    }
  }

  getPosition(): Position {
    return this.position;
  }
}
