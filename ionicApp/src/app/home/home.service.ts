import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }
  getLojas(){
    return ['Loja1','Loja2','Loja3',]
  }
}
