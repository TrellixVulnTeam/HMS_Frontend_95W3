import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter,map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-security-side-nav',
  templateUrl: './security-side-nav.component.html',
  styleUrls: ['./security-side-nav.component.css']
})
export class SecuritySideNavComponent implements OnInit {

  constructor(
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private authService : AuthService
  ) { }

  staffBlack = "assets/Logo/Side-Nav Logo's/icons8-staff-black.png";
  staffWhite = "assets/Logo/Side-Nav Logo's/icons8-staff-white.png";
  qrBlack = "assets/Logo/Side-Nav Logo's/icons8-qr-code-black.png";
  qrWhite = "assets/Logo/Side-Nav Logo's/icons8-qr-code-white.png";
  logout = "assets/Logo/Side-Nav Logo's/logout-black.png";

  headerText:string;
  ngOnInit(): void {
    this.headerText = this.activatedRoute.firstChild.snapshot.data['title'];
    this.router.events.pipe(
      filter( event => event instanceof NavigationEnd),
      map((e) => {
        const child = this.activatedRoute.firstChild;
        if(child.snapshot.data['title']){
          return child.snapshot.data['title'];
        }
      })
    ).subscribe((ttl:string) => {
      this.headerText = ttl;
    })
  }

  onLogout(){
    this.authService.onLogout();
  }

}
