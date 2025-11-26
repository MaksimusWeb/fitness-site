import { Link } from 'react-router-dom';
import personalcoach from '../../images/personalcoach.jpg';
import anzhumanya from '../../images/anzhumanya.jpg';
import benchpress from '../../images/benchpress.jpg';

const FeaturesBlocks = () => {
  return (
    <>
     <section className="features-block">
  <div className="features">
    <div className="feature-card">
      <img className="rounded-image" src={benchpress} alt="Жим лёжа" />
      <div className="feature-text-overlay">
        <p className='feature-text'>Десятки упражнений на каждую группу мышц. <Link className="introduction-links" to="/exercise-pick">
          Подобрать упражнение.
        </Link></p>
      </div>
    </div>

    <div className="feature-card">
      <img className="rounded-image-2" src={anzhumanya} alt="Бегит, анжуманя" />
      <div className="feature-text-overlay">
        <p className='feature-text'>Легко подобрать идеальную программу тренировок. <Link className="introduction-links" to="/training-programs">
          Приступить.
        </Link></p>
      </div>
    </div>

    <div className="feature-card">
      <img className="rounded-image" src={personalcoach} alt="Персональный тренер" />
      <div className="feature-text-overlay">
        <p className='feature-text'>Не знаете что делать: худеть, набирать мышечную массу, или и то и другое? <Link className="introduction-links" to="/bmi">
          Вам сюда.
        </Link></p>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default FeaturesBlocks;
