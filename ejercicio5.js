const prompt = require('prompt-sync')();
function Vehiculo(){
    this.marca=prompt("ingresa la marca del auto: ");
    this.modelo=prompt("ingresa el modelo: ");
    this.motor=prompt("ingresa que tipo de motor: ");
    this.cantidad_puestos=prompt("ingresa la cantidad de pasajeros: ");
    this.ano=prompt("ingresa el año del auto: ");
    this.encendido=false
    mostrar=()=>{
        console.log(`Marca: ${this.marca}\n Modelo: ${this.modelo}\n Motor: ${this.motor}\n Puestos: ${this.cantidad_puestos}\n Año: ${this.ano}\n `);
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
    modificar=(auto)=>{
        let valorACambiar=prompt("ingresa el valor a cambiar");
        let nuevo=prompt("cual sera el valor");
        auto[valorACambiar]=nuevo
        console.log(auto[valorACambiar]);
    }

}
const carro1=new Vehiculo();

mostrar(carro1);
prender();
prender();
apagar();
modificar(carro1);
mostrar(carro1);
//no se agregan validaciones, para tipo de dato,valor a modificar