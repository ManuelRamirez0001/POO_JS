function Libro(nombre,editorial,año,autor){
    this.nombre=nombre;
    this.editorial=editorial;
    this.año=año;
    this.autor=autor;
    this.prestado=false;
    prestar=(libro)=>{
        if(libro&&!this.prestado){
            console.log("entro");
            this.prestado=true;
        }else console.log("prestado");
    }
}
const libro1=new Libro("pajaro loco","ls",2006,"el-gato-con-botas");
const libro2=new Libro("pajaro loco","ls",2006,"el-gato-con-botas");
const libro3=new Libro("pajaro loco","ls",2006,"el-gato-con-botas");
prestar(libro1.nombre);
prestar(libro2.nombre);
prestar(libro3.nombre);

