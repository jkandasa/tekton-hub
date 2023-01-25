import { ClipboardCopyButton, Split, SplitItem } from '@patternfly/react-core';
import React, { useState } from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

interface Props {
  value: string;
}

const Yaml: React.FC<Props> = (props: Props) => {
  const { value } = props;
  const [copied, setCopied] = useState(false);
  return (
    <>
      <Split>
        <SplitItem isFilled />
        <SplitItem>
          <ClipboardCopyButton
            id="basic-copy-button"
            textId="code-content"
            aria-label="Copy to clipboard"
            onClick={() => {
              navigator.clipboard.writeText(value.toString());
              setCopied(true);
            }}
            exitDelay={copied ? 1500 : 600}
            maxWidth="220px"
            variant="plain"
            onTooltipHidden={() => setCopied(false)}
            position="auto"
          >
            {copied ? 'Successfully copied to clipboard!' : 'Copy to clipboard'}
          </ClipboardCopyButton>
        </SplitItem>
      </Split>
      <SyntaxHighlighter language="yaml" showLineNumbers={true} wrapLines={true}>
        {value}
      </SyntaxHighlighter>
    </>
  );
};

export default Yaml;
