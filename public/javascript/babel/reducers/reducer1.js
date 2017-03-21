'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*var userData=[
    {
        id: 1,
        first: "Bucky",
        last: "Roberts",
        age: 71,
        description: "Bucky is a React developer and YouTuber",
        thumbnail: "http://i.imgur.com/7yUvePI.jpg"
    },
    {
        id: 2,
        first: "Joby",
        last: "Wasilenko",
        age: 27,
        description: "Joby loves the Packers, cheese, and turtles.",
        thumbnail: "http://i.imgur.com/52xRlm8.png"
    },
    {
        id: 3,
        first: "Madison",
        last: "Williams",
        age: 24,
        description: "Madi likes her dog but it is really annoying.",
        thumbnail: "http://i.imgur.com/4EMtxHB.png"
    }
];*/
var userData = [];
//var origin_data= userData;
var reducer1 = exports.reducer1 = function reducer1() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : userData;
    var action = arguments[1];


    switch (action.type) {
        case 'USER_DELETE':
            userData = userData.filter(function (item) {
                return item.id !== action.payload.id;
            });
            return userData;
        case 'USER_ADD':
            userData.push({
                id: 5,
                first: "Maon",
                last: "Wliams",
                age: 24,
                description: "Madi likes her dog but it is really annoying.",
                thumbnail: "http://i.imgur.com/4EMtxHB.png"
            });
            //var uData = action.payload;
            userData = userData.filter(function (item) {
                return item.id !== 10000;
            });
            //console.log(userData);
            return userData;
        case 'GET_INIT_DATA':
            //console.log(action.payload);
            console.log('GET_INIT_DATA');
            console.log(action.payload);
            userData = action.payload;
            return userData;
        //return Object.assign({},action.payload);
        default:
            console.log('EMPTY');
            return userData;
    }
    // console.log(userData);
    //console.log('EMPTY');
    //return [];
};