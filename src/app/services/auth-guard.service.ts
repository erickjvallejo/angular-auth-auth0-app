import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

import { AuthService } from "./auth.service";


@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthService) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(next);

    if (this.auth.loggedIn) {
      console.log("Paso el Guard");

      return true;
    } else {
      console.log("Bloqueado por el Guard");
      return false;
    }
  }
}
