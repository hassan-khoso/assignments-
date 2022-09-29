var male = [
    {
        "img": "image/football.jpg",
        "title":"Football",
        "content": "Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. ",
        "href": "Football.html"
    },
    {
        "img": "image/cricket.jpg",
        "title":"Cricket",
        "content": "Cricket is a bat-and-ball game played between two teams of eleven players each on a field at the centre of which is a 22-yard (20-metre) . ",
        "href": "Cricket.html"
    },
    {
        "img": "image/Mini golf.jpg",
        "title":"Mini golf",
        "content": "If you want the mini-golf experience in the comfort of your own home, PutterBall is the way to go. The felt-lined mat, along with two putters, four golf balls.",
        "href": "Mini golf.html"
    },
    {
        "img": "image/Slammo-Game.jpg",
        "title":"Roundnet",
        "content": "Roundnet is a bit like volleyball only played without a net or a court. The game is played in two-on-two player teams with Slammo placed in the middle of them.",
        "href": "Roundnet.html"
    },
    {
        "img": "image/baseball.jpg",
        "title":"baseball",
        "content": "Baseball is a bat-and-ball sport played between two teams of nine players each, taking turns batting and fielding. ",
        "href": "baseball.html"
    },  {
        "img": "image/baskeball.jpg",
        "title":"Basketball",
        "content": "Basketball is a team sport in which two teams, most commonly of five players each, opposing one another on a rectangular court.",
        "href": "Basketball.html"
    }
]

for (var i = 0; i < male.length; i++) {

    document.getElementById("male").innerHTML += `
    
   <div class = "col-lg-4 mt-5">
    <div class="card">
        <div class="image">
            <img  src="${male[i].img}" width="100%">
        </div>
        <div class="content">
            <h3>${male[i].title}</h3>
            <p>${male[i].content}</p>
            <button class="button1"> <a href="${male[i].href}"> More Detail </a> </button>
        </div>
       
    </div>
    </div>


    
    `
}