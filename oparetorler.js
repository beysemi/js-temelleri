/*
  Programlama dillerinde oparetörler genellikle aynıdır. Eğer başka bir programlama dilini biliyorsanız bu sizin için basit olacaktır.
 
 Atama , aritmatik, karşılaştırma, matıksal, koşul, tür ve bit operatörleri bulunmaktadır.
*/

// Atama oparetörü bir değişkene değer atamak için kullanılır.

var a = 5; //gibi


//Aritmatiksel Oparetörler


// Toplama oparetörü " + " sayıları toplamak için kullanılır.

var a = 5;
var b = 5;
var sonuc = a + b; // burada a ve b değerini toplamış sonuç değişkenine eşitlemiş olduk.

// Çarpma oparetörü sayıları birbirleriden çıkarmak için kullanılır.

var a = 2;
var b = 2;
var sonuc = a - b; // burada a ve b değerini çarpmış ve sonuc değişkenine eşitlemiş olduk.

// Tüm Aritmatiksel Oparetörler

/*
  Matematiksel işlemleri yapmak için kullanılır.
  Değişken ve sabit "literal" değerlerde kullanılır.
  
  + --> Toplama
  - --> Çıkarma
  * --> Çarpma 
  / --> Bölme
  % --> Mod alma "Sayının veilen sayıdan bölümünden kalanı"
  ++ --> Sayıyı bir "1" değer attırmak
  -- --> Sayıyı bir "1" değer azaltmak
*/


// Operatör ve Operand 

var a = 1;
var b = 2;
var sonuc = a + b;

/*
a ve b burada operand yani işlenendir.
+ oparetoru ise işlemdir.
*/

/*
  Oparetörlerde öncelik matematik kuralları ile aynıdır.
  Çarpma ve bölme , toplama ve çıkarmadan daha önce işleme alınır.
  
  Parantez kullanılarak işlem önceliği değiştirilebilir.
*/

var a = (1+2) * 5;











/*
  JavaScripte birleştirme oparetörü olarak "+" karakteri kullanılmaktadır.
  Değişkenlerin içindeki veriler birleştirilir.
*/

var ad = "Beysemi Emirhan ";
var soyad = "Bayrak";
var website = "beysemi.com";
    
//document.write("Benim Adım: " + ad + soyad + " Websitem: "  + website );

