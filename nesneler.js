var hayvan = {  // hayvan adında bir nesne oluşturdu. Dizilerden farklı oralarak süslu parantez işareti kullanıldı ve atama olarak üst üste iki onakta kullanıldıç
    tur : "kedi", 
    isim :"mırmır", //String ifadeler dizilerde oladuğu gibi çift tırnak ile belirtildi.
    yas : 3 // int değerlerde sayının direk yazılması yeterli.
    };

//console.log(hayvan.isim); 


// Nesnenin özelliği bir fonkisyon olabilir.

var fnesne = {
    id : 1,
    name : "beysemi",
    age : function(){
        console.log("21");
        }
}
;

console.log(fnesne.age()); //eğer nesneye atanmış fonksiyonu çalıştırmak istiyorsak nesne adının sonuna parantez eklememiz gerekir. 
