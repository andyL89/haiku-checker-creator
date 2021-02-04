/*

Syllables: 5-7-5
Vowels: [a, e, i, o, u, y]

Each group of adjacent vowels (a, e, i, o, u, y) counts as one syllable.
Example: Dandy

Rules:
-1: Consonants + e
+1: Length <= 4
+1: -ing, -ed, -y, -ly, -ey, -tle, -dle

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
        syllableCounter += 1;
      }
    }
    
    if (syllableCounter === syllableNumberRequirement) {
      return true;
    } else {
      return false;
    }
  }
}

// const sentence = new Haiku("An old silent pond");
// sentenceOne  = {
//   sentence: "An old silent pond"
// }
// sentence.sentence
