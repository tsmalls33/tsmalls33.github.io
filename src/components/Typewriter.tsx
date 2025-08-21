import { useEffect, useState } from 'react';

const messages = [
  'Full‑stack Web Developer',
  'Performance‑minded Engineer',
  'Builder of delightful UIs'
];

export default function Typewriter() {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState('');

  useEffect(() => {
    const msg = messages[index % messages.length];
    let i = 0;
    setDisplay('');
    const typing = setInterval(() => {
      setDisplay(msg.slice(0, i++));
      if (i > msg.length) {
        clearInterval(typing);
        setTimeout(() => setIndex((i) => (i + 1) % messages.length), 1200);
      }
    }, 40);
    return () => clearInterval(typing);
  }, [index]);

  return <span aria-live="polite">{display}<span style={{opacity:0.6}}>|</span></span>;
}
