import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AddoffreComponent } from './addoffre/addoffre.component';
import { ContactComponent } from './contact/contact.component';

import { DescriptionComponent } from './description/description.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ListePosForComponent } from './liste-pos-for/liste-pos-for.component';
import { ListeoffreComponent } from './listeoffre/listeoffre.component';
import { ListeposOffComponent } from './listepos-off/listepos-off.component';
import { LogiEntrepriseComponent } from './logi-entreprise/logi-entreprise.component';
import { LoginFormateurComponent } from './login-formateur/login-formateur.component';
import { ModifierentrepriseComponent } from './modifierentreprise/modifierentreprise.component';
import { ModifierformateurComponent } from './modifierformateur/modifierformateur.component';
import { PostulationComponent } from './postulation/postulation.component';
import { ProfileComponent } from './profile/profile.component';


import { RegisterFormateurComponent } from './register-formateur/register-formateur.component';
import { RegisterentrepriseComponent } from './registerentreprise/registerentreprise.component';
import { AuthGuard } from './Service/auth.guard';
import { VosoffreComponent } from './vosoffre/vosoffre.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent},
  { path: 'loginEntreprise', component:LogiEntrepriseComponent },
  { path: 'loginFormateur', component:LoginFormateurComponent  },
  { path: 'registerformateur', component:RegisterFormateurComponent },
  { path: 'header', component:HeaderComponent },
  { path: 'registerentreprise', component:RegisterentrepriseComponent },
  { path: 'footer', component:FooterComponent},
  { path: 'ajouteroffre', component:AddoffreComponent,canActivate:[AuthGuard]},
  { path: 'listeoffre', component:ListeoffreComponent},
  { path: 'contact', component:ContactComponent},
  { path: 'profile', component:ProfileComponent,canActivate:[AuthGuard]},
  { path: 'modifierentreprise/:id', component:ModifierentrepriseComponent,canActivate:[AuthGuard]},
  { path: 'modifierFormateur/:id', component:ModifierformateurComponent,canActivate:[AuthGuard]},
  { path: 'description/:id', component:DescriptionComponent},
  { path: 'acceuil', component:AcceuilComponent},
  { path: 'postulation/:id', component:PostulationComponent,canActivate:[AuthGuard]},
  { path: 'MesOffres', component:VosoffreComponent,canActivate:[AuthGuard]},
  { path: 'ListPosParFormateur', component:ListePosForComponent,canActivate:[AuthGuard]},
  { path: 'ListPosParOffre/:id', component:ListeposOffComponent,canActivate:[AuthGuard]},
  { path: 'aboutus', component:AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
