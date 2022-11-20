import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  
  number1:string = "";
  number2:string = "";

  constructor(private toastController: ToastController) { }

  async presentToast(result) {
    const toast = await this.toastController.create({
      message: result,
      duration: 1500,
      position: 'top'
    });

    await toast.present();
  }
  Calculate(){
    if(this.number1 == "" || this.number2 == ""){ 
      this.presentToast("Debes de llenar los campos");
    }else{
      this.presentToast("Resultado: " + (parseInt(this.number1) + parseInt(this.number2)));
    }
  }

  ngOnInit() {
  }

}
