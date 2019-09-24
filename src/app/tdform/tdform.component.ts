import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { EnrollmentService } from '../enrollment.service';
@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TdformComponent implements OnInit {

  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  submitted = false;
  userModel = new User('Rob', 'mail.com', 1222424234, 'default', 'morning', true);

  constructor(private enrollmentservice: EnrollmentService) { }

  ngOnInit() {
  }
  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit(userForm) {
    // console.log(userForm);
    this.submitted = true;
    this.enrollmentservice.enroll(this.userModel)
      .subscribe(
        data => console.log('Success!', data),
        error => console.error('Error!', error)
      );
  }
}
