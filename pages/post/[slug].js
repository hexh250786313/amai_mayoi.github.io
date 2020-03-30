import React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";
import getConfig from 'next/config';

const {
  publicRuntimeConfig: { outTree },
} = getConfig();


export default function PostTemplate({ content, data }) {
  // This holds the data between `---` from the .md file
  const frontmatter = data;
  console.log(outTree);

  return (
    <div>
      <h1>{frontmatter.title}</h1>

      <ReactMarkdown source={content} renderers={{ code: CodeBlock }} />
    </div>
  );
}

PostTemplate.getInitialProps = async (context) => {
  const { slug } = context.query;
  // Import our .md file using the `slug` from the URL
  // const content = await import(`./${slug}.md`);
  const content = await import(`./hello-world.md`);

  // Parse .md data through `matter`
  const data = matter(content.default);

  // console.log(content.default);
  console.log(data);

  // Pass data to the component props
  return { ...data };
};
