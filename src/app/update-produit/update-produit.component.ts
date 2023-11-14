import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { Smartphone } from '../model/produit.model';
import { Router } from '@angular/router';
import { Marque } from '../model/marque.model';





@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent  {
  currentSmartphone = new Smartphone();
  marques! : Marque[];
updatedMarqueId! : number;


constructor(private activatedRoute: ActivatedRoute,
  private router :Router,
  private produitService: ProduitService) { }
  
  ngOnInit(): void {
    this.produitService.listeMarque().
    subscribe(cats => {this.marques = cats;
    console.log(cats);
    });
    this.produitService.consulterSmartphone(this.activatedRoute.snapshot.params['id']).
    subscribe( prod =>{ this.currentSmartphone = prod;
    this.updatedMarqueId =
    this.currentSmartphone.marque.idMarque;
    } ) ;
    }
    updateSmartphone() {
      this.currentSmartphone.marque = this.marques.find(cat => cat.idMarque == this.updatedMarqueId)!;
      this.produitService.updateSmartphone(this.currentSmartphone).subscribe(prod => {
      this.router.navigate(['produits']); }
      );
      }
   }
    


