var div_id = ["home", "women", "man", "kids"];
for (i in div_id) {
  creart(div_id[i]);
  console.log(div_id[i]);
}

function need(s) {
  for (var i = 0; i < div_id.length; i++) {
    console.log(div_id[i], typeof (div_id[i]), div_id.length, s);
    if (div_id[i] != s) {
      document.getElementById(div_id[i]).style.display = "none";
      console.log(s + " off ", div_id[i])
    } else {
      document.getElementById(div_id[i]).style.display = "block";
      console.log(s + " on", div_id[i])
      document.getElementById("div_top").innerHTML = div_id[i].toUpperCase();

    }

  }

}
var home = document.getElementById('home');
var man = document.getElementById('man');
var women = document.getElementById('women');
var kids = document.getElementById('kids');
var homebt = document.getElementById('home-bt');
var kidsbt = document.getElementById('kids-bt')
var manbt = document.getElementById('man-bt');
var womenbt = document.getElementById('women-bt');
need(div_id[0]);

function creart(s) {
  var row = document.createElement("div");
  row.className = "row";
  row.id = "items " + s;
  document.getElementById(s).appendChild(row);
  for (var i = 0; i < 30; i++) {
    var card = document.createElement("div");
    card.className = "card h-100 shadow hi";
    var a_img = document.createElement("a");
    a_img.href = "#";
    var image = document.createElement("img");
    image.src = "https://images.pexels.com/photos/8434/holiday-trip-packaging-8434.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1060";
    image.className = "card-img-top";
    a_img.appendChild(image);
    card.appendChild(a_img);
    var body = document.createElement("div");
    body.className = "card-body";
    var c_title = document.createElement("h4");
    c_title.className = "card-title";
    var title = document.createElement("a");
    title.href = "#";
    title.innerHTML = s;
    c_title.appendChild(title);
    body.append(c_title);
    var price = document.createElement("h5");
    price.innerHTML = "$24.99";
    body.appendChild(price);
    var caption = document.createElement("p");
    caption.className = "card-text";
    caption.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet."
    body.appendChild(caption);
    card.appendChild(body);
    var main_div = document.createElement("div");
    main_div.className = "col-lg-3 col-md- mb-2";
    main_div.appendChild(card)
    document.getElementById("items " + s).appendChild(main_div);
  }
}