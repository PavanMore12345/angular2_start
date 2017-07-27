import { BrowserModule } from '@angular/platform-browser';
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
// import{ FormGroup,FormControl} from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { PostsService } from './posts.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MobileinfoComponent } from './mobileinfo/mobileinfo.component';
import { NavbarComponent } from './navbar/navbar.component';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { FilterdataPipe } from './filterdata.pipe';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SortByPipe } from './sort-by.pipe';
import { AddcardComponent } from './addcard/addcard.component';
import { AddressComponent } from './address/address.component';
import { PayamentinfoComponent } from './payamentinfo/payamentinfo.component';
import { HistoryComponent } from './history/history.component';
import {PopupModule} from 'ng2-opd-popup'
  // import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
//
const appRoutes : Routes = [
  { path : '' , component : HomeComponent },
  { path : 'register' , component : RegisterComponent },
  { path:'dashboard',  component:DashboardComponent},
  { path:'mobileinfo',  component:MobileinfoComponent},
  { path:'addcard',  component:AddcardComponent},
  { path:'address',  component:AddressComponent},
  { path:'payamentinfo',  component:PayamentinfoComponent},
   { path:'history',  component:HistoryComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    DashboardComponent,
    MobileinfoComponent,
    NavbarComponent,
    FilterdataPipe,
    SidebarComponent,
    SortByPipe,
    AddcardComponent,
    AddressComponent,
    PayamentinfoComponent,
    HistoryComponent
    //,PostsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ToastModule.forRoot(),
    PopupModule.forRoot(),
    RouterModule.forRoot(appRoutes, { useHash: true})
  ],
  providers: [PostsService,FilterdataPipe,SortByPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
