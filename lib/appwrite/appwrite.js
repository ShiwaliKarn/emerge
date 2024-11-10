import { Client, Account, Databases, Storage, Query } from "appwrite";

export const client = new Client();
client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRTITE_ENDPOINT)
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID);

export const account = new Account(client);
