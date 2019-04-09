import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
   MatToolbarModule,
   MatSidenavModule, 
   MatButtonModule, 
   MatIconModule,
   MatCardModule,
   MatInputModule,
   MatListModule,
   MatSlideToggleModule,
   MatGridListModule,
   MatDialogModule,
   MatAutocompleteModule,
   MatMenuModule,
   MatCheckboxModule,
   MatTooltipModule,
   MatRadioModule,
   MatDatepickerModule,
   MatNativeDateModule,
   MatSelectModule,
   
  } from '@angular/material';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DirectiveModule } from '../directive/directive.module';


@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    DirectiveModule,

  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    DirectiveModule,

  ],
  entryComponents: [
    ConfirmDialogComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [  
    MatDatepickerModule,  
  ],
})
export class SharedModule { }
