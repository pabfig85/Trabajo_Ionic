import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCharacterComponent } from '../all-character/all-character.component';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';



@NgModule({
  declarations: [AllCharacterComponent],
  imports: [
    CommonModule
  ],
  exports: [AllCharacterComponent]
})
export class SharedComponentsModule { }
