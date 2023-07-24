function calculateTotalCost(shoppingList: string[]): number {
    const itemPrices: Record<string, number> = {
        'Apple': 35,
        'Banana': 20,
        'Melon': 50,
        'Lime': 15
      };
    
      let totalCost = 0;
      let countMelon = 0;
      let countLime = 0;
    
      for (let item of shoppingList) {
        if (itemPrices.hasOwnProperty(item)) {
          totalCost += itemPrices[item];
          if (item === 'Melon') countMelon++;
          if (item === 'Lime') countLime++;
        }
      }
    
      totalCost -= Math.floor(countMelon / 2) * 50;
      totalCost -= Math.floor(countLime / 3) * 15;
    
      return totalCost;
}

console.log(calculateTotalCost(["Melon", "Melon", "Melon", "Lime", "Lime", "Lime"])); // expect 130
console.log(calculateTotalCost(["Melon", "Melon", "Melon", "Melon", "Lime", "Lime"])); // expect 130
console.log(calculateTotalCost(["Melon", "Melon", "Melon", "Lime", "Lime", "Lime", "Lime"])); // expect 145
console.log(calculateTotalCost(["Melon", "Melon", "Lime", "Lime", "Lime", "Lime", "Lime", "Lime"])); // expect 110

export default calculateTotalCost;