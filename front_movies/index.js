const movies$$ = document.querySelector(".movies");

const requestMovie = () => {
  fetch("http://localhost:3000/movies")
    .then((res) => res.json())
    .then((movies) => paint(movies));
};

const paint = (movies) => {
 // console.log(movies); 
 for (const movie of movies) {
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

 }
};

requestMovie();
