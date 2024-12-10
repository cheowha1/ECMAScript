// if ~ else if ~ else
// switch ~ case
// for, while, do while
// 모두 C계열 문법과 거의 동일

// 연습문제 1-1) for 문 구구단
// 2단 ~ 9단까지 루프 돌며 출력
for(let i = 2; i <= 9; i++){
   console.log(i + "단");
   for(let j = 1; j <= 9; j++){
    console.log(i + "*" + j + '=' + (i*j));
   }
}
// 연습문제 1-2) while 문 구구단
// 2단 ~ 9단까지 루프 돌며 출력
/* var 변수 = 초기값;
while(조건식){
    코드;
    증감식;
}
*/
console.log("============== while 구구단")
var i = 2;       // 반복 변수 초기화
while(i <= 9){
    console.log(i + "단")
    var j = 1;
    while(j <= 9){
        console.log(i + '*' + j + '=' + (i*j));
        j++;
    }
    i++;
}

// 연습문제 2-1) for 문을 이용해서 별그리기
/*

*****
****
***
**
*

*/

console.log("============= for문 역삼각형")
for (let row = 5; row > 0; row--) {
    let stars = "";
    for (let col = 1; col <= row; col++) {
        stars += "*";
    }
    console.log(stars);
}


// 연습문제 2-2) while 문을 이용해서 별그리기
console.log("===============while 문 역삼각형")
let row = 5;
while(row > 0) {
    let stars = "";
    let col = 1;
    while(col <= row){
        stars += "*";
        col ++;
    }
    console.log(stars);
    row --;
}

// TODO: for ... in
//          -객체의 속성 key를 반복하는 루프

// TODO: for ... of
//          -컬렉션 객체(배열)의 요소 순환