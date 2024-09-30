const express = require("express");
const app = express();

const userModel = require(`./userModel`);

// Root route
app.get("/", (req, res) => {
    res.send("Jai Neem Karoli Baba Ji ki");
});

// Create user route
app.get("/create", async (req, res) => {
    let createdUser = await userModel.create({
        name: "Dhananjay",
        email: "dhanan@gmai.com",
        username: "dhananjay"
    });
    res.send(createdUser);
});

// Update user route
app.get("/update", async (req, res) => {
    let updatedUser = await userModel.findOneAndUpdate(
        { username: "dhananjay" },
        { name: "Dhananjay Pandey" },
        { new: true }
    );
    res.send(updatedUser);
});

// Read all users route
app.get("/read", async (req, res) => {
    let users = await userModel.find();
    res.send(users);
});

// Delete user route
app.get("/delete", async (req, res) => {
    let deletedUser = await userModel.findOneAndDelete({ username: "dhananjay" });
    res.send(deletedUser);
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
