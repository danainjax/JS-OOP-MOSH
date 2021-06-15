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
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}


const circle = createCircle();

function Circle(radius) {
    
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const another = new Circle(1);