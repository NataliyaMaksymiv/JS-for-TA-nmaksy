console.log("Home Work 12");
let regExp;

// Task 1
function isUpperCase(phrase) {
    regExp = /^[A-Z]/;
    if (regExp.test(phrase)) {
        return `String "${phrase}" starts with uppercase character`
    } else {
        return `String "${phrase}" does not start with uppercase character`
    }
}

console.log(isUpperCase('regexp'));
console.log(isUpperCase('RegExp'));

// Task 2
/* 
Acceptable email prefix formats:
- the first character is a letter in lowercase or uppercase
- one or more characters are allowed as an email prefix
- the second character is a letter, a digit, an underscore, a period, or a dash.
@ is used once in the middle
Acceptable email domain formats:
- two or more alphanumeric or underscore followed by a dot
- the last part of the domain is e.g. com, org, net, gov, cc
*/

function checkEmail(email) {
    regExp = /^[a-zA-Z]+\w*[.-]?\w+@\w{2,}\.(com|org|net|gov|cc)$/;
    return regExp.test(email)
}

console.log(checkEmail("Qmail2@gmail.com")); // true
console.log(checkEmail("Qm@gmail.com")); // true
console.log(checkEmail("Qm@2_lll.com")); // true
console.log(checkEmail("Qh2jh.7j@gmail.com")); // true
console.log(checkEmail("Q2@g8.gov")); // true
console.log(checkEmail("q_j2@2f.cc")); // true
console.log(checkEmail("q-j2@2f.cc")); // true
console.log(checkEmail("q.j2@2f.cc")); // true
console.log(checkEmail("@2@g.com")); // false
console.log(checkEmail("Qmail2gmail.com")); // false
console.log(checkEmail("Qmail2@gmailcom")); // false
console.log(checkEmail("Qmail2@gmail.c")); // false
console.log(checkEmail("_jq@2.cc")); // false
console.log(checkEmail("q@-.cc")); // false
console.log(checkEmail("q.-j@ddd.com")); // false

// Task 3
/*Find:
- one letter d or D at the begginig (required);
- none or any letters b or B after first d or D (optional);
- none or one d or D after b or B at the end (optional); */

function findLetter(phrase) {
    regExp = /^db*(bd)?$/ig;
    const result = new Set();
    let word;
    let i = 0;
    while (i < phrase.length) {
        for (let k=0; k <= phrase.length; k++) {
        word = phrase.slice(i, i + k).match(regExp);
            if (word !== null) 
                result.add(word.toString());            
        }
        i++;
    }
    return [...result];
}

console.log(findLetter("cdbBdbsbz")); // ['d', 'db', 'dbB', 'dbBd']
console.log(findLetter("dddiiiidbdbdBBdbDjjjjdBbddbbDbBbd")); // ['d', 'db', 'dbd', 'dB', 'dBB', 'dBBd', 'dbD', 'D', 'dBb', 'dBbd', 'dbb', 'dbbD', 'Db', 'DbB', 'DbBb', 'DbBbd']
console.log(findLetter("bbbDbbBbbbDDdbBid")); // ['D', 'Db', 'Dbb', 'DbbB', 'DbbBb', 'DbbBbb', 'DbbBbbb', 'DbbBbbbD', 'd', 'db', 'dbB']

// Task 4
function swapPlaces(phrase) {
    regExp = /(\s*)(\S+)(\s+)(\S+)(\s*)/;
    return phrase.replace(regExp, "$4, $2");
}

console.log(swapPlaces("Java Script"));
console.log(swapPlaces("   Java    Script   "));
console.log(swapPlaces("JS! 100%"));

// task 5
function isValidCard(cardNumber) {
    regExp = /\d{4}-\d{4}-\d{4}-\d{4}/;
    if (regExp.test(cardNumber)) {
        return `Card number ${cardNumber} is correct`;
    } else {
        return `Card number ${cardNumber} is not correct`;
    } 
}

console.log(isValidCard("9999-9999-9999-9999"));
console.log(isValidCard("9-9-9-9"));
console.log(isValidCard("9999-"));
console.log(isValidCard("9999"));
console.log(isValidCard("---"));

// Task 6
/* Requirements :
- Numbers (0-9).
- Only Latin letters in uppercase (A-Z) and lowercase (a-z) cases.
- Only “_” and “-” symbols are allowed in the email body. But they cannot be the 1st character of an email.
- The symbol “-” cannot be repeated. */

function isValidEmail(email) {
regExp = /^[a-zA-Z0-9]+\w*[-]?\w+@\w{2,}\.com$/;
    if (regExp.test(email)) {
        return `${email} Email is correct`;
    } else {
        return `${email} Email is not correct`;
    } 
}

console.log(isValidEmail("my_mail@gmail.com")); // Email is correct
console.log(isValidEmail("#my_mail@gmail.com")); // Email is not correct
console.log(isValidEmail("my_ma--il@gmail.com")); // Email is not correct
console.log(isValidEmail("my_ma-il@gmail.com")); // Email is correct
console.log(isValidEmail("8n-_@gmail.com")); // Email is correct
console.log(isValidEmail("8n__@gmail.com")); // Email is correct
console.log(isValidEmail("-8n-_@gmail.com")); // Email is not correct
console.log(isValidEmail("_8n-_@gmail.com")); // Email is not correct
console.log(isValidEmail("8n--@gmail.com")); // Email is not correct
console.log(isValidEmail("8n-*@gmail.com")); // Email is not correct

// Task 7
function checkLogin(login) {
    regExp = /^[a-zA-Z]{1}[a-zA-Z0-9.]{1,9}$/;
    regNum = /\d+(\.\d+)?/g;    
        return `${regExp.test(login)} ${login.match(regNum)}`
}

console.log(checkLogin("ee1.1ret3t")); // true 1.1,3
console.log(checkLogin("A234567890")); // true 234567890
console.log(checkLogin("a2")); // true 2
console.log(checkLogin("ee1*1ret3")); // false 1,1,3
console.log(checkLogin("ee1+1ret3")); // false 1,1.3
console.log(checkLogin("123456789a")); // false 123456789
console.log(checkLogin("a_")); // false null
console.log(checkLogin("ee1.1ret3tee1.1ret3tee1.1ret3tee1.1ret3t")); // false 1.1,3,1.1,3,1.1,3,1.1,3