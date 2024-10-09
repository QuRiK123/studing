"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", '3')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let movie = prompt("Один из последних просмотренных фильмов", 'logan');
let mark = prompt("На сколько оцените его?", '8');

personalMovieDB.movies[movie] = mark

console.log(personalMovieDB)