// Write your solution in this file!
const employee = {
    name: "Max Verstappen",
    streetAdress: "9000 Monaco Grand Prix Drive",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = {...employee};
    updatedEmployee[key] = value;
    return updatedEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};

function deleteFromEmployeeByKey(employee, key) {
    const employeeWithDeletedKey = {...employee};
    employeeWithDeletedKey[key] = undefined
    return employeeWithDeletedKey;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    employee[key] = undefined;
    return employee;
};
