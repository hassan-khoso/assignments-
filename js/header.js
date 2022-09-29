document.getElementById("header").innerHTML += `
<link rel="stylesheet" href="css/footer.css">
<link rel="stylesheet" href="css/bootstrap-5.0.2-dist/css/bootstrap.min.css">
 
<nav class="navbar navbar-expand-lg navbar-dark" >  
<a href="index.html" class="logo">
    <h1>Picnic<span>Game</span></h1>
</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse   " id="navbarSupportedContent">
    <ul  class="navbar-nav  mb-2 mb-lg-0  "  >
        <li><a href="index.html" id="Home">Home</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul class="dropdown-menu " id="menu">
            <li><a class="dropdown-item " href="indoor.html">Indoor Game</a></li>
            <li><a class="dropdown-item " href="outdoor.html">Outdoor Game</a></li>
            <li><hr class="dropdown-divider"></li>
          </ul>
        </li>
        <li><a href="about.html" id="about">About</a></li>
        <li><a href="contact.html" id="contact">Contact us</a></li>
    </ul>
    </div>
</nav>
</div>`