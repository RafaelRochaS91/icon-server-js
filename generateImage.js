const jdenticon = require('jdenticon');
const fs = require('fs');

const getImage = (size, name) => {
  return jdenticon.toSVG(name, size);
};

const saveToFolder = async (path, file) => {
  return await fs.writeFile(path, file);
};

const generateImage = (name, size, path) => {
  const file = getImage(name, size);
  saveToFolder(path, file);
};

module.exports = generateImage;
