import React, { useState, useEffect } from "react";
import { Animate } from "react-move";

function AnimatedProgressProvider(props) {
  const { valueStart, valueEnd } = props;
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(!isAnimated);
  }, []);
  return (
    <div>
      {console.log(isAnimated)}
      <Animate
        start={() => ({
          value: valueStart,
        })}
        update={() => ({
          value: [isAnimated ? valueEnd : valueStart],
          timing: {
            duration: props.duration * 1000,
            ease: props.easingFunction,
          },
        })}
      >
        {({ value }) => props.children(value)}
      </Animate>
    </div>
  );
}

export default AnimatedProgressProvider;
