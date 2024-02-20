const G = 6.6784 * Math.pow(10, -11)

let mass1 = 12
let mass2 = 10
let radius = 2

function Force(mass1, mass2, radius){
    return G * ((mass1 * mass2)/(Math.pow(radius, 2)))
}

console.log(Force(mass1, mass2, radius))