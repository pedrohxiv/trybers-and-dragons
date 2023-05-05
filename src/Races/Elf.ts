import Race from './Race';

class Elf extends Race {
  static _createdRacesInstances = 0;
  readonly maxLifePoints = 99;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._createdRacesInstances += 1;
  }

  static createdRacesInstances() {
    return Elf._createdRacesInstances;
  }
}

export default Elf;
