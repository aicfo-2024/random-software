import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom typography styles for MDX content
    h1: ({ children }) => (
      <h1 className="text-display font-bold text-base-text mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-h1 font-bold text-base-text mb-4 mt-8">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold text-base-text mb-3 mt-6">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-base-text/80 leading-relaxed mb-4">{children}</p>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="text-brand-green hover:text-brand-coral underline transition-colors"
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-outside ml-6 text-base-text/80 mb-4 space-y-2">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-outside ml-6 text-base-text/80 mb-4 space-y-2">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-base-text/80 leading-relaxed">
        {children}
      </li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-brand-coral pl-4 italic text-base-text/70 my-4">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-base-text/5 px-1.5 py-0.5 rounded text-sm font-mono text-brand-green">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-base-text/5 p-4 rounded-lg overflow-x-auto mb-4 text-sm">
        {children}
      </pre>
    ),
    ...components,
  };
}
