import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { DialogModule } from './dialog/dialog.module';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ExampleComponent]
})
export class AppModule { }
