import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-job',
  templateUrl: './filter-job.component.html',
  styleUrl: './filter-job.component.scss'
})
export class FilterJobComponent {

  nameDomain: string = ""

  nameLocation: string = ""

  @Output() filterChange: EventEmitter<any> = new EventEmitter<any>()

  filter() {
    this.filterChange.emit({ nameDomain: this.nameDomain, nameLocation: this.nameLocation });
    this.nameDomain = '';
    this.nameLocation = '';
  }
}
