import { Component } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  constructor() { }

  search(event) {
    event.preventDefault();
    const query = event.target.query.value;

    if (query) {

    }
  }

}
