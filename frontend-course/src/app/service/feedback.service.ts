import { Injectable } from '@angular/core';
import {FeedbackItem} from '../classes/feedback-item';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  feedbackItemList: Array<FeedbackItem> = [];

  constructor() {
    this.feedbackItemList.push(new FeedbackItem('This course is'),
      new FeedbackItem('Todays weather is')
      );
  }

  getFeedback(): Array<FeedbackItem> {
    return this.feedbackItemList;
  }
}
