// Какое будет выведено значение: 
let x = 5;
console.log( 'x++: ' );
console.log( x++ );
// 5

// Чему равно такое выражение:
console.log( '\n[ ] + false - null + true: ' );
console.log( [ ] + false - null + true );
// NaN

// Что выведет этот код:
let y2 = 1;
let x2 = y2 = 2;
console.log( '\nx = y = 2:' );
console.log(x2); 
// 2 V

// Чему равна сумма
console.log( '\n[ ] + 1 + 2:' );
console.log( [ ] + 1 + 2 );
// 12 V

// Что выведет этот код:
console.log( '\n"1"[0]:' );
console.log( "1"[0] );
console.log( typeof "1"[0] );
// '1' V

// Чему равно
console.log( '\n2 && 1 && null && 0 && undefined:' );
console.log(2 && 1 && null && 0 && undefined);
// null

// Есть ли разница между выражениями?
console.log( '\nЕсть ли разница между выражениями !!( a && b ) и (a && b)?' );
let a = 0,
    b = 'test';
console.log( !!( a && b ) === (a && b) );
// Да!

// Что выведет этот код:
console.log( '\nnull || 2 && 3 || 4:' );
console.log( null || 2 && 3 || 4 );
// 3

console.log( '\n:a = [1, 2, 3]; b = [1, 2, 3]; a==b' );
a = [1, 2, 3]; b = [1, 2, 3];
console.log(a == b);
// Правда ли что a == b
// false V

// Что выведет этот код:
console.log( '\n+"Infinity":' );
console.log( +"Infinity" );
console.log( typeof +"Infinity" );
// Infinity V

// Верно ли сравнение:
console.log( '\n"ёжик" > "яблоко":' );
console.log("ёжик" > "яблоко");
// true V

// Чему равно
console.log( '\n0 || "" || 2 || undefined || true || falsе:' );
console.log(0 || "" || 2 || undefined || true || falsе);
// 2