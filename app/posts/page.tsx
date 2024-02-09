import Padding from '@/components/Padding';
import { posts } from '@/posts';
import Link from 'next/link';
import 'prismjs/themes/shades-of-purple.css';
export default function Posts() {
  return (
    <Padding classname="">
      {posts.map((post, idx) => (
        <Link href={`/posts/${post.href}`} key={idx}>
          <p>{post.title}</p>
        </Link>
      ))}
    </Padding>
  );
}
