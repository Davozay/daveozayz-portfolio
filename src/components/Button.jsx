import  { useRef, useEffect } from 'react';


const Button = () => {
  const btnRef = useRef(null);

  
  useEffect(() => {
    const btnEle = btnRef.current;
    btnEle.style.setProperty("--width", "0px");
    btnEle.style.setProperty("--height", "0px");
  }, []);

  const handleMouseMove = (e) => {
    const btnEle = btnRef.current;
    const x = (e.pageX - btnEle.offsetLeft);
    const y = (e.pageY - btnEle.offsetTop);

    btnEle.style.setProperty("--xPos", x + "px");
    btnEle.style.setProperty("--yPos", y + "px");
  };

  const handleMouseEnter = () => {
    const btnEle = btnRef.current;
    btnEle.style.setProperty("--width", "300px");
    btnEle.style.setProperty("--height", "300px");
  };

  const handleMouseLeave = () => {
    const btnEle = btnRef.current;
    btnEle.style.setProperty("--width", "0px");
    btnEle.style.setProperty("--height", "0px");
  };

  return (
    <a 
      href="#projects" 
      className="btn  " 
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span>View Projects</span>
    </a>
  );
};

export default Button;