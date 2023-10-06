import { Component, inject } from '@angular/core';
import { Sub } from '../models/sub';
import { SubscribersService } from '../services/subscribers.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss']
})
export class SubscriptionFormComponent {

  private subService = inject(SubscribersService)


  isInValid: boolean = false
  isValid:boolean = false

  submitHandler(val: Sub) {

    const subData: Sub = {
      name: val.name,
      email: val.email
    }

    this.subService.checkSubs(subData.email).subscribe((mail) => {
      if (mail.empty) {
        this.subService.addSub(subData)
        this.isValid = true
      } else {
        console.log('was used');
        this.isInValid = true
      }
    })

  }
}
