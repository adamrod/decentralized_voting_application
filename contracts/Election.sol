pragma solidity ^0.4.24;
pragma experimental ABIEncoderV2;

contract Election {
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }
    Candidate[] public candidates;
    uint256 public candidatesCount;
    
    mapping(address => bool) public voters;

    uint256 public startTime;
    uint256 public deadline;
    
    constructor (address[] _voters, string[] _candidates, uint256 _deadline, uint256 _startTime) public {
        // Add voters
        uint _votersLength = _voters.length;
        for (uint i = 0; i < _votersLength; i++) {
            voters[_voters[i]] = true;
        }
        
        // Add candidates
        candidatesCount = _candidates.length;
        for (i = 0; i < candidatesCount; i++) {
            candidates.push(Candidate(i, _candidates[i], 0));
        }        
        
        // Define startTime and deadline, in seconds since the epoch
        startTime = _startTime;
        deadline = _deadline;
    }

    function vote (uint _candidateId) public {
        require(
            voters[msg.sender],
            "Sender has no right to vote or has already voted"
        );

        require(
            _candidateId >= 0 && _candidateId < candidates.length,
            "Invalid candidate id"
        );

        require(
            startTime < now,
            "Election has not started yet"
        );

        require(
            deadline > now,
            "Election has finished"
        );

        voters[msg.sender] = false;
        candidates[_candidateId].voteCount ++;
    }
}