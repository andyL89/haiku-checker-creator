import Haiku from "../src/js/haiku.js";

describe ('Haiku', () => {

  test('Should show that a sentence was inputted.', () => {
    const haiku = new Haiku("An old silent pond");
    expect(haiku.sentenceOne).toEqual("Good Fail");
  })
});