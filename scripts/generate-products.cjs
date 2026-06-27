#!/usr/bin/env node

/**
 * Automated Product Catalog Generator for Dipika Textiles
 * 
 * This script automatically generates products.ts from catalog folders.
 * 
 * HOW TO USE:
 * 1. Create a new folder in src/assets/images/catalog/your-product-name/
 * 2. Add product images to that folder (any image format)
 * 3. Create an info.txt file with product details (see format below)
 * 4. Run: node scripts/generate-products.js
 * 5. Your product will be automatically added to the website!
 * 
 * INFO.TXT FORMAT:
 * name: White Litchi Silk Cotton Blend Saree
 * code: DT-COT-01
 * category: saree
 * fabric: Cotton Blend
 * price: 265
 * wholesalePrice: 220
 * wholesaleMinQty: 10
 * colors: White, Off White
 * description: Elegant white cotton blend saree with litchi silk texture.
 * longDescription: This beautiful white cotton blend saree features a luxurious litchi silk texture...
 * length: 5.5 meters
 * blouse: 80 cm unstitched matching fabric
 * work: Weaving pattern with subtle border
 * washCare: Machine Wash or Hand Wash
 * purity: Cotton Blend with Litchi Silk texture
 * isLatest: true
 * isBestSeller: true
 */

const fs = require('fs');
const path = require('path');

const CATALOG_DIR = path.join(__dirname, '../src/assets/images/catalog');
const OUTPUT_FILE = path.join(__dirname, '../src/data/products.ts');

function parseInfoFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const info = {};
  
  lines.forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) return;
    
    const key = line.substring(0, colonIndex).trim();
    const value = line.substring(colonIndex + 1).trim();
    
    if (!key || !value) return;
    
    // Parse different types
    if (key === 'price' || key === 'wholesalePrice' || key === 'wholesaleMinQty') {
      info[key] = parseInt(value, 10);
    } else if (key === 'isLatest' || key === 'isBestSeller') {
      info[key] = value.toLowerCase() === 'true';
    } else if (key === 'colors') {
      info[key] = value.split(',').map(c => c.trim());
    } else {
      info[key] = value;
    }
  });
  
  return info;
}

function getImageFiles(folderPath, folderName) {
  // Check if folder name is a number (1-28) - look for images in numbered folders
  // Otherwise look in the catalog folder itself
  let imageFolderPath = folderPath;
  let imagePathPrefix = `/src/assets/images/catalog/${folderName}`;
  
  if (/^\d+$/.test(folderName)) {
    // Numbered folder (1-28) - images are in src/assets/images/N/
    imageFolderPath = path.join(__dirname, `../src/assets/images/${folderName}`);
    imagePathPrefix = `/src/assets/images/${folderName}`;
  }
  
  if (!fs.existsSync(imageFolderPath)) {
    return [];
  }
  
  const files = fs.readdirSync(imageFolderPath);
  return files.filter(file => 
    /\.(jpg|jpeg|png|webp|gif)$/i.test(file)
  ).map(file => `${imagePathPrefix}/${file}`);
}

function generateProductCode(index, category) {
  const categoryPrefix = {
    'Cotton Blend': 'COT',
    'Soft Silk': 'SILK',
    'Ladies Saree': 'LAD',
    'Art Silk': 'ART',
    'Organza': 'ORG',
    'Uniform': 'UNI',
    'Silk Weaving': 'SILKW',
    'Banarasi Silk': 'BAN',
    'Linen': 'LIN',
    'Georgette': 'GEO'
  };
  
  const prefix = categoryPrefix[category] || 'PROD';
  return `DT-${prefix}-${String(index).padStart(2, '0')}`;
}

function generateProductsFile() {
  if (!fs.existsSync(CATALOG_DIR)) {
    console.log(`📁 Creating catalog directory: ${CATALOG_DIR}`);
    fs.mkdirSync(CATALOG_DIR, { recursive: true });
    
    // Create a sample folder
    const sampleDir = path.join(CATALOG_DIR, 'sample-product');
    fs.mkdirSync(sampleDir, { recursive: true });
    
    const sampleInfo = `name: Sample Product Name
code: DT-SAMPLE-01
category: saree
fabric: Cotton Blend
price: 299
wholesalePrice: 249
wholesaleMinQty: 10
colors: White, Red, Blue
description: Short description of the product
longDescription: Detailed description with features and benefits of this beautiful saree.
length: 5.5 meters
blouse: 80 cm unstitched matching fabric
work: Traditional weaving pattern
washCare: Hand Wash Recommended
purity: Pure Cotton Blend
isLatest: true
isBestSeller: false`;
    
    fs.writeFileSync(path.join(sampleDir, 'info.txt'), sampleInfo);
    console.log('✅ Created sample product template in catalog/sample-product/');
    console.log('📸 Add images to the folder and run this script again!');
    return;
  }
  
  const folders = fs.readdirSync(CATALOG_DIR).filter(item => {
    const itemPath = path.join(CATALOG_DIR, item);
    return fs.statSync(itemPath).isDirectory();
  });
  
  if (folders.length === 0) {
    console.log('⚠️  No product folders found in catalog directory!');
    console.log('📁 Create folders in: src/assets/images/catalog/');
    return;
  }
  
  const products = [];
  
  folders.forEach((folder, index) => {
    const folderPath = path.join(CATALOG_DIR, folder);
    const infoPath = path.join(folderPath, 'info.txt');
    
    if (!fs.existsSync(infoPath)) {
      console.log(`⚠️  Skipping ${folder}: no info.txt found`);
      return;
    }
    
    try {
      const info = parseInfoFile(infoPath);
      const images = getImageFiles(folderPath, folder);
      
      if (images.length === 0) {
        console.log(`⚠️  Skipping ${folder}: no images found`);
        return;
      }
      
      // Auto-generate code if not provided
      if (!info.code) {
        info.code = generateProductCode(index + 1, info.fabric || 'Product');
      }
      
      const product = {
        id: info.code.toLowerCase().replace(/[^a-z0-9]/g, '-'),
        code: info.code,
        name: info.name || folder,
        category: info.category || 'saree',
        fabric: info.fabric || 'Silk',
        description: info.description || '',
        longDescription: info.longDescription || info.description || '',
        price: info.price || 0,
        wholesaleMinQty: info.wholesaleMinQty || 10,
        wholesalePrice: info.wholesalePrice || info.price || 0,
        images: images,
        colors: info.colors || ['Default'],
        isLatest: info.isLatest || false,
        isBestSeller: info.isBestSeller || false,
        specifications: {
          length: info.length || '5.5 meters',
          blouse: info.blouse || '80 cm unstitched fabric',
          work: info.work || 'Traditional design',
          washCare: info.washCare || 'Hand Wash',
          purity: info.purity || 'Pure Fabric'
        }
      };
      
      products.push(product);
      console.log(`✅ Added: ${info.name} (${images.length} images)`);
      
    } catch (error) {
      console.error(`❌ Error processing ${folder}:`, error.message);
    }
  });
  
  // Generate TypeScript file
  const tsContent = `import { Product } from '../types';

// 🤖 AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// This file is automatically generated by scripts/generate-products.js
// To add/edit products, modify the catalog folders and run: node scripts/generate-products.js

export const products: Product[] = ${JSON.stringify(products, null, 2)
    .replace(/"([^"]+)":/g, '$1:')  // Remove quotes from keys
    .replace(/"/g, "'")};  // Use single quotes
`;
  
  fs.writeFileSync(OUTPUT_FILE, tsContent);
  console.log(`\n🎉 Successfully generated ${products.length} products!`);
  console.log(`📝 Output: ${OUTPUT_FILE}`);
  console.log('\n💡 To add new products:');
  console.log('   1. Create folder: src/assets/images/catalog/your-product-name/');
  console.log('   2. Add images to the folder');
  console.log('   3. Create info.txt with product details');
  console.log('   4. Run: node scripts/generate-products.js');
}

// Run the generator
try {
  generateProductsFile();
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
