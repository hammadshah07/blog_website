import Image, { StaticImageData } from 'next/image';

type ArticleProps = {
  title: string;
  image: StaticImageData;
  content: string;
  imageWidth: number;
  imageHeight: number;
};

const Article: React.FC<ArticleProps> = ({ title, image, content, imageWidth, imageHeight }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-4" style={{ maxWidth: imageWidth }}>
      <Image src={image} alt={title} width={imageWidth} height={imageHeight} className="rounded-md"/>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Article;
