import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderUserComponent } from './modules/shared/components/header-user/header-user.component';
import { MediaPlayerComponent } from './modules/shared/components/media-player/media-player.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderUserComponent,
    MediaPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
