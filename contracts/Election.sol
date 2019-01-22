pragma solidity >=0.4.24 <0.6.0;

contract Election {
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }
    Candidate[] public candidates;
    
    mapping(address => bool) public voters;
    
    constructor (address[] _voters, string[] _candidates, uint256 _deadline, uint256 _startTime) public {
        // Add voters
        uint _votersLength = _voters.length;
        for (uint i = 0; i < _votersLength; i++) {
            voters[_voters[i]] = true;
        }
        
        // Add candidates
        uint _candidatesLength = _candidates.length;
        for (uint i = 0; i < _candidatesLength; i++) {
            candidates.push(Candidate(i, _candidates[i], 0));
        }        
        
        // Define startTime and deadline
        uint256 startTime = _starttime;
        uint256 deadline = _deadline;
    }
}    
