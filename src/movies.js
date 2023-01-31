// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray){
    const directors= moviesArray.map(function (movies){
        return movies.director;
    })
return directors;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergDramas = moviesArray.filter(function (movies){
        if (movies.director === "Steven Spielberg" && movies.genre ==="Drama"){
        return spielbergDramas;}
    })
    return spielbergDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray. length == 0 ) return 0;
let sum = moviesArray.reduce((acc,movie)=> {
    console.log(typeof movie.score);
    if(!movie.score) return acc;
    else return acc + movie.score;
}, 0);
let avg = sum/moviesArray.length;
return Number(avg.toFixed(2)); 
    }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
 const dramaMovies = moviesArray.filter(function (movie){
    if(movie.genre == "drama"){
        movie 
    }
 })   
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesCopy = [...moviesArray];
    
    moviesCopy.sort((a,b)=>{
        return a.title.localCompare(b.title);
    })
    let resultsArr = [];
    moviesCopy.forEach((movie,i)=>{
        if(i<20) resultsArr.push(movie.title);
    });
    return resultsArr;
    moviesCopy.slice(0,20);
    return moviesCopy((movie) =>movie.title )
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
