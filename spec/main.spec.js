'use strict';

let beerSong = require("../lib/beersong.js");
let expect = require('chai').expect;

describe("the beersong",function(){
    it("return the number given bumner more than 1",function(){
        let number = 99;
        let result = beerSong(number);
        expect(result).to.be.equal("99 bottles of beer on the wall, 99 bottles of beer.\n"
            +"Take one down and pass it around, 98 bottles of beer on the wall.\n");
    });
    it("return the number given bumner is 1",function(){
        let number = 1;
        let result = beerSong(number);
        expect(result).to.be.equal("1 bottles of beer on the wall, 1 bottles of beer.\n"
           + "Take one down and pass it around, no more bottles of beer on the wall.\n"
           + "No more bottles of beer on the wall, no more bottles of beer.\n"
           + "Go to the store and buy some more, 99 bottles of beer on the wall.\n");
    });
});