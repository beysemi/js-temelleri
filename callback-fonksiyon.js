/*
    JavaScript asenkron yapıya sahip bir dildir.
    Eğer bir Fonksiyonun içinde başka bir fonksiyon kullanılıcaksa ve biz bu işlemin senkron olarak yapılmasını istiyorsak CallBack Fonksiyonları kullanırız.
 */

function soyle(text, callback){
    console.log(text);
    callback();
  }
  
function ad (){
    console.log("beysemi");
}

soyle("selam",ad);

// Bir başka kullanım şekli

function soyle2(text, callback){
    console.log(text);
    callback();
  }
  
var ad2 = function (){
    console.log("beysemi");
}

soyle2("selam",ad2);


// Bir fonksiyonu çağırırkende kullanabiliriz.

function soyle3(text, callback){
    console.log(text);
    callback();
  }
  
  soyle3("selam",function (){
    console.log("beysemi");
});

