import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-receita',
  templateUrl: './detalhes-receita.component.html',
  styleUrls: ['./detalhes-receita.component.scss']
})
export class DetalhesReceitaComponent implements OnInit {
  recipe = {
    Name: "Arroz",
    Details: "djsklhsdkfljshfklsjfhk fjsdhkfh sdkfj hsdjfsh kdfj hsldfjs hlkfjs",
    ImageURL: "../../../assets/imgs/prato-arroz-grande.jpg",
    PreparationTime: 20,
  };

  headerImageStyle = {
    'background-image': 'url(' + this.recipe.ImageURL + ')',
    'background-position': 'center',
    'background-repeat': 'no-repeat',
    'background-size': 'cover',
    'margin-bottom': '1%',
    'height': '40%',
    'min-height': '300px',
    'color': 'white',
    'position': 'relative',
  }

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
      Done: false
    },
    {
      Id: 12,
      Order: 2,
      ToDo: "dfjlgjsghgdsgd",
      Done: false
    },
    {
      Id: 13,
      Order: 3,
      ToDo: "kflbljhkflhkdj fghb kfj bfhd bkfd hjkfd hfjb hfdkh",
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
        this.getInfoRecipe(param.Id);
        this.getAllIngredients(param.id);
        this.getAllSteps(param.id);
      }
    });
  }

  getInfoRecipe(recipeId) {

  }

  getAllIngredients(recipeId) {

  }

  getAllSteps(recipeId) {

  }
}
