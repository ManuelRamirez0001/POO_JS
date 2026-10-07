function  DatosMascota(nombre,especie,edad,peso){
    this.especie=especie;
    this.nombre=nombre;
    this.edad=edad;
    this.peso=peso;
    this.informacion=()=>{
        console.log(`Mi nombre es: ${this.nombre}\n Soy de la especie: ${this.especie}\n Tengo: ${this.edad}años\n Tengo un peso de: ${this.peso}kg\n`);
    }
}const perro1=new DatosMascota("Ramon","chandoberman","302","1000");
const loro=new DatosMascota("El chismoso","Desconocida","14","10");
const gato=new DatosMascota("Botas","Miau Miau","1439","4");
perro1.informacion();
loro.informacion();
gato.informacion();