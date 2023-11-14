import { Component } from '@angular/core';
import { Smartphone } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'
})
export class ProduitsComponent {
  smartphones!: Smartphone[];

  constructor(private produitService: ProduitService) {
 // this.smartphones = produitService.listeSmartphones();
  }
  ngOnInit(): void {
    this.chargerSmartphones();

    }
    chargerSmartphones(){
      this.produitService.listeSmartphones().subscribe(prods => {
      console.log(prods);
      this.smartphones = prods;
      });
      }
      supprimerSmartphone(s: Smartphone)
      {
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
      this.produitService.supprimerSmartphone(s.idSmartphone).subscribe(() => {
      console.log("smartphone supprimé");
      this.chargerSmartphones();
      });
      }
      
    

 
}
