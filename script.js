//Dom Selection

//document.getElementById();
const judul = document.getElementById("judul");

judul.style.color = "red";
judul.style.backgroundColor = "#ccc";
judul.innerHTML = "Adri Hidayat";

//documenr.getElementByTagName(); --> HTML collection
const p = document.getElementsByTagName("p");
/*p[0].style.backgroundColor = "lightblue";
p[1].style.backgroundColor = "lightblue";
p[2].style.backgroundColor = "lightblue";
p[3].style.backgroundColor = "lightblue";*/
//bisa juga
for (i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

//documenr.getElementsByClassName(); --> HTML collection
const p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = "diubah from js";
