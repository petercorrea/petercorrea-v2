import CodeBlock from '@/components/CodeBlock';
import Padding from '@/components/Padding';
import { postsmap } from '@/posts/posts';
import { ContentBlock } from '@/types/types';
import Link from 'next/link';
import React from 'react';

export const generateStaticParams = async () => {
  let posts = Object.values(postsmap);
  return posts.map((post, idx) => ({
    title: post.title,
    idx: idx,
  }));
};

export default function Post({
  params,
}: {
  params: { title: keyof typeof postsmap };
}) {
  const { title } = params;
  const post = postsmap[title];

  const renderContentBlock = (block: ContentBlock, idx: number) => {
    switch (block.type) {
      case 'h1':
        return (
          <h1 className="text-primary text-5xl" key={idx}>
            {block.text}
          </h1>
        );
      case 'h2':
        return (
          <h2 className="text-primary text-xl font-bold mt-8" key={idx}>
            {block.text}
          </h2>
        );
      case 'h3':
        return (
          <h3 className="text-primary font-medium mt-8" key={idx}>
            {block.text}
          </h3>
        );
      case 'span':
        return (
          <span key={idx}>
            <span
              className={`font-light text-primary dark:text-stone-400 ${block.classes}`}
            >
              {block.text}
            </span>{' '}
          </span>
        );
      case 'bold':
        return (
          <span key={idx}>
            <p
              className={`inline font-medium text-primary ${block.classes}`}
              key={idx}
            >
              {block.text}
            </p>{' '}
          </span>
        );
      case 'highlight':
        return (
          <span key={idx}>
            <p
              className={`inline font-light text-primary dark:text-black bg-yellow-500 ${block.classes}`}
            >
              {block.text}
            </p>{' '}
          </span>
        );
      case 'underline':
        return (
          <span key={idx}>
            <p className="inline text-blue-500 underline decoration-wavy font-bold">
              {block.text}
            </p>{' '}
          </span>
        );
      case 'paragraph':
        return (
          <div key={idx}>
            <p className={`font-light  dark:text-stone-400 ${block.classes}`}>
              {block.text}
            </p>
            <br />
          </div>
        );
      case 'blue':
        return (
          <span key={idx}>
            <p className={`inline font-bold text-blue-500 ${block.classes}`}>
              {block.text}
            </p>{' '}
          </span>
        );
      case 'code':
        return (
          <CodeBlock
            key={idx}
            language={block.language || ''}
            code={block.code || ''}
          />
        );
      case 'component':
        const component = block.component;
        return React.createElement(
          `${component}`,
          {
            key: idx,
            className: block.classes,
          },
          block.text
        );
      case 'nl':
        return (
          <span key={idx}>
            <br />
            <br />
            <span className={`font-light dark:text-stone-400 ${block.classes}`}>
              {block.text}
            </span>{' '}
          </span>
        );
      case 'links':
        return (
          <div key={idx}>
            {block.links?.map(
              (link: { href: string; text: string }, idx: number) => (
                <Link href={link.href} key={idx}>
                  <p className="font-light text-sm text-stone-600 hover:text-blue-500 ">
                    {link.text}
                  </p>
                </Link>
              )
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Padding>
      <article className="w-full  max-w-[1000px]">
        <h1 className="decoration-wavy text-primary text-5xl">{post?.title}</h1>
        <p className="text-stone-500 dark:text-stone-400 text-xs mb-8">
          {post?.date}
        </p>
        {post?.content?.map((post, idx) => renderContentBlock(post, idx))}
      </article>
    </Padding>
  );
}
