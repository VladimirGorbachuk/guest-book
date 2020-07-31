export const validateFormData = (formData) => {
  if (formData.name.length < 3 || formData.name.length > 32) {
    throw new Error("name should contain minimum 3 and maximum 32 characters");
  } else if (formData.review.length < 16 || formData.review.length > 512) {
    throw new Error(
      "review should contain minimum 16 and maximum 512 characters"
    );
  } else if (!isImage(formData.image.filename)) {
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
