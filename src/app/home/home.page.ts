import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private callNumber: CallNumber) {}

  triggerCall() {
    // this.callNumber.callNumber('0783810537', true);
    alert('Making a call');

    // loop
    for (let index = 0; index < 5; index++) {
      this.newMethod();
      }


    // end loop
  }


  private newMethod() {
    this.callNumber.callNumber('0783810537', true)
      .then(res => console.log('Launched call app', res))
      .catch(err => console.log('Error launching dialer', err));
  }
}
