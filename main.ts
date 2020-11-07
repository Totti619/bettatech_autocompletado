import words from './words.ts'
const prefix = 'pre'

// initial solution
const findWordsLinearCost = (words: Array<string>, prefix: string): Array<string> => {
    return words.sort().filter((word) => word.startsWith(prefix))
}

// alt. solution
const findWordsNotLinearCost = (words: Array<string>, prefix: string, index: number = 1): Array<string> => {
    if (index <= prefix.length) {
        const prefixSubstring = prefix.substring(0, index)
        const result = words.sort().filter((word) => word.startsWith(prefix))
        index++
        return findWordsNotLinearCost(result, prefixSubstring, index)
    }
    return words.sort().filter((word) => word.startsWith(prefix))
}

const foundWords = findWordsNotLinearCost(words, prefix)

console.log('[findWordsLinearCost]', findWordsLinearCost(words, prefix))
console.log('[findWordsNotLinearCost]', findWordsNotLinearCost(words, prefix))