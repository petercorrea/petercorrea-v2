import Padding from '@/components/Padding';
import StatelessTransition from '@/components/StatelessTransition';
import Tag from '@/components/Tag';
import { postsmap } from '@/db/posts/postsmap';
import Link from 'next/link';

export default function Posts() {
  let posts = Object.values(postsmap);

  return (
    <Padding>
      <StatelessTransition delay="100" direction="up">
        <div className="flex flex-col">
          <div className=" flex flex-col md:grid md:grid-cols-4 w-full max-w-[1000px] mb-10">
            <h1 className="md:pt-4 text-bauhausBlue text-5xl font-extrabold md:sticky top-0 lowercase mb-4 md:mb-0 min-w-fit h-fit">
              Posts
            </h1>

            <div className="flex flex-col justify-center items-center md:col-span-3">
              {posts.map((post, idx) => (
                <div className="relative flex flex-col group mb-4" key={idx}>
                  <Link
                    href={`/posts/${post.href}`}
                    className={`bg-transparent border border-stone-100 relative z-10  rounded-xl  flex flex-col justify-between hover:cursor-pointer  transition ease-in p-4`}
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
                  <div className="dark:bg-stone-600 bg-stone-100 opacity-0 group-hover:opacity-100 dark:group-hover:opacity-30 rounded-xl w-full h-full scale-[0.80] dark:scale-[0.30] group-hover:scale-100 transition pointer-events-auto absolute"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </StatelessTransition>
    </Padding>
  );
}
