import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  static _createdArchetypeInstances = 0;
  readonly _energyType: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Necromancer._createdArchetypeInstances += 1;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._createdArchetypeInstances;
  }
}

export default Necromancer;
