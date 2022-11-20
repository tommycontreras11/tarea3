import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.page.html',
  styleUrls: ['./translator.page.scss'],
})

export class TranslatorPage implements OnInit {

  number:string = "";
  //search:string = "";
  result:string = "";
  //result2:string = "";

  //public abecedario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
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
  Translate(){
    
    if(this.number != ""){
      this.presentToast(this.NumerosaLetras(this.number));
    }else{
      this.presentToast("Debes de llenar el campo");
    }
  }

  NumerosaLetras(cantidad) {

    cantidad = parseInt(cantidad);

        var ent = cantidad.toString().split(".");
        var arreglo = this.separar_split(ent[0]);
        var longitud = arreglo.length;

        switch (longitud) {
            case 1:
              cantidad = this.unidades(arreglo[0]);
                break;
            case 2:
              cantidad = this.decenas(arreglo[0], arreglo[1]);
                break;
            case 3:
              cantidad = this.centenas(arreglo[0], arreglo[1], arreglo[2]);
                break;
            case 4:
              cantidad = this.unidadesdemillar(arreglo[0], arreglo[1], arreglo[2], arreglo[3]);
                break;
        }

        ent[1] = isNaN(ent[1]) ? '00' : ent[1];

        return cantidad;
    
  }

  unidades(unidad) {
    var unidades = Array('Uno ','Dos ','Tres ' ,'Cuatro ','Cinco ','Seís ','Siete ','Ocho ','Nueve ');
   

    return unidades[unidad - 1];
  }

  decenas(decena, unidad) {
    let diez = Array('Once ','Doce ','Trece ','Catoce ','Quince' ,'Dieciseis ','Diecisiete ','Dieciocho ','Diecinueve ');
    let decenas = Array('Diez ','Veinte ','Treinta ','Cuarenta ','Cincuenta ','Sesenta ','Setenta ','Ochenta ','Noventa ');
    let veinte = "";
    if (decena ==0 && unidad == 0) {
        return "";
    }

    if (decena == 0 && unidad > 0) {
        return this.unidades(unidad);
    }

    if (decena == 1) {
        if (unidad == 0) {
            return decenas[decena -1];
        } else {
            return diez[unidad -1];
        }
    } else if (decena == 2) {
        if (unidad == 0) {
            return decenas[decena -1];
        }
        else if (unidad == 1) {
            return veinte = "Veinti" + "uno";
        } 
        else {
            return veinte = "Veinti" + this.unidades(unidad);
        }
    } else {

        if (unidad == 0) {
            return decenas[decena -1] + " ";
        }
        if (unidad == 1) {
            return decenas[decena -1] + " y " + "uno";
        }

        return decenas[decena -1] + " y " + this.unidades(unidad);
    }
  }

centenas(centena, decena, unidad) {
    var centenas = Array( "Ciento ", "Doscientos ", "Trescientos ", "Cuatrocientos ","Quinientos ","Seiscientos ","Setecientos ", "Ochocientos ","Novecientos ");

    if (centena == 0 && decena == 0 && unidad == 0) {
        return "";
    }
    if (centena == 1 && decena == 0 && unidad == 0) {
        return "CIEN ";
    }

    if (centena == 0 && decena == 0 && unidad > 0) {
        return this.unidades(unidad);
    }

    if (decena == 0 && unidad == 0) {
        return centenas[centena - 1]  +  "" ;
    }

    if (decena == 0) {
        var numero = centenas[centena - 1] + "" + this.decenas(decena, unidad);
        return numero.replace(" y ", " ");
    }
    if (centena == 0) {

        return  this.decenas(decena, unidad);
    }
     
    return centenas[centena - 1]  +  "" + this.decenas(decena, unidad);
    
  }

  unidadesdemillar(unimill, centena, decena, unidad) {
    var numero = this.unidades(unimill) + " MIL " + this.centenas(centena, decena, unidad);
    numero = numero.replace("MIL ", "MIL " );
    if(parseInt(this.number) == 1000){
      if (unidad == 0) {
        return numero.replace(" y ", " ");
    } else {
        return numero;
    }
    }else{
      return this.result = "El número no puede ser mayor a 1000";
    }
  }

  separar_split(texto){
    var contenido = new Array();
    for (var i = 0; i < texto.length; i++) {
        contenido[i] = texto.substr(i,1);
    }
    return contenido;
  }
}