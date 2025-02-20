import { Component, Input } from '@angular/core';
import { Post } from '../../types/post';
import { PostComponent } from '../../post/post/post.component';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';

@Component({
  selector: 'app-feed',
  imports: [PostComponent, ListViewModule],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent {
  @Input() posts!: Post[];
}
