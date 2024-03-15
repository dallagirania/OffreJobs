import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CrudService } from '../Service/crud.service';

@Component({
  selector: 'app-listepos-off',
  templateUrl: './listepos-off.component.html',
  styleUrls: ['./listepos-off.component.css']
})
export class ListeposOffComponent implements OnInit {
  id:any
  list:any[]=[]
  nbr:number=0
  constructor(
    private service: CrudService,
    private router: Router,
    private rout:ActivatedRoute,
    private fb: FormBuilder,
    private toast:NgToastService
  ) { }

  ngOnInit(): void {
    this.id=this.rout.snapshot.params["id"]
    this.service.getPostulationByOff(this.id).subscribe(postulation=>{
        this.list=postulation
        this.nbr=this.list.length
        console.log(this.list)

    })

  }
  download(base64String:any){
    let filename:any="cv";
    const source=`${base64String}`;
    const link=document.createElement("a");
    link.href=source;
    link.download=`${filename}.pdf`
    link.click();

  }

}