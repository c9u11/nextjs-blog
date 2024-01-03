import { Client } from '@notionhq/client';

const notionClient = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_TOKEN,
});

const getDatabase = async (database_id) => {
  const response = await notionClient.databases.query({ database_id })
  return response;
};

export {
  getDatabase,
}