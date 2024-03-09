import React from 'react';

export class HomePage extends React.Component {
  render() {
    return (
      <div className='my-4 p-2'>
        <div className="position-relative p-3 text-center text-muted bg-body border border-dashed rounded-5">
          <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Mudit Kaushik</title>
            <defs>
              <clipPath id="profileImage">
                <rect width="100%" height="100%" fill="#777" />
                <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
              </clipPath>
            </defs>
            <image href="/profileimg.jpg" width={160} height={215} x={0} y={-32} clipPath='url(#profileImage)' />
          </svg>
          <h1 className="text-body-emphasis">Mudit Mohan Kaushik</h1>
          <p className="col-lg-6 mx-auto mb-4 justify-content-start" style={{fontSize: '18px', fontWeight: 100}}>
            10 years ago, I embarked on a journey to translate ideas into reality through the power of code. 
            It wasn't just about pixels on a screen, it was about crafting web applications and software that made a difference.
            This journey is far from over. I'm constantly fueled by the challenge of learning new languages and frameworks, pushing the boundaries of what's possible. 
            The ever-evolving world of software development keeps me energized and excited to see what the next decade holds.
          </p>
        </div>
      </div>
    );
  }
};