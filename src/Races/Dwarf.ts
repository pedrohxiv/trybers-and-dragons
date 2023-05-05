import Race from './Race';

class Dwarf extends Race {
  static _createdRacesInstances = 0;
  readonly maxLifePoints = 80;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._createdRacesInstances += 1;
  }

  static createdRacesInstances() {
    return Dwarf._createdRacesInstances;
  }
}

export default Dwarf;
