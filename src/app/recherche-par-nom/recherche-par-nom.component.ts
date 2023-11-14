import { Component } from '@angular/core';
import { Smartphone } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import {ProduitsComponent}from '../produits/produits.component';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent {
  smartphones! : Smartphone[];
  nomModele!:String;

   constructor(private produitService:ProduitService){}
  rechercherProds(){
    this.produitsService.rechercherParNom(this.nomModele).
    subscribe(prods => {
    this.smartphones = prods;
    console.log(prods)});
    }
    rechercherprods(){
      
    }

}
