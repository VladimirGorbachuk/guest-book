const dateConvert = (dateFromServer) => {
  var newDateFormat = dateFromServer.replace(/T/g, " ").slice(0, -7);
  return newDateFormat;
};

export default dateConvert;
