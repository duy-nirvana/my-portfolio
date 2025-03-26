import React, { useState, useEffect } from "react";

const TypingText = ({
  strings = [],
  typingSpeed = 100,
  deletingSpeed = 50,
  delayAfterType = 2000,
  className = "",
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (strings.length === 0) return;

    let timeout;

    if (isTyping && !isDeleting) {
      // Typing mode
      if (displayText.length < strings[currentIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(
            strings[currentIndex].substring(0, displayText.length + 1)
          );
        }, typingSpeed);
      } else {
        // Finished typing
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayAfterType);
      }
    } else if (isDeleting) {
      // Deleting mode
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(
            strings[currentIndex].substring(0, displayText.length - 1)
          );
        }, deletingSpeed);
      } else {
        // Finished deleting
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % strings.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    displayText,
    currentIndex,
    isTyping,
    isDeleting,
    strings,
    typingSpeed,
    deletingSpeed,
    delayAfterType,
  ]);

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span className="text-secondary/80 transition-colors">{displayText}</span>
      <span className="typing-cursor"></span>
    </div>
  );
};

export default TypingText;
