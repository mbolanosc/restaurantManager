export class Model {
  private inputName: string
  private inputPrice: number;
  private textareaDescrip: string;
  private categotyName: string;

  constructor(inputName: string, inputPrice: number, textareaDescrip: string, categotyName: string) {
    this.setName(inputName);
    this.setPrice(inputPrice);
    this.setDescription(textareaDescrip);
    this.setCategotyName(categotyName);
  }

  getName() { return this.inputName; }
  getPrice() { return this.inputPrice; }
  getDescription() { return this.textareaDescrip; }
  getCategotyName() { return this.categotyName; }

  setName(value) { this.inputName = value }
  setPrice(value) { this.inputPrice = value }
  setDescription(value) { this.textareaDescrip = value }
  setCategotyName(value) { this.categotyName = value }

}

