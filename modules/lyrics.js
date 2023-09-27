const axios = require('axios');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter the name of the song: ', (songName) => {
  // Make API request with the songName
  axios.get('https://song.panditsiddharth.repl.co/lyrics?song=' + songName)
    .then(response => console.log(response.data))
    .catch(error => console.log(error));

  readline.close();
});