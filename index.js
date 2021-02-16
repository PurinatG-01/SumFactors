
let number = 2
let count = 0
let answer = 0


console.log("> starting...")
while (1) {

    let sumFactors = 0
    // Finding sum factors
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sumFactors += i
        }
    }
    // Check if sum equal to number
    if (sumFactors === number)
        count++

    // Set default # answer as 5 or set by passing parameter
    if (count === (process.argv[2] ? Number(process.argv[2]):  5) ){
        answer = number
        break
    }
        
    
    // Increase number
    number++
}

console.log(`> Answer #${count} : `, answer)