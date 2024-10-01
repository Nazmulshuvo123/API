//JavaScript object notation (JSON)
const user = {id: 1, name: "Habu", job: 'actor'}
// console.log(user);

const stringified = JSON.stringify(user);
// console.log(stringified);

/**
   { id: 1, name: 'Habu', job: 'actor' } js
   {"id":1,"name":"Habu","job":"actor"} JSON
 */

const shop = {
    owner : 'Habu',
    address : {
        street : 'kochukhet',
        city : 'Dhaka',
        country : 'BD',
    },
    products : ['laptop', 'mic', 'monitor', 'keybord'],
    revenue : 45000,
    isOpen : true,
    isNew: false,  
}

// console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

const JsonParse = JSON.parse(shopJSON);
console.log(JsonParse); 