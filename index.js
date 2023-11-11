const mysql = require('mysql2');
const inquirer = require('inquirer');
const fs = require('fs').promises;

// Load environment variables
require('dotenv').config();

// Create a MySQL connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the MySQL database.');
  startApp();
});

// Function to start the application
const startApp = async () => {
  try {
    while (true) {
      const answer = await inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
          'Exit',
        ],
      });

      switch (answer.action) {
        case 'View all departments':
          await viewDepartments();
          break;

        case 'View all roles':
          await viewRoles();
          break;

        case 'View all employees':
          await viewEmployees();
          break;

        case 'Add a department':
          await addDepartment();
          break;

        case 'Add a role':
          await addRole();
          break;

        case 'Add an employee':
          await addEmployee();
          break;

        case 'Update an employee role':
          await updateEmployeeRole();
          break;

        case 'Exit':
          connection.end();
          console.log('Connection closed. Goodbye!');
          process.exit();
      }
    }
  } catch (error) {
    console.error(error);
  }
};

// Implement the functions for each action
const viewDepartments = async () => {
  // Implement the logic to view departments
};

const viewRoles = async () => {
  // Implement the logic to view roles
};

const viewEmployees = async () => {
  // Implement the logic to view employees
};

const addDepartment = async () => {
  // Implement the logic to add a department
};

const addRole = async () => {
  // Implement the logic to add a role
};

const addEmployee = async () => {
  // Implement the logic to add an employee
};

const updateEmployeeRole = async () => {
  // Implement the logic to update an employee's role
};

// Run your application using:
startApp();





