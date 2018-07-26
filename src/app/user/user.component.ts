import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  private username: string;

  constructor(private route:ActivatedRoute) {
    this.username = this.route.snapshot.params.username;
  }
}
