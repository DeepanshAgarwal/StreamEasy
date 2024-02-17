// Description: API call to get the list of popular movies
const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDNlOTI4M2I3MTRmNWZjNWU2NTE0ZDI1ZTM2MTI2MSIsInN1YiI6IjY1Y2Q0NDMxYjA0NjA1MDE4M2Q5OTAyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u60uuFLsspmoh9D4ka7CSecDysEkLE4_vflUS0--Bu8",
    },
};

async function getMovies() {
    let moviesListRaw = await fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
        options
    ).then((response) => response.json());
    let moviesList = moviesListRaw.results;
    // console.log(moviesList);
    return moviesList;
}

//Description: API call to get all data related to given movie

function convertMovieToURL(movie) {
    let movieURL = movie.split(" ").join("+");
    // console.log(movieURL);
    return movieURL;
}

async function getMovieData(movie) {
    let movieDataRaw = await fetch(
        "http://www.omdbapi.com/?apikey=a5b345ff&t=" + movie,
        options
    ).then((response) => response.json());
    let movieData = movieDataRaw;
    // console.log(movieData);
    return movieData;
}

//returns an ARRAY of refined data of all the movies
async function fetchMoviesData() {
    let refinedData = [];
    let movies = await getMovies();
    for (let i = 0; i < movies.length; i++) {
        // console.log(i);
        let fetchedMovie = movies[i];
        // console.log(fetchedMovie);
        let movieName = fetchedMovie.original_title;
        let movieURL = convertMovieToURL(movieName);
        let movieData = await getMovieData(movieURL);
        refinedData.push({
            title: movieData.Title,
            release_date: movieData.Released,
            runtime: movieData.Runtime,
            genre: movieData.Genre,
            director: movieData.Director,
            cast: movieData.Actors,
            plot: movieData.Plot,
            language: movieData.Language,
            poster: movieData.Poster,
            ratings: movieData.Ratings,
        });
    }
    return refinedData;
}

// fetchMoviesData().then((data) => {
//     for (let i = 0; i < data.length; i++) {
//         console.log(data[i].title);
//     }
// });

export { fetchMoviesData };

// {
//     adult: false,
//     backdrop_path: '/bQS43HSLZzMjZkcHJz4fGc7fNdz.jpg',
//     genre_ids: [ 878, 10749, 35 ],
//     id: 792307,
//     original_language: 'en',
//     original_title: 'Poor Things',
//     overview: 'Brought back to life by an unorthodox scientist, a young woman runs off with a d
// ebauched lawyer on a whirlwind adventure across the continents. Free from the prejudices of her
//  times, she grows steadfast in her purpose to stand for equality and liberation.',
//     popularity: 621.231,
//     poster_path: '/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg',
//     release_date: '2023-12-07',
//     title: 'Poor Things',
//     video: false,
//     vote_average: 8.119,
//     vote_count: 1207
//   }
