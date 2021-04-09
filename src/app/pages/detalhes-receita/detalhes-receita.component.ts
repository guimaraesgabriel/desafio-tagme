import { ConfigService } from './../../services/config.service';
import { NzModalService, NzNotificationService } from 'ng-zorro-antd';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-receita',
  templateUrl: './detalhes-receita.component.html',
  styleUrls: ['./detalhes-receita.component.scss']
})
export class DetalhesReceitaComponent implements OnInit {
  isValid: boolean = false;
  inProgress: boolean = false;

  recipe = {
    Name: "Arroz",
    Description: "djsklhsdkfljshfklsjfhk fjsdhkfh sdkfj hsdjfsh kdfj hsldfjs hlkfjs",
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
      Name: "Cebola",
      Done: false,
    },
    {
      Id: 3,
      Quantity: 500,
      Name: "Farinha",
      Done: false,
    },
  ];

  listSteps = [
    {
      Id: 10,
      Order: 1,
      Step: "Bla bla bla",
      Done: false
    },
    {
      Id: 12,
      Order: 2,
      Step: "dfjlgjsghgdsgd",
      Done: false
    },
    {
      Id: 13,
      Order: 3,
      Step: "kflbljhkflhkdj fghb kfj bfhd bkfd hjkfd hfjb hfdkh",
      Done: false
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modal: NzModalService,
    private config: ConfigService,
    private notification: NzNotificationService,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((param: any) => {
      if (param.id) {
        this.getInfoRecipe(param.id);
        this.getAllIngredients(param.id);
        this.getAllSteps(param.id);
      } else {
        this.router.navigate(['lista-receitas']);
      }
    });
  }

  getInfoRecipe(recipeId) {
    this.config.get("recipe/", recipeId).then((response: any) => {
      if (response != null) {
        this.recipe = response;
      } else {
        this.notification.create("error", "Erro", "Erro ao recuperar informações da receita");
      }
    }, (error) => {
      this.notification.create("error", "Requisição - Erro ao recuperar informações da receita", error.message);
    });
  }

  getAllIngredients(recipeId) {
    this.config.getAllParam("recipeIngredients/", recipeId).then((response: any) => {
      if (response != null) {
        var objDone = { Done: false };
        this.listIngredients = Object.assign(response, objDone);
      } else {
        this.notification.create("error", "Erro", "Erro ao recuperar informações dos ingredientes da receita");
      }
    }, (error) => {
      this.notification.create(
        "error",
        "Requisição - Erro ao recuperar informações dos ingredientes da receita",
        error.message
      );
    });
  }

  getAllSteps(recipeId) {
    this.config.getAllParam("recipeSteps/", recipeId).then((response: any) => {
      if (response != null) {
        var objDone = { Done: false };
        this.listSteps = Object.assign(response, objDone);
      } else {
        this.notification.create("error", "Erro", "Erro ao recuperar informações dos passos da receita");
      }
    }, (error) => {
      this.notification.create(
        "error",
        "Requisição - Erro ao recuperar informações dos passos da receita",
        error.message
      );
    });
  }

  verifyAllOptionsValid() {
    const missingIngredients = this.listIngredients.some(element => !element.Done);
    const missingSteps = this.listSteps.some(element => !element.Done);

    if (!missingIngredients && !missingSteps) {
      this.isValid = true;
    } else {
      this.isValid = false;
    }
  }

  start() {
    this.inProgress = true;
  }

  finish() {
    const modal = this.modal.create({
      nzTitle: "Obrigado",
      nzContent: "Prato finalizado com sucesso.",
      nzFooter: [
        {
          label: 'OK',
          onClick: () => modal.destroy()
        },
      ]
    });
  }
}
