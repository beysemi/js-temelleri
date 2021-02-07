var topla = function(x,y){ // topla adında bir fonksiyon(method) oluşturduk. Parantez içine parametre olarak alıcagımız degişkenleri belirttik.
    var sonuc = x + y ; // parametreden alınan x ve y değerlerini toplayıp sonuc değişkenişne atadık.
    console.log(sonuc); //consolda yazdırdık.
}

topla(6,3); // parametre kullanan fonksiyonu çağırdık.

var hesapla = function(){
    var b = 10;
    var c = 20;
    var sonuc2 = b + c ;
    console.log(sonuc2);
}

hesapla(); // aynı işlem burada da geçerli fakat dışarıdan bir parametre alınmadı,fonksiyonun içindeki değerler ile işlem yapıldı.