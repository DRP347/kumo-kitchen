const mongoose = require("mongoose");
require("dotenv").config();

console.log("Loaded MONGODB_URI =", process.env.MONGODB_URI);

const MONGODB_URI = process.env.MONGODB_URI;

// Define schema
const menuItemSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    price: Number,
    image: String,
    category: String,
  },
  { timestamps: true }
);

// Create or reuse model
const MenuItem =
  mongoose.models.MenuItem || mongoose.model("MenuItem", menuItemSchema);

async function seed() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URI);

    console.log("Connected. Clearing old items...");
    await MenuItem.deleteMany({});

    console.log("Inserting sample items...");
    await MenuItem.insertMany([
      {
        name: "Tonkotsu Ramen",
        description: "Rich pork broth with chashu, egg, and scallions.",
        price: 450,
        image: "https://images.unsplash.com/photo-1600181952020-7e1370aa5f03",
        category: "ramen",
      },
      {
        name: "Shoyu Ramen",
        description: "Soy-based broth with chicken and bamboo shoots.",
        price: 420,
        image: "https://images.unsplash.com/photo-1604335399105-a37f4fb44c34",
        category: "ramen",
      },
      {
        name: "Karaage Donburi",
        description: "Crispy Japanese fried chicken over seasoned rice.",
        price: 380,
        image: "https://images.unsplash.com/photo-1588167109549-48b3e9991a42",
        category: "donburi",
      },
    ]);

    console.log("Seeding complete!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
