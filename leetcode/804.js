/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const set = new Set();
    words.forEach((word) => {
        
        const morse = reg(word);
        set.add(word) 
    })
   
    return set.size
};
function reg(str) { //xml 转义
    let result = str.replace(/\w/g, function (matchStr) {
      const tokenMap = {
        'a':".-",
        'b':"-...",
        'c':"-.-.",
        'd':"-..",
        'e':".",
        'f':"..-.",
        'g':"--.",
        'h':"....",
        'i':"..",
        'j':".---",
        'k':"-.-",
        'l':".-..",
        'm':"--",
        'n':"-.",
        'o':"---",
        'p':".--.",
        'q':"--.-",
        'r':".-.",
        's':"...",
        't':"-",
        'u':"..-",
        'v':"...-",
        'w':".--",
        'x':"-..-",
        'y':"-.--",
        'z':"--.."
      };
      return tokenMap[matchStr];
    });
    return result;
  }
uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])