var male = [
    {
        "img": "image/backyard connt four.jpg",
        "title":"Connect Four",
        "content": "One of the nice things about an oversized board game? The pieces won't go missing that easily.",
        "href": "Connect Four.html"
    },
    {
        "img": "image/New folder/3.jpg.jpg",
        "title":"Chessboard",
        "content": "A chessboard is a gameboard used to play chess. It consists of 64 squares, 8 rows by 8 columns, on which the chess pieces are placed.",
        "href": "Chessboard.html"
    },
    {
        "img": "image/Labbertoss.jfif",
        "title":"Ladder Toss",
        "content": "Ladder toss(also known as ladder ball, monkey ball, ladder golf, ball rope, goofy balls, testicle toss, dingle balls, cowboy golf, blongo ball.",
        "href": "Ladder toss.html"
    },
    {
        "img": "image/croquet.jfif",
        "title":"Croquet",
        "content": "Croquet is a sport that involves hitting wooden or plastic balls with a mallet through hoops embedded in a grass playing court. ",
        "href": "Croquet.html"
    },
    {
        "img": "image/Horseshoes game.jpg",
        "title":"Horseshoes game",
        "content": "Horseshoes is a lawn game played between two people (or two teams of two people) using four horseshoes and two throwing targets (stakes) set in sandbox area",
        "href": "Horseshoes.html"
    },
    {
        "img": "image/Cornhole.jfif",
        "title":"Cornhole",
        "content": "Cornhole is a lawn game popular in North America in which players or teams take turns throwing fabric bean bags at a raised",
        "href":"Cornhol.html"
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