import fs from "fs/promises";
import path from "path";
import "dotenv/config";

const apiVersion = process.env.API_VERSION;

const dirPath = path.resolve(process.cwd(), "_developer");
const outputPath = path.resolve(
  process.cwd(),
  `types/${apiVersion}/webhooks.ts`
);

const determineType = (value, parentName) => {
  if (Array.isArray(value)) {
    if (value.length === 0) {
      return "any[]";
    }
    const elementType = determineType(value[0], parentName);
    return `${elementType}[]`;
  } else if (value === null) {
    return "null | string";
  } else if (typeof value === "object" && value !== null) {
    return generateTypeScriptTypesForObject(value, false, parentName);
  } else {
    return typeof value;
  }
};

const generateTypeScriptTypesForObject = (
  object,
  exportType,
  parentName = ""
) => {
  let tsType = "";
  let innerContent = "";

  for (const key in object) {
    const value = object[key];
    const type = determineType(value, `${parentName}_${key}`);
    innerContent += `  ${key}: ${type};\n`;
  }

  if (exportType) {
    tsType = `export interface ${parentName} {\n${innerContent}}\n`;
  } else {
    tsType = `{${innerContent}}`;
  }

  return tsType;
};

const convertToJsonTypes = async () => {
  try {
    await fs.mkdir(path.dirname(outputPath), { recursive: true });

    const files = await fs.readdir(dirPath);
    const jsonFiles = files.filter((file) => file.endsWith(".json"));

    let tsTypes = "";

    for (const file of jsonFiles) {
      const filePath = path.join(dirPath, file);
      let data = await fs.readFile(filePath, "utf-8");

      const firstBraceIndex = data.indexOf("{");

      if (firstBraceIndex !== -1) {
        data = data.substring(firstBraceIndex);
      }

      const jsonData = JSON.parse(data);

      const title = file.replace(".json", "");
      const tsType = generateTypeScriptTypesForObject(jsonData, true, title);
      tsTypes += `// Types for ${title}\n${tsType}\n`;
    }

    await fs.writeFile(outputPath, tsTypes, "utf-8");
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

convertToJsonTypes();
