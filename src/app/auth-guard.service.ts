import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private auth:AuthService, private router: Router) { }
  canActivate(route , state: RouterStateSnapshot){
return this.auth.user$.map(user => {
if (user) return true;

this.router.navigate (['/login'],{queryParams:{returnUrl:state.url}});
return false ;
})
 }
}
