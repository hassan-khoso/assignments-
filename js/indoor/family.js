var family = [
    {
        "img": "image/LAWN TWISTER.jpg",
        "title":"Twister (game)",
        "content": "Traditionally, Twister is an indoor game played on a large plastic mat with different colored circles that guide the movements of players.",
        "href": "Twister (game).html"
    },
    {
        "img": "image/lawn memory.jpg",
        "title":"Concentration (card game)",
        "content": "I was obsessed with matching games as a family. This giant lawn matching game is so fun for the backyard, picnics.",
        "href": "Concentration (card game).html"
    },
    {
        "img": "image/Yard Dominos.jfif",
        "title":"DIY Yard Dominoes",
        "content": "This jumbo set of dominoes is sure to hit the spot at your picnic or park outing with family and friends.",
        "href": "DIY Yard Dominoes.html"
    },
    {
        "img": "image/pick up sticts.jpg",
        "title":"Pick-up sticks",
        "content": "Pick-up sticks, pick-a-stick, jackstraws, jack straws, spillikins, or spellicans is a game of physical and mental skill in which a bundle of sticks.",
        "href": "Pick Up Sticks.html"
    },
    {
        "img": "image/Ring Toss Game.jfif",
        "title":"Ring Toss Game",
        "content": "hands to catch it, but must try and slip their hand through the ring in the air so that it slides down their arm.",
        "href": "Human Ring Toss.html"
    },
 {
    "img": "image/Bob for Apples.jpg",
    "title":"Bob for Apples",
    "content": "Apple bobbing, also known as bobbing for apples,The game is played by filling a tub or a large basin with water and putting apples in the water.",
    "href": "Bob for Apples.html"
    }
]

for (var i = 0; i < family.length; i++) {

    document.getElementById("family").innerHTML += `
    
   <div class = "col-lg-4 mt-5">
    <div class="card">
        <div class="image">
            <img  src="${family[i].img}" width="100%">
        </div>
        <div class="content">
            <h3>${family[i].title}</h3>
            <p>${family[i].content}</p>
            <button class="button1"> <a href="${family[i].href}"> More Detail </a> </button>
        </div>
       
    </div>
    </div>


    
    `
}