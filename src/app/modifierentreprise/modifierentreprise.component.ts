import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Entreprise } from '../Model/Entreprise.model';
import { CrudService } from '../Service/crud.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-modifierentreprise',
  templateUrl: './modifierentreprise.component.html',
  styleUrls: ['./modifierentreprise.component.css']
})
export class ModifierentrepriseComponent implements OnInit {
  idE: any;
  currentEntreprise=new Entreprise()
  user:any;
  userFile:any
  message?:String
  imgURL:any
  imagePath:any
   constructor(
      private service: CrudService,
     private router: Router,
     private fb: FormBuilder,
     private toast:NgToastService,
     private rout:ActivatedRoute)
      { 
      this.user=this.service.userDetail()
     }
 
     
    modifierEntreprise(){
     this.idE=this.rout.snapshot.params["id"];
     console.log(this.idE);
     this.service.updateEntreprise(this.idE,this.user).subscribe(entreprise=>{
      this.router.navigate(["/profile"]).then(()=>{
        window.location.reload();
      }) 
     })
    }
    onSelectFile(event: any) {
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.userFile = file;
    
  
        var mimeType = event.target.files[0].type;
        if (mimeType.match(/image\/*/) == null) {
          this.message = 'Sauf les images sont acceptés.';
          return;
        }
  
        var reader = new FileReader();
  
        this.imagePath = file;
        reader.readAsDataURL(file);
        reader.onload = (_event) => {
          this.imgURL = reader.result;
          this.user.img=this.imgURL
        };
      }
    }
     
   ngOnInit(): void {
    this.service.getEntrepriseById(this.service.userDetail().id).subscribe(entreprise=>{
      this.user=entreprise
     })
     this.idE=this.rout.snapshot.params["id"];
     this.getEntreprise(this.idE);
     console.log(this.idE)
   }
   getEntreprise(idE:number)
   {
     this.service.getEntrepriseById(idE).subscribe(data=>{
       this.currentEntreprise=data
 
     })
   }
   
 }
 