export class Topic {
  id: number;
  topicImage: string;
  topicTitle: string;
  topicDescription: string;
  isSave: boolean;

  constructor(
    id: number,
    topicImage: string,
    topicTitle: string,
    topicDescription: string,
    isSave: boolean,
  ) {
    this.id = id;
    this.topicImage = topicImage;
    this.topicTitle = topicTitle;
    this.topicDescription = topicDescription;
    this.isSave = isSave;
  }
}
