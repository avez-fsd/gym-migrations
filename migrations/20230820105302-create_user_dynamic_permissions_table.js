module.exports = {
  async up(queryInterface, Sequelize) {
      return queryInterface.createTable('user_dynamic_permissions', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },
          user_id: {
              allowNull: false,
              type: Sequelize.INTEGER(11).UNSIGNED
          },
          permission_id: {
              allowNull: false,
              type: Sequelize.INTEGER(11).UNSIGNED
          },
          is_active: {
              allowNull: false,
              type: Sequelize.BOOLEAN,
          },
          created_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('NOW'),
          },
          updated_at: {
              type: Sequelize.DATE,
              defaultValue: Sequelize.fn('NOW'),
          }
      },{
        timestamps:true
      })
  },

  async down(queryInterface, Sequelize) {
      return queryInterface.dropTable('user_dynamic_permissions');
  },
};
