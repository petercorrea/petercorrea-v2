import Hover from '@/components/effects/Hover';
import StatelessTransition from '@/components/effects/StatelessTransition';
import Tag from '@/components/elements/Tag';
import Padding from '@/components/layouts/Padding';
import TwoCol from '@/components/layouts/TwoCol';
import { postsMap } from '@/libs/constants';
import Link from 'next/link';

let posts = Object.values(postsMap);

const heading = (
  <h1 className="md:pt-4 text-bauhausBlue md:sticky top-0 lowercase mb-4 md:mb-0 min-w-fit h-fit">
    Posts
  </h1>
);

const content = (
  <>
    {posts.map((post, idx) => (
      <Hover key={idx}>
        <Link
          prefetch
          href={`/posts/${post.href}`}
          className={`bg-transparent relative z-10  rounded-xl  flex flex-col justify-between hover:cursor-pointer  transition ease-in`}
        >
          <h3 className="text-primary ">{post.title}</h3>
          <p className="font-small text-primary">{post.description}</p>
          <p className="font-tiny text-stone-600 mb-2">{post.date}</p>
          <div className="flex flex-row">
            {post.tags.map((tag, idx) => (
              <Tag text={tag} key={idx} />
            ))}
          </div>
        </Link>
      </Hover>
    ))}
  </>
);

export default function Posts() {
  return (
    <Padding classname="flex items-center">
      <StatelessTransition delay="100" direction="up">
        <TwoCol heading={heading} content={content} />
      </StatelessTransition>
    </Padding>
  );
}
