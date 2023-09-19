const User = require('../Models/user');
const Zone = require('../Models/zone');
const UploadedFile = require('../Models/file');

const zoneController = async (req, res) => {
  try {
    const { province, city, applicationType, developmentModel, zoneName, zoneCategory, landSize, zoneAddress } = req.body;
    // Get the user from the request
    const user = req.user;
    // Get the uploaded files
    const files = req.files;
    // Check if files are present
    if (!files) {
      return res.status(400).send('No files were uploaded.');
    }
    // Print the names of the uploaded files
    files.forEach((file, index) => {
      console.log(`File ${index + 1}: ${file.originalname}`);
    });
    // Create a new zone with the associated user ID
    
    console.log("user:",user)

    const zone = await Zone.create({
      province,
      city,
      applicationType,
      developmentModel,
      zoneName,
      zoneCategory,
      landSize,
      zoneAddress,
      userId: user.dataValues.userId, // Assuming the foreign key in Zone model is UserId
    });
   
    const zoneId = zone.id;
    files.forEach(async (file, index) => {
      const fileName = file.originalname;
      await UploadedFile.create({
        fileName,
        zoneId
      });
    });
    res.send('Zone details saved successfully');
  } catch (error) {
    console.error('Error saving zone details:', error);
    res.status(500).send('Error saving zone details');
  }
};

module.exports = zoneController;