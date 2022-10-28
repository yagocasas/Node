const movies$$ = document.querySelector('.movies');
const select$$ = document.querySelector(".select");
const button$$ = document.querySelector("button");

const requestMovie = () => {
    fetch("http://localhost:3000/movies/title" + select$$.value)
      .then((res) => res.json())
      .then((movie) => paint(movie));
  };

  const getMovies = () => {
    fetch("http://localhost:3000/movies")
      .then((res) => res.json())
      .then((movie) => fillSelection(movie));
  };

  const fillSelection = (movies) => {

    for (const movie of movies) {
  
      const option$$ = document.createElement("option");
  
      option$$.value = movie.title;
      option$$.textContent = movie.title;
  
      select$$.appendChild(option$$);
  
    }
  };

  const paint = (movie) => {
    movies$$.innerHTML = "";
    const movie$$ = document.createElement('div');
    const title$$ = document.createElement('h3');
    const img$$ = document.createElement('img');
    const director$$ = document.createElement('p');
    const year$$ = document.createElement('p');
    const genre$$ = document.createElement('p');


    movie$$.classList.add("movie");
    title$$.textContent = movie.title;
    img$$.src = movie.img;
    director$$.textContent = movie.director;
    year$$.textContent = movie.year;
    genre$$.textContent = movie.genre;
    
    movie$$.appendChild(title$$);
    movie$$.appendChild(img$$);
    movie$$.appendChild(director$$);
    movie$$.appendChild(year$$);
    movie$$.appendChild(genre$$);
    movies$$.appendChild(movie$$);
  };

  button$$.addEventListener('click', requestMovie);
  getMovies();