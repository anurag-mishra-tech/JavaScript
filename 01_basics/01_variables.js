const accountId = 14453
let accountEmail = "am91294@gmail.com"
var accountPassword = "123450"
/* prefer not use var because of issue in block scope and functional scope */
accountCity = "Mumbai"
let accountState;

//accountId = 2 // not allowed once defined as const

accountEmail = "ann@gmail.com"
accountPassword = "123123123123"
accountCity = "Bengaluru"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])