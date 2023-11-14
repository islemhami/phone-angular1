import { Component } from '@angular/core';
import { Marque } from '../model/marque.model';
import { Smartphone } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import {ProduitsComponent}from '../produits/produits.component';



@Component({
  selector: 'app-recherche-par-marque',
  templateUrl: './recherche-par-marque.component.html',
  styleUrls: ['./recherche-par-marque.component.css']
})
export class RechercheParMarqueComponent {
  smartphones! : Smartphone[];
  idMarque!:number;
  marques! : Marque[];

  constructor(private produitService:ProduitService){}

  ngOnInit(): void {
    this.produitService.listeMarque().
    subscribe(cats => {this.marques = cats._embedded.marques;
    console.log(cats);
    });
    }
    onChange() {
      this.produitService.rechercherParMarque(this.idMarque).
      subscribe(prods =>{this.smartphones=prods});
      }

}
