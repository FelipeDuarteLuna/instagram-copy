import { Component, OnInit } from '@angular/core';
import { PostComponent } from "../../post/post/post.component";
import { FeedComponent } from '../../feed/feed/feed.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../types/post';

@Component({
  selector: 'app-explore-page',
  imports: [PostComponent, FeedComponent],
  templateUrl: './explore-page.component.html',
  styleUrl: './explore-page.component.scss'
})
export class ExplorePageComponent  implements OnInit {
  posts: Post[] = [];
  country: string | null = null;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.country = params.get('country');
      if (this.country) {
        this.fetchData(this.country);
      }
    });
  }

  fetchData(country: string) {
    let formattedCountry = country.toLowerCase();
    this.http.get<{posts: Post[]}>(`http://localhost:3000/explore_${formattedCountry}`).subscribe((data:{posts: Post[]}) => {
      this.posts = data.posts;
    });
  }
}
