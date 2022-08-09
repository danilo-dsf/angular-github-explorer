import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  public searchControl = new FormControl('');

  constructor(private github: GithubService) {}

  public search(event: any) {
    event.preventDefault();

    if (!this.searchControl.value) {
      return;
    }

    const username = this.searchControl.value;

    this.github.getUserProfile(username).subscribe((profile) => console.log(profile));
  }
}
