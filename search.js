const xlsx = require("xlsx")

const workbook = xlsx.readFile("name_js.xlsx")
const sheetName = workbook.SheetNames[0]
const sheet = workbook.Sheets[sheetName]
const data = xlsx.utils.sheet_to_json(sheet)

// ! 'searchValue' - искомый номер
const searchValue = "К920МО197"
// ! 'searchValue' - искомый номер
const foundItem = []

data.forEach((car, index) => {
  if (car.Name === searchValue) {
    foundItem.push(car.Name)
    foundItem.push(index)
    return
  }
})

if (foundItem.length) {
  console.log(`Номер ${foundItem[0]} найден на позиции ${foundItem[1]}.`)
} else {
  console.log("Номер не найден.")
}
