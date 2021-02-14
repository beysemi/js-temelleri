/*
    parantez içindeki işlemden ya true yada false olarak yanıt gelicektir.
    true olarak yanıt gelir ise süslü parantezdeki işlemler yapılır.
    eğer false olarak yanıt gelirse else blogundaki işlemler yapılır.
    eğer false değerini aldıktan sonra tekrar koşullandırma yapılıcak ise else if ifadesi kullanılır.
    if(koşul){
    koşul gerçekleşirse yapılacak işlemler
    }
    else{
    koşul gerçekleşmez ise yapılacak işlemler
    }
*/
var a = 5;
var b = 6;
//değişkenler tanımlandı.
if (a + b === 11){ //koşul ifademiz a ile b nin toplamı 11 e denk ise 
  //document.write("a ile b nin toplamı 11 dir");
}
else{
  //document.write("a ile b nin toplamı 11 degildir.")
}

var x = 15;
var y = 22;
var sonuc = a + b ;

if(sonuc === 32){
  document.write("değer 32 dir");
}
else if(sonuc == 33){ //tekrar koşullandırma yapıldı
  document.write("değer 33 dür.");
}
else{
  document.write("sonuc 32 yada 33 değil.");
}




/* 
    Üç işlemli koşul ifadesidir.
    Kısa if olarak bilinir.
*/

// kosul ? ifade : ifade2 şeklinde kullanılır.

/*
    Koşul olarak true yada false olarak ifade alır.
    ifadeler her hangi bir türde değer olabilir.

    Eğer koşul true ise ifade değeri döner, aksi durumda ifade2 değeri döndürülür.
*/

var a = 6;

var durum = a < 5 ? "sayı 5 den küçük" : "sayı 5 den büyük" ;

console.log(durum);

// şeklinde kullanılır.

/*
    Switch ifadesi farklı koşullara bağlı olarak farklı eylemleri yürütmek için kullanılır. Switch kendine gelen ifadeyi değerlendirip, uygun olan case ile eşleştirir. Uygun olan case ile eşleşen ifade/ifadeler yürütülür.
    ifade, case değerleri ile eşleştirilecek olan durumu göstermektedir. Eğer ifade case değerlerinden biri ile eşleşirse, eşleşen değerden break; komutuna kadar olan tüm kodlar çalıştırılır.
*/

switch (new Date().getDay()) {
case 0:
day = "PAZAR";
break;
case 1:
day = "PAZARTESİ";
break;
case 2:
day = "SALI";
break;
case 3:
day = "ÇARŞAMBA";
break;
case 4:
day = "PERŞEMBE";
break;
case 5:
day = "CUMA";
break;
case 6:
day = "CUMARTESİ";
}
