// Code!
const names = ['Guadalupe', 'Ollie', 'Aki'];
const eventName = 'birthday';
function writeCards(names, eventName) {
    let arrNames = [];
    for(let i = 0; i < names.length; i++) {
        arrNames.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return arrNames;
}


function countDown(num) {
    for(let i=num; i>=0; i--) {
        console.log(i)
    } 
}
console.log(countDown(11));
