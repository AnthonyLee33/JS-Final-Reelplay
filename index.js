async function call() {
  const response = await fetch("http://www.omdbapi.com/?s=war&apikey=a9a82510");
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
