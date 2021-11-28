fs = require('fs')

const oldPath = './cypress/reports/html/cypress/reports/report.html'
const newPath = './cypress/reports/html/report.html'

fs.rename(oldPath, newPath, function () {
    console.log('Successfully renamed - AKA moved!')
})
