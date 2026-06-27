# 📦 Product Catalog System - दीपिका TEXTILES

## 🚀 Quick Start - Add a New Product

Adding a new product is super simple! Just follow these 3 steps:

### Step 1: Create Product Folder
Create a new folder in `src/assets/images/catalog/` with your product name:
```
src/assets/images/catalog/my-new-saree/
```

### Step 2: Add Images
Put all product images in that folder (any format: jpg, png, webp):
```
src/assets/images/catalog/my-new-saree/
  ├── image1.jpg
  ├── image2.jpg
  └── image3.jpg
```

### Step 3: Create info.txt
Create an `info.txt` file in the same folder with product details:

```txt
name: Beautiful Red Silk Saree
code: DT-SILK-29
category: saree
fabric: Soft Silk
price: 450
wholesalePrice: 380
wholesaleMinQty: 10
colors: Red, Maroon, Deep Red
description: Beautiful red silk saree perfect for special occasions.
longDescription: This stunning red silk saree features elegant weaving work and comes with a matching blouse piece. Perfect for weddings and celebrations.
length: 5.5 meters
blouse: 80 cm unstitched matching silk fabric
work: Traditional silk weaving
washCare: Dry Clean Only
purity: Pure Silk
isLatest: true
isBestSeller: true
```

### Step 4: Generate Products
Run the generator script:
```bash
npm run generate-products
```

**That's it!** Your product is now live on the website! 🎉

---

## 📝 info.txt Field Guide

| Field | Required | Type | Example |
|-------|----------|------|---------|
| `name` | ✅ Yes | Text | White Litchi Silk Cotton Blend Saree |
| `code` | ⚠️ Auto-generated if missing | Text | DT-COT-01 |
| `category` | No (default: saree) | Text | saree, lehenga, dress_material |
| `fabric` | ✅ Yes | Text | Cotton Blend, Soft Silk, Banarasi Silk |
| `price` | ✅ Yes | Number | 265 |
| `wholesalePrice` | ✅ Yes | Number | 220 |
| `wholesaleMinQty` | No (default: 10) | Number | 10 |
| `colors` | ✅ Yes | Comma-separated | White, Off White, Cream |
| `description` | ✅ Yes | Text | Short description (1-2 lines) |
| `longDescription` | ✅ Yes | Text | Detailed description (3-5 lines) |
| `length` | No | Text | 5.5 meters |
| `blouse` | No | Text | 80 cm unstitched matching fabric |
| `work` | No | Text | Weaving pattern with subtle border |
| `washCare` | No | Text | Machine Wash or Hand Wash |
| `purity` | No | Text | Cotton Blend with Litchi Silk |
| `isLatest` | No (default: false) | Boolean | true or false |
| `isBestSeller` | No (default: false) | Boolean | true or false |

---

## 🎯 Common Product Codes by Fabric

The generator auto-creates codes if you don't specify them:

| Fabric Type | Code Prefix | Example |
|-------------|-------------|---------|
| Cotton Blend | DT-COT- | DT-COT-01 |
| Soft Silk | DT-SILK- | DT-SILK-06 |
| Ladies Saree | DT-LAD- | DT-LAD-11 |
| Art Silk | DT-ART- | DT-ART-16 |
| Organza | DT-ORG- | DT-ORG-21 |
| Uniform | DT-UNI- | DT-UNI-23 |
| Silk Weaving | DT-SILKW- | DT-SILKW-25 |
| Banarasi Silk | DT-BAN- | DT-BAN-27 |
| Linen | DT-LIN- | DT-LIN-28 |
| Georgette | DT-GEO- | DT-GEO-30 |

---

## 🗂️ Catalog Structure

```
src/assets/images/catalog/
├── cotton-blend-white-saree/
│   ├── info.txt
│   ├── image1.jpg
│   ├── image2.jpg
│   └── image3.jpg
├── red-silk-saree/
│   ├── info.txt
│   ├── image1.jpg
│   └── image2.jpg
└── banarasi-bridal-saree/
    ├── info.txt
    ├── front.jpg
    ├── side.jpg
    ├── back.jpg
    └── pallu.jpg
```

---

## 🔄 How to Edit an Existing Product

1. Go to the product folder in `src/assets/images/catalog/`
2. Edit the `info.txt` file
3. Add/remove/replace images
4. Run: `npm run generate-products`
5. Done! Changes are live.

---

## 🗑️ How to Remove a Product

1. Delete the product folder from `src/assets/images/catalog/`
2. Run: `npm run generate-products`
3. Product removed!

---

## 💡 Tips & Best Practices

### Images
- ✅ Use high-quality images (min 800x800px)
- ✅ First image becomes the main display image
- ✅ Add 2-4 images per product (different angles)
- ✅ Name images descriptively: `front.jpg`, `side.jpg`, `detail.jpg`
- ✅ Supported formats: JPG, PNG, WEBP, GIF

### Pricing
- Set `wholesalePrice` 15-20% lower than `price`
- `wholesaleMinQty` typically 10-15 pieces for most sarees
- Premium items can have lower `wholesaleMinQty` (4-6 pieces)

### Descriptions
- **description**: Keep it 1-2 lines, highlight main feature
- **longDescription**: 3-5 lines, include fabric details, occasion, care

### Colors
- List all available color variants
- Use common color names: Red, Blue, White, etc.
- For shades: Light Pink, Deep Maroon, Sea Green

---

## 🛠️ Troubleshooting

### "No product folders found"
- Make sure folders exist in `src/assets/images/catalog/`
- Folder name should be descriptive (e.g., `red-silk-saree`)

### "Skipping folder: no info.txt found"
- Every product folder MUST have an `info.txt` file
- Check the file name (should be exactly `info.txt`, not `Info.txt`)

### "Skipping folder: no images found"
- Add at least one image (jpg, png, webp, gif)
- Images should be directly in the product folder

### Product not showing on website
1. Run: `npm run generate-products`
2. Rebuild: `npm run build`
3. Restart dev server: `npm run dev`

---

## 📞 Support

For questions or issues with the catalog system:
- WhatsApp: +91 87584 83208
- Email: sarthaknandwani10@gmail.com

---

**🎉 Happy Product Management!**
