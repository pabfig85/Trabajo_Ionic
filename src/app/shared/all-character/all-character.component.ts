import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-all-character',
  templateUrl: './all-character.component.html',
  styleUrls: ['./all-character.component.scss'],
})
export class AllCharacterComponent implements OnInit {

  allCharacter: any;
  rmsService: any;


  constructor(
    private rms: RickAndMortyService,
    private modalController: ModalController
    ) { }

  ngOnInit() {
    this.rmsService.getAllCharacter().then( (res: any) => {
      this.allCharacter = res;
      console.log (this.allCharacter);
    });
  }
}