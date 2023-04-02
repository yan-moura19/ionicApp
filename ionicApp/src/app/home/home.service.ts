import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Lojas } from '../models/Lojas';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class HomeService {
  private url: string = 'http://localhost:3000'
  

  constructor( private http: HttpClient) { }
  
  public getLojas(): Observable<Lojas[]>{
    return this.http.get<Lojas[]>(this.url)

  }
  addLoja(l: Lojas){
    let httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post(this.url, JSON.stringify(l), httpOptions);
  }
  updateLoja(id: number, l: Lojas ): Observable<any>{
    let httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.put(this.url+`/${id}`, JSON.stringify(l),httpOptions);

  }
  deleteLoja(id: number): Observable<any>{
    let httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.delete(this.url+`/${id}`)
  }
}
