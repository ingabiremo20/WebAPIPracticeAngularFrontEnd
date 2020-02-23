import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent  {

  constructor() { }

AddPostForm = new FormGroup({
  title: new FormControl(''),
  description: new FormControl('')
})
}