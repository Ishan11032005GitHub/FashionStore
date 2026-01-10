const path = require("path");
const fs = require("fs");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json({ limit: "1mb" }));

const repoRoot = path.resolve(__dirname, "..");
const dataDir = path.resolve(__dirname, "data");

const productsFile = path.join(dataDir, "products.json");
const cartFile = path.join(dataDir, "cart.json");
const ordersFile = path.join(dataDir, "orders.json");

function readJson(file, fallback) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf-8"));
  } catch {
    return fallback;
  }
}

function writeJson(file, obj) {
  fs.writeFileSync(file, JSON.stringify(obj, null, 2));
}

app.get("/api/health", (req, res) => res.json({ ok: true }));

app.get("/api/products", (req, res) => {
  res.json(readJson(productsFile, []));
});

app.get("/api/cart", (req, res) => {
  res.json(readJson(cartFile, { items: [] }));
});

app.post("/api/cart", (req, res) => {
  const cart = readJson(cartFile, { items: [] });
  const item = req.body;

  if (!item || !item.id) {
    return res.status(400).json({ error: "Invalid item" });
  }

  cart.items.push(item);
  writeJson(cartFile, cart);
  res.json(cart);
});

app.post("/api/order", (req, res) => {
  const orders = readJson(ordersFile, { orders: [] });
  const order = {
    id: Date.now(),
    createdAt: new Date().toISOString(),
    ...req.body,
  };

  orders.orders.push(order);
  writeJson(ordersFile, orders);
  writeJson(cartFile, { items: [] });

  res.json(order);
});

app.use(express.static(repoRoot));

app.get("*", (req, res) => {
  const index = ["index.html", "public/index.html"]
    .map(p => path.join(repoRoot, p))
    .find(p => fs.existsSync(p));

  if (index) return res.sendFile(index);
  res.status(404).send("No index.html found");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
