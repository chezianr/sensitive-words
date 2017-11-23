/**
 * Created by cramalingam on 11/22/17.
 */
export const sensitiveWords =  (content, words) => {
    return content.replace(
        new RegExp(words.join('|'), 'ig'),
        '****'
    )
}