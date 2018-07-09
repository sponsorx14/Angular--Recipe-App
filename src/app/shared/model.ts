export class Recipe {
  constructor( public name: string, public description: string, public imagePath: string, public ingredients: Ingredient[]) {
  }
}

export class Ingredient {
  constructor(public name: string, public quantity: number) {
  }
}
