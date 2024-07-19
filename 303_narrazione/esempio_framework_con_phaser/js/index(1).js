pages = {
  "page1": {
    header: "Page 1",
    left: "Go left",
    goLeft: "page2",
    right: "Go right",
    goRight: "page3",
    content: "This is page 1"
  },
  "page2": {
    header: "Page 2",
    left: "Die",
    goLeft: "theBadEnd",
    right: "Win",
    game: "#gioco1",
    goRight: "theGoodEnd",
    content: "This is page 2"
  },
  "page3": {
    header: "Page 3",
    left: "Die",
    goLeft: "theBadEnd",
    right: "Win",
    goRight: "theGoodEnd",
    content: "This is page 3"
  },
  "theBadEnd": {
    header: "You died!",
    left: "Restart",
    goLeft: "page1",
    right: "Restart",
    goRight: "page1",
    content: "You miserably died ..."
  },
  "theGoodEnd": {
    header: "You won!",
    left: "Restart",
    goLeft: "page1",
    right: "Restart",
    goRight: "page1",
    content: "You definitely won! :)"
  }
}

var currentStatus = "page1";

function render () {
  $(".game").css({display:"none"})
  currentPage = pages[currentStatus];
  $("#header").text(currentPage.header);
  $("#left").text(currentPage.left);
  $("#right").text(currentPage.right);
  $("#content").text(currentPage.content);
  if(currentPage.game) {$(currentPage.game).fadeIn();}
}

function changePage (direction) {
  currentStatus = pages[currentStatus][direction];
  render();
}

function goLeft () {
  changePage("goLeft");
}

function goRight () {
  changePage("goRight");
}

$("#left").click(goLeft);
$("#right").click(goRight);

render()
