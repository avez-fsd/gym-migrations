module.exports = {
  async up(queryInterface, Sequelize) {
      return queryInterface.createTable('users', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },
          email: {
              allowNull: false,
              type: Sequelize.STRING,
              unique: true
          },
          password: {
              allowNull: false,
              type: Sequelize.STRING,
          },
          business_id: {
              allowNull: false,
              type: Sequelize.INTEGER(11).UNSIGNED,
              defaultValue: 0
          },
          staff_id: {
              allowNull: false,
              type: Sequelize.INTEGER(11).UNSIGNED,
              defaultValue: 0
          },
          role_id: {
              allowNull: false,
              type: Sequelize.INTEGER(11).UNSIGNED,
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
      return queryInterface.dropTable('users');
  },
};
