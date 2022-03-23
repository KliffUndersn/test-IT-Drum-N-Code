/**
 * This class is just a facade for your implementation, the tests below are using the `World` class only.
 * Feel free to add the data and behavior, but don't change the public interface.
 */

export class World {
  constructor() {}

  createPowerPlant() {
    return { run: true };
  }

  createHousehold() {
    return { power: [], web: [] };
  }

  connectHouseholdToPowerPlant(household, powerPlant) {
    return household.power.push(powerPlant);
  }

  connectHouseholdToHousehold(household1, household2) {
    return household2.web.push(household1);
  }

  disconnectHouseholdFromPowerPlant(household, powerPlant) {
    const ixd = household.power.findIndex((el) => el == powerPlant);
    return household.power.splice(ixd, 1);
  }

  killPowerPlant(powerPlant) {
    return (powerPlant.run = false);
  }

  repairPowerPlant(powerPlant) {
    return (powerPlant.run = true);
  }

  householdHasEletricity(household) {
    const neighborhood = household.web.some((el) =>
      el.power.some((powerPlant) => powerPlant.run == true)
    );
    const powerCheck = household?.power.some(
      (powerPlant) => powerPlant.run == true
    );
    return powerCheck || neighborhood;
  }
}
