const validateReviewData = (data) => {
  console.log("data for validation", data);
  if (data.name.length < 3 || data.name.length > 32) {
    throw new Error("name should contain minimum 3 and maximum 32 characters");
  } else if (data.message.length < 16 || data.message.length > 512) {
    throw new Error(
      "review should contain minimum 16 and maximum 512 characters"
    );
  } else if (data.image !== "" && !isImage(data.image.name)) {
    throw new Error("please choose image file with extension jpg/jpeg/png/bmp");
  } else {
    return true;
  }
};

function getExtension(filename) {
  var parts = filename.split(".");
  return parts[parts.length - 1];
}

function isImage(filename) {
  var ext = getExtension(filename);
  switch (ext.toLowerCase()) {
    case "jpg":
    case "bmp":
    case "png":
    case "jpeg":
      return true;
  }
  return false;
}

export default validateReviewData;
