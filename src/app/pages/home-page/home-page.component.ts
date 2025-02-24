import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Post } from '../../types/post';
import { FeedComponent } from '../../feed/feed/feed.component';

@Component({
  selector: 'app-home-page',
  imports: [FeedComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  posts: Post[] = [];

  constructor(private http: HttpClient) {
    this.fetchData();
  }

  fetchData() {
    this.http.get<{posts: Post[]}>('http://localhost:3000/friends').subscribe((data: {posts: Post[]}) => {
      this.posts = data.posts;
    });
  }
}
