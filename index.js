var run = function() {
    return parseInt(Math.random()*6) + 1;
}

exports.extract = function(times, order) {
    if (times === undefined) return run();
    if (times !== undefined && (typeof times !== 'number' || times < 0)) return 'times must be a positive number';
    var array = [];
    for (var i=0; i< times; i++) {
        var x = run();
        array.push(x);
    }
    if (order && order === 'DESC') {
        return array.sort().reverse();
    } else if (order && order === 'ASC') {
        return array.sort();
    } else {
        return array;
    }
}