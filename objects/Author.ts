import {parseNumberOfFollower} from '../utils';

export class Author {
  id: number;
  authorImage: string;
  authorName: string;
  numberOfFollower: string;
  isFollowed: boolean;

  constructor(
    id: number,
    authorImage: string,
    authorName: string,
    numberOfFollower: number,
    isFollowed: boolean,
  ) {
    this.id = id;
    this.authorImage = authorImage;
    this.authorName = authorName;
    this.numberOfFollower = parseNumberOfFollower(numberOfFollower);
    this.isFollowed = isFollowed;
  }
}
