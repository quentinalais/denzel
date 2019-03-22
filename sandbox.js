/* eslint-disable no-console, no-process-exit */
const imdb = require('./src/imdb');
const DENZEL_IMDB_ID = 'nm0000243';
const insertion=require('./test2.js');

const a=null;
async function sandbox(actor) {
  try {


    console.log(`📽️  fetching filmography of ${actor}...`);
    const movies = await imdb(DENZEL_IMDB_ID);
    //console.log("LES MOVIES :"+typeof JSON.parse(JSON.stringify(movies[0], null, 2)));
    //console.log("LES MOVIES :"+JSON.parse(JSON.stringify(movies[0], null, 2)));
    console.log("Taille movies :"+movies.length)

    const awesome = movies.filter(movie => movie.metascore >= 77);

    console.log(`🍿 ${movies.length} movies found.`);

    console.log(JSON.stringify(movies, null, 2));

    insertion(movies);
    

    //console.log(`🥇 ${awesome.length} awesome movies found.`);
    //console.log(JSON.stringify(awesome, null, 2));

  
    a=movies
    process.exit(0);


  
  } 
  catch (e)
  {
    console.error("MArche pas");
    process.exit(1);
  }
}






sandbox(DENZEL_IMDB_ID);

insertion(a);



