import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  private username: string;
  private isNotFound: boolean;
  private user: object;

  constructor(
    private route: ActivatedRoute,
    private github: GithubService,
  ) {
    this.username = this.route.snapshot.params.username;
    this.search(this.username);
  }

  search(username: string) {
    this.isNotFound = false;
    this.user = undefined;

    if (username) {
      this.github
        .getUser(username)
        .then(user => this.user = user)
        .then(() => this.github.getOrganizations(username))
        .then(organizations => this.user['organizations'] = organizations)
        .then(() => this.github.getRepositories(username))
        .then((repositories: any) => {
          this.user['repositories'] = repositories;
          this.user['stars'] = repositories
            .map(item => item.stargazers_count)
            .reduce((a, b) => a + b, 0)
        })
        .catch(error => this.isNotFound = error.status === 404);
    }
  }
}
