import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-receita',
  templateUrl: './detalhes-receita.component.html',
  styleUrls: ['./detalhes-receita.component.scss']
})
export class DetalhesReceitaComponent implements OnInit {
  listIngredients = [
    {
      Id: 1,
      Quantity: 1,
      Unit: "unid.",
      Name: "Cebola",
      Done: false,
    },
    {
      Id: 3,
      Quantity: 500,
      Unit: "gramas",
      Name: "Farinha",
      Done: false,
    },
  ];

  listSteps = [
    {
      Id: 10,
      Order: 1,
      ToDo: "Bla bla bla",
      PreparationTime: 20,
      Done: false
    },
    {
      Id: 12,
      Order: 2,
      ToDo: "dfjlgjsghgdsgd",
      PreparationTime: 45,
      Done: false
    },
    {
      Id: 13,
      Order: 3,
      ToDo: "kflbljhkflhkdj fghb kfj bfhd bkfd hjkfd hfjb hfdkh",
      PreparationTime: 30,
      Done: false
    }
  ];

  constructor(
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe((param: any) => {
      if (param.id) {
        this.getAllIngredients(param.id);
        this.getAllSteps(param.id);
      }
    });
  }

  getAllIngredients(recipeId) {

  }

  getAllSteps(recipeId) {

  }
}
