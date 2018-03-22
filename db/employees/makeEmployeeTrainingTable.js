'use strict';

const { generateSqlTable } = require('../sqlRunTemplate');
const employeeTrainingProgram = require('../../data/json/employeeTrainingPrograms');

module.exports = () =>
  generateSqlTable(
    {
      tableName: 'Employee_Training_Programs',
      columns:
	`employee_training_program_id INTEGER PRIMARY KEY,
	training_program_id INT,
	employee_id INT,
	FOREIGN KEY (training_program_id) REFERENCES Training_Programs(training_program_id)
	FOREIGN KEY (employee_id) REFERENCES Employees(employee_id)`,
      dataToIterateOver: employeeTrainingProgram,
      valuesToInsert: [
	null,
	'training_program_id',
	'employee_id']
    }
  );

