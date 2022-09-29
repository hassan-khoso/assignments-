var female = [
    {
        "img": "image/Badminton.jpg",
        "title": "Badminton",
        "content": "Although the professional version of this game requires a net, you don't need to have one in order to play.",
        "href": "Badminton.html"
    },
    {
        "img": "image/vollage.jpg",
        "title": "Volleyball",
        "content": "Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's ",
        "href": "Volleyball.html"
    },
    {
        "img": "image/Ultimate Frisbee.jpg",
        "title": "Ultimate Frisbee",
        "content": "Ultimate, originally known as ultimate Frisbee, is a non-contact team sport played by players with a frisbee, flung by hand.",
        "href": "Ultimate Frisbee.html"
    },
    {
        "img": "image/Don't Drop the Ball.jpg",
        "title":"Dodgeball",
        "content": "Dodgeball is a team sport in which players on two teams try to throw balls and hit opponents, while avoiding being hit themselves.",
        "href": "Dodgeball.html"
    },
    {
        "img": "image/hula hoop.jfif",
        "title": "Hula hoop",
        "content": "Hula hoops for children generally measure approximately 70 centimetres (28 in) in diameter, while those for adults measure around 100 centimetres (39 in).",
        "href": "Hula hoop.html"
    },
    {
        "img": "image/tennis.jpg",
        "title": "Tennis",
        "content": "Tennis is a racket sport that is played either individually against a single opponent (singles) or between two teams of two players each (doubles).",
        "href": "Tennis.html"
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