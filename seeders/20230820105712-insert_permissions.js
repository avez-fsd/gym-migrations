'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('permissions', [
      {
        name: 'VIEW_DASHBOARD',
        description: 'view dashboard',
        is_dynamic: false
      },
      {
        name: 'CREATE_EMPLOYEE',
        description: 'create employees',
        is_dynamic: true
      },
      {
        name: 'VIEW_EMPLOYEE_LIST',
        description: 'view employees',
        is_dynamic: true
      },
      {
        name: 'DELETE_EMPLOYEE',
        description: 'delete employee',
        is_dynamic: true
      }
    ],{})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('permissions', null, {});
  }
};
