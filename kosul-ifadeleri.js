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

