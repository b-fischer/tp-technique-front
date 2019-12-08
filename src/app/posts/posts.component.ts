import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PostService } from '../service/post.service';
import { Post } from '../models/post';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService : PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(reponse => {
      this.posts = reponse;
    });
  }

}
