import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {NavComponent} from './layouts/nav/nav.component';
import {ContentLayoutComponent} from './layouts/content-layout/content-layout.component';
import {FooterComponent} from './layouts/footer/footer.component';

// Extras


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentLayoutComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // shared
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
