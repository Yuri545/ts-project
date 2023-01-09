"use strict";
//HW #30
const aCodeAscii = 'a'.charCodeAt(0);
const zCodeAscii = 'z'.charCodeAt(0);
const nEnglishLetters = zCodeAscii - aCodeAscii + 1;
function shiftCipher(str, shift = 1) {
    //TODO
    //for each lower case letter (a-z) you should 
    //perform code ASCII on a given shift (add)
    //shift should be in cycle of lower case letters
    // code ASCII 'z' + 2 = code ASCII 'b'
    //examples:
    //shiftCipher("abz.", 3) => "dec."
    const arStr = Array.from(str);
    const arRes = arStr.map(sym => {
        let res = sym;
        if (sym <= 'z' && sym >= 'a') {
            const actualShift = (sym.charCodeAt(0) - aCodeAscii + shift) % nEnglishLetters;
            res = String.fromCharCode(aCodeAscii + actualShift);
        }
    });
    return arRes.join('');
}
function shiftDecipher(str, shift = 1) {
    //TODO
    //for each lower case letter (a-z) you should 
    //perform code ASCII on a given shift (subtract)
    //shift should be in cycle of lower case letters
    // code ASCII 'z' - 2 = code ASCII 'x'
    //examples:
    //shiftCipher("dec.", 3) => "abz."
    const arStr = Array.from(str);
    const arRes = arStr.map(sym => {
        let res = sym;
        if (sym <= 'z' && sym >= 'a') {
            const actualShift = (zCodeAscii - sym.charCodeAt(0) + shift) % nEnglishLetters;
            res = String.fromCharCode(zCodeAscii - actualShift);
        }
        return res;
    });
    return arRes.join('');
}
console.log(shiftDecipher("mnl", 1000));
//# sourceMappingURL=app.js.map