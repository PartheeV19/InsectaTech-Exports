import { useEffect, useState } from 'react';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Initial animation states
    const letters = document.querySelectorAll('.preloader-brand span');
    letters.forEach((letter, i) => {
      setTimeout(() => {
        letter.style.transform = 'translateY(0)';
        letter.style.opacity = '1';
        letter.style.transition = `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.04}s`;
      }, 100);
    });

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 5) + 1;
        if (next >= 100) {
          clearInterval(interval);
          return 100;
        }
        return next;
      });
    }, 30);

    const finishTimeout = setTimeout(() => {
      setDone(true);
    }, 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(finishTimeout);
    };
  }, []);

  return (
    <div className={`preloader ${done ? 'done' : ''}`}>
      <div className="preloader-brand" aria-hidden="true">
        <span>I</span><span>N</span><span>S</span><span>E</span><span>C</span><span>T</span><span>A</span><span>T</span><span>E</span><span>C</span><span>H</span>
      </div>
      <div className={`preloader-line ${progress > 10 ? 'grow' : ''}`}></div>
      <div className={`preloader-counter ${progress > 10 ? 'show' : ''}`}>{progress}%</div>
    </div>
  );
};

export default Preloader;
