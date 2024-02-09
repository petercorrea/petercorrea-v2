import { posts, postsmap } from '@/posts.js';
import React from 'react';
import CodeBlock from '../../../components/CodeBlock';

type Block = {
  type: string;
  level?: number;
  text?: string;
  language?: string;
  code?: string;
};
export const generateStaticParams = async () => {
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

  const renderContentBlock = (block: Block, index: number) => {
    switch (block.type) {
      case 'heading':
        return React.createElement(
          `h${block.level}`,
          { key: index },
          block.text
        );
      case 'paragraph':
        return (
          <>
            <p key={index}>{block.text}</p>
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
      default:
        return null;
    }
  };

  return (
    <article>
      <h1 className="text-5xl font-bold mb-8">{post?.title}</h1>
      <p className="text-xs">{post?.date}</p>
      {post?.content?.map(renderContentBlock)}
    </article>
  );
}
