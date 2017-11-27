function beerSong(number){
  //let number=1;
  if(number>1){
      let result= "" + number+ " bottles of beer on the wall, "+"" + number+" bottles of beer.\n"
          +"Take one down and pass it around, "+""+ (number-1)+" bottles of beer on the wall.\n";
      return result;
  }
  else{
      let result= "" + number+ " bottles of beer on the wall, "+"" + number+" bottles of beer.\n"
          + "Take one down and pass it around, no more bottles of beer on the wall.\n"
          + "No more bottles of beer on the wall, no more bottles of beer.\n"
          + "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
      return result;
  }

}
module.exports= beerSong;