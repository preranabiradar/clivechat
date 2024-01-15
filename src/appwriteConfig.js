import { Client, Databases,Account } from "appwrite";

export const PROJECT_ID = "659bdd974e2a710b2b86";
export const DATABASE_ID = "659bdf63e1c4cc236e3d";
export const COLLECTION_ID_MESSAGES = "659bdf7b230be0fd8109";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("659bdd974e2a710b2b86");

export const databases = new Databases(client);
export const account = new Account(client);

export default client;
