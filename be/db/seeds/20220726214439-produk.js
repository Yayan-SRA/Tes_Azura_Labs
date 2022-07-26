'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Produks', [{
      nama: 'Indomie',
      harga: '3000',
      rating: '5',
      likes: '150',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      nama: 'Laptop',
      harga: '4000000',
      rating: '4.5',
      likes: '123',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      nama: 'Aqua',
      harga: '3000',
      rating: '4',
      likes: '250',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nama: 'Smart TV',
      harga: '4000000',
      rating: '4.5',
      likes: '42',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nama: 'Headphone',
      harga: '4000000',
      rating: '3.5',
      likes: '90',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nama: 'Very Smart TV',
      harga: '4000000',
      rating: '3.5',
      likes: '87',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
