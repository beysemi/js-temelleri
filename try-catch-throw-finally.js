try {
        //Kodları test etmek için çalıştırılacak kod bloğu
}
catch(e){
        //Hata oluşursa çalıştırılacak kod bloğu
}

  var yas = prompt();

try {
    if(yas == "") throw "Boş değer";
    if(isNaN(yas)) throw "Sayı değil";
    yas = Number(yas);
    if(yas < 18) throw "Yaşın 18'den küçük";
    if(yas > 65) throw "Yaşın 65'den büyük"
 }
catch(hata) {
    alert(hata);
  }

//JavaScript throw anahtar kelimesi ile özel hata oluşturup try ve catch<loğunda çeşitli hatalara karşı özel hata mesajları üretilebilir.


var yas = prompt();

try {
    if(yas == "") throw "Boş değer";
    if(isNaN(yas)) throw "Sayı değil";
    yas = Number(yas);
    if(yas < 18) throw "Yaşın 18'den küçük";
    if(yas > 65) throw "Yaşın 65'den büyük"
}
catch(hata) {
    alert(hata);
 }
finally {
    alert("Burası her zaman çalışacak");
}


//JavaScript finally anahtar kelimesi sonuç ne olursa olsun çalıştırılacak kodların yazılmasını sağlar.
