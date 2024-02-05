function solve(text, word) {
    'use strict';

    function repeat(char, times) {
        return new Array(times + 1).join(char);
    }

    let censored = text.replace(word, repeat('*', word.length));

    while (censored.includes(word)) {
        censored = censored.replace(word, repeat('*', word.length));
    }

    console.log(censored);
}

solve('A small sentence with some words', 'small');