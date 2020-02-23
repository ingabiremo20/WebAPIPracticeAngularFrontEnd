import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent  {

  constructor() { }

AddPostForm = new FormGroup({
  title: new FormControl('', Validators.required),
  description: new FormControl('', Validators.required)
})
onSubmit(){
  console.log(this.AddPostForm.value);
}
}