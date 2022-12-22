"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("How many films have you seen?", "");
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many films have you seen?", "");
        }
    },
    rememberMyFilms: function () {

        for (let i = 0; i < 2; i++) {
    
            const a = prompt("One of the last watched films?", ""),
                  b = prompt("How will you estimate it?", "");
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Watched pretty few films!');
        } else if (personalMovieDB.count >= 10 &&  personalMovieDB.count < 30) {
            console.log('You are classic watcher!');
        } else if (personalMovieDB.count >= 30) {
            console.log('You are king of movie!');
        } else {
            console.log('error!');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toogleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Your favorite genr number ${i}`);

            if (genre ==='' || genre === null) {
                console.log('You enter invalid informayion!!!');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favorite genre ${i + 1} - is $`);
        });
    }
};



