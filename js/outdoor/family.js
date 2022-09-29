var family = [
    {
        "img": "image/Egg-and-spoon race.jpg",
        "title":"Egg-and-spoon",
        "content": "An egg-and-spoon race is a sporting event must balance an egg, similarly shaped item upon a spoon and race with it to the finishing line.",
        "href": "Egg-and-spoon race.html"
    },
    {
        "img": "image/Capture the flag.jpg",
        "title":"Capture the flag",
        "content": "Capture the flag is a traditional outdoor sport where two or more teams each have a flag and the objective is to capture the other team's flag .",
        "href": "Capture the flag.html"
    },
    {
        "img": "image/Three-legged race.jfif",
        "title":"Three-Legged Race",
        "content": "A three-legged race is a running event involving pairs of participants running with the left leg of one runner strapped .",
        "href": "Three-legged race.html"
    },
    {
        "img": "image/Slippery Tug of War.jfif",
        "title": "Slippery Tug of War",
        "content":" tugging war is a sport that pits two teams against each other in a test of strength: teams pull on opposite ends of a rope.",
        "href": "Slippery Tug of War.html"
    },
    {
        "img": "image/Tetherball.jpg",
        "title":"Tetherball",
        "content": "Tetherball is a game where two players use their hands to strike a volleyball which is suspended from a stationary metal pole by a rope or tether. ",
        "href": "Tetherball.html"
    },
    {
        "img": "image/Sack race.jfif",
        "title":"Sack race",
        "content": "The sack race or potato sack race is a competitive game in which participants place both of their legs inside a sack .",
        "href": "Sack race.html"
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