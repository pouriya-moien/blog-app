import { Component, OnInit, inject } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  postsService = inject(PostsService)

  postsFeatured: any

  latestPost!:any

  ngOnInit(): void {
    this.postsService.loadDataFeatured().subscribe(post => {
      this.postsFeatured = post
      
    })

    this.postsService.loadLatest().subscribe(val =>{
      this.latestPost = val
    })

  }

  

}
