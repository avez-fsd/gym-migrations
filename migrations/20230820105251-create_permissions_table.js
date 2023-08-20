module.exports = {
  async up(queryInterface, Sequelize) {
      return queryInterface.createTable('permissions', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },
          name: {
              allowNull: false,
              type: Sequelize.STRING,
              unique:true
          },
          description: {
              allowNull: true,
              type: Sequelize.STRING,
          },
          is_dynamic: {
              allowNull: true,
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
      return queryInterface.dropTable('permissions');
  },
};
