var disemvowel = require("../disemvowel.js");
var expect = require("chai").expect;

describe("Disemvowel", function() {
  it("should remove all vowels from input string", function() {
    expect(disemvowel("abcdefghijklmnopqrstuvwxyz")).to.equal("bcdfghjklmnpqrstvwxyz");
  });

  it("should remove all vowels from input string", function() {
    expect(disemvowel("ABCDEFGHIJKLMNOPQRSTUVWXYZ")).to.equal("BCDFGHJKLMNPQRSTVWXYZ");
  });

  it("should cast numbers as strings", function() {
    expect(disemvowel(1989)).to.equal("1989");
  });

  it("should cast floats as strings", function() {
    expect(disemvowel(19.89)).to.equal("19.89");
  });

  it("should not remove number or symbols", function() {
    expect(disemvowel("1234567890`~!@#$%^&*()_-+={}[]|\"\\';:,<.>/?")).to.equal("1234567890`~!@#$%^&*()_-+={}[]|\"\\';:,<.>/?");
  });

  it("should throw when not passed string or number(passed Object)", function() {
    expect(function() {
      disemvowel({name: "roger"});
    }).to.throw(Error);
  });

  it("should throw when not passed string or number(passed array)", function() {
    expect(function() {
      disemvowel(["one", "two"]);
    }).to.throw(Error);
  });

  it("should throw when not passed string or number(passed boolean)", function() {
    expect(function() {
      disemvowel(false);
    }).to.throw(Error);
  });

  it("should throw when not passed string or number(passed function)", function() {
    expect(function() {
      disemvowel(function(){
        return 99;
      });
    }).to.throw(Error);
  });
});