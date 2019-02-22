function createTiles(n) {
    var arr = [];
    for (var i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr;
}
document.write(createTiles(8));