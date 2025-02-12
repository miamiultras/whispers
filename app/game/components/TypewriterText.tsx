'use client'

import { useState, useEffect } from 'react'

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
}

export default function TypewriterText({ text, delay = 50, className = '' }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!text) return;
    
    setIsTyping(true);
    setDisplayText('');
    
    let currentLength = 0;
    
    const intervalId = setInterval(() => {
      if (currentLength <= text.length) {
        setDisplayText(text.slice(0, currentLength));
        currentLength++;
      } else {
        clearInterval(intervalId);
        setIsTyping(false);
      }
    }, delay);

    return () => {
      clearInterval(intervalId);
      setIsTyping(false);
    };
  }, [text, delay]);

  if (!text) return null;

  return (
    <span className={className}>
      {displayText}
      {isTyping && <span className="animate-blink">_</span>}
    </span>
  );
}