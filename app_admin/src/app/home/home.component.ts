import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(["/list-trips"])
    }
  }

  public isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
