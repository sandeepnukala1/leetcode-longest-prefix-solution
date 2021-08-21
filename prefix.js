/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    let prefix = ""
    
    if(strs.length === 0 || strs === null) {
        return ""
    }
    
    for (let i = 0; i <= strs[0].length; i++) {
        // Check if this character is present in the same position of every string
        if (!strs.every((string) => string[i] === strs[0][i])) {
            // If not, return the string up to and including the previous character
            return strs[0].slice(0, i);
        }
    }
    
    return strs[0]
};

longestCommonPrefix(["flower","flow","flight"])