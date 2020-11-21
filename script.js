/* Задание на урок:



2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять
*/


'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDB = {
    count : numberOfFilms,
    movies : {}, 
    actors : {},
    genres : [],
    privat : false
};


for (let i = 0; i <= 1; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.count[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}


if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    alert('Вы киноман!');
} else {
    alert('Произошла ошибка!');
}