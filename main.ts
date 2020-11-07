import words from './words.ts'
const prefix = 'pre'

const findWords = (words: Array<string>, prefix: string): Array<string> => {
    return words.sort().filter((word) => word.startsWith(prefix))
}

const foundWords = findWords(words, prefix)

console.log(foundWords)