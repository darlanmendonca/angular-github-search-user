import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  @Input() value: string = '';

  constructor(private router: Router) {}

  search(event) {
    event.preventDefault();
    const query = event.target.query.value;

    if (query) {
      this.router.navigateByUrl(`/${query}`)
    }
  }

}
