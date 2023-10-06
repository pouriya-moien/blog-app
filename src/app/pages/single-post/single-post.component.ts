import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  private route = inject(ActivatedRoute)
  private postService = inject(PostsService)


  post:any
  singlePost:any

  ngOnInit(): void {

    this.route.params.subscribe((param:Params) =>{
      this.postService.loadSinglePost(param['id']).subscribe(post => {
        if(post) {

          this.post = post
          this.loadSinglePost(this.post.category.categoryId)
          console.log(post);
          
        }
        
      })
      
    })


  }

  loadSinglePost (id:string) {
    this.postService.loadCategoryPost(id).subscribe(post => {
      this.singlePost = post
      console.log(post);
      
    })
    
  }

}
