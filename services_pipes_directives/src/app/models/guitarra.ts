export class Guitarra {

   /* public id:number;
    public nombre:string;


    constructor(id:number,nombre:string){

        this.id = id;
        this.nombre = nombre;
    }*/


    constructor(

        public id:number,
        public fabricante:string,
        public modelo:string,
        public precio:number,
        public aDescripcion:Array<string>,
        public stock:number,
        public likes:number,
        public urlImagen:string

    ){}




}




