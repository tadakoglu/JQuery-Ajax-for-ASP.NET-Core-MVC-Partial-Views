//<script src="~/lib/jquery/dist/jquery.js"></script>
<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js"></script>
<script>
//CATEGORY-FILTERING JQUERY AJAX CALLS, KATEGORÝ FÝLTRELEME JQUERY AJAX ÝSTEKLERÝ, ONCHANGE >> LOAD
$(document).ready(function () {
    $("#Kategori").change(function () {
      var kategori = $("#Kategori").val();
       kategori = kategori.replace(/\s+/g, '%20') // Bu ifade boþluklarý %20 ile deðiþtirir. Aksi halde boþluklu olarak bir deðiþken ile istek(query) yapýldýðýnda( Soðuk Algýnlýðý gibi) dönüþüm JQUERY ile otomatik yapýlmýyor.
       //alert(kategori); // Test et.
       $("#urunListesi").html('<div class="YukleDiv"><img class="yukleniyorGif" src="yukleniyor.gif"/><span class="yukleniyorYazisi">Yükleniyor</span></div>').load('@(Url.Action("JQueryAjaxListele", "Urun"))?Kategori=' + kategori);
       //Tüm ürünler seçilidðinde "" null deðeri gönderilir ve bu Controller(ya da Web API) fonksiyonlarý tarafýndan algýlanarak tüm ürünler olarak sorgu yapýlýr.
    });
});
       
//PAGING-SYSTEM JQUERY AJAX CALLS, SAYFALAYICI VERSIYON 2 JQUERY AJAX ÝSTEKLERÝ ONCLICK >> LOAD
//SayfalayiciHTMLRendererHelper sýnýfý ÜZERÝNDE  yeniLink.Attributes.Add("onclick", "SayfayaGit("+sayfa+")"); ÝLE BAÞARILDI

var SayfayaGit = function (sayfaNo, kategori) {
    kategori = kategori.replace(/\s+/g, '%20') // Bu ifade boþluklarý %20 ile deðiþtirir. Aksi halde boþluk olarak istek yapýldýðýnda dönüþüm JQUERY ile otomatik yapýlmadýðý için boþ sonuç döner.
    //alert(kategori); // Test et. Baþarýlý
    $("#urunListesi").html('<div class="YukleDiv"><img class="yukleniyorGif" src="yukleniyor.gif" /><span class="yukleniyorYazisi">Yükleniyor</span></div>').load('@(Url.Action("JQueryAjaxListele", "Urun"))?Kategori=' + kategori + '&SayfaNo=' + sayfaNo);
    //Tüm ürünler seçilidðinde "" null deðeri gönderilir ve bu Controller(ya da Web API) fonksiyonlarý tarafýndan algýlanarak tüm ürünler olarak sorgu yapýlýr.
}

//ARAMA KUTUCUÐU JQUERY AJAX INPUT EVENT(herhangi bir deðer girilmesi VE DE SÝLÝNMESÝ DAHÝL) >> LOAD
$(document).ready(function () {
   $("#aramaKutucugu").bind('input', function () {
       var aranacakDeger = $("#aramaKutucugu").val();
       // sayfa = sayfa.replace(/\s+/g, '%20') // Bu ifade boþluklarý %20 ile deðiþtirir. Aksi halde boþluk olarak istek yapýldýðýnda dönüþüm JQUERY ile otomatik yapýlmýyor.
       $("#urunListesi").html('<div class="YukleDiv"><img class="yukleniyorGif" src="yukleniyor.gif"/><span class="yukleniyorYazisi">Yükleniyor</span></div>').load('@(Url.Action("JQueryAjaxListele", "Urun"))?Arama=' + aranacakDeger);
    });
});

</script>