import { Injectable } from '@angular/core';
import { Smartphone } from '../model/produit.model';
import { Marque } from '../model/marque.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  apiURL: string = "http://localhost:8084/smartphones/api";
  apiURLmarque:string='http://localhost:8084/smartphones/marque';

  smartphones! : Smartphone[];
  smartphone! : Smartphone;
  

  constructor(private http : HttpClient) {
   



   /* this.smartphones = [
      {idSmartphone : 1, nomModele : "Huawei P40", prixSmartphone : 1700.500, color : "Noir" ,marque:{idMarque : 1, nomMarque : "Huawei"}},
      {idSmartphone : 2, nomModele : "iPhone 13 Pro", prixSmartphone : 5000.089 , color : "bleu", marque:{idMarque : 2, nomMarque : "iPhone"}},
      {idSmartphone : 3, nomModele :"iPhone 14 Pro Max", prixSmartphone: 6500.000  , color : "Gold" ,marque: {idMarque : 2, nomMarque : "iPhone"}}
    
    ];*/
  }

listeSmartphones(): Observable<Smartphone[]>{
  return this.http.get<Smartphone[]>(this.apiURL);
  }
  ajouterSmartphone( prod: Smartphone):Observable<Smartphone>{
    return this.http.post<Smartphone>(this.apiURL, prod, httpOptions);
    }

    supprimerSmartphone(id : number) {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }
      
      
      consulterSmartphone(id: number): Observable<Smartphone> {
        const url = `${this.apiURL}/${id}`;
        return this.http.get<Smartphone>(url);
        }
        updateSmartphone(prod :Smartphone) : Observable<Smartphone>
        {
        return this.http.put<Smartphone>(this.apiURL, prod, httpOptions);
        }

trierSmartphones(){
  this.smartphones = this.smartphones.sort((n1,n2) => {
  if (n1.idSmartphone! > n2.idSmartphone!) {
  return 1;
  }
  if (n1.idSmartphone! < n2.idSmartphone!) {
  return -1;
  }
  return 0;
  });
  }
  listeMarque():Observable<Marque[]>{
    return this.http.get<Marque[]>(this.apiURL+"/marque");
    }

    rechercherParMarque(idCat: number):Observable< Smartphone[]> {
      const url = `${this.apiURL}/prodscat/${idCat}`;
      return this.http.get<Smartphone[]>(url);
      }
      rechercherParNom(nom: string):Observable< Smartphone[]> {
        const url = `${this.apiURL}/prodsByName/${nom}`;
        return this.http.get<Smartphone[]>(url);
        }
        
    

 



}
