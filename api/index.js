import { Client, Databases } from "node-appwrite";

export default async ({ req, res, log }) => {
  log("Function executed");

  // Initialize Appwrite client
  const client = new Client()
    .setEndpoint("https://sfo.cloud.appwrite.io/v1") // Appwrite API endpoint
    .setProject("6a66c94d0001f60a4293") // auto-injected
    .setKey("standard_cc67a33c3e0d731718385d13326a1b68485cf7e5b6b2d9c6e4200b2d5cd497fad2c39e0e1cba4bdf939a298c93b48ce20cb31f24b537650ec04ada0b908eabd2d438cc93cdf21265f2d191e2891c8a9214b378904f281390dae2cc8483eb749de6f996fd86511984ff16b93d83c86ca665ba3f5602a76ad847a6969120f9681d"); // you add this in function variables

  const databases = new Databases(client);

  // Example: read documents from a database
  try {
    const result = await databases.listDocuments(
      "6a6a605d001a0c4ca679",
      "practive"
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
