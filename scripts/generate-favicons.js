import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateFavicons() {
  const inputImage = path.resolve(__dirname, '../public/sterling-profile.jpg');
  const outputDir = path.resolve(__dirname, '../public/favicon');

  try {
    // Ensure output directory exists
    await fs.mkdir(outputDir, { recursive: true });

    // Create favicon.ico (16x16, 32x32, 48x48)
    await sharp(inputImage)
      .resize(32, 32, { fit: 'cover' })
      .toFile(path.join(outputDir, 'favicon.ico'));

    // Create apple-touch-icon (180x180)
    await sharp(inputImage)
      .resize(180, 180, { fit: 'cover' })
      .toFile(path.join(outputDir, 'apple-touch-icon.png'));

    // Create android favicon (192x192)
    await sharp(inputImage)
      .resize(192, 192, { fit: 'cover' })
      .toFile(path.join(outputDir, 'android-chrome-192x192.png'));

    // Create favicon-16x16.png
    await sharp(inputImage)
      .resize(16, 16, { fit: 'cover' })
      .toFile(path.join(outputDir, 'favicon-16x16.png'));

    // Create favicon-32x32.png
    await sharp(inputImage)
      .resize(32, 32, { fit: 'cover' })
      .toFile(path.join(outputDir, 'favicon-32x32.png'));

    console.log('Favicon files generated successfully!');
  } catch (err) {
    console.error('Error generating favicons:', err);
  }
}

generateFavicons(); 