// Given an array of all your wishlist items, returns an array of titles

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

function arrayTitle(wishlist) {
    return wishlist.map(function (a) {
        return a.title;
    })
        //  .reduce(function (x, y) {
        //
        // }
        // , []
        // )
}
console.log(arrayTitle(wishlist));
