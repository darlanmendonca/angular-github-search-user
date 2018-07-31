import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-data',
  templateUrl: './icon-data.component.html',
  styleUrls: ['./icon-data.component.scss']
})
export class IconDataComponent {
  @Input() type: string;

  constructor() {}

}
