import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.interface';
import { PostService } from '../services/get-post.service';

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.css']
})
export class PostAttiviComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postSrv: PostService) {

  }
  ngOnInit(): void {
    this.posts = this.postSrv.getPostFiltrati(true);
  }

  onInactivePost(id: number) {
    this.postSrv.switchDB(id).then((res) => {
      this.posts = this.postSrv.getPostFiltrati(true);
    });
  }

  deletePost(id: number) {
    this.postSrv.deleteDB(id).then((res) => {
      this.posts = this.postSrv.getPostFiltrati(true)});;
  };

}
