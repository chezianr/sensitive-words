'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by cramalingam on 11/22/17.
 */
var sensitiveWords = exports.sensitiveWords = function sensitiveWords(content, words) {
    return content.replace(new RegExp(words.join('|'), 'ig'), '***');
};