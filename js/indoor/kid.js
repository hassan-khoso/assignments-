var kids = [
    {
        "img": "image/Musical Chairs.jpg",
        "title": "Musical Chairs",
        "content":"A classic all-time favorite of people across all ages. Select the number of players and get one chair less than the players.",
        "href": "Musical Chairs.html"
    },
    {
        "img": "image/jenga.jpg",
        "title": "Jenga",
        "content":"Jenga is one such thrilling picnic games for children, which requires both mental and physical abilities. This game tests the child attention and patience.",
        "href": "Jenga.html"
    },
    {
        "img": "image/Pass The Water.jpg",
        "title": "Dump the Cup and Pass the Water",
        "content":"Here is another relay game for bright sunny days. Enjoy cool water splashes all over. ",
        "href": "the Dump the Cup and Pass the Water Game.html"
    },
    {
        "img": "image/Human Knot.jpg",
        "title": "Human Knot",
        "content":"This exciting and challenging game requires acute thinking abilities to succeed.Everyone has to stretch their right arm out and hold the left hand ",
        "href": "Human Knot.html"
    },
    {
        "img": "image/Passing The Hula Hoop.jpg",
        "title": "Pass the Hoop",
        "content":"This is an interesting team-building game for kids.",
        "href": "Passing The Hula Hoop.html"
    },
    {
        "img": "image/Hopscotch.jpg",
        "title": "Hopscotch",
        "content":"Hopscotch is a popular playground game in which players toss a small object, called a lagger.",
        "href": "Hopscotch.html"
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