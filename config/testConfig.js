
var FlightSuretyApp = artifacts.require("FlightSuretyApp");
var FlightSuretyData = artifacts.require("FlightSuretyData");
var BigNumber = require('bignumber.js');

var Config = async function(accounts) {
    
    // These test addresses are useful when you need to add
    // multiple users in test scripts
    let testAddresses = [
        "0x2fEDaBE69277F3d69bF0907F21dE2Da83bD4e954",
        "0x0B4F2531Ce247F6619832252Cc9defc7356D0523",
        "0x6BEF364aBb5851a75F3e162324544671d8Bbca61",
        "0x483f43a7D2cA02D66B6E1D1BA343035bC6A2b583",
        "0xacBd547F5717854E6208275b01917f9157DFA151",
        "0x35b86E4aA6668e31b7b6174907A1AA4161BB1e43",
        "0xF75816725bd27C17ACb9372A12232643e6644Ed6",
        "0xe13E5c9e1520Ae2f6509EaaB42Ae68467C5498AB",
        "0xEf3047517d31192C1246c8EDD6fe246B1015E282"
    ];


    let owner = accounts[0];
    let firstAirline = accounts[10];
 

    let flightSuretyData = await FlightSuretyData.new(firstAirline,"AIRIndia");
    let flightSuretyApp = await FlightSuretyApp.new(flightSuretyData.address);

    
    return {
        owner: owner,
        firstAirline: firstAirline,
        weiMultiple: (new BigNumber(10)).pow(18),
        testAddresses: testAddresses,
        flightSuretyData: flightSuretyData,
        flightSuretyApp: flightSuretyApp
    }
}

module.exports = {
    Config: Config
};