import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-receitas',
  templateUrl: './lista-receitas.component.html',
  styleUrls: ['./lista-receitas.component.scss']
})
export class ListaReceitasComponent implements OnInit {
  windowWidth = window.innerWidth;

  mode = this.windowWidth >= 768 ? "horizontal" : "vertical";

  isCollapsed = false;

  listRecipes = [
    {
      Id: 1,
      Name: "Arroz de Mariscos para 2 pessoas",
      Description: "Arroz com camarão, lula, peixe, lagosta, e mexilhão, refogado com pimentões e cebola juliene, temperos e um leve toque de açafrão. Servidos na paellera. Rico em sabor e apresentação.",
      ImageURL: "../../../assets/imgs/prato-arroz-marisco-peq.jpg",
    },
    {
      Id: 2,
      Name: "Moqueca Tropical",
      Description: "Escolha entre Camarão ou Peixe ou a combinação dos dois | De origem indígena. A moqueca é um cozido de peixe ou camarão ou com mistura de peixe e camarão com tomate, cebola, pimentões e cheiro-verde refogados. Leve toque de azeite de dendê e leite de coco natural. Na versão tropical, acrescentamos manga e abacaxi. Acompanha arroz branco, pirão de camarão e farofa de dendê.",
      ImageURL: "../../../assets/imgs/prato-moqueca-peq.jpg",
    },
    {
      Id: 3,
      Name: "Frutos do Mar ao Azeite de Ervas",
      Description: "Para apreciadores de frutos do mar, com leve aroma de azeite de ervas finas. Mexilhões, polvo, peixe, camarão e lula salteados com azeite, champignon, cebola picada,pimentão, alho, alcaparras e brócolis. Servidos com arroz de brócolis e legumes salteados.",
      ImageURL: "../../../assets/imgs/prato-fruto-peq.jpg",
    },
    {
      Id: 4,
      Name: "Massa espaguete à Italiana",
      Description: "Espaguete italiano coberto com mexilhões, lula, polvo, camarões, salteados no azeite com alho, cebola, molho de tomates frescos e manjericão.",
      ImageURL: "../../../assets/imgs/prato-massa-peq.jpg",
    },
    {
      Id: 5,
      Name: "Bobó de Lagosta",
      Description: "De origem indígena com toques cearenses. Esta moqueca de lagosta é feita com verduras refogadas acrescidas de leite de coco, azeite de dendê e coentro. Acompanha arroz branco, pirão de camarão e farofa de dendê.",
      ImageURL: "../../../assets/imgs/prato-bobo-peq.jpg",
    },
  ];

  searchText = "";

  listSearch = [];

  constructor(
    private router: Router,
  ) {
    this.listSearch = this.listRecipes;
  }

  ngOnInit() {
  }

  search(text): void {
    if (text != "") {
      this.listSearch = this.listRecipes.filter(element =>
        element.Name.toUpperCase().includes(text.toUpperCase())
        || element.Description.toUpperCase().includes(text.toUpperCase())
      );
    } else {
      this.listSearch = this.listRecipes;
    }
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
