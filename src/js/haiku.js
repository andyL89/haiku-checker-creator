/*

Syllables: 5-7-5
Vowels: [a, e, i, o, u, y]

Each group of adjacent vowels (a, e, i, o, u, y) counts as one syllable.
Example: Dandy

Rules:
+1: -ing, -ed, -y, -ly, -ey, -tle, -dle

Edge Cases:
- Fire
- Store
- Liar
- Lion
- Lying

An old silent pond
A frog jumps into the pond—
Splash! Silence again.

*/
export default class Haiku {
  constructor(sentence) {
    this.sentence = sentence;
  }

  syllableChecker(sentence, syllableNumberRequirement) { 
    const vowels = ["a", "e", "i", "o", "u", "y"];
    // Need to LOOP through sentence to look for vowels groupings/syllables
    // If we find a vowel, then we can increment syllableCounter
    // vowels.includes() (For Example, syllableCounter += 1)
    // sentence.charAt(i);
    let syllableCounter = 0; 
    for(let i = 0; i < sentence.length; i++) {
      let currentLetter = sentence.charAt(i);
      if (vowels.includes(currentLetter)) { // An old silent pond
        if(i !== sentence.length) {
          let nextLetter = sentence.charAt(i + 1);
          if(!vowels.includes(nextLetter)) {
            syllableCounter += 1;
          }
        }
      }
    }
    
    if (syllableCounter === syllableNumberRequirement) {
      return true;
    } else {
      return false;
    }
  }
}


