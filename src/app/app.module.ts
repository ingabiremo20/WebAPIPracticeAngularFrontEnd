import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



// import services 

import {PostService} from './post.service';
import { AppRouterModele } from './app-router.module';
import { HttpClientModule } from '@angular/common/http';
//add material design 
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

import { CreatePostComponent } from './create-post/create-post.component';
//Forms
import{ReactiveFormsModule} from '@angular/forms';
  import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HeaderComponent,
    FooterComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModele,
    HttpClientModule,
    MatSliderModule,
    MatButtonModule,
    MatTableModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
