import backgr4 from '../images/backgr4.jpg';
import backgr5 from '../images/backgr5.jpg';

const BackgroundSlider = () => {
  return (
    <>
      <div className="background-slider-container">
        <div className="background-slider">
          <img src={backgr4} alt="Фон 2" />
          <img src={backgr5} alt="Фон 3" />
        </div>
      </div>
    </>
  );
};

export default BackgroundSlider;
