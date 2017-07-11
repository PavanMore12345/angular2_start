import { BrowserModule } from '@angular/platform-browser';
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
// import{ FormGroup,FormControl} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { PostsService } from './posts.service';
import { DashboardComponent } from './dashboard/dashboard.component';

//
const appRoutes : Routes = [
  { path : '' , component : HomeComponent },
  { path : 'register' , component : RegisterComponent },
  { path:'dashboard',  component:DashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    DashboardComponent,
    //PostsComponent
  ],
  imports: [
    BrowserModule ,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: true})
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
