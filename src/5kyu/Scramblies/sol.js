function scramble(str1, str2) {
    var hashMap = {};
    for (let char of str1) {
        hashMap[char]=(hashMap[char]||0)+1;
    }
    for (let char of str2) {
        if (!hashMap[char]) {
            return false;
        } else {
            hashMap[char]--;
        }
    }
    return true;
}