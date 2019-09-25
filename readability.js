const fastCSV = require('fast-csv')
const fs = require('fs')
const md5File = require('md5-file')
const Tokenizer = require('tokenize-text')
const tokenize =  new Tokenizer()
const tokenizeEnglish = require('tokenize-english')(tokenize)

const resultsFile = 'results.csv'


/**
 * countChars()
 * Parameters: text, the text to be analyzed
 *             regexp (optional), a regular expression of characters to match
 * Return value: count of characters
 */
function countChars(text, regexp) {
    // TODO
    return 0;
}

/**
 * countWords()
 * Parameters: text, the text to be analyzed
 * Return value: number of words in the text
 */
function countWords(text) {
    // TODO
    return 0;
}


/**
 * countSentences()
 * Parameters: text, the text to be analyzed
 * Return value: number of sentences in the text
 */
function countSentences(text) {
    // TODO
    return 0;
}

/**
 * printResults()
 * Parameters: row, a JavaScript object containing information about the analysis
 *  just undertaken (e.g., file name, word count, sentence count)
 * Return value: None
 * Side effect: Print out the information about the analyzed file
 */
function printResults(row) {
    console.log(`TODO`);
}


/**
 * parseCSV()
 * Parameter: callback, the function to be executed upon completion of parseCSV
 * Return value: None
 * Purpose: Parse (aka read) CSV file then call callback, passing in appropriate arguments
 */
function parseCSV(callback) {
    // TODO
}


/**
 * saveResults()
 * Parameters: rows, an array of 1 or more objects containing analyzed data
 *             callback, an optional callback function to call on completion; if none provided
 *               a default empty function will be executed
 * Return value: None
 * Purpose: Save one or more rows to CSV file then optionally call callback
 */
function saveResults(rows, callback=(rows)=>{}) {
    // TODO
}


/**
 * calculateResults()
 * Parameters: filename, a file to be opened
 *             hash, a potential MD5 hashvalue of filename's contents
 *             callback, the function to be executed on completion of calculateResults()
 * Purpose: Given a filename, read the contents of the file, analyze using CL and ARI,
 *          then save the results and call callback, passing in results row as an argument
 */
function calculateResults(filename, hash, callback) {
    fs.readFile(filename, 'utf-8', (err, data) => {
        if (err) {
            throw err
        }

        // TODO - replace all instances of \n with spaces

        // TODO - analyze file contents (chars, words, sentences, scores)

        // TODO - assemble results of that analysis into an object

        // TODO - save those results in the CSV

        // TODO - call callback function
    })
}

/**
 * colemanLiau()
 * Parameters: chars, the number of characters in some text
 *             words, the number of words in some text
 *             sentences, the number of sentences in some text
 * Return value: Coleman-Liau readability score for the file, given those inputs, truncated
 */
function colemanLiau(chars, words, sentences) {
    return (
        (0.0588 * (chars * 100.0 / words))
      - (0.296 * (sentences * 100.0) / words)
      - 15.8
    ).toFixed(3)
}

/**
 * automatedReadabilityIndex()
 * Parameters: chars, the number of characters in some text
 *             words, the number of words in some text
 *             sentences, the number of sentences in some text
 * Return value: ARI score for the file, given those inputs, truncated
 */
function automatedReadabilityIndex(chars, words, sentences) {
    return (
        (4.71 * (chars / words))
      + (0.5 * (words / sentences))
      - 21.43
    ).toFixed(3)
}


/* These functions are exportable, and thus can be invoked by other files that import
 * or require this one
 */
module.exports = {
    colemanLiau,
    automatedReadabilityIndex,
    parseCSV
}


/*
 * The below code will execute ONLY if run as node ./readability.js
 * (as opposed to require('./readability'))
 */
if (require.main === module) {

    // Ensure proper number of command line arguments
    if (process.argv.length !== 3) {
        console.error('Usage: node ./readability.js FILENAME')
        process.exit(1)
    }

    // Rename command-line argument to something easier to handle
    const dataFile = process.argv[2]

    // TODO - obtain the file hash; if the hash already exists somewhere in the CSV,
    // print the results already in the CSV for that row rather than reanalyzing. Otherwise
    // calculate the reuslts, log them in the CSV, then print the results
}
