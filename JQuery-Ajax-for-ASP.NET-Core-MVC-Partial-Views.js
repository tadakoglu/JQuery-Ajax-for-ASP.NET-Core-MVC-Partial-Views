//<script src="~/lib/jquery/dist/jquery.js"></script>
<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js"></script>
<script>
//CATEGORY-FILTERING JQUERY AJAX CALLS, KATEGOR� F�LTRELEME JQUERY AJAX �STEKLER�, ONCHANGE >> LOAD
$(document).ready(function () {
    $("#Kategori").change(function () {
      var kategori = $("#Kategori").val();
       kategori = kategori.replace(/\s+/g, '%20') // Bu ifade bo�luklar� %20 ile de�i�tirir. Aksi halde bo�luklu olarak bir de�i�ken ile istek(query) yap�ld���nda( So�uk Alg�nl��� gibi) d�n���m JQUERY ile otomatik yap�lm�yor.
       //alert(kategori); // Test et.
       $("#urunListesi").html('<div class="YukleDiv"><img class="yukleniyorGif" src="yukleniyor.gif"/><span class="yukleniyorYazisi">Y�kleniyor</span></div>').load('@(Url.Action("JQueryAjaxListele", "Urun"))?Kategori=' + kategori);
       //T�m �r�nler se�ilid�inde "" null de�eri g�nderilir ve bu Controller(ya da Web API) fonksiyonlar� taraf�ndan alg�lanarak t�m �r�nler olarak sorgu yap�l�r.
    });
});
       
//PAGING-SYSTEM JQUERY AJAX CALLS, SAYFALAYICI VERSIYON 2 JQUERY AJAX �STEKLER� ONCLICK >> LOAD
//SayfalayiciHTMLRendererHelper s�n�f� �ZER�NDE  yeniLink.Attributes.Add("onclick", "SayfayaGit("+sayfa+")"); �LE BA�ARILDI

var SayfayaGit = function (sayfaNo, kategori) {
    kategori = kategori.replace(/\s+/g, '%20') // Bu ifade bo�luklar� %20 ile de�i�tirir. Aksi halde bo�luk olarak istek yap�ld���nda d�n���m JQUERY ile otomatik yap�lmad��� i�in bo� sonu� d�ner.
    //alert(kategori); // Test et. Ba�ar�l�
    $("#urunListesi").html('<div class="YukleDiv"><img class="yukleniyorGif" src="yukleniyor.gif" /><span class="yukleniyorYazisi">Y�kleniyor</span></div>').load('@(Url.Action("JQueryAjaxListele", "Urun"))?Kategori=' + kategori + '&SayfaNo=' + sayfaNo);
    //T�m �r�nler se�ilid�inde "" null de�eri g�nderilir ve bu Controller(ya da Web API) fonksiyonlar� taraf�ndan alg�lanarak t�m �r�nler olarak sorgu yap�l�r.
}

//ARAMA KUTUCU�U JQUERY AJAX INPUT EVENT(herhangi bir de�er girilmesi VE DE S�L�NMES� DAH�L) >> LOAD
$(document).ready(function () {
   $("#aramaKutucugu").bind('input', function () {
       var aranacakDeger = $("#aramaKutucugu").val();
       // sayfa = sayfa.replace(/\s+/g, '%20') // Bu ifade bo�luklar� %20 ile de�i�tirir. Aksi halde bo�luk olarak istek yap�ld���nda d�n���m JQUERY ile otomatik yap�lm�yor.
       $("#urunListesi").html('<div class="YukleDiv"><img class="yukleniyorGif" src="yukleniyor.gif"/><span class="yukleniyorYazisi">Y�kleniyor</span></div>').load('@(Url.Action("JQueryAjaxListele", "Urun"))?Arama=' + aranacakDeger);
    });
});

</script>