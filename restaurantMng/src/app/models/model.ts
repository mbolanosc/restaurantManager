export class Model {
  private name: string
  private price: number;
  private description: string;
  private categotyName: string;

  constructor(name: string, price: number, description: string, categotyName: string) {
    this.setName(name);
    this.setPrice(price);
    this.setDescription(description);
    this.setCategotyName(categotyName);
  }

  getName() { return this.name; }
  getPrice() { return this.price; }
  getDescription() { return this.description; }
  getCategotyName() { return this.categotyName; }

}

