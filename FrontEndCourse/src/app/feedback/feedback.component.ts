import {Component, OnInit} from '@angular/core';
import {FeedbackItem} from "../classes/feedbackItem";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbackList: Array<FeedbackItem> = [];

  constructor() {
    this.feedbackList.push(new FeedbackItem("How good was service?", 0),
      new FeedbackItem("Happy or not?", 0));
  }

  ngOnInit() {
  }
}
