import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AngularFireAuth} from '@angular/fire/auth';
import {singInEmail, singInGoogle, singOut, signOutSucess, updateUserInfo} from '../actions/auth.actions';
import {catchError, exhaustMap, map, mapTo, switchMapTo} from 'rxjs/operators';

import {EMPTY, from, of} from 'rxjs';
import {auth} from 'firebase/app';
import {showSnackBar} from '../actions/core.actions';
import {navigationTo} from '../../../store/actions/app.actions';

@Injectable()
export class AuthEffect {

  updateUserInfo$ = createEffect(() => this.authFire.user.pipe(
    map(user => {
      if (user) {
        const {uid, displayName, email, phoneNumber, photoURL, providerId} = user;
        return updateUserInfo({user: {uid, displayName, email, phoneNumber, photoURL, providerId}
        });
      }
      return updateUserInfo({});
    })
  ));
  singInEmail$ = createEffect(() => this.action$.pipe(
    ofType(singInEmail),
    exhaustMap(({email, password}) =>
      from (this.authFire.auth.signInWithEmailAndPassword(email, password)).pipe(
        mapTo(navigationTo({commands: ['core', 'layout', 'home']} )),
        catchError((error1: auth.Error) => of(showSnackBar({
          message: error1.message,
          config: {
            duration: 5000
          }
        })))
      )
    )));

  singInGoogle$ = createEffect(() => this.action$.pipe(
    ofType(singInGoogle),
    exhaustMap(() => from(
      this.authFire.auth.signInWithPopup(new auth.GoogleAuthProvider())
    ).pipe(
      mapTo(navigationTo({commands: ['core', 'layout', 'home']} )),
      catchError((error: auth.Error) => of(showSnackBar({
        message: error.message,
        config: {
          duration: 5000
        }
      })))
    )),
    ));

  singOut$ = createEffect(() => this.action$.pipe(
    ofType(singOut),
    exhaustMap(() => from (
      this.authFire.auth.signOut()
    ).pipe(mapTo(signOutSucess()),
      )),
    ));

  signOutSucess$ = createEffect(() => this.action$.pipe(
    ofType(signOutSucess),
    mapTo(navigationTo({commands:  ['core', 'layout', 'login']}))
    ),
  );

  constructor(private action$: Actions, private authFire: AngularFireAuth) {
  }
}
