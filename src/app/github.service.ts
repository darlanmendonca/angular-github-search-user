import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GithubService{
  private api: string = 'https://api.github.com'
  constructor(private http: HttpClient) {}

  getUser(username: string) {
    const user = this.api.concat(`/users/${username}`)
    return this.http
      .get(user)
      .toPromise();
  }

  getOrganizations(username: string) {
    const organizations = this.api.concat(`/users/${username}/orgs`)

    return this.http
      .get(organizations)
      .toPromise();
  }

  getRepositories(username: string) {
    const repositories = this.api.concat(`/users/${username}/repos?type=owner&sort=updated`)

    return this.http
      .get(repositories)
      .toPromise();
  }
}
