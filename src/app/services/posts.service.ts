import { Injectable, inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private fireStore: AngularFirestore = inject(AngularFirestore)


  loadDataFeatured() {
    return this.fireStore.collection('posts', ref => ref.where('isFeatured', '==', true).limit(4)).snapshotChanges().pipe(
      map(action => {
        return action.map(a => {
          const data = a.payload.doc.data()
          const id = a.payload.doc.id

          return { id, data }
        })
      })
    )
  }

  loadLatest() {
    return this.fireStore.collection('posts', ref => ref.orderBy('createAt')).snapshotChanges().pipe(
      map(action => {
        return action.map(a => {
          const data = a.payload.doc.data()
          const id = a.payload.doc.id

          return { id, data }
        })
      })
    )
  }

  loadCategoryPost(id: string) {
    return this.fireStore.collection('posts', ref => ref.where('category.categoryId', '==', id).limit(4)).snapshotChanges().pipe(
      map(action => {
        return action.map(a => {
          const data = a.payload.doc.data()
          const id = a.payload.doc.id

          return { id, data }
        })
      })
    )
  }

  loadSinglePost(id: string) {
    return this.fireStore.doc(`posts/${id}`).valueChanges()
  }


  // loadSinglePostCard(id:string) {

  // }

}
