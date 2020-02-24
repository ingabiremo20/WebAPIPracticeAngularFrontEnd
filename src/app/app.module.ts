import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



// import services 

import {PostService} from './post.service';
import { HttpClientModule } from '@angular/common/http';
//add material design 
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';

import { CreatePostComponent } from './create-post/create-post.component';
//Forms
import{ReactiveFormsModule} from '@angular/forms';
  import { from } from 'rxjs';
import { UpdatePostComponent } from './update-post/update-post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HeaderComponent,
    FooterComponent,
    CreatePostComponent,
    UpdatePostComponent
  ],
  imports: [
    BrowserModule,  
    HttpClientModule,
    MatSliderModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule
  ],
 
  providers: [PostService],
  bootstrap: [AppComponent],
  entryComponents: [UpdatePostComponent]
})
export class AppModule { }
