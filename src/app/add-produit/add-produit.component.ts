import { Component } from '@angular/core';
import { Smartphone } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Marque } from '../model/marque.model';
import { Router } from '@angular/router';




@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html'
 
})
export class AddProduitComponent {
  newSmartphone = new Smartphone();
  messege ! :string;
  marques! : Marque[];
  newIdMarque! : number;
  newMarque! : Marque;

  constructor(private produitService: ProduitService,
                      private router :Router) { }

  
    

 
addSmartphone(){
  this.newMarque.idMarque = this.marques.find(cat => cat.idMarque == this.newIdMarque)!.idMarque;
  this.produitService.ajouterSmartphone(this.newSmartphone)
  .subscribe(prod => {
  console.log(prod);
  this.router.navigate(['produits']);
  });
  }
  ngOnInit(): void {
    this.produitService.listeMarque().
    subscribe(cats => {this.marques = cats;
    console.log(cats);
    });
    
    }


}
