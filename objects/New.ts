import {parseDate} from '../utils';
import {Category} from './Category';
import {User} from './User';

export class New {
  private _id: number;
  private _user: User;
  private _createdAt: string;
  private _category: Category;
  private _titleNews: string;
  private _contentNews: string;
  private _countLikeNews: number;
  private _countCommentNews: number;
  private _bookMark: boolean;

  constructor(
    id: number,
    user: User,
    createdAt: string,
    category: Category,
    titleNews: string,
    contentNews: string,
    countLikeNews: number,
    countCommentNews: number,
    bookMark: boolean,
  ) {
    this._id = id;
    this._user = user;
    this._createdAt = parseDate(createdAt);
    this._category = category;
    this._titleNews = titleNews;
    this._contentNews = contentNews;
    this._countLikeNews = countLikeNews;
    this._countCommentNews = countCommentNews;
    this._bookMark = bookMark;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter user
   * @return {User}
   */
  public get user(): User {
    return this._user;
  }

  /**
   * Getter createdAt
   * @return {string}
   */
  public get createdAt(): string {
    return this._createdAt;
  }

  /**
   * Getter category
   * @return {Category}
   */
  public get category(): Category {
    return this._category;
  }
  /**
   * Getter titleNews
   * @return {string}
   */
  public get titleNews(): string {
    return this._titleNews;
  }

  /**
   * Getter contentNews
   * @return {string}
   */
  public get contentNews(): string {
    return this._contentNews;
  }

  /**
   * Getter countLikeNews
   * @return {number}
   */
  public get countLikeNews(): number {
    return this._countLikeNews;
  }

  /**
   * Getter countCommentNews
   * @return {number}
   */
  public get countCommentNews(): number {
    return this._countCommentNews;
  }

  /**
   * Getter bookMark
   * @return {boolean}
   */
  public get bookMark(): boolean {
    return this._bookMark;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter user
   * @param {User} value
   */
  public set user(value: User) {
    this._user = value;
  }

  /**
   * Setter createdAt
   * @param {string} value
   */
  public set createdAt(value: string) {
    this._createdAt = parseDate(value);
  }

  /**
   * Setter category
   * @param {Category} value
   */
  public set category(value: Category) {
    this._category = value;
  }

  /**
   * Setter titleNews
   * @param {string} value
   */
  public set titleNews(value: string) {
    this._titleNews = value;
  }

  /**
   * Setter contentNews
   * @param {string} value
   */
  public set contentNews(value: string) {
    this._contentNews = value;
  }

  /**
   * Setter countLikeNews
   * @param {number} value
   */
  public set countLikeNews(value: number) {
    this._countLikeNews = value;
  }

  /**
   * Setter countCommentNews
   * @param {number} value
   */
  public set countCommentNews(value: number) {
    this._countCommentNews = value;
  }

  /**
   * Setter bookMark
   * @param {boolean} value
   */
  public set bookMark(value: boolean) {
    this._bookMark = value;
  }
}
