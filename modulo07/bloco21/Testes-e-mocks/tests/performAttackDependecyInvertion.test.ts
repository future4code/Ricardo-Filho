import { Character } from "../src/models/Character";
import { performAttackDependecyInvertion } from "../src/PerformAttack";
import { mockTestTrue } from "../src/mocks/MockTrue";
import { mockTestFalse } from "../src/mocks/MockFalse";


describe("performAttackDependecyInvertion", () => {

test("Should perform attack", () => {
     
    
    const attacker: Character = {
      name: "Scorpion",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: "Kitana",
      life: 1500,
      defense: 400,
      strength: 800,
    }

    performAttackDependecyInvertion(attacker, defender, mockTestTrue as any);

    expect(defender.life).toEqual(1300)
    })


test("Should perform attack", () => {

  const attacker: Character = {
    name: "Scorpion",
    life: 1500,
    defense: 200,
    strength: 600,
  };

  const defender: Character = {
    name: "",
    life: 1500,
    defense: 400,
    strength: 800,
  };
  try {
    performAttackDependecyInvertion(attacker, defender, mockTestFalse as any);
  } catch (error) {
    expect(error.message).toBe("Invalid character");
    expect(mockTestFalse).toHaveBeenCalled();
    expect(mockTestFalse).toHaveBeenCalledTimes(1);
    expect(mockTestFalse).toHaveReturnedTimes(1);
  }
})
})