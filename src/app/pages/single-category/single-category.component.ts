import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.scss']
})
export class SingleCategoryComponent implements OnInit {

  private route = inject(ActivatedRoute)
  private postService = inject(PostsService)

  categoryData: any

  ngOnInit(): void {
    this.route.params.subscribe((val: Params) => {

      this.postService.loadCategoryPost(val['id']).subscribe(post => {
        this.categoryData = post
      })

    })
  }

}
