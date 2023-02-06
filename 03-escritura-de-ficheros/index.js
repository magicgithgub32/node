const prompts = require("prompts");
const fs = require("fs/promises");
const path = require("path");

const WRITE_PATHNAME = path.join(__dirname, "./files");

const main = async () => {
  const responses = await prompts([
    {
      type: "text",
      name: "name",
      message: `What's your name?`,
    },
    {
      type: "text",
      name: "surname",
      message: `What's your surname?`,
    },
    {
      type: "number",
      name: "age",
      message: `What's your age?`,
    },
  ]);

  console.log(responses);

  const filePath = `${WRITE_PATHNAME}/${responses.name}-${Date.now()}.json `;
  await fs.writeFile(filePath, JSON.stringify(responses));
  console.log("File written!");
};
