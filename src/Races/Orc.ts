import Race from './Race';

class Orc extends Race {
  static _createdRacesInstances = 0;
  readonly maxLifePoints = 74;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._createdRacesInstances += 1;
  }

  static createdRacesInstances() {
    return Orc._createdRacesInstances;
  }
}

export default Orc;
