'use client';

import Prism from 'prismjs';
import 'prismjs/themes/shades-of-purple.css';
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
    <div className="flex flex-row justify-center w-full mt-8">
      <div className="w-[600px] rounded-3xl overflow-hidden">
        <pre>
          <code
            className="language-javascript"
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          ></code>
        </pre>
      </div>
    </div>
  );
}
