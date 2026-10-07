function Estudiante(nombre,curso,nota){
    this.nombre=nombre;
    this.curso=curso;
    this.nota=nota;
    this.aprobo=Math.floor(this.nota)>=3.0;
    this.mostrarResultado=()=>{//como metodo de la clase
        if(this.aprobo){
            console.log(`El estudiante: ${this.nombre}\n Curso: ${this.curso}\n Nota: ${this.nota}\n-Aprobo`);
        }else{
            console.log(`El estudiante: ${this.nombre}\n Curso: ${this.curso}\n Nota: ${this.nota}\n-Reprobo`);
        }
    }
    // mostrarResultado=(nota)=>{como metodo global
    //     if(nota){
    //         console.log(`El estudiante: ${this.nombre}\n Curso: ${this.curso}\n Nota: ${this.nota}\n-Aprobo`);
    //     }else{
    //         console.log(`El estudiante: ${this.nombre}\n Curso: ${this.curso}\n Nota: ${this.nota}\n-Reprobo`);
    //     }
    // }
}
const estudiante=new Estudiante("Maximo","noveno",3.0);
const estudiante2=new Estudiante("Fabritcio","noveno",2.0);
const estudiante3=new Estudiante("Martina","noveno",4.0);


//mostrarResultado(estudiante.aprobo);
//mostrarResultado(estudiante2.aprobo);
//mostrarResultado(estudiante3.aprobo);
estudiante.mostrarResultado();
estudiante2.mostrarResultado();
estudiante3.mostrarResultado();
