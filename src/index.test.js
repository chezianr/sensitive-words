/**
 * Created by cramalingam on 11/22/17.
 */
import {sensitiveWords} from "."
console.log({sensitiveWords})

test( 'replaces the blacklisted word with astricks', () => {
    expect(sensitiveWords(
        'The name os NX will be Nintendo Switch',
        ['switch']
    )).toBe('The name os NX will be Nintendo ****')
})

test( 'replaces multiple instances of the blacklisted word with astricks', () => {
    expect(sensitiveWords(
        'The name os NX will be Nintendo Switch. The Switch is awesome',
        ['switch']
    )).toBe('The name os NX will be Nintendo ****. The **** is awesome')
})