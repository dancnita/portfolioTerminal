import React from 'react';

const PromptText = React.forwardRef(({ text, className }, ref) => {
  return (
    <span className={className} ref={ref}>
      {text}
    </span>
  );
});

export default PromptText;
