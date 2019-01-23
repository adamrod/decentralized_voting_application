const Election = artifacts.require("Election");

module.exports = function(deployer) {
    var voters = ['0x3F340CD22C04478A5D079d564a96Df28a5C8A78E', '0x97bb0ec7001632aD8Bb6D9551492559f5F5f09E1'];
    var candidates = ['Jan Kowalski', 'Anna Wiśniewska'];
    var deadline = 1548673200;
    var startTime = 1547982000;

    deployer.deploy(Election, voters, candidates, deadline, startTime);
};