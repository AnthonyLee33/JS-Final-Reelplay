async function call() {
  const response = await fetch("https://www.omdbapi.com/?s=new&apikey=a9a82510");
  var movies = await response.json();
  var html = movies.Search.map((movie) => {
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
  
  document.getElementById("movies").innerHTML = html;
}

call();

function search () {
  var movie__title;
  input = document.getElementById("movie_title");
  for (i =0; i < 100; i++) {
    
  }

}
