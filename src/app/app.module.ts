import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessageComponent } from './message/message.component';

import { HttpClientModule } from '@angular/common/http';

// FOR MATERIAL.IO USE  - DATEPICKER
// import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
// import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, NativeDateModule } from '@angular/material'
// import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core'
// import { MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter'

export const MY_NATIVE_DATE_FORMATS = {
    parse: {
        dateInput: 'DD/MM/YYYY'
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'MMMM YYYY',
        dateA11yLabel: 'L',
        monthYearA11yLabel: 'MMMM YYYY'
    }
};

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        MessageComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule
        // MatButtonModule, MatCheckboxModule, MatDatepickerModule, NativeDateModule
    ],
    providers: [
        // { provive: DateAdapter, useClass: MomentDateAdapter },
        // { provide: MAT_DATE_FORMATS, useValue: MY_NATIVE_DATE_FORMATS }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
