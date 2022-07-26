import React from 'react';
import cs from 'classnames';

export type Props = {
  style?: React.CSSProperties;
  className?: string;
}

function About({ style, className }: Props): JSX.Element {
  return (
    <div style={style} className={cs(className)}>
      About
    </div>
  );
}

export default About;
