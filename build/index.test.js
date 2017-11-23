'use strict';

var _ = require('.');

console.log({ sensitiveWords: _.sensitiveWords }); /**
                                                    * Created by cramalingam on 11/22/17.
                                                    */


test('replaces the blacklisted word with astricks', function () {
    expect((0, _.sensitiveWords)('The name os NX will be Nintendo Switch', ['switch'])).toBe('The name os NX will be Nintendo ***');
});

test('replaces multiple instances of the blacklisted word with astricks', function () {
    expect((0, _.sensitiveWords)('The name os NX will be Nintendo Switch. The Switch is awesome', ['switch'])).toBe('The name os NX will be Nintendo ***. The *** is awesome');
});