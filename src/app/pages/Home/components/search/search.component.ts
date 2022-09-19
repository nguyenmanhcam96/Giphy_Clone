import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  @Output() sendSearchText = new EventEmitter;
  searchInput!: string;
  constructor() { }

  ngOnInit(): void {
  }

  search(searchText: string) {
    this.sendSearchText.emit(searchText);
    this.searchInput = '';
  }
}
