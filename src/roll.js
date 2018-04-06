module.exports = function(content) {
    return roll(content);
}

function roll(content) {
    let vars = parseInput(content);
    let rolls = [];
    for (i = 0; i < vars.pool; i++) {
        rolls.push(getRandomInt(1, vars.size));
    }
    return rolls;
}

function parseInput(input) {

    let $arr = input.replace('/r ','').split("d");
    return {"pool": $arr[0], "size": $arr[1]};
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

