import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  title = 'IonicApp';
  
  lojas: string [];
  constructor(HomeService: HomeService) {
    this.lojas = HomeService.getLojas();
  }

 
}
