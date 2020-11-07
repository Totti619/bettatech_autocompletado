import words from './words.ts'
const prefix = 'pre'

// initial solution, 2-3 ms according to console.time
const findWordsLinearCost = (words: Array<string>, prefix: string): Array<string> => {
    return words.sort().filter((word) => word.startsWith(prefix))
}

// alt. solution, faster, 1-2 ms according to console.time
const findWordsNotLinearCost = (words: Array<string>, prefix: string, index: number = 1): Array<string> => {
    if (index <= prefix.length) {
        const altPrefix = prefix.substring(0, index)
        const result = words.sort().filter((word) => word.startsWith(altPrefix))
        index++
        return findWordsNotLinearCost(result, prefix, index)
    }
    return words.sort().filter((word) => word.startsWith(prefix))
}

const foundWords = findWordsNotLinearCost(words, prefix)

console.time('[findWordsLinearCost]')
console.log('[findWordsLinearCost]', findWordsLinearCost(words, prefix))
console.timeEnd('[findWordsLinearCost]')
console.time('[findWordsNotLinearCost]')
console.log('[findWordsNotLinearCost]', findWordsNotLinearCost(words, prefix))
console.timeEnd('[findWordsNotLinearCost]')