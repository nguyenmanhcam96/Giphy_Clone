import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
  searchText!: string;
  currentSelectedGif!: object;
  currentSortBy: string = 'desc';
  currentLimit: number = 10;
  totalCount!: number;
  currentOffSet: number = 0;
  gifDataSearched: any;
  gifData:any;
  detailOn: boolean = false;
  isSearching!: boolean;
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getTrending(this.currentSortBy, this.currentLimit); //run the Get Trending Gif
  }

  getTrending(sortBy: string, limit: number) { //Get Trending Gif

    this.gifData = null;
    this.http.getTrendingGif(sortBy, limit).subscribe((res:any)=>{
     if(res.meta.status == 200) {
      this.gifData = res.data;
      this.totalCount = res.meta.count;
     }
    });
  }
  searchGif(text: string, limit: number) {  //Search for Gif
    this.gifData = null;
    this.http.searchGif(text, limit).subscribe((res:any)=>{
      if(res.meta.status == 200) {
        this.gifData = res.data;
       }
    });
  }
  sendSearchText(event: string) { //Get Search Text from Search component and start searching gif
    if(event) {
      this.searchText = event;
      this.isSearching = true;
      this.searchGif(this.searchText, this.currentLimit);
    }
  }
  loadMoreGif(event: any) { //Load more gif when get trending gif or get search gif
    if(!event.searchText) {
      this.getTrending(this.currentSortBy, event.limit);
    } else {
      this.searchGif(event.searchText, event.limit);
    }
  }
}
