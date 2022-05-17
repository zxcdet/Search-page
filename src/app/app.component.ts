import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getArticleActions } from './store/actions/getArticle.actions';
import { IsLoadingSelector } from './store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public isLoading$: Observable<boolean>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initArtcicle()
    this.store.dispatch(getArticleActions());
  }

  private initArtcicle(): void {
    this.isLoading$ = this.store.select(IsLoadingSelector)
  }
}
