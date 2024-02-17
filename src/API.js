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

let genres = [
    {
        id: 28,
        name: "Action",
    },
    {
        id: 12,
        name: "Adventure",
    },
    {
        id: 16,
        name: "Animation",
    },
    {
        id: 35,
        name: "Comedy",
    },
    {
        id: 80,
        name: "Crime",
    },
    {
        id: 99,
        name: "Documentary",
    },
    {
        id: 18,
        name: "Drama",
    },
    {
        id: 10751,
        name: "Family",
    },
    {
        id: 14,
        name: "Fantasy",
    },
    {
        id: 36,
        name: "History",
    },
    {
        id: 27,
        name: "Horror",
    },
    {
        id: 10402,
        name: "Music",
    },
    {
        id: 9648,
        name: "Mystery",
    },
    {
        id: 10749,
        name: "Romance",
    },
    {
        id: 878,
        name: "Science Fiction",
    },
    {
        id: 10770,
        name: "TV Movie",
    },
    {
        id: 53,
        name: "Thriller",
    },
    {
        id: 10752,
        name: "War",
    },
    {
        id: 37,
        name: "Western",
    },
];

function getGenereById(id) {
    for (let i = 0; i < genres.length; i++) {
        if (genres[i].id === id) {
            return genres[i].name;
        }
    }
}

export { getMovies, getGenereById };
