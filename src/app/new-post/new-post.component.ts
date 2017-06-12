import { Component, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
  @Output() newPostSender = new EventEmitter();

  newPost(header: string, body: string, link: string, id: number) {
    let newPostToAdd: Post = new Post(header, body, link, id);
    this.newPostSender.emit(newPostToAdd);
  }
}
