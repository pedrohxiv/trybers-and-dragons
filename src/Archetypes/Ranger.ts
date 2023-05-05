import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  static _createdArchetypeInstances = 0;
  readonly _energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Ranger._createdArchetypeInstances += 1;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger._createdArchetypeInstances;
  }
}

export default Ranger;
