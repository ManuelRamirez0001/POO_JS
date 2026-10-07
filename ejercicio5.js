function Vehiculo(){
    this.marca=prompt("ingresa la marca del auto");
    this.modelo=prompt("ingresa el modelo");
    this.motor=prompt("ingresa que tipo de motor");
    this.cantidad_puestos=prompt("ingresa la cantidad de pasajeros");
    this.año=prompt("ingresa el modelo del auto");
    this.encendido=false
    mostrar=(a)=>{
        console.log(this.marca);
    }
    prender=()=>{
        if(!this.encendido){
            this.encendido=true;
            console.log("auto encendido");
        }else console.log("no puedes encender algo encendido");
        
    }
    apagar=()=>{
        if(this.encendido){
            console.log("auto apagado");
        }else console.log("el auto ya estaba apagado XD");
        
    }
    modificar=(valor)=>{//no lo hago dinamico, pero podria con un prompt y dando un nuevo valor
        console.log(this.año=valor);
    }

}
const carro1=new Vehiculo();
//const carro2=new Vehiculo();
//const carro3=new Vehiculo();

mostrar(carro1);
prender();
//mostrar(carro2);
//mostrar(carro3);
modificar(carro1.año);