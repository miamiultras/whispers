import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, parse } from 'path';

const INPUT_DIR = './public/images/questions';
const OUTPUT_DIR = './public/images/questions/optimized';

async function optimizeImages() {
  try {
    // Create output directory if it doesn't exist
    await mkdir(OUTPUT_DIR, { recursive: true });
    
    const files = await readdir(INPUT_DIR);
    
    for (const file of files) {
      if (!file.match(/\.(jpg|jpeg|png|webp)$/i)) continue;
      
      const inputPath = join(INPUT_DIR, file);
      const { name, ext } = parse(file);
      const outputPath = join(OUTPUT_DIR, `${name}${ext}`);
      
      await sharp(inputPath)
        .resize(640, 360, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png({ quality: 90 })
        .toFile(outputPath);
        
      console.log(`✅ Optimized: ${file}`);
    }
    
    console.log('\n✨ All images optimized successfully!');
  } catch (error) {
    console.error('❌ Error optimizing images:', error);
  }
}

optimizeImages();