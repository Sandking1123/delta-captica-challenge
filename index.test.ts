import calculateTotalCost from ".";

describe('calculateTotalCost', () => {
  test('should return 130 when given ["Melon", "Melon", "Melon", "Lime", "Lime", "Lime"]', () => {
    expect(calculateTotalCost(["Melon", "Melon", "Melon", "Lime", "Lime", "Lime"])).toBe(130);
  });

  test('should return 130 when given ["Melon", "Melon", "Melon", "Melon", "Lime", "Lime"]', () => {
    expect(calculateTotalCost(["Melon", "Melon", "Melon", "Melon", "Lime", "Lime"])).toBe(130);
  });

  test('should return 145 when given ["Melon", "Melon", "Melon", "Lime", "Lime", "Lime", "Lime"]', () => {
    expect(calculateTotalCost(["Melon", "Melon", "Melon", "Lime", "Lime", "Lime", "Lime"])).toBe(145);
  });

  test('should return 110 when given ["Melon", "Melon", "Lime", "Lime", "Lime", "Lime", "Lime", "Lime"]', () => {
    expect(calculateTotalCost(["Melon", "Melon", "Lime", "Lime", "Lime", "Lime", "Lime", "Lime"])).toBe(110);
  });
});