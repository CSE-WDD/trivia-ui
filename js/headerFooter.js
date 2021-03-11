// NAV MENU

getHeaderContents();

var nav = false;

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("button").style.marginRight = "185px";
    document.getElementById("bar1").style.backgroundColor = "white";
    document.getElementById("bar1").style.transform = "rotate(45deg) translate(5px, 10px)";
    document.getElementById("bar2").style.opacity = "0";
    document.getElementById("bar3").style.backgroundColor = "white";
    document.getElementById("bar3").style.transform = "rotate(135deg) translate(-5px, 10px)";
    nav = true;
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("button").style.marginRight = "20px";
    document.getElementById("bar1").style.backgroundColor = "black";
    document.getElementById("bar1").style.transform = "rotate(180deg)";
    document.getElementById("bar2").style.opacity = "1";
    document.getElementById("bar3").style.backgroundColor = "black";
    document.getElementById("bar3").style.transform = "rotate(180deg)";
    nav = false;
}

function toggleNav() {
    nav ? closeNav() : openNav();
}

function getHeaderContents() {
    const markup = `
    <span>
          <a href="javascript:void(0)" class="button" id="button" onclick="toggleNav()">
            <div class="bar1" id="bar1"></div>
            <div class="bar2" id="bar2"></div>
            <div class="bar3" id="bar3"></div>
          </a>
        </span>
        <div id="mySidenav" class="sidenav">
          <a href="#">HOME</a>
          <a href="gallery.html">GALLERY</a>
          <a href="about.html">ABOUT</a>
          <a href="contact.php">CONTACT</a>
        </div>
   `;
   document.querySelector("header").innerHTML = markup;
   document.querySelector(".button").addEventListener("click", toggleNav());
}