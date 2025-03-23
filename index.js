var all_movies = new Array();

async function call(searchTerm) {
  const response = await fetch("https://www.omdbapi.com/?s="+searchTerm+"&apikey=a9a82510");
  var movies = await response.json();
  all_movies = movies.Search;
  sortBy(document.getElementById("filter"));
}

call("war");

function display() {
  var html = all_movies.map((movie) => {
    return (
      `<div class="movie">
      <figure class="movie__poster">
        <img src="` + movie.Poster + `" alt="">
      </figure>
        <div class="movie__title">` +
      movie.Title +
      `</div>
        <div class="release__date">` + 
      movie.Year +
      `</div>
      </div>`
    );
  });
  document.getElementById("movies").innerHTML = html.join("")
}

function sortBy (select) {
var option = select.options[select.selectedIndex];
if (option.value == "Year") {
  all_movies.sort((a,b) => a.Year.localeCompare(b.Year));
} else if (option.value == "Title") {
  all_movies.sort((a,b) => a.Title.localeCompare(b.Title));
}
display();  
}

var timeoutID = undefined;
function search (inputobject) {
  if (timeoutID) {
    clearTimeout(timeoutID);
    timeoutID=undefined;
  }
  timeoutID=setTimeout(() => {
    call(inputobject.value);
  },500);
  
}
