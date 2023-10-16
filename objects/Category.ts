export class Category {
  private _id: number;
  private _nameCategory: string;

  constructor(id: number, nameCategory: string) {
    this._id = id;
    this._nameCategory = nameCategory;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter nameCategory
   * @return {string}
   */
  public get nameCategory(): string {
    return this._nameCategory;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter nameCategory
   * @param {string} value
   */
  public set nameCategory(value: string) {
    this._nameCategory = value;
  }
}
