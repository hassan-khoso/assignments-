var kids = [
    {
        "img": "image/diy ginat scrabble.jpg",
        "title": "DIY Giant Outdoor Scrabble",
        "content":"Put your vocabulary skills to the test with a giant outdoor game of Scrabble. Word nerds will love this one!",
        "href": "DIY Giant Outdoor Scrabble.html"
    },
    {
        "img": "image/redlight and greenlight.jpg",
        "title": "Redlight, Greenlight",
        "content":"Similar to the statue game, redlight and greenlight can be enjoyed by everyone.",
        "href": "Redlight, Greenlight.html"
    },
    {
        "img": "image/Wheelbarrow Race.jpg",
        "title": "Wheelbarrow Race",
        "content":"One of the very popular outdoor picnic games for children is the wheelbarrow race. So find a smooth and comfortable place to play this game.",
        "href": "Wheelbarrow Race.html"
    },
    {
        "img": "image/Hide-and-seek.jpg",
        "title": "Hide-and-seek",
        "content":"Hide-and-seek is a popular children's game in which at least two players conceal themselves in a set environment, to be found by one or more seekers.",
        "href": "Hide-and-seek.html"
    },
    {
        "img": "image/tag game.jpg",
        "title": "Tag (game)",
        "content":"Tag (also called tig) is a playground game involving two or more players chasing other players in an attempt to tag and mark them out of play ",
        "href": "Tag (game).html"
    },
    {
        "img": "image/Kickball.jfif",
        "title": "Kickball",
        "content":"Kickball is the perfect game to play with the neighborhood kids. With just a ball, they can either play out in the street",
        "href": "Kickball.html"
    }
]


for (var i = 0; i < kids.length; i++) {

    document.getElementById("kids").innerHTML += `
    
   <div class = "col-lg-4 mt-5">
    <div class="card">
        <div class="image">
            <img  src="${kids[i].img}" width="100%">
        </div>
        <div class="content">
        <h3>${kids[i].title}</h3>
            <p>${kids[i].content}</p>
            <button class="button1"> <a href="${kids[i].href}"> More Detail </a> </button>
        </div>
       
    </div>
    </div>


    
    `
}