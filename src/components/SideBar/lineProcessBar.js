import React,{useState, useEffect} from 'react';

function LineProcessBar(props) {
  const {name, percent} = props
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() =>{
    setIsAnimated(!isAnimated)
  },[])

  return (
    <div className="w-100 line-process-bar">
      <div className="flex items-center justify-between line-process-bar-title">
          <span>{name}</span>
          <span>{percent}%</span>
      </div>
      <div className="mt-1 line-process-bar-content">
        <span style={isAnimated?{width:`${percent}%`}:{width:"0%"}}></span>
      </div>
    </div>
  );
}

export default LineProcessBar;