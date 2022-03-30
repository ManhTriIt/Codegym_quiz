const licensePlateArr = ['31B289877', '17B848836', '36A123999', '30Y988888', '29B589898', '40B234344']
const prefix = ['29', '30', '31', '32', '33', '40']

const check = (licensePlate) => {
    const checkLicensePlate = prefix.some(currentValue => licensePlate.startsWith(currentValue))
    return checkLicensePlate
}

const result = licensePlateArr.filter(check)
console.log(result)