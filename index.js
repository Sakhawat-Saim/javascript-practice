// function startFun() {
//     console.log('standup');
//     console.log('walk towards the switch');
//     console.log('press the switch');
// }

// call function
// startFun();
// startFun();
// startFun();

// parameter

function bringSingara(money) {
    console.log('taka dsen: ', money);
}

bringSingara(100);

function sum(a, b, c, d, e) {
    console.log(a,b,c,d,e);
    const result = a + b + c + d  + e; 
    return result
}

x = sum(3,4,5,6,7);

console.log('Total summation is: ', x);

function singaraTake (money) {
    const singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}

const singara = singaraTake(200);

console.log('Eating singara: ', singara);

function getAverage(assign1, assign2, assign3) {

    const total = assign1 + assign2 + assign3;
    average = total / 3;
    return average;
}

const avg = getAverage(12, 15, 15);

console.log(avg);

// object

const student = {
    id: 115, 
    name:'Solamain Khan', 
    marks: 98
}

const mobile = {
    brand: 'Samsung',
    price: 19000,
    storage: '64gb',
    camera: '64mp'
}

const myComputer = {
    brand: 'Lenovo',
    price: 40000,
    color: 'silver',
    processor: 'i5'
}

myComputer.processor = 'i9';
console.log(myComputer);

const shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

console.log(shoppingCart);

const penCount = console.log(shoppingCart.pen);

const penCount2 = shoppingCart['pen'];

console.log(penCount2);

const properties = Object.keys(shoppingCart);

console.log(properties);

const values = Object.values(shoppingCart);

console.log(values);

const propertyName = 'mouse';
const pValues = shoppingCart[propertyName];

console.log(propertyName, pValues);

const shoppingCart2 = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}


function movie(){

    return "Din-The day";
  
    return "Poran";
  
    return "Hawa";
  
  }
  
  console.log(movie());


  function sub(a, b) {
    return a-b;
  }

  console.log(sub(10,2));