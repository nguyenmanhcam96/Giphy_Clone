import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gif-detail',
  templateUrl: './gif-detail.component.html',
  styleUrls: ['./gif-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GifDetailComponent implements OnInit {
  @Input()
  currentSelectedGif!: any;
  @Output() closeDetailEmit = new EventEmitter();
  constructor() { }

  ngOnInit(): void {

  }
  closeDetail() {
    this.closeDetailEmit.emit(true);
  }
  searchByItem(item: string) {

  }

}
