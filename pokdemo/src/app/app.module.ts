import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule}from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdInputComponent } from './id-input/id-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule,MatSelectModule,MatOptionModule,MatButtonModule} from '@angular/material'
import { FormsModule } from '@angular/forms';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import {HttpServiceService} from './http-service.service'
@NgModule({
  declarations: [
    AppComponent,
    IdInputComponent,
    FilterPokemonPipePipe
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    HttpClientModule
  ],
 
  providers: [HttpServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {
 id:String=""

 }
