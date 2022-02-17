/*
let i = 5;
let a = [1, 2, 3, 4,]

class Animal {
    jmeno;
    oci;
    barvu;
    pocetNohou;
    ocas;
    rasa;

    constructor(jmeno, oci, barvu, pocetNohou, ocas, rasa) {
        this.jmeno = jmeno;
        this.oci = oci;
        this.barvu = barvu;
        this.pocetNohou = pocetNohou;
        this.ocas = ocas;
        this.rasa = rasa;
    }

    skakat () {
        console.log(this.jmeno + " skace ");
    }

    packu () {
        console.log(this.jmeno + " podal packu ");
    }
    sednout () {
        console.log(this.jmeno + " si sedlo ")
    }

    prinest() {
        console.log(this.jmeno + " přináší ")
    }
}

const myDog = new Animal("Punťa", "modre", "cerna", 3, "ano", "Čivava");
const mySecoundDog = new Animal("Chuj", "zlute", "bílá", 8, "ne", "idk");
myDog.skakat();
mySecoundDog.packu();
*/

class Woman {
    name;
    age;
    sex;
    skin;
    weight;

   constructor (name, age, sex, skin, weight) {
       this.name = name;
       this.age = age;
       this.sex = sex;
       this.skin = skin;
       this.weight = weight;
   }

   cook() {
       console.log(this.name + " Máš to v lednici");
   }

   walk() {
       console.log(this.name + " Chodit nebudu")
   }

   horny() {
       console.log(this.name + " Bolí mě hlava")
   }

   crying() {
       console.log(this.name + " to bolí")
   }

}

const myWoman1 = new Woman("Žaneta", 69, "Žena", "Žlutá", 157);
console.log(myWoman1);
myWoman1.cook();
const myWoman2 = new Woman("Aladin", 30, "Idk", "Černá", 190 );
console.log(myWoman2);
myWoman2.walk();
const myWoman3 = new Woman("Anna", 12, "Kid", "Bílá", 140);
console.log(myWoman3);
myWoman3.horny();
myWoman3.crying();
const myWoman4 = new Woman("Raspuša", 51, "Žena", "Černá", 190);
console.log(myWoman4);
myWoman4.cook();
const myWoman5 = new Woman("Marge", 24, "Žena", "Žlutá", 187);
console.log(myWoman5);
myWoman5.cook();
