const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
require("dotenv").config();

const authRoutes=require("./routes/auth");
const adsRoutes=require("./routes/ads");

const app=express();

app.use(express.json());
app.use(cors());

app.use("/auth",authRoutes);
app.use("/ads",adsRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ Connected to MongoDB");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error("❌ DB connection failed:", err));