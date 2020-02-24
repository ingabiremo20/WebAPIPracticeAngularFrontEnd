import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';
import { PostService } from '../post.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  form: FormGroup;
  id:number;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<UpdatePostComponent>,
              @Inject(MAT_DIALOG_DATA){title,description,id},
              private service:PostService) { 
this.id=id;
this.form=fb.group({
  description: [description, Validators.required],
  title: [title, Validators.required],
})
              }
              close(){
                console.log("close");
                this.dialogRef.close();
              }
              save(){
                this.form.value.id=this.id;
                console.log("save");
                this.service.updatePost(this.id, this.form.value).subscribe((data)=>{
                  console.log('data -', data);
                  this.dialogRef.close();
                })
              }

  ngOnInit(): void {
  }

}
