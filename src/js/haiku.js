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
  constructor(sentenceOne) {
    this.sentenceOne = sentenceOne;
  }

  syllableChecker(sentenceOne) { // An old silent pond
    // const vowels = ["a", "e", "i", "o", "u", "y"];
    let syllableCounter = 0; 
    if (syllableCounter === 5) {
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
