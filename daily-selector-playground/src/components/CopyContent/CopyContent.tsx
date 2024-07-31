import { useState } from "react";
import styles from "./CopyContent.module.css";

interface CopyContentProps {
  content: string;
  title?: string;
  showMinMaxIcon?: boolean;
  showCodeByDefault?: boolean;
}

export default function CopyContent(props: CopyContentProps) {
  const { content, showMinMaxIcon, title, showCodeByDefault } = props;

  const [clipboard, setClipboard] = useState<boolean>(false);

  const [showCode, setShowCode] = useState<boolean>(
    showCodeByDefault === undefined ? false : showCodeByDefault
  );

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

  const toggleSize = () => {
    setShowCode(!showCode);
  };

  return (
    <div className={styles.codeContainer}>
      {showCode !== undefined && showCode === true ? (
        <pre
          className={
            title || showMinMaxIcon ? `${styles.paddingTop}` : undefined
          }
        >
          {content}
        </pre>
      ) : null}
      <div
        className={
          showMinMaxIcon || title
            ? `${styles.codeHeader} ${styles.codeHeaderExt}`
            : `${styles.codeHeader}`
        }
      >
        {title ? (
          <div>
            <span>{title}</span>
          </div>
        ) : null}
        <div className={styles.codeHeaderBtnContainer}>
          {clipboard === true ? (
            <span className={`${styles.copyNotification}`}>Copied!</span>
          ) : null}
          <button
            className={styles.codeHeaderbutton}
            onClick={() => copyToClipboard()}
          >
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </button>
          {showMinMaxIcon || title ? (
            <button
              className={styles.codeHeaderbutton}
              onClick={() => toggleSize()}
            >
              {showCode ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="6 15 12 9 18 15" />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              )}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
