 
var dizi = ['beysemi', 21, true, 0.3];
// dizi elemanları fonksiyon veya dizi olabilir.
var dizi2 = new Array(2);
dizi2[0] = alert("Dünya Selam");
dizi2[1] = "beys";
dizi2[2] = function(){alert("Merhaba JavaScript");}
dizi2[0];
dizi2[2]();

dizi3 = [10,20,30,40,50,60,70,80,90,100]

// dizileri for döngüsü ile yazdırmak.

/*
for (var i = 0; i < dizi.length; i++){
    console.log(dizi[i]);
}*/

dizi.forEach(function (k) { //dizileri foreach döngüsü ile yazdırmak.
    console.log(k);
});


dizi2.length(); // dizi uzunluğu bulma fonksiyonu.
dizi2.sort() // dizideki elemanları alfabetik olarak sıralar ve yazdırır.
dizi2.reverse(); //sort() fonksiyonunun  tersidir.
dizi3.sort(function(a,b) {return a-b}); // dizi elemanlarını numerik olarak sıralar.
dizi3.push(10); // diziye eleman ekler.
// bu şeklide de olabilir.

dizi3[10] = 110 ; // indişs numarası belirterek de yapılabilir.


// ilişlilendilirmiş diziler


var bilgiler = [];
bilgiler[0] = "beysemi emirhan;
bilgiler[1] = "bayrak";
bilgiler[2] = 78;
alert(bilgiler.length);
alert(bilgiler[0]);

Array.isArray(bilgiler); // şeklinde dizinin dizi olup olmadığını kontrol edebiliriz. Yada

bilgiler instanceof Array; // şeklinde değişken tipini karşılaştırabiliriz.



