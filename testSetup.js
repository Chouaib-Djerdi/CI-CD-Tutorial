const app = require("./app"); // Import the app
let server;

beforeAll(() => {
  server = app.listen(0, () => {
    // Use port 0 for dynamic allocation
    console.log(`Test server running on port ${server.address().port}`);
  });
});

afterAll(() => {
  server.close(() => {
    console.log("Test server stopped");
  });
});

module.exports = { server };
