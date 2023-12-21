const os = require("os"); 
const sysUser = os.userInfo().username;

function greeting() {
    const today = new Date();
    const currentTime = today.getHours();
    let greet;
    if (currentTime > 5 && currentTime <= 11) {
        greet = "Good morning"; 
    } else if (currentTime > 11 && currentTime <= 17) {
        greet = "Good day"; 
    } else if (currentTime > 17 && currentTime <= 23) {
        greet = "Good evening"; 
    } else {
        greet = "Good night";
    }
    return '<p>${today}</p><br><p>${greet}, ${sysUser}</p>';
}

module.exports = greeting();