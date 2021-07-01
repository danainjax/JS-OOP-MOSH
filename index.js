// console.log('Hello Dana')

// let circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw () {
//         console.log('draw');
//     }
// };

// console.log(circle.radius)
// console.log(circle.location)
// f

const circle = {
    radius: 1,
    location: {
        x:1,
        y:1
    
}
}

//object literal syntax

function createCheeseburger(bun, doneness,cheese){
    return {
        bun,
        doneness,
        cheese,
        eat: function(){
            console.log("I ate the cheeseburger!")
        }
        
    }
}

const cheeseburger = createCheeseburger('sesame-poppy', 'rare', 'muenster')
console.log(cheeseburger)
cheeseburger.eat()

//if object has one or more methods, it has behavior
//use a factory or constructor function

function Taco(protein, shell) {
    this.protein = protein;
    this.shell = shell;
    this.eat = function() {
        console.log('I ate the tasty taco');
    }
}
const firstTaco = new Taco('shredded beef', 'soft')
console.log(firstTaco)
firstTaco.eat()

function Cookie(type) {
    this.type = type;
    this.dunk = function() {
        console.log(`Dunk the ${type} cookie, and say ahh!`)
    }
}
const chocolateChip = new Cookie('chocolate chip')
console.log(chocolateChip)
chocolateChip.dunk()

function Order(name, email, phone, pizza_ids) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.pizza_ids = pizza_ids
}

const order1 = new Order("Dana P.", "danainjax@gmail.com", "904-654-2981", [160,161,164])
console.log(order1)