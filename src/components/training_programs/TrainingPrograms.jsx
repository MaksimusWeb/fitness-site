import { Link } from 'react-router-dom';

const TrainingPrograms = () => {
  return (
    <div className="training-program-wrapper">
      <div className="training-program-container text-border-box">
        <h2>Программы тренировок:</h2>
        <ul className="training-program-ul">
          <li>
            <Link className="prog-link" to="/training-programs/mass">
              Набор мышечной массы
            </Link>
          </li>
          <li>
            <Link className="prog-link" to="/training-programs/fatloss">
              Похудение
            </Link>
          </li>
          <li>
            <Link className="prog-link" to="/training-programs/recomp">
              Похудение и набор мышечной массы одновременно (Рекомпозиция)
            </Link>
          </li>
        </ul>
        <h4>
          Если вы не знаете с чего начать и какую программу выбрать, рекомендуем
          пройти тест на композицию и процент жира в теле —{' '}
          <Link className="prog-link" to="/bmi">
            BMI Калькулятор.
          </Link>
        </h4>
        <h3>Важно:</h3>
        <p>
          Без регуляции питания польза от тренировок может значительно
          снизиться. Не пренебрегайте этим.
        </p>
        <p>
          Для роста мышечной массы важен достаток строительного материала(белок)
          и небольшой профицит калорий.
        </p>
        <p>Для похудения важен дефицит калорий. Без него вы НЕ похудеете.</p>
        <p>Для рекомпозиции — дефицит калорий и достаток белка.</p>
      </div>
    </div>
  );
};

export default TrainingPrograms;
