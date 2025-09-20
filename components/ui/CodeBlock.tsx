
import React from 'react';

interface CodeBlockProps {
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  return (
    <div className="bg-slate-900 text-white text-sm overflow-x-auto">
      <pre className="p-4"><code className="font-mono">{code.trim()}</code></pre>
    </div>
  );
};

export default CodeBlock;
