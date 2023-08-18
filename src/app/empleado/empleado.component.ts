import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //styleUrls: ['./empleado.component.css']
  //Se permite hacer styles in line en lugar de ficheros
  styles:["p{background-color: red}"]
})

export class EmpleadoComponent{

  nombre = "Borja";
  apellido = "Fernández";
  private edad=35;
  //empresa="El Barman Dev";

  enableBox = true;
  isRegister = false;
  textRegister = "No hay nadie registrado";

  getisRegister(){
    this.isRegister =false;
  }
  getEdad(){
    return this.edad;
  }

  llamaEmpresa(value:String){

  }

  // Recibimos el evento por parametro
  userRegister(event:Event){
    // Cogemos el elemento HTMLInputElement para el condicional
    if((<HTMLInputElement>event.target).value=="yes"){
      this.textRegister = "El usuario se acaba de registrar correctamente";

    }else{
      this.textRegister = "No hay nadie registrado";

    }

  }




  constructor(){}

}
