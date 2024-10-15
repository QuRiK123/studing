"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов", '');
            const b = prompt("На сколько оцените его?", '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b
            } else { i--; }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {

            console.log('Просмотрено довольно мало фильмов');

        } else if (10 <= personalMovieDB.count && personalMovieDB.count <= 30) {

            console.log('Вы классический зритель');

        } else if (personalMovieDB.count > 30) {

            console.log("Вы киноман");

        } else {

            console.log('Произошла ошибка');

        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
            while (personalMovieDB.genres[i - 1] == '' || personalMovieDB.genres[i - 1] == null) {
                personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
            }
        }
        personalMovieDB.genres.forEach(function (genre, idx) {
            console.log(`Любимый жанр #${idx + 1}  - это ${genre}`);
        });
    },
    showMyBd: function () {
        if (personalMovieDB.privat === false) {
            console.log(personalMovieDB);
        } else console.log('error')
    },
    toggleVisibleMyBD: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
}

personalMovieDB.showMyBd()



