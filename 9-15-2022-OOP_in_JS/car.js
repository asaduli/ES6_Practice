class Car{

    constructor(model,year){
     this.model = model;
     this.year = year;

    }
    drive(){
        console.log(`I am driving ${this.model} which was made on ${this.year}`);
    }


}

let  mycar=new Car('BMV',2008);

mycar.drive();