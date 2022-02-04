function palindrome(str) {
    var checker1 = '';
    let checker2 = '';
    var i = 0;
    var wordLength = str.length - 1;

    while (i < wordLength) {
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90 || str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122
            || str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
            checker1 += str[i];
            i++;
        } else {
            for (let k = i; k < str.length; k++) {
                if (str.charCodeAt(k) >= 65 && str.charCodeAt(k) <= 90 || str.charCodeAt(k) >= 97 && str.charCodeAt(k) <= 122
                    || str.charCodeAt(k) >= 48 && str.charCodeAt(k) <= 57) {
                    checker1 += str[k];
                    i++;
                    break;
                } else {
                    i++;
                }
            }
        }

        if (str.charCodeAt(wordLength) >= 65 && str.charCodeAt(wordLength) <= 90 || str.charCodeAt(wordLength) >= 97 && str.charCodeAt(wordLength) <= 122
            || str.charCodeAt(wordLength) >= 48 && str.charCodeAt(wordLength) <= 57) {
            checker2 += str[wordLength];
            wordLength--;
        }
        else {
            for (let x = wordLength; x > 0; x--) {
                if (str.charCodeAt(x) >= 65 && str.charCodeAt(x) <= 90 || str.charCodeAt(x) >= 97 && str.charCodeAt(x) <= 122
                    || str.charCodeAt(x) >= 48 && str.charCodeAt(x) <= 57) {
                    checker2 += str[x];
                    wordLength--;
                    break;
                } else {
                    wordLength--;
                }
            }
        }
    }
    if (checker1.toLowerCase() == checker2.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}

// let str1 = 'A man, a plan, a canal. Panama';
// let str = '0_0 (: /-\ :) 0-0';
let str = "A man, a plan, a canal. Panama";
console.log(palindrome(str));

// let str = 'zZ';
// console.log('z ', str.charCodeAt(0), 'Z ', str.charCodeAt(1));
// let str1 = 'aA';
// console.log('a ', str1.charCodeAt(0), 'A ', str1.charCodeAt(1));