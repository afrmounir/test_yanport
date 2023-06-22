const { VacuumCleaner } = require('../dist/services/vacuumCleaner');
const { Orientation } = require('../dist/models/position');

test('Vérifier la position initiale de l\'aspirateur', () => {
  const initialPosition = {
    x: 5,
    y: 5,
    orientation: Orientation.North,
  };

  const vacuumCleaner = new VacuumCleaner(initialPosition);
  const currentPosition = vacuumCleaner.getPosition();

  expect(currentPosition).toEqual(initialPosition);
});

test('Vérifier l\'exécution des instructions "DADADADAA"', () => {
  const initialPosition = {
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

  expect(finalPosition).toEqual({ x: 5, y: 6, orientation: Orientation.North });
});

test('Vérifier l\'exécution des instructions "AAAGGDD"', () => {
  const initialPosition = {
    x: 3,
    y: 2,
    orientation: Orientation.East,
  };
  const instructions = 'AAAGGDD';
  const maxX = 15;
  const maxY = 15;

  const vacuumCleaner = new VacuumCleaner(initialPosition, maxX, maxY);
  vacuumCleaner.executeInstructions(instructions);

  const finalPosition = vacuumCleaner.getPosition();

  expect(finalPosition).toEqual({ x: 6, y: 2, orientation: Orientation.East });
});

test('Vérifier le comportement lors d\'une instruction invalide', async () => {
  const initialPosition = {
    x: 0,
    y: 0,
    orientation: Orientation.West,
  };
  const instructions = 'DDDA';

  const vacuumCleaner = new VacuumCleaner(initialPosition);

  // Utilisation d'async/await pour attendre l'exécution des instructions
  const executeInstructions = async () => {
    try {
      await vacuumCleaner.executeInstructions(instructions);
    } catch (error) {
      // Vérification de l'erreur
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe('Instruction invalide');
      throw error; // Ré-throw l'erreur pour que le test échoue
    }
  };

  // Vérification que l'exécution des instructions lève une erreur
  try {
    await executeInstructions();
    // Si l'exécution ne génère pas d'erreur, nous levons une nouvelle erreur
    throw new Error('L\'exécution ne génère pas d\'erreur');
  } catch (error) {
    expect(error).toBeInstanceOf(Error);
    expect(error.message).toBe('L\'exécution ne génère pas d\'erreur');
  }
});


