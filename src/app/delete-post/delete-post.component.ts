import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent implements OnInit {
  post= {
    title: '',
    description:''
  }
  id;
  constructor(private route:ActivatedRoute, 
    private service:PostService, private router:Router
    ) { }

  ngOnInit(): void {
this.id= this.route.snapshot.paramMap.get('id');
this.service.getPost(this.id).subscribe((data:any)=>{
  console.log(data);
  this.post.title=data.title;
  this.post.description= data.description;
  // this.post.title= data.title;
})
  }
  cancel(){
this.router.navigate(['/']);
  }
  confirm(){
  this.service.deletePost(this.id).subscribe((data)=>{
    console.log(data);
    this.router.navigate(['/']);
  })

  }

}
