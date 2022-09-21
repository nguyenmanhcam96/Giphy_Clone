import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';
import { Subject } from 'rxjs/internal/Subject';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayComponent implements OnInit {
  @Input() gifData: any;
  @Input() isSearching: boolean = false;
  @Input() searchText!: string;
  @Input() totalCount!: number;
  @Output() loadMoreGif = new EventEmitter();
  currentSelectedGif!: object;
  currentSortBy: string = 'desc';
  currentLimit: number = 10;
  currentOffSet: number = 0;
  gifDataSearched: any;
  message: string = 'Trending';
  limit!: number;
  constructor(private http: HttpService) {

  }
  detailOn: boolean = false;
  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if(this.searchText) {
      this.message = 'Search Result for: ' + this.searchText;
    }
  }
  ngOnInit(): void {
  }

  showDetail(item:any) {
    if(this.detailOn) {
      return
    } else {
      this.currentSelectedGif = item;
      this.detailOn = true;
    }

  }
  closeDetailEmit(event: boolean) {
    if(event) {
      this.detailOn = false;
      this.currentSelectedGif = {};
    }
  }
  expand() {
    if(this.searchText && this.isSearching) {
      this.currentLimit = this.currentLimit + 10;
      this.loadMoreGif.emit({
        searchText: this.searchText,
        limit: this.currentLimit
      }
      );
    } else {
      this.currentLimit = this.currentLimit + 10;
      this.loadMoreGif.emit({
        limit: this.currentLimit
      }
      );
    }


  }

  backToTrending() {
    this.isSearching = false;
    this.searchText = '';
    this.currentLimit = 10;
    this.loadMoreGif.emit({
      limit: this.currentLimit
    }
    );
  }
  getLimitNumber() {
    console.log(this.limit);
    if(this.limit > 150) return;
    this.currentLimit = this.limit;
    this.isSearching ?  this.loadMoreGif.emit({
      searchText: this.searchText,
      limit: this.currentLimit
    }) : this.loadMoreGif.emit({
      limit: this.currentLimit
    });
  }
}
