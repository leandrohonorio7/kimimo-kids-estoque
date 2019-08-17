import { Injectable } from '@angular/core';
import {
  CanLoad,
  Route,
  UrlSegment,
  Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {take, tap} from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authFire: AngularFireAuth, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.isAuthenticated();
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.isAuthenticated();
  }
  isAuthenticated(): Observable<boolean> {
    this.authFire.user.pipe(
      tap(user => {
        if (!user) {
          this.router.navigate(['core', 'layout', 'kimimo', 'login']).then();
        }
        return !!user;
      }),
      take(1)
    );
    return of(true);
  }
}
