import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { solarizedlight } from 'react-syntax-highlighter/styles/prism';

const CodeHighlighter = ({ code }) => (
  <SyntaxHighlighter
    customStyle={{ fontSize: '1rem', width: '100%' }}
    language="jsx"
    style={solarizedlight}
  >
    {code}
  </SyntaxHighlighter>
);

export default CodeHighlighter;
