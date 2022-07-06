import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { PlaceholderService } from '../services/placeholder-service/placeholder.service';
import Post from '../services/placeholder-service/post';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css'],
})
export class UserPostsComponent implements OnInit {
  posts$: Observable<Post[]> | undefined;
  public id: string | undefined;
  constructor(
    private placeholderService: PlaceholderService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  goBack() {
    this.router.navigate(['placeholder', { id: this.id }]);
  }
  goToNextUser() {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id ? id : undefined;
    this.posts$ = this.placeholderService.getUserPosts(id!);
  }
}
