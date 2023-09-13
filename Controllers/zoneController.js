const User = require('../Models/user');
const Zone = require('../Models/zone');

const zoneController = (req, res) => {
    const { province, city, applicationType, developmentModel, zoneName, zoneCategory, landSize, zoneAddress } = req.body;
  
    // Get the user from the request
    const user = req.user;
    
  
    // Create a new zone with the associated user ID
    Zone.create({
      province,
      city,
      applicationType,
      developmentModel,
      zoneName,
      zoneCategory,
      landSize,
      zoneAddress,
      UserId: user.id, // Assuming the foreign key in Zone model is UserId
    })
      .then((zone) => {
        res.send('Zone details saved successfully');
      })
      .catch((error) => {
        console.error('Error saving zone details:', error);
        res.status(500).send('Error saving zone details');
      });
  };
  
  module.exports = zoneController;