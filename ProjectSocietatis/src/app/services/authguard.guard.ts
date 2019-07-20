import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { tap, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate  {

  constructor(private auth: AuthService, private router: Router){}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{
    return this.auth.user$.pipe(
      take(1),
      map(user => !!user),
      tap(loggedIn =>{
        console.log("Access Denied");
        this.router.navigate(['/']);
      })
    )
  }
  
}
