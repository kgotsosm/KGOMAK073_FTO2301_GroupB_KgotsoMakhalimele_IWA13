let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below

function logCalc() {
    calculated = parseInt(calculated)
    calculated += 1
}

function calcUser() {
    if (calculated > 2) {
        user = 'John'
        state = 'requesting'
    } else {
        logCalc()
    }

}

function checkUser() {
    if (user != null && state === 'requesting') {
        console.log(`User: ${user} (${calculated})`)
    }
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()
