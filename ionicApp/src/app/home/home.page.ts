import { Component, NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HomeService } from './home.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Lojas } from '../models/Lojas';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, HttpClientModule, FormsModule],
})

export class HomePage {
  title = 'IonicApp';
  
  serv: HomeService;
  dataCriacao = new Date;
  distancia = 0;
  nome = '';
  lojas = new Array<Lojas>();
  constructor(service: HomeService) {
    service.getLojas().subscribe(response => (this.lojas = response))
    this.serv = service
  }

  onClickSalvar(nome: string, distancia: number, dataCriacao: Date){
    let proximoId = this.lojas.length+1;
    
    let l = new Lojas (proximoId, nome, distancia, dataCriacao, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAADs7Ozx8fEfHx/e3t57e3tLS0u2trZeXl7T09P4+PgkJCQ3NzepqamOjo48PDzIyMgMDAyBgYFubm6+vr7h4eGXl5cZGRnGxsZjY2OUlJRERERRUVEiIiKJiYkxMTFhYWGvr6+jo6MqKipqamoRZgDqAAAEgUlEQVR4nO3dWVvqMBSF4VCoA3UoCAXEARH+/188R72w7Oxik+zSBc/6bhXb16khlMQ5xhhjLKF8fgPRPO+EN3wc4DRdFObA/K5v1WGboTEw61vktaxshfd9g5TGlsB53xq1laHwuW+M3o0ZsED8Jf3qwUo4HPVNaWp98cLB+8ULBzNz4Z3Sbvr78elO+4zQ6t9S8QVrx/ru1VqoDpferb+nqxpBnsyLIJYGI7i6MNM+4claWL8Ay48Vr4J4r55TUFhC524F8S15BIcmdDNBTB7BwQnrf/g/TdKOhyd0C0mcJx0PUOi2kpg0gkMU+s93FgnHgxS6iSQ+xR8PU+hySYw/NqjQVXLyKHoEhyp0mXzieh05QQUrdEUpiGXcCA5X6JwcpE6jiMhCfwQXMyMOLawf/KeIERy20HmvN4SP4MCF7lMSt6HHQxe6G0kMHcHBCw9mPb4LnIPDF7qxJIadxxkIXbUUxNuQ451eeGSuransTRBfA+bgQoS7j9v0Puozhq3PUg5S79sTQ4T2tT7N4lo8sv1TjTMR+q8Ctr4uno3QXR0+tLw8oZxmbDtEPSOhmGa8shJ2ea/NKEzoHjoRdnknQ/AFtj5INRMWHb6EGv5sr3bRMBP6I1+zIiZBOxG6VUd3hcXcitCN0BWr9aN1623UtFJHQqAoVKIQLAqVKASLQiUKwaJQiUKwKFSiECwKlSgEi0IlCsGiUIlCsChUohAsCpUoBItCJQrBolCJQrAoVKIQLAqVKASLQiUKwaJQiUKwKFSiECwKlSgEi0IlCsGiUIlCsChUohAsCpUoBItCJQrBolDpT2E2PnX5kRWS7IWVXH/yFC2bV2QzF3a3JsbxNk0/Rmthf9sINa3rYi301g4/XQ3/9ayFchn/E9awiqe1sMdddhqWYaeQQgpPGIX2wq0rOs+VfQrtdno7EoUUqlFIoWkUUqiWJCwmi7h1IT/1/eLghJOEZT/32r44aMK0aaoNvrCQ6/kHpqxACyZMXkIZXujtUxiav/EPhScWersUhubPa4MJUyfE9/7JgAn9jYrCUma10YRJk/4bbYMxOKGrFs9xW7HM9El7PKF1FFKoRiGFplFIoVqasBhPomrYMRVOmMmdwgJSBWhCb1vCoLQ7ZtCEcju7wLbwQm+H98CW8MLk7cr8WWEwYfKWc2N0YfJNb/6sN5iwSgS++CcDJpSbSobm/5LCCdNuXVQuFnhCN4++JF6pL6/hCa2jkEI1Cik0jUIK1RKFwyyqhjf94AkfrkfTqHZ7ZVSKJyyS3temEdCEsxSgumU1mDBPAw5KeGHyc3z/hXww4eXP06xThfBzbeNE4Mg/GTDh5c95u6z20PC0E0QTuuHVNNZXahNReML/j67ymKqG9zEDCo2jkEI1Cik0rXPhRP7v3/x+bBF3XQi7iNS+o2v9eC9pwvOKQgrxu3xh82JSQvjW95nGpszV6ZV/fy3IdkfWPDss8Y6K3mo/BOlvPa+k2v4VfpX8Tsk+WgQAncv3fZ9vYMsn/a3gxyqGZ1TrfzGMMcaY1j8Wg5Y5qWfPfAAAAABJRU5ErkJggg==");

    //this.serv.addLoja(l).subscribe(response => { l = response});
    this.serv.getLojas().subscribe(resp => (this.lojas = resp))

  }
  onClickEditar(loja: Lojas, idItem: number){
  
    let l = new Lojas (idItem, loja.nome, loja.distancia, loja.dataCriacao, "https://cdn-icons-png.flaticon.com/512/1159/1159633.png");
    this.serv.updateLoja(idItem,l).subscribe(resp =>{});
  }
  onClickDelete(id:number){
    this.serv.deleteLoja(id).subscribe(response=>{

    })
    this.serv.getLojas().subscribe(resp => (this.lojas = resp))

  }

 
}
