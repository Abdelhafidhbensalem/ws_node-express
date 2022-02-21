const avrAge = (arr) => {
    if(!arr.length){return 0}
    return (arr.map(el => el.age).reduce((acc, cur) => acc + cur) / arr.length)
}

const searchName = (arr, searchedName) => {
    const existPerson = arr.find(el => el.name == searchedName)
    return existPerson ? existPerson : "not exist"
}

module.exports = { avrAge, searchName }

