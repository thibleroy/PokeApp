import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule}from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdInputComponent } from './id-input/id-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule,MatSelectModule,MatOptionModule,MatListModule,MatButtonModule,MatCardModule,MatDividerModule,MatAutocompleteModule,MatProgressBarModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FilterPokemonPipePipe } from '../lib/pipes/filter-pokemon--pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import {HttpServiceService} from '../lib/services/http-service.service';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { StatsComponent } from './stats/stats.component';
import { SpecsComponent } from './specs/specs.component';
import { DescriptionComponent } from './description/description.component';
import { AbilitiesComponent } from './abilities/abilities.component'
import {ChartsModule} from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    IdInputComponent,
    FilterPokemonPipePipe,
    PokemonCardComponent,
    StatsComponent,
    SpecsComponent,
    DescriptionComponent,
    AbilitiesComponent
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
    HttpClientModule,
    MatProgressBarModule,
    MatListModule,
    ChartsModule
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {
 }
