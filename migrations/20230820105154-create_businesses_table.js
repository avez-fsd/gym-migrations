module.exports = {
  async up(queryInterface, Sequelize) {
      return queryInterface.createTable('businesses', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER(11).UNSIGNED,
          },
          name: {
              allowNull: false,
              type: Sequelize.STRING,
          },
          email: {
              allowNull: false,
              type: Sequelize.STRING,
              unique:true
          },
          phone_number: {
              allowNull: false,
              type: Sequelize.STRING,
          },
          state: {
              allowNull: false,
              type: Sequelize.STRING,
          },
          address: {
              allowNull: false,
              type: Sequelize.STRING,
          },
          pincode: {
              allowNull: false,
              type: Sequelize.STRING,
          },
          country: {
              allowNull: false,
              type: Sequelize.STRING,
          },
          subscription_end_date: {
              allowNull: true,
              type: Sequelize.DATE,
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
      return queryInterface.dropTable('businesses');
  },
};
