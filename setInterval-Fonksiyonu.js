var sayi = 1;

var interval = setInterval(function () {
    if (sayi == 5)
        clearInterval(interval);

    console.log("selam: "+ sayi);
    sayi++;
}, 1000);

//setInterval Fonksiyonu belirtilen zaman aralığında tekrarlanarak işlemi yapar.
//clearInterval Döngüyü sonlandırmamızı sağlar.