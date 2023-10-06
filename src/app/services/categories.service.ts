import { Injectable, inject } from '@angular/core';

import { AngularFirestore } from "@angular/fire/compat/firestore"
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private fireStore: AngularFirestore = inject(AngularFirestore)


  loadData() {
    return this.fireStore.collection('category').snapshotChanges().pipe(
      map(action => {
        return action.map(a => {
          const data = a.payload.doc.data()
          const id = a.payload.doc.id

          return { id, data }
        })
      })
    )
  }

}
