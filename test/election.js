const Election = artifacts.require("./Election.sol");

contract("Election", function(accounts) {
  var electionInstance;

  it("Should vote for candidate id 0", function() {
    return Election.deployed().then(function(instance) {
      electionInstance = instance;
      return electionInstance.vote(0, { from: accounts[0] });
    }).then(function(receipt) {
      return electionInstance.candidates(0);
    }).then(function(candidate) {
      assert.equal(candidate[2], 1, "Voted unsuccesfully");
    });
  });
});
