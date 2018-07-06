export class Recipe {
  constructor( public name: string, public description: string, public imagePath: string) {
  }
}

export class Ingredient {
  constructor(public name: string, public quantity: number) {
  }
}
