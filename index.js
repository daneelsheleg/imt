/*var userPassword = prompt('введите пароль');
const originPassword = '1111';

if (userPassword === originPassword) {
    alert('ok');
} else{
    alert('not')
}*/


/*var one = prompt('one');
var two = prompt('two');
alert(parseInt(one)+parseInt(two));

var one = +prompt('one');
var two = +prompt('two');
alert(one+two)*/

/*let arr = [1, 2, 3];
for(let i=0; i < arr.length; i+=1){
    console.log(arr[i]+1);
}*/





/*

var c = prompt('введите массив').split(' ');
var sum = 1;

for (var i = 0; i < c.length; i = i + 1){
    sum = c[i] * sum;
}

console.log(sum)

*/




/*
var a = prompt ('введите массив').split(' ');
var num = 0;
    for ( var i = 0; i < a.length; i = i + 1){
        num = a[i];
        if ( num > 10) {
            console.log(num)
        }
    }
    */




/*
var mass = prompt('Массив').split(' ');
    for ( var i = 0; i < mass.length; i++){

        if (mass[i] % 2 == 0){
            console.log(mass[i]*mass[i])
        }
        else{
            console.log(mass[i])
        }
    }
*/

/*
var mass = prompt('массив').split(' ');
    for (var i = 0; i < mass.length; i++){
        num = mass[i];
            if( num > 10 && num < 20){
                console.log(num)
            }
    }
    */

/*
var a = prompt('введите вес');
var b = prompt('введите рост');
var ab = a/(b*b);
var mass = (ab < 16) ? 'дефецит':
            (ab < 18.5) ? 'недостаточный':
            (ab < 25) ? 'нормальный':
            (ab < 30) ? 'избыточный':
            (ab < 35) ? 'ожирение первого уровня':
            (ab < 40) ? 'ожирение второго уровня':
                'ты труп';
alert(mass);
*/



document.addEventListener('DOMContentLoaded', function () {
    var weightElem = document.querySelector('#weight') ;
    var growElem = document.querySelector('#grow');
    var buttonElem = document.querySelector('#button');
    var textElem = document.querySelector('#text');

    buttonElem.addEventListener('click', function (event) {
  
        event.preventDefault();
        
        var a = weightElem.value;
        var b = growElem.value;
        var ab = (a)/((b*b)/10000);
        var mass = textElem;
                var mass = (ab < 16) ? 'дефецит \n Рекомендация: намного, намного больше надо есть':
                                (ab < 18.5) ? 'недостаточный \n Рекомендация: больше есть':
                                (ab < 25) ? 'нормальный \n Рекомендация: все хорошо ':
                                (ab < 30) ? 'избыточный \n Рекомендация: меньше надо есть':
                                (ab < 35) ? 'ожирение первого уровня \n Рекомендация: сходите в спорт зал':
                                (ab < 40) ? 'ожирение второго уровня \n Рекомендация: сходите к диетологу':
                                    'ты труп \n Рекомендация: Пока';
                textElem['value'] = mass;
    })
});






