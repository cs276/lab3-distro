const tableBody = document.querySelector('tBody')

fetch('/results')
.then((response) => response.json())
.then((results) => {
    results.forEach((row) => {
        const tableRow = document.createElement('tr')
        tableRow.setAttribute('scope', 'row')
        Object.keys(row).forEach((key) => {
            const td = document.createElement('td')
            td.append(row[key])
            tableRow.append(td)
        })

        tableBody.append(tableRow)
    })
})
