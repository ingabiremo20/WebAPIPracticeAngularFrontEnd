import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { MatTableDataSource } from '@angular/material/table';
import { PostElement } from '../interfaces/postInterface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  displayedColumns: string[]=['id','description','title','savedDate','status']
  dataSource;
  constructor(private service:PostService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((data) =>{
      console.log('results- ',data); 
      this.dataSource = new MatTableDataSource<PostElement>(data as PostElement[])
    })
  }

}
