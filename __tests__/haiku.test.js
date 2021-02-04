import Haiku from "../src/js/haiku.js";

describe ('Haiku', () => {

  test('Should show that a sentence was inputted.', () => {
    const haiku = new Haiku("An old silent pond");
    expect(haiku.sentence).toEqual("An old silent pond");
  });

  test('Should show if sentence has 5 syllables.', () => {
    const haiku = new Haiku("An old silent pond");
    expect(haiku.syllableChecker("an old silent pond", 5)).toEqual(true);
  });

  test('Should show if sentence has 7 syllables.', () => {
    const haiku = new Haiku("An old silent pond");
    expect(haiku.syllableChecker("an old silent pond", 7)).toEqual(false);
  });

});