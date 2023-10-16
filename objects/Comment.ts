import moment from 'moment';
import {User} from './User';
import {parseDate} from '../utils';

export class Comment {
  private _content: string;
  private _countComment: number;
  private _countLike: number;
  private _timeComment: string;
  private _user: User;

  constructor(
    content: string,
    countComment: number,
    countLike: number,
    timeComment: string,
    user: User,
  ) {
    this._content = content;
    this._countComment = countComment;
    this._countLike = countLike;
    this._timeComment = parseDate(timeComment);
    this._user = user;
  }

  public get content(): string {
    return this._content;
  }

  public set content(content: string) {
    this._content = content;
  }

  public get countComment(): number {
    return this._countComment;
  }

  public set countComment(countComment: number) {
    this._countComment = countComment;
  }

  public get countLike(): number {
    return this._countLike;
  }

  public set countLike(countLike: number) {
    this._countLike = countLike;
  }

  public get timeComment(): string {
    return this._timeComment;
  }

  public set timeComment(time: string) {
    this._timeComment = parseDate(time);
  }

  public get user(): User {
    return this._user;
  }

  public set user(user: User) {
    this._user = user;
  }
}
