// Write your solution in this file!
const employee = {
    name: "Lewis Hamilton",
    streetAdress: "1500 Grand Prix Drive",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

const newerEmployee = updateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Max Verstappen"
    );

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};
const newestEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Max Verstappen");

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    newEmployee[key] = undefined
    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    employee[key] = undefined;
    return employee;
};
