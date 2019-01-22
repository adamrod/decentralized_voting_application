const Election = artifacts.require("Election");

module.exports = function(deployer) {
    var voters = ['0x37c1aeEf65B00b0d2413E0530E71b159ad59D3A1', '0x77d0721Cd4e51175d8FfC2F95d17B230a2de83a9'];
    var candidates = ['Krzysztof Jarzyna', 'Twardydyskus Antywirus'];
    var deadline = 1648155328;
    var startTime = 1;

    deployer.deploy(Election, voters, candidates, deadline, startTime);
};