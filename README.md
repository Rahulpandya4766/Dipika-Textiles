# 🎉 दीपिका TEXTILES - E-Commerce Website

Modern, responsive e-commerce website for दीपिका TEXTILES featuring 28 beautiful saree products with automated catalog management.

🌐 **Live Site:** [Add your Vercel URL here]

---

## ✨ Features

✅ **28 Beautiful Saree Products** - Cotton Blend, Soft Silk, Organza, Banarasi & more  
✅ **Automated Product Catalog** - Easy product management without coding  
✅ **WhatsApp Integration** - Direct inquiries with product images  
✅ **Wholesale & Retail Pricing** - Dual pricing system  
✅ **Mobile Responsive** - Works on all devices  
✅ **Social Media Links** - Instagram & IndiaMART integration  

---

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit: **http://localhost:3000**

### Production Build

```bash
npm run build
```

The `dist/` folder contains your production-ready website.

---

## 📦 Adding New Products

### Step 1: Create Product Folder
```bash
src/assets/images/catalog/29/
```

### Step 2: Add Images

Place your product images in: `public/images/29/`

Create `info.txt` in `catalog/29/`:

```txt
name: Beautiful Red Silk Saree
code: DT-SILK-29
fabric: Soft Silk
price: 450
wholesalePrice: 380
wholesaleMinQty: 10
colors: Red, Maroon, Pink
description: Beautiful red silk saree for parties
longDescription: This stunning red silk saree features...
length: 5.5 meters
blouse: 80 cm unstitched fabric
work: Traditional silk weaving
washCare: Dry Clean Only
purity: Pure Silk
isLatest: true
isBestSeller: true
```

### Step 3: Generate Products
```bash
npm run generate-products
```

**Done!** Your product is now live! 🎊

**Important:** 
- Product images must be in `public/images/N/` folders
- Info files go in `src/assets/images/catalog/N/` folders
- The generator script automatically links them together

---

## 📖 Documentation

**[Product Catalog Guide](./PRODUCT-CATALOG-GUIDE.md)** - Complete guide for managing products

---

## 🚀 Deployment (Vercel)

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Rahulpandya4766/Dipika-Textiles)

### Manual Deploy

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel auto-detects Vite settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**

---

## 📂 Project Structure

```
dipika-textiles/
├── public/                      # Static assets (served directly)
│   ├── images/                  # Product images (28 folders)
│   │   ├── 1/                   # Product 1 images
│   │   ├── 2/                   # Product 2 images
│   │   └── ...
│   ├── dipika_hero_banner_1782584818093.jpg
│   └── other showcase images
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── catalog/         # Product info.txt files
│   │           ├── 1/           # Product 1 info
│   │           ├── 2/           # Product 2 info
│   │           └── ...
│   ├── components/              # React components
│   ├── data/
│   │   └── products.ts         # Auto-generated from catalog
│   ├── pages/                  # Page components
│   └── types.ts                # TypeScript types
├── scripts/
│   └── generate-products.cjs   # Product generator script
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🎯 Quick Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 3000) |
| `npm run build` | Build for production |
| `npm run generate-products` | Generate products from catalog |
| `npm run preview` | Preview production build |

---

## 📱 Contact Information

- **Phone:** +91 87584 83208 / +91 98246 86202
- **WhatsApp:** +91 87584 83208
- **Email:** sarthaknandwani10@gmail.com
- **Address:** [577, Millenium 2 Textile Market, Surat](https://maps.app.goo.gl/8JqjmTdwHRONSveJY)
- **Instagram:** [@dipikatextiles557](https://www.instagram.com/dipikatextiles557/)
- **IndiaMART:** [dipika-textilessurat](https://www.indiamart.com/dipika-textilessurat/)

---

## 🛠️ Tech Stack

- **React 19** - Frontend framework
- **TypeScript** - Type safety
- **Vite 6** - Build tool
- **Tailwind CSS 4** - Styling
- **Lucide React** - Icons

---

## 📦 Current Products

**28 Saree Products** organized by category:

- 🧵 Cotton Blend Sarees (5)
- 🎀 Soft Silk Sarees (5)
- 👗 Ladies Sarees (5)
- 🌸 Art Silk Sarees (5)
- ✨ Organza Sarees (2)
- 👔 Uniform Sarees (2)
- 🎭 Silk Weaving Sarees (2)
- 👑 Banarasi Silk Saree (1)
- 🌿 Linen Saree (1)

---

## 📝 License

© 2026 दीपिका TEXTILES. All rights reserved.

---

**Built with ❤️ for दीपिका TEXTILES, Surat**
photo gallery). Every other folder has 2–4 photos.

## Using these in your website code

Once downloaded, copy the `images` folder into your project, e.g.:

```
your-website-project/
  src/
    assets/
      images/        <-- paste it here (or wherever you keep images)
        1/
        2/
        ...
        28/
```

Then in `src/data/products.ts`, point each product's `images` array at the
matching folder, for example:

```ts
images: [
  '/src/assets/images/1/1_1.jpeg',
  '/src/assets/images/1/1_2.jpg',
],
```

If you'd like, paste your updated/expanded product list back to me (with
names, prices, fabric, etc. for all 28 items) and I'll rewrite
`products.ts` for you to match these new image folders exactly.
