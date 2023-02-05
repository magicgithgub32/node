const fs = require("fs/promises");
const path = require("path");

const FILENAME = "file.txt";
const PATHNAME = path.join(__dirname, `./${FILENAME}`);

console.log({
  FILENAME,
  PATHNAME,
});

const main = async () => {
  const fileContent = await fs.readFile(PATHNAME);
  const fileString = fileContent.toString();
  const stringModified = fileString.replace("Rock{theCode}", "people");
  console.log(stringModified);
};

main();
