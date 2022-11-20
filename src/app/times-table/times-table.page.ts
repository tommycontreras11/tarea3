import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-times-table',
  templateUrl: './times-table.page.html',
  styleUrls: ['./times-table.page.scss'],
})
export class TimesTablePage implements OnInit {

  number:string = "";
  result = [];

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  async presentToast(result) {
    const toast = await this.toastController.create({
      message: result,
      duration: 1500,
      position: 'top'
    });

    await toast.present();
  }

  Calculate(){
   if(this.number != ""){
      this.result.splice(0, this.result.length);

      let i = parseInt(this.number);
      let a = 1;
      while(i <= 13){
        while(a <= 13){
          this.result.push(i + " * " + a + " = " + i * a);
          a++;
        }
        i++;
      }
   }else{
      this.presentToast("Debes de llenar el campo");
   }
  }

}
