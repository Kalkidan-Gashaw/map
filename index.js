// #1.
const colors = ['red', 'green','blue'];
const [firstColor, secondColor, thirdColor] = colors;
// #2.
const person = {
    name: 'Alice',
    Age: '25',
    city: 'Wonderland'
}
const {name, age , city} = person;
// #3.
const settings = {
    theme :'dark',
    language : 'en'
}
const{theme, language, mode ='light'} = settings;
