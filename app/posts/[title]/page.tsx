import Padding from '@/components/Padding';
import { postsmap } from '@/posts/posts';
import { ContentBlock } from '@/types/types';
import CodeBlock from '../../../components/CodeBlock';

export const generateStaticParams = async () => {
  let posts = Object.values(postsmap);
  return posts.map((post) => ({
    title: post.title,
  }));
};

export default function Post({
  params,
}: {
  params: { title: keyof typeof postsmap };
}) {
  const { title } = params;
  const post = postsmap[title];

  const renderContentBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case 'heading':
        if (block.level == 1)
          return (
            <h1 className="text-primary text-5xl" key={index}>
              {block.text}
            </h1>
          );
        if (block.level == 2)
          return (
            <h2 className="text-primary text-xl font-bold" key={index}>
              {block.text}
            </h2>
          );
        if (block.level == 3)
          return (
            <h3 className="text-primary font-medium" key={index}>
              {block.text}
            </h3>
          );
      case 'paragraph':
        return (
          <>
            <p className="font-light text-primary" key={index}>
              {block.text}
            </p>
            <br />
          </>
        );
      case 'code':
        return (
          <CodeBlock
            key={index}
            language={block.language || ''}
            code={block.code || ''}
          />
        );
      case 'component':
        const Component = block.component;
        return <Component className={block.classes}>{block.text}</Component>;
      default:
        return null;
    }
  };

  return (
    <Padding>
      <article>
        <h1 className="text-primary text-5xl">{post?.title}</h1>
        <p className="text-stone-500 dark:text-stone-400 text-xs mb-8">
          {post?.date}
        </p>
        {post?.content?.map((post, idx) => renderContentBlock(post, idx))}
      </article>
    </Padding>
  );
}
