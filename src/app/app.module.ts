import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';


@NgModule({
  declarations: [
    AppComponent,
    

  ],
  imports: [
    BrowserModule,
    CounterModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
