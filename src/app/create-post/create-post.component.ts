import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent  {

  constructor(private service: PostService,private route:ActivatedRoute,
    private router:Router) { }

AddPostForm = new FormGroup({
  title: new FormControl('', Validators.required),
  description: new FormControl('', Validators.required)
})
onSubmit(){
  console.log(this.AddPostForm.value);
  this.service.AddPost(this.AddPostForm.value).subscribe((data)=> {
    console.log('data -', data);
    this.router.navigate(['/']);
})
}
}