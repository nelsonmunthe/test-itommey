'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
     // Add seed commands here.
     
     // Example:
    await queryInterface.bulkInsert('products', [
        {
          name: 'Book',
          qty: 10,
          picture: "https://pemmzchannel.com/2022/06/05/cara-menemukan-lokasi-di-google-maps/",
          expiredAt: "2022-09-08",
          isActive: true,
          updatedAt: "2022-09-08",
          createdAt: "2022-09-08",
        },
        {
          name: 'Speaker',
          qty: 11,
          picture: "https://pemmzchannel.com/2022/06/05/cara-menemukan-lokasi-di-google-maps/",
          expiredAt: "2022-09-08",
          isActive: true,
          updatedAt: "2022-09-08",
          createdAt: "2022-09-08",
        },
        {
          name: 'Pencil',
          qty: 33,
          picture: "https://pemmzchannel.com/2022/06/05/cara-menemukan-lokasi-di-google-maps/",
          expiredAt: "2022-09-08",
          isActive: true,
          updatedAt: "2022-09-08",
          createdAt: "2022-09-08",
        },
        {
          name: 'Notebook',
          qty: 34,
          picture: "https://pemmzchannel.com/2022/06/05/cara-menemukan-lokasi-di-google-maps/",
          expiredAt: "2022-09-08",
          isActive: true,
          updatedAt: "2022-09-08",
          createdAt: "2022-09-08",
        },
        {
          name: 'LCD',
          qty: 50,
          picture: "https://pemmzchannel.com/2022/06/05/cara-menemukan-lokasi-di-google-maps/",
          expiredAt: "2022-09-08",
          isActive: true,
          updatedAt: "2022-09-08",
          createdAt: "2022-09-08",
        },
        {
          name: 'Charger',
          qty: 20,
          picture: "https://pemmzchannel.com/2022/06/05/cara-menemukan-lokasi-di-google-maps/",
          expiredAt: "2022-09-08",
          isActive: true,
          updatedAt: "2022-09-08",
          createdAt: "2022-09-08",
        },
        {
          name: 'Monitor',
          qty: 20,
          picture: "https://pemmzchannel.com/2022/06/05/cara-menemukan-lokasi-di-google-maps/",
          expiredAt: "2022-09-08",
          isActive: false,
          updatedAt: "2022-09-08",
          createdAt: "2022-09-08",
        },
        {
          name: 'Keypad',
          qty: 88,
          picture: "https://pemmzchannel.com/2022/06/05/cara-menemukan-lokasi-di-google-maps/",
          expiredAt: "2022-09-08",
          isActive: false,
          updatedAt: "2022-09-08",
          createdAt: "2022-09-08",
        },
        {
          name: 'wallet',
          qty: 99,
          picture: "https://pemmzchannel.com/2022/06/05/cara-menemukan-lokasi-di-google-maps/",
          expiredAt: "2022-09-08",
          isActive: true,
          updatedAt: "2022-09-08",
          createdAt: "2022-09-08",
        }
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
