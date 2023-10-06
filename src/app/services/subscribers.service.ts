import { Injectable, inject } from '@angular/core';
import { Sub } from '../models/sub';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  private fireStore: AngularFirestore = inject(AngularFirestore)

  addSub(val: Sub) {

    this.fireStore.collection('subs').add(val)
      .then(() => {

      })

  }

  checkSubs(email:string) {
    return this.fireStore.collection('subs', ref => ref.where('email','==',email)).get()
  }

}
