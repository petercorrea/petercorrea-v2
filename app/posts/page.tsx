import Tag from '@/components/Tag';
import Hover from '@/components/effects/Hover';
import StatelessTransition from '@/components/effects/StatelessTransition';
import Padding from '@/components/layouts/Padding';
import TwoCol from '@/components/layouts/TwoCol';
import { postsmap } from '@/db/posts/postsmap';
import Link from 'next/link';

let posts = Object.values(postsmap);

const heading = (
  <h1 className="md:pt-4 text-bauhausBlue text-5xl font-extrabold md:sticky top-0 lowercase mb-4 md:mb-0 min-w-fit h-fit">
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
          <p className="text-primary font-medium">{post.title}</p>
          <p className="text-sm text-primary">{post.description}</p>
          <p className="text-xs text-stone-500">{post.date}</p>
          <div className="flex flex-row">
            {post.tags.map((tag, idx) => (
              <Tag
                text={tag}
                key={idx}
                classname="w-fit bg-blue-500 my-5"
                textColor="text-white"
              />
            ))}
          </div>
        </Link>
      </Hover>
    ))}
  </>
);

export default function Posts() {
  return (
    <Padding>
      <StatelessTransition delay="100" direction="up">
        <TwoCol heading={heading} content={content} />
      </StatelessTransition>
    </Padding>
  );
}
