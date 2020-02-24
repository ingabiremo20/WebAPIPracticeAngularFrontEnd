import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { MatTableDataSource } from '@angular/material/table';
import { PostElement } from '../interfaces/postInterface';
import { MatDialog } from '@angular/material/dialog';
import { UpdatePostComponent } from '../update-post/update-post.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  displayedColumns: string[]=['id','description','title','savedDate','status','Actions']
  dataSource;
  constructor(private service:PostService,
               private dialog:MatDialog) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((data) =>{
      console.log('results- ',data); 
      this.dataSource = new MatTableDataSource<PostElement>(data as PostElement[])
    })
   
  }
  updatePost(post){
    console.log(post); 
    //dialog
    this.dialog.open(UpdatePostComponent,{
      data: {
        id: post.id,
        title: post.title,
        description: post.description
      }
    })
  }

}
