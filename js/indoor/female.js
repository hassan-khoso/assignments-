var female = [

    {
        "img": "image/Jump rope.jfif",
        "title": "Jump rope",
        "content": "jump rope is a tool used in the sport of skipping/jump rope where one or more participants jump over a rope swung.",
        "href": "Jump role.html"
    },
    {
        "img": "image/ludo.jpg",
        "title": "Ludo board game",
        "content": "Ludo game is the players race their four tokens from start to finish according to the rolls of a single die. ",
        "href": "Ludo board game.html"
    },
    {
        "img": "image/uno-card-game.jpg",
        "title": "Uno card game",
        "content": "Uno is an American shedding-type card game that is played with a specially printed deck.",
        "href": "Uno card game.html"
    },
    {
        "img": "image/rock.jpg",
        "title": "Rock-paper-scissors",
        "content": " An easy, fast game that everyone probably already knows,so here we go with some rock-paper-scissors instructions.",
        "href": "Rock-paper-scissors.html"
    },
    {
        "img": "image/spin the bottle.jpg",
        "title": "Spin the bottle",
        "content": "A bottle is placed on the floor in the center of the circle. A player spins the bottle, and must kiss the person to whom the bottle points when it stops spinning.",
        "href": "Spin the bottle.html"
    }, {
        "img": "image/limbo game bar].jpg",
        "title": "limbo game",
        "content": "Limbo is a popular game, The aim is to pass forwards under a low bar without falling or dislodging the bar.",
        "href": "Limbo Game.html"
    }
]


for (var i = 0; i < female.length; i++) {
    document.getElementById("female").innerHTML += ` 
   <div class = "col-lg-4 mt-5">
    <div class="card">
        <div class="image">
            <img  src="${female[i].img}" width="100%">
        </div>
        <div class="content">
            <h3>${female[i].title}</h3>
            <p>${female[i].content}</p>
            <button class="button1"> <a href="${female[i].href}"> More Detail </a> </button>
        </div>
       
    </div>
    </div>


    
    `
}