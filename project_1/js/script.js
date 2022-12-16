"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many films have you seen?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films have you seen?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {

        const a = prompt("One of the last watched films?", ""),
              b = prompt("How will you estimate it?", "");
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

rememberMyFilms ();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Watched pretty few films!');
    } else if (personalMovieDB.count >= 10 &&  personalMovieDB.count < 30) {
        console.log('You are classic watcher!');
    } else if (personalMovieDB.count >= 30) {
        console.log('You are king of movie!');
    } else {
        console.log('error!');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favorite genr number ${i}`);
    }
}

writeYourGenres();
