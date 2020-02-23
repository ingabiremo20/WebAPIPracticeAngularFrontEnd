import { Routes, RouterModule } from '@angular/router';
//components
import { PostComponent } from './post/post.component';
import{CreatePostComponent} from './create-post/create-post.component';
import { NgModule } from '@angular/core';


//route
const routes: Routes=[
    {path:' ',component: PostComponent},
    {path:'post',component: PostComponent},
    {path:'create-post',component: CreatePostComponent}
]
@NgModule({    
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRouterModele{}