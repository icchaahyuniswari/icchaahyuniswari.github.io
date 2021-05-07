let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    let i;
    for (i = 0; i < data.length; i++) {
      let link = data[i]["gsx$pranala"]["$t"];
      let title = data[i]["gsx$judulartikel"]["$t"];
      let author = data[i]["gsx$namapenulis"]["$t"];
      let words = data[i]["gsx$jumlahkata"]["$t"];
      let categories = data[i]["gsx$kategori"]["$t"];
      let dates = data[i]["gsx$tanggalpublikasi"]["$t"];


      document.getElementById("demo").innerHTML +=
        "<li><p>" +
        "<a class='ic:links' href='https://www.google.com/search?q=site:" +
        link +
        "' target='_blank' title='Hasil Penelusuran Google'>" +
        title +
        "</a></p>" +
        "<p><span class='ic:author' title='Penulis'>" +
        author +
        "</span> " +
        "<span class='ic:words' title='Jumlah Kata dalam Artikel'>" +
        words +
        " Kata" +
        "</span> " +
        "<span class='ic:categories' title='Kategori Artikel'>" +
        categories +
        "</span> " +
        "<span class='ic:dates' title='Tanggal Publikasi'>" +
        dates +
        "</span></p>" +
        "<blockquote><p>Baca langsung di " +
        "<a class='ic:readon' href='" +
        link +
        "' target='_blank' title='Link Menuju Website Ajib Media Indonesia'>Ajib Media Indonesia</a></blockquote>" +
        "<hr>" +
        "</li>";
    }
  }
};

xmlhttp.open(
  "GET",
  "https://spreadsheets.google.com/feeds/list/1uK88phGqtFAgsRtvlSmIHXUB4hEMGlLAvnbuVVrUwWc/1/public/full?alt=json",
  true
);
xmlhttp.send();