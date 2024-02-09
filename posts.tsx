export const asyncAwait = {
  href: 'async-await',
  title: 'Understanding Async/Await in JavaScript',
  author: 'Jane Doe',
  date: 'YYYY-MM-DD',
  content: [
    {
      type: 'heading',
      level: 1, // h1, h2, h3, etc.
      text: 'Introduction to Async/Await',
    },
    {
      type: 'paragraph',
      text: 'Async/await in JavaScript is used to handle asynchronous operations. It allows us to write asynchronous code that looks and behaves a bit more like synchronous code, which is easier to understand and maintain.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'How Async/Await Works',
    },
    {
      type: 'paragraph',
      text: "The async keyword is used to declare an asynchronous function, which returns a Promise. The await keyword is used to pause the execution of the async function and wait for the Promise's resolution.",
    },
    {
      type: 'code',
      language: 'javascript',
      code: `async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}`,
    },
    // Add more content blocks as needed
  ],
};

export const javaScriptBasics = {
  href: 'javascript-basics',
  title: 'JavaScript Basics',
  author: 'Jane Doe',
  date: 'YYYY-MM-DD',
  content: [
    {
      type: 'heading',
      level: 1, // h1, h2, h3, etc.
      text: 'Introduction to Async/Await',
    },
    {
      type: 'paragraph',
      text: 'Async/await in JavaScript is used to handle asynchronous operations. It allows us to write asynchronous code that looks and behaves a bit more like synchronous code, which is easier to understand and maintain.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'How Async/Await Works',
    },
    {
      type: 'paragraph',
      text: "The async keyword is used to declare an asynchronous function, which returns a Promise. The await keyword is used to pause the execution of the async function and wait for the Promise's resolution.",
    },
    {
      type: 'code',
      language: 'javascript',
      code: `async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}`,
    },
    // Add more content blocks as needed
  ],
};

export const posts = [asyncAwait, javaScriptBasics];

// consider only keeping the map
export const postsmap = {
  'javascript-basics': javaScriptBasics,
  'async-await': asyncAwait,
};
