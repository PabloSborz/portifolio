import { Component } from '@angular/core';
import { Contato } from '../../components/contato/contato';
import { Processo } from '../../components/processo/processo';
import { Projetos } from '../../components/projetos/projetos';
import { Sobremim } from '../../components/sobremim/sobremim';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-home',
  imports: [Sobremim, Projetos, Processo, Contato, ScrollRevealDirective],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
