import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// SnackBar Module ( Toast Module )
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [],
  imports: [
	CommonModule,
	FormsModule,
	ReactiveFormsModule,
	MatSnackBarModule,
	MatToolbarModule,
	MatIconModule,
	MatMenuModule,
	MatFormFieldModule,
	MatButtonModule,
	MatCardModule,
	MatGridListModule,
	MatDialogModule,
	MatInputModule,
	MatSelectModule,
	MatDividerModule,
	MatPaginatorModule,
	MatSortModule,
	MatTableModule,
	MatRadioModule,
	MatTabsModule,
	MatSliderModule
  ],
  exports: [
	MatSnackBarModule,
	FormsModule,
	ReactiveFormsModule,
	MatToolbarModule,
	MatIconModule,
	MatMenuModule,
	MatFormFieldModule,
	MatButtonModule,
	MatCardModule,
	MatGridListModule,
	MatDialogModule,
	MatInputModule,
	MatSelectModule,
	MatDividerModule,
	MatPaginatorModule,
	MatSortModule,
	MatTableModule,
	MatRadioModule,
	MatTabsModule,
	MatSliderModule
  ]
})
export class MaterialModule { }
