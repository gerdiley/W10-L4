import { Component, OnInit } from '@angular/core';
import { PostService } from './services/get-post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'W10-L2';

  constructor(private postSrv: PostService){
  }
  ngOnInit(): void {
    this.postSrv.fetchData();
  }
}
