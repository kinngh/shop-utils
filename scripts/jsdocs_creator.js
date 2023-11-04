import fs from "fs/promises";
import path from "path";
import "dotenv/config";

const apiVersion = process.env.API_VERSION;

const dirPath = path.resolve(process.cwd(), "_developer");
const outputPath = path.resolve(
  process.cwd(),
  `types/${apiVersion}/webhooks.js`
);

let typedefs = {};

const generateJSDocForObject = (object, parent = "") => {
  let docComment = `/**
* @typedef {Object} ${parent}
`;
  for (const key in object) {
    let value = object[key];
    let type = Array.isArray(value) ? "Array" : typeof value;

    if (value === null) {
      type = "null|string";
      docComment += ` * @property {${type}} ${key}\n`;
    } else if (type === "object") {
      const nestedTypeName = `${parent}_${key}`;
      docComment += ` * @property {${nestedTypeName}} ${key}\n`;
      typedefs[nestedTypeName] = generateJSDocForObject(value, nestedTypeName);
    } else if (type === "Array" && value.length > 0) {
      const arrayType =
        typeof value[0] === "object" ? "Object" : typeof value[0];

      if (arrayType === "Object") {
        const nestedTypeName = `${parent}_${key}`;
        docComment += ` * @property {Array<${nestedTypeName}>} ${key}\n`;
        typedefs[nestedTypeName] = generateJSDocForObject(
          value[0],
          nestedTypeName
        );
      } else {
        docComment += ` * @property {Array<${arrayType}>} ${key}\n`;
      }
    } else {
      docComment += ` * @property {${type}} ${key}\n`;
    }
  }

  docComment += " */\n";
  return docComment;
};

const convertToJSDoc = async () => {
  try {
    await fs.mkdir(path.dirname(outputPath), { recursive: true });

    const files = await fs.readdir(dirPath);
    const jsonFiles = files.filter((file) => file.endsWith(".json"));

    let jsDocs = "";

    for (const file of jsonFiles) {
      const filePath = path.join(dirPath, file);
      let data = await fs.readFile(filePath, "utf-8");

      // Find the first occurrence of an opening curly brace
      const firstBraceIndex = data.indexOf("{");

      // If there is an opening brace, ignore everything before it
      if (firstBraceIndex !== -1) {
        data = data.substring(firstBraceIndex);
      }

      // Parse the remaining string as JSON
      const jsonData = JSON.parse(data);

      const title = file.replace(".json", ""); // Using file name as title
      typedefs[title] = generateJSDocForObject(jsonData, title);
    }

    for (const key in typedefs) {
      jsDocs += typedefs[key];
    }

    await fs.writeFile(outputPath, `${jsDocs}\n\nexport {};`, "utf-8");
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

convertToJSDoc();
