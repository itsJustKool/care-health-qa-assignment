function generateRandomString(length) {
  let result = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function generateRandomNumber(length) {
  return Math.floor(
    Math.pow(10, length - 1) + Math.random() * (Math.pow(10, length - 1) * 9)
  );
}

export { generateRandomString, generateRandomNumber };
