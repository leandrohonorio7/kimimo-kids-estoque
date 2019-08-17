import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {CoreState} from '../../store/reducer/feature.reducer';
import {Observable} from 'rxjs';
import {singOut} from '../../store/actions/auth.actions';
import {isAuthenticated} from '../../store/selectors/auth.selectors';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit {

  isUserAuthenticated$: Observable<boolean>;
  constructor(private store: Store<CoreState>) { }

  ngOnInit() {
    this.isUserAuthenticated$ = this.store.pipe(select(isAuthenticated));
  }

  logout()  {
    this.store.dispatch(singOut());
  }

}
