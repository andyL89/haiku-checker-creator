import Haiku from "../src/js/haiku.js";

describe ('Haiku', () => {

  test('Should show that a sentence was inputted.', () => {
    const haiku = new Haiku("An old silent pond");
    expect(haiku.sentenceOne).toEqual("An old silent pond");
  });

  test('Should show if sentence has 5 syllables.', () => {
    const haiku = new Haiku("An old silent pond");
    expect(haiku.syllableChecker()).toEqual(true);
  });

});