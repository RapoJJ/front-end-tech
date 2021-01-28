import {Component, OnInit} from '@angular/core';
import {FeedbackItem} from '../classes/feedback-item';
import {FeedbackService} from '../service/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbackList: Array<FeedbackItem> = [];

  constructor(private feedbackService: FeedbackService) {
    this.feedbackList = this.feedbackService.getFeedback();
  }

  ngOnInit() {
  }
}
