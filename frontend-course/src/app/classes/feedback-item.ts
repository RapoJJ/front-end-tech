export class FeedbackItem {
  question: string;
  answer: number;
  answerList: Array<string>;

  constructor(question: string, answer?: number) {
    this.question = question;
    this.answer = answer;
    this.answerList = ['Not yet set', 'Bad', 'Okay', 'Good'];

  }

  setFeedback(value: number) {
    this.answer = value;
  }
}

