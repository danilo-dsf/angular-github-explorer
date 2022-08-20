import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GithubService } from 'src/app/services/github.service';

type RequestStatus = 'LOADING' | 'SUCCESS' | 'ERROR';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  public searchControl = new FormControl('', [Validators.required]);

  public searchRequestStatus: RequestStatus;

  constructor(private github: GithubService) {}

  public async search(event: any) {
    event.preventDefault();

    this.searchRequestStatus = 'LOADING';

    try {
      if (this.searchControl.invalid) {
        return;
      }

      const username = this.searchControl.value;

      await this.github.getUserProfile(username);

      this.searchRequestStatus = 'SUCCESS';
    } catch (error) {
      console.log(error);

      this.searchRequestStatus = 'ERROR';
    }
  }
}
