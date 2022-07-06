import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  startWith,
  Subject,
  switchMap,
} from 'rxjs';
import { PlaceholderService } from '../services/placeholder-service/placeholder.service';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css'],
})
export class PlaceholderComponent implements OnInit {
  posts$: Observable<{ id: number; username: string }[]> | undefined;
  text: string = '';
  selectedId: number | undefined;

  private id = new Subject<string>();
  search(id: string) {
    this.id.next(id);
  }

  gotoIdUser(id: number) {
    this.router.navigate(['users', id]);
  }
  constructor(
    private placeholderService: PlaceholderService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  isActiveRoute(id: number) {
    return Number(this.selectedId) === id;
  }

  ngOnInit(): void {
    this.selectedId = this.route.snapshot.params['id'];
    this.posts$ = this.id.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((_) => this.placeholderService.getUsers())
    );
  }
}
