import Padding from '@/components/layouts/Padding';
import fs from 'fs/promises';
import Image from 'next/image';
import path from 'path';

async function listFilenamesInDirectory(directoryPath: string) {
  try {
    const files = await fs.readdir(directoryPath);
    return files;
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

const directoryPath = path.join(process.cwd(), '/public/afk');

const ImageContainer = ({ src }: { src: string }) => {
  return (
    <div className="flex flex-grow relative border border-stone-100 dark:border-stone-600 min-w-[300px] min-h-[400px] max-w-[600px] h-full rounded-xl overflow-hidden m-2">
      <Image
        src={src}
        priority
        fill
        style={{
          objectFit: 'cover',
        }}
        alt="Image"
      />
    </div>
  );
};

export default async function AFK() {
  const images = await listFilenamesInDirectory(directoryPath);
  return (
    <Padding>
      <div className="w-full mb-8">
        <h1 className="text-primary">afk</h1>
        <p className="text-stone-600 dark:text-stone-400">
          Some of my favorite moments away from my keyboard.
        </p>
      </div>
      <div className="w-full min-h-[300px] flex flex-col md:flex-row flex-wrap justify-evenly rounded-xl">
        {images &&
          images?.map((img, idx) => (
            <ImageContainer src={`/afk/${img}`} key={idx} />
          ))}
      </div>
    </Padding>
  );
}
