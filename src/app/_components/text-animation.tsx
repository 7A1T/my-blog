
import React from 'react';

interface AnimatedTextProps {
  text?: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text = "Hello", className = "" }) => {

  return (
    <div className={`relative inline-block ${className}`}>
      {text.split('').map((char, index) => (
        <span key={index} className="relative inline-block">
          <svg
            className="w-9 h-16"
            viewBox="0 0 60 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="fill-transparent stroke-black"
              style={{
                animation: `drawStroke 1s ${index * 0.2}s forwards, fillLetter 0.5s ${index * 0.2 + 1
                  }s forwards`,
                strokeDasharray: 150,
                strokeDashoffset: 150,
                strokeWidth: 1
              }}
            >
              {char}
            </text>
          </svg>
        </span>
      ))}
    </div>
  );
};

const styles = `
  @keyframes drawStroke {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes fillLetter {
    from {
      fill: transparent;
    }
    to {
      fill: slategray;
    }
  }
`;

interface TextAnimationProps {
  text?: string;
}
const TextAnimation: React.FC<TextAnimationProps> = ({ text = "hello world" }) => {
  return (
    <div className=''>
      <style>{styles}</style>
      <AnimatedText text={text} className='text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8' />
    </div>
  );
};

export default TextAnimation;
