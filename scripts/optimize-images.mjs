import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, parse } from 'path';

const INPUT_DIR = './public/images/questions';
const OUTPUT_DIR = './public/images/questions/optimized';

async function optimizeImages() {
    try {
        await mkdir(OUTPUT_DIR, { recursive: true });

        const files = await readdir(INPUT_DIR);

        for (const file of files) {
            if (!file.match(/\.(jpg|jpeg|png|webp)$/i)) continue;

            const inputPath = join(INPUT_DIR, file);
            const { name, ext } = parse(file);
            const outputPath = join(OUTPUT_DIR, `${name}${ext}`);

            // Get original image dimensions
            const metadata = await sharp(inputPath).metadata();

            await sharp(inputPath)
                // Keep original dimensions
                .resize(metadata.width, metadata.height, {
                    fit: 'fill',
                    withoutEnlargement: true
                })
                .png({
                    quality: 90,
                    compressionLevel: 9,
                    palette: true, // Preserve pixel art color palette
                    colors: 256  // Maximum colors for pixel art
                })
                .toFile(outputPath);

            console.log(`✅ Optimized: ${file} (${metadata.width}x${metadata.height})`);
        }

        console.log('\n✨ All images optimized successfully!');
    } catch (error) {
        console.error('❌ Error optimizing images:', error);
        process.exit(1);
    }
}

optimizeImages();