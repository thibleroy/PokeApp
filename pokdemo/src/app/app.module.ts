import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule}from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdInputComponent } from './id-input/id-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule,MatSelectModule,MatOptionModule,MatButtonModule,MatCardModule,MatDividerModule,MatAutocompleteModule} from '@angular/material'
import { FormsModule } from '@angular/forms';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import {HttpServiceService} from './http-service.service';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component'
@NgModule({
  declarations: [
    AppComponent,
    IdInputComponent,
    FilterPokemonPipePipe,
    PokemonCardComponent
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
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    HttpClientModule
  ],
 
  providers: [HttpServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {
 id:String=""

 }
