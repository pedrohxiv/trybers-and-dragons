import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  static _createdArchetypeInstances = 0;
  readonly _energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Warrior._createdArchetypeInstances += 1;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior._createdArchetypeInstances;
  }
}

export default Warrior;
