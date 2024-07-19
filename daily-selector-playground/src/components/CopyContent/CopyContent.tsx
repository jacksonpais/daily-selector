import { useEffect, useRef, useState } from "react";
import "./styles.css";

interface CopyContentProps {
  content: string;
}

export default function CopyContent(props: CopyContentProps) {
  const { content } = props;

  const [clipboard, setClipboard] = useState<boolean>(false);

  const copyToClipboard = () => {
    setClipboard(true);
    navigator.clipboard.writeText(content).then(
      () => {
        setTimeout(() => {
          setClipboard(false);
        }, 2000);
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <div className="code-container">
      <pre>{content}</pre>
      {clipboard === true ? (
        <span className="copy-notification">Copied!</span>
      ) : null}
      <button className="copy-button" onClick={() => copyToClipboard()}>
        {clipboard === false ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        ) : (
          <svg
            fill="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
