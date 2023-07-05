class students {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

const Ali = new students ("ali",22);
const Gani = new students ("gani",25);
const Vali = new students ("vali",18);


class device{
    constructor(model,price){
        this.model = model;
        this.price = price;
    }
}
const watch = new device ('iWatch','399$');
const phone = new device ('iPhone','1099$');
const notebook = new device ('Macbook','899$');



class keyboard {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    esc(){
        console.log('esc bosilganda ....')
    }
    shift(){
        console.log('harflar kattaradi')
    }
}
const key = new keyboard ('magic','vireless')




function car(brand,model){
    this.brand = brand;
    this.model = model;
}

const audi = new car('audi','rs8');
const bmw = new car('bmw','m5 cs');
const mercedes = new car('mercedes','cls500');


class food{
    constructor(type,price){
        this.type = type;
        this.price = price;
    }
}
const burger = new device ('fastfood','3.9$');
const stake = new device ('beef','5$');
const lavash = new device ('fastfood','2.9$');






class fastfoodRestaurant{
  constructor(name,country){
    this.name = name;
    this.country = country;
  }
}
const KFC =new fastfoodRestaurant('KFC','USA');
const Wendys =new fastfoodRestaurant('Wendys','USA');
const Loook =new fastfoodRestaurant('Loook','Uzbekistan');





class brands{
    constructor(name,country){
        this.name = name;
        this.country = country;
    }
}

const apple = new brands('apple','USA');
const samsung = new brands('samsung','Korea');
const redmi = new brands('redmi','China')