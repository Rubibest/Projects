"use strict";

const numberOfFilms = +prompt("How many films have you seen?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {

    const a = prompt("One of the last watched films?", ""),
          b = prompt("How will you estimate it?", "");

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Watched pretty few films!');
} else if (personalMovieDB.count >= 10 &&  personalMovieDB.count < 30) {
    console.log('You are classic watcher!');
} else if (personalMovieDB.count >= 30) {
    console.log('You are king of movie!');
} else {
    console.log('error!');
}

console.log(personalMovieDB);