import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Offre } from '../Model/Offre.model';
import { CrudService } from '../Service/crud.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
   token:any
  id: any;
  currentOffre=new Offre()
  user:any;
   constructor(
      private service: CrudService,
     private router: Router,
     private fb: FormBuilder,
     private toast:NgToastService,
     private rout:ActivatedRoute)
      { 
      this.user=this.service.userDetail()
     }

   

   ngOnInit(): void {
    this.user=localStorage.getItem("user")
    this.id=this.rout.snapshot.params["id"]
    this.getOffre(this.id);
    // console.log(this.currentOffre.entreprise)
   }
   getOffre(id:number)
   {
     this.service.getOffreById(id).subscribe(data=>{
       this.currentOffre=data
 
     })
   }
 
   postuler(event:any){
    this.token=localStorage.getItem("mytoken");
    if(this.token==null)
    {
     this.router.navigate(["/loginFormateur"]);
     this.toast.info({
     detail:'error msg !!',
     summary:'Veuillez Connecter Pour Postuler !!'
   });
 }else{if(this.user=="formateur")
 {
   this.router.navigate(["/postulation/"+event]);
 }}
     
   }
   
   
 
 }