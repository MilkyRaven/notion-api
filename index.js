const { Client } = require("@notionhq/client");
require("dotenv").config();
const fs = require("fs");
async function getNotionData() {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  const results = await notion.databases.query({
    database_id: process.env.DATABASE_ID,
  });

  fs.writeFileSync("data.json", JSON.stringify(results, null, 2));
}

getNotionData();
