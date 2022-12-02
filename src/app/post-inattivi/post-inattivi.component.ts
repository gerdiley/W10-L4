import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.interface';
import { PostService } from '../services/get-post.service';

@Component({
  selector: 'app-post-inattivi',
  templateUrl: './post-inattivi.component.html',
  styleUrls: ['./post-inattivi.component.css']
})
export class PostInattiviComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postSrv: PostService) {
  }

  ngOnInit(): void {
    this.posts = this.postSrv.getPostFiltrati(false);
  }

  onActivePost(id:number){
    this.postSrv.switchDB(id).then((res)=>{
      this.posts = this.postSrv.getPostFiltrati(false);
    });
    }
}
