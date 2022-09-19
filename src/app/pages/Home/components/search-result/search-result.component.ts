import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  gifDataSearched: any;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }
  searchGif(text: string, limit: number) {
    this.gifDataSearched = null;
    this.http.searchGif(text, limit).subscribe((res:any)=>{
      if(res.meta.status == 200) {
        this.gifDataSearched = res.data;

       }
    });
  }
}
