//Test Case for Assignment2.
const chai = require("chai");
const expect = chai.expect;
const oddval = ["Harry", "Olive", "Benson", "Charles", "Francis", "Newton", "Jack", "Patric", "Williams", "George", "Lewis"];
const evenval = ["Dexter", "Stuart", "Alice", "Eugene", "Madona", "Veronica", "Tom", "Ximanta", "Zenith", "Issac"];

const index = require("../index");

describe("Assignment2 - Test code for correct output", () => {
  it("Test whether the output of odd data is array or not", (done) => {
     expect(Array.isArray(index.odd)).to.deep.equal(true);
    done();
   });

   it("Test whether the output of even data is array or not", (done) => {
     expect(Array.isArray(index.even)).to.deep.equal(true);
    done();
   });

  it("Matches the desired output of odd data as per given input test case", (done) => {
    expect(index.odd).to.deep.equal(oddval);
    done();
  });

  it("Matches the desired output of even data as per given input test case", (done) => {
    expect(index.even).to.deep.equal(evenval);
    done();
  });

});