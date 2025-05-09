// maharjan.saroj93  MongoDB Username
// iEURztQYSjFc1TIy  MongoDB Password
exports.connection = mongoose
  .connect(
    "mongodb+srv://maharjansaroj93:iEURztQYSjFc1TIy@backenddb.u1fkvth.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected Succesfully!");
  })
  .catch(() => {
    console.log("Database Connection Failed !");
  });
