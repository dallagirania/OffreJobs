import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Entreprise } from '../Model/Entreprise.model';
import { Offre } from '../Model/Offre.model';
import { CrudService } from '../Service/crud.service';

@Component({
  selector: 'app-liste-pos-for',
  templateUrl: './liste-pos-for.component.html',
  styleUrls: ['./liste-pos-for.component.css']
})
export class ListePosForComponent implements OnInit {
list:any[]=[]
listOffre:Offre[]=[]
now=new Date()
entreprise=new Entreprise()
  constructor(
    private service: CrudService,
    private router: Router,
    private fb: FormBuilder,
    private toast:NgToastService
  ) { }
  //  getEntreprise(id:number):Entreprise{
  //   this.service.getEntrepriseByOffreId(id).subscribe(entreprise=>{
  //     this.entreprise=entreprise
  //   })
  //   return this.entreprise
  // }
  ngOnInit(): void {

    this.service.getPostulationByFor(this.service.userDetail().id).subscribe(postulation=>{
        this.list=postulation
        console.log(this.list)
        for(let post of this.list)
        {
          this.service.getOffreById(post.offre.id).subscribe(offre=>{
            this.listOffre.push(offre) 
          })
        }
        console.log(this.listOffre)

    })
 
  
  }
    

}
