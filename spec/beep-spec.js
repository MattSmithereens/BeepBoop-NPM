import { Beep } from './../src/scripts.js';


describe('Beep', function() {

  it('should test whether a number is too big', function() {
    var beepTest = new Beep(31);
    expect(beepTest.tooBig()).toEqual(false);
    var beepTest = new Beep(29);
    expect(beepTest.tooBig()).toEqual(true);

  });

});
