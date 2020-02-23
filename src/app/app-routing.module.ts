import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import{CreatePostComponent} from './create-post/create-post.component';


//route
const routes: Routes=[
   
    {path:'',component: PostComponent},
    {path:'post',component: PostComponent},
    {path:'create-post', component: CreatePostComponent},
   
];
@NgModule({    
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
export class AppRoutingModule { }
