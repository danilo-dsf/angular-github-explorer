import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUserProfile } from '../models/user-profile.model';
import { BehaviorSubject, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private readonly apiUrl = environment.apiUrl;
  private userProfileBs = new BehaviorSubject<IUserProfile>(null);

  constructor(private http: HttpClient) {
    this.getInitialProfile();
  }

  get userProfile() {
    return this.userProfileBs.value;
  }

  get userProfile$() {
    return this.userProfileBs.asObservable();
  }

  public getInitialProfile() {
    const storedProfile = localStorage.getItem('@angular-github-explorer:profile');

    const profile: IUserProfile = JSON.parse(storedProfile);

    if (storedProfile) {
      this.userProfileBs.next(profile);

      return;
    }
  }

  public async getUserProfile(username: string): Promise<IUserProfile> {
    const profile = await firstValueFrom(this.http.get<IUserProfile>(`${this.apiUrl}/users/${username}`));

    this.setUserProfile(profile);

    return profile;
  }

  private setUserProfile(profile: IUserProfile): void {
    localStorage.setItem('@angular-github-explorer:profile', JSON.stringify(profile));
    this.userProfileBs.next(profile);
  }
}
