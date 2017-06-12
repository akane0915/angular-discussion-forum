import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-local-food',
  templateUrl: './local-food.component.html',
  styleUrls: ['./local-food.component.css'],
  providers: [PostService]
})

export class LocalFoodComponent implements OnInit {

  constructor(private router: Router, private postService: PostService) {}

  foodPosts: Post[];

  ngOnInit(){
    this.foodPosts = this.postService.getPosts();
  }


  goToDetailPage(foodPost: Post) {
    this.router.navigate(['posts', foodPost.id]);
  };

}
