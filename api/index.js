import { Client, Databases } from "node-appwrite";

export default async ({ req, res, log }) => {
  log("Function executed");

  // Initialize Appwrite client
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1") // Appwrite API endpoint
    .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID) // auto-injected
    .setKey(process.env.APPWRITE_API_KEY); // you add this in function variables

  const databases = new Databases(client);

  // Example: read documents from a database
  try {
    const result = await databases.listDocuments(
      "YOUR_DATABASE_ID",
      "YOUR_COLLECTION_ID"
    );

    return res.json(
      { message: "Appwrite function is running!", data: result },
      200,
      {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
      }
    );
  } catch (err) {
    log("Error: " + err.message);

    return res.json(
      { error: err.message },
      500,
      {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
      }
    );
  }
};
