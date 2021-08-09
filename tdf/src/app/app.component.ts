import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  topics = ['Angular','React','Vue'];
  topicHasError = true;

userModel = new User('Rob', 'rob@test.com', 5556665566, '', 'morning', true);

constructor(private _enrollmentService: EnrollmentService){}

validateTopic(value: string) {
  if (value === 'default'){
    this.topicHasError = true;
  }else{
    this.topicHasError = false;
  }
}
onSubmit(){
 this._enrollmentService.enroll(this.userModel)
 .subscribe(
   data => console.log('Success', data),
   error => console.error('error', error)
 )
}
}
