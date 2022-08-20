import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private github: GithubService) {}

  get userProfile$() {
    return this.github.userProfile$;
  }

  get userProfile() {
    return this.github.userProfile;
  }
}
