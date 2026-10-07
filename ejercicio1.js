function TiendaDeTecnologia(marca,procesador,ram,precio){
    this.precio=precio;
    this.marca=marca;
    this.procesador=procesador;
    this.ram=ram+"GB";

    this.informacion=()=>{
        console.log(`Marca: ${this.marca}\n Procesador: ${this.procesador}\n RAM: ${this.ram}\n Precio: $${this.precio.toLocaleString("es-CO")}`);
    }

};
const PC1= new TiendaDeTecnologia("Lenovo","Intel Core I6","8",800000);
const PC2= new TiendaDeTecnologia("ASUS","Intel Core I5","16",500000);
const PC3= new TiendaDeTecnologia("MIA","Intel Core I3","32",300000);
PC3.informacion();
PC2.informacion();
PC1.informacion();
