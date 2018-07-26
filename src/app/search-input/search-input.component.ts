import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  @Input() value: string = '';
  @Output() search = new EventEmitter;

  constructor(private router: Router) {}

  dispatchSearch(event) {
    event.preventDefault();
    const query = event.target.query.value;

    if (query) {
      this.router.navigateByUrl(`/${query}`)
      this.search.emit(query);
    }
  }

}
