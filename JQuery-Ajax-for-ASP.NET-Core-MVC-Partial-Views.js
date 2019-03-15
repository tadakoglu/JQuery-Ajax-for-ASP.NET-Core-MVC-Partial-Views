//<script src="~/lib/jquery/dist/jquery.js"></script>
<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js"></script>
<script>
//CATEGORY-FILTERING JQUERY AJAX CALLS, KATEGORİ FİLTRELEME JQUERY AJAX İSTEKLERİ, ONCHANGE >> LOAD
$(document).ready(function () {
    $("#Kategori").change(function () {
      var kategori = $("#Kategori").val();
       kategori = kategori.replace(/\s+/g, '%20') // Bu ifade boşlukları %20 ile değiştirir. Aksi halde boşluklu olarak bir değişken ile istek(query) yapıldığında( Soğuk Algınlığı gibi) dönüşüm JQUERY ile otomatik yapılmıyor.
       //alert(kategori); // Test et.
       $("#urunListesi").html('<div class="YukleDiv"><img class="yukleniyorGif" src="yukleniyor.gif"/><span class="yukleniyorYazisi">Yükleniyor</span></div>').load('@(Url.Action("JQueryAjaxListele", "Urun"))?Kategori=' + kategori);
       //Tüm ürünler seçilidğinde "" null değeri gönderilir ve bu Controller(ya da Web API) fonksiyonları tarafından algılanarak tüm ürünler olarak sorgu yapılır.
    });
});
       
//PAGING-SYSTEM JQUERY AJAX CALLS, SAYFALAYICI VERSIYON 2 JQUERY AJAX İSTEKLERİ ONCLICK >> LOAD
//SayfalayiciHTMLRendererHelper sınıfı ÜZERİNDE  yeniLink.Attributes.Add("onclick", "SayfayaGit("+sayfa+")"); İLE BAŞARILDI

var SayfayaGit = function (sayfaNo, kategori) {
    kategori = kategori.replace(/\s+/g, '%20') // Bu ifade boşlukları %20 ile değiştirir. Aksi halde boşluk olarak istek yapıldığında dönüşüm JQUERY ile otomatik yapılmadığı için boş sonuç döner.
    //alert(kategori); // Test et. Başarılı
    $("#urunListesi").html('<div class="YukleDiv"><img class="yukleniyorGif" src="yukleniyor.gif" /><span class="yukleniyorYazisi">Yükleniyor</span></div>').load('@(Url.Action("JQueryAjaxListele", "Urun"))?Kategori=' + kategori + '&SayfaNo=' + sayfaNo);
    //Tüm ürünler seçilidğinde "" null değeri gönderilir ve bu Controller(ya da Web API) fonksiyonları tarafından algılanarak tüm ürünler olarak sorgu yapılır.
}

//TEXT-BOX AUTO-SEARCH, ARAMA KUTUCUĞU JQUERY AJAX INPUT EVENT(herhangi bir değer girilmesi VE DE SİLİNMESİ DAHİL) >> LOAD
$(document).ready(function () {
   $("#aramaKutucugu").bind('input', function () {
       var aranacakDeger = $("#aramaKutucugu").val();
       // sayfa = sayfa.replace(/\s+/g, '%20') // Bu ifade boşlukları %20 ile değiştirir. Aksi halde boşluk olarak istek yapıldığında dönüşüm JQUERY ile otomatik yapılmıyor.
       $("#urunListesi").html('<div class="YukleDiv"><img class="yukleniyorGif" src="yukleniyor.gif"/><span class="yukleniyorYazisi">Yükleniyor</span></div>').load('@(Url.Action("JQueryAjaxListele", "Urun"))?Arama=' + aranacakDeger);
    });
});

</script>
