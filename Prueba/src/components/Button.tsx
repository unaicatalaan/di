function Button (){
    let name:string = "Unai";
    //let age:number = 20;
    //let price:number = 28.6;
    //let isActive:boolean = true;

    let names:string[] = ["Javier", "Maria", "Erika"];
    //names[0]=("Javier");

    //names.push("Unai"); Ve cual es el ultimo e inserta despues
    let lastName = names.pop();//Coge el ultimo del array


                    //Clave   //Valor
    let teachers: Map<string, string> = new Map();
    teachers.set("javier.fuertes@...", "Javier");
    teachers.set("juan@...", "Juan");
    teachers.set("maria@...", "Maria");

    let user ={
        name: "Javier",
        age : 28
    }

    

    


    return <button>{user.name}</button>
}

export default Button;