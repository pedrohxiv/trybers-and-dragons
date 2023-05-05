import Race from './Race';

class Halfling extends Race {
  static _createdRacesInstances = 0;
  readonly maxLifePoints = 60;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._createdRacesInstances += 1;
  }

  static createdRacesInstances() {
    return Halfling._createdRacesInstances;
  }
}

export default Halfling;
