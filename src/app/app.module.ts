import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import {PopupModule} from 'ng2-opd-popup';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AnagramComponent } from './anagram/anagram.component';
import { MediaplayerComponent } from './mediaplayer/mediaplayer.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'mobileinfo', component: MobileinfoComponent },
  { path: 'addcard', component: AddcardComponent },
  { path: 'address', component: AddressComponent },
  { path: 'payamentinfo', component: PayamentinfoComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'anagram', component: AnagramComponent },
  { path: 'mediaplayer', component: MediaplayerComponent },
  // { path:'imagecropper', component:ImagecropperComponent},
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
    HistoryComponent,
    WishlistComponent,
    AnagramComponent,
    MediaplayerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2SearchPipeModule,
    ToastModule.forRoot(),
    PopupModule.forRoot(),
    RouterModule.forRoot(appRoutes, { useHash: true })
    //routing
  ],
  providers: [PostsService, FilterdataPipe, SortByPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
