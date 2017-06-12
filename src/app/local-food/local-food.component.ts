import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-local-food',
  templateUrl: './local-food.component.html',
  styleUrls: ['./local-food.component.css']
})

export class LocalFoodComponent {

  constructor(private router: Router) {}

  foodPosts: Post[] = [
    new Post("Great Restaurant", "I went to Bamboo Sushi...", "http://bamboosushi.com/", 1),
    new Post("Cheap Options?", "What food carts are nutritious and cheap...", "http://www.eatwolfandbears.com/menu/", 2),
    new Post("Not Healthy", "Fried, fried, fried...", "http://www.potatochampion.com/", 3)
  ];

  goToDetailPage(foodPost: Post) {
    this.router.navigate(['posts', foodPost.id]);
  };

}
