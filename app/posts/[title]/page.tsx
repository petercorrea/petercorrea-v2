import CodeBlock from '@/components/CodeBlock';
import StatelessTransition from '@/components/effects/StatelessTransition';
import Padding from '@/components/layouts/Padding';
import { postsMap } from '@/libs/constants';
import { ContentBlock } from '@/types/types';
import Link from 'next/link';
import React from 'react';

export const generateStaticParams = async () => {
  let posts = Object.values(postsMap);
  return posts.map((post, idx) => ({
    title: post.title,
    idx: idx,
  }));
};

export default function Post({
  params,
}: {
  params: { title: keyof typeof postsMap };
}) {
  const { title } = params;
  const post = postsMap[title];

  const renderContentBlock = (block: ContentBlock, idx: number) => {
    switch (block.type) {
      case 'h1':
        return (
          <h1 className="text-primary" key={idx}>
            {block.text}
          </h1>
        );
      case 'h2':
        return (
          <h2 className="text-primary mt-8" key={idx}>
            {block.text}
          </h2>
        );
      case 'h3':
        return (
          <h3 className="text-primary mt-8" key={idx}>
            {block.text}
          </h3>
        );
      case 'span':
        return (
          <span key={idx}>
            <span
              className={`text-primary dark:text-stone-400 ${block.classes}`}
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
              className={`inline text-primary dark:text-black bg-yellow-500 ${block.classes}`}
            >
              {block.text}
            </p>{' '}
          </span>
        );
      case 'underline':
        return (
          <span key={idx}>
            <p className="inline text-bauhausBlue underline decoration-wavy font-bold">
              {block.text}
            </p>{' '}
          </span>
        );
      case 'paragraph':
        return (
          <div key={idx}>
            <p className={` dark:text-stone-400 ${block.classes}`}>
              {block.text}
            </p>
            <br />
          </div>
        );
      case 'blue':
        return (
          <span key={idx}>
            <p className={`inline font-bold text-bauhausBlue ${block.classes}`}>
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
            <span className={`dark:text-stone-400 ${block.classes}`}>
              {block.text}
            </span>{' '}
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <Padding>
      <StatelessTransition
        delay="100"
        direction="up"
        classname="flex flex-col items-center "
      >
        <article className="w-full max-w-[1000px]">
          <h1 className="text-primary mt-4">{post?.title}</h1>
          <p className="text-stone-600 dark:text-stone-400 tiny mb-8">
            {post?.date}
          </p>
          {post?.content?.map((post, idx) => renderContentBlock(post, idx))}

          <h2 className="text-primary mt-8">Further Reading & Bibliography</h2>
          <div>
            {post?.bibliography?.map(
              (link: { href: string; text: string }, idx: number) => (
                <Link href={link.href} key={idx}>
                  <p className="text-sm text-stone-600 dark:text-stone-600 hover:text-blue-500 dark:hover:text-blue-500 ">
                    {link.text}
                  </p>
                </Link>
              )
            )}
          </div>
        </article>
      </StatelessTransition>
    </Padding>
  );
}
