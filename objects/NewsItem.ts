import {parseDate} from '../utils';

export class NewsItem {
  id: number;
  imageNewsUrl: string;
  title: string;
  content: string;
  imageAuthorUrl: string;
  timer: string;
  author: string;

  constructor(
    id: number,
    imageNewsUrl: string,
    title: string,
    content: string,
    imageAuthorUrl: string,
    timer: string,
    author: string,
  ) {
    this.id = id;
    this.imageNewsUrl = imageNewsUrl;
    this.title = title;
    this.content = content;
    this.imageAuthorUrl = imageAuthorUrl;
    this.author = author;
    this.timer = parseDate(timer);
  }
}
