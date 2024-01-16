import { Client } from "@notionhq/client";

const notionClient = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_TOKEN,
});

const getDatabase = async (database_id: string) => {
  const response = await notionClient.databases.query({ database_id });
  return response;
};

const getPage = async (page_id: string) => {
  const response = await notionClient.pages.retrieve({ page_id });
  return response;
};

const getBlocks = async (block_id: string) => {
  const response = await notionClient.blocks.children.list({ block_id });
  return response;
};

export { getDatabase, getPage, getBlocks };
