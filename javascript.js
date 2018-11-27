function myFunction() {
    var x = document.getElementById("mymenu");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function terimainput () {
var x = document.forms['detailkomentar']['firstname'].value;
var y = document.forms['detailkomentar']['emailname'].value;
var z = document.forms['detailkomentar']['komen'].value;
var tabel = document.getElementById("tabelinput");




if(x&&y&&z!=null){
  var row = tabel.insertRow (1);
  var cell1 = row.insertCell (0);
  var cell2 = row.insertCell (1);
  var cell3 = row.insertCell (2);
  cell1.innerHTML = x;
  cell2.innerHTML = y;
  cell3.innerHTML = z;
  alert("Data Berhasil Di Entry")
}else{
  alert("Data Yang Anda Masukkan Kosong")
}

}
