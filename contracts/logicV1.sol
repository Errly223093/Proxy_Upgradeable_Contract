// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract logic_contract_V1 {
    uint public val;
    address public owner;

    function initialize(uint _vals) external {
        val = _vals;
        owner = msg.sender;
    }
}