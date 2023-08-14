const employee = {
    name: "Jacob",
    streetAddress: "Fernwood Ct."
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value,
  };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  employee[key] = value;
  return employee;
}
function deleteFromEmployeeByKey(employee, key, value){
    return {
        ...employee,
        [key]: value,
    }
}
function destructivelyDeleteFromEmployeeByKey(employee, key, value){
    employee[key] = value;
    return employee;
}
