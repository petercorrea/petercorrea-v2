'use client';

import '@/shades-of-purple.css';
import Prism from 'prismjs';
import { useEffect } from 'react';

export default function CodeBlock({
  code,
  language,
}: {
  code: string;
  language: string;
}) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const highlightedCode = Prism.highlight(
    code,
    Prism.languages.javascript,
    'javascript'
  );

  return (
    <div className="my-10">
      <pre className="rounded-3xl">
        <code
          className="language-javascript"
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        ></code>
      </pre>
    </div>
  );
}
