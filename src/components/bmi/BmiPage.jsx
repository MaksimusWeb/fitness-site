import { useState } from 'react';
import {
  calculateBmi,
  calculateFatPerc,
  getBmiCategory,
  getFatPercCategory,
} from './calculator';
import { recommendationsBmiOnly, recommendationsBoth } from './recommendations';
import { NavLink } from 'react-router-dom';

const BmiPage = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [neck, setNeck] = useState('');
  const [waist, setWaist] = useState('');
  const [hips, setHips] = useState('');

  const [bmiResult, setBmiResult] = useState(null);
  const [fatPercResult, setFatPercResult] = useState(null);
  const [recommendations, setRecommendations] = useState(null);

  const handleReset = (event) => {
    event.preventDefault();
    setHeight('');
    setWeight('');
    setAge('');
    setGender('');
    setNeck('');
    setWaist('');
    setHips('');
    setBmiResult(null);
    setFatPercResult(null);
    setRecommendations(null);
  };

  const handleCalculate = (event) => {
    event.preventDefault();
    const bmi = calculateBmi(height, weight, age);
    if (bmi === null) {
      alert('Рост, вес или возраст введены неправильно');
      return;
    }
    setBmiResult(bmi.toFixed(2));

    const fatPerc = calculateFatPerc(height, neck, waist, hips, gender);
    if (fatPerc === null && (neck || waist || hips)) {
      alert('Дополнительные замеры введены неправильно');
      setFatPercResult(null);
    } else if (fatPerc !== null) {
      setFatPercResult(fatPerc.toFixed(2));
    }

    const bmiCategory = getBmiCategory(bmi);

    if (fatPerc === null) {
      const recom = recommendationsBmiOnly[bmiCategory];
      setRecommendations(recom);
    } else if (bmiCategory === 'obesity') {
      const recom = recommendationsBoth.obesity;
      setRecommendations(recom);
    } else {
      const fatPercCategory = getFatPercCategory(fatPerc, gender);
      const recom = recommendationsBoth[bmiCategory][fatPercCategory];
      setRecommendations(recom);
    }
  };

  return (
    <>
      <h1 className="text-centered text-color text-shadow text-size-adapt">
        С чего начинать?
      </h1>
      <section className="text-centered text-color text-shadow article-text-size-adapt text-border-box text-padding-inside-box line-height">
        <h3>
          Худеть, набирать, или одновременно избавляться от жира и набирать
          мышечную массу?
          <br />С помощью калькулятора индекса массы тела(BMI) можно узнать в
          каком направлении вам следует двигаться.
        </h3>
        <form onSubmit={handleCalculate}>
          <div className="form-wrapper">
            <label htmlFor="height">Рост в СМ:</label>
            <input
              type="number"
              value={height}
              onChange={(e) =>
                setHeight(e.target.value === '' ? '' : Number(e.target.value))
              }
              className="input-bmi"
              id="height"
              min="50"
              max="250"
              name="height"
              placeholder="*"
              required
            />
          </div>
          <div className="form-wrapper">
            <label htmlFor="weight">Вес в КГ:</label>
            <input
              type="number"
              value={weight}
              onChange={(e) =>
                setWeight(e.target.value === '' ? '' : Number(e.target.value))
              }
              className="input-bmi"
              id="weight"
              min="20"
              max="350"
              name="weight"
              placeholder="*"
              required
            />
          </div>
          <div className="form-wrapper">
            <label htmlFor="age">Возраст:</label>
            <input
              type="number"
              value={age}
              onChange={(e) =>
                setAge(e.target.value === '' ? '' : Number(e.target.value))
              }
              className="input-age"
              id="age"
              min="16"
              max="115"
              name="age"
              step="1"
              placeholder="*"
              required
            />
          </div>
          <div className="line-breaker"></div>
          <div className="radio-container">
            <label className="">Пол:</label>
            <div className="radio-group">
              <input
                type="radio"
                value="gender-male"
                onChange={(e) => setGender(e.target.value)}
                checked={gender === 'gender-male'}
                className="radio-bmi"
                id="male"
                name="gender"
                required
              />
              <label htmlFor="male">Мужской</label>
            </div>
            <div className="radio-group">
              <input
                type="radio"
                value="gender-female"
                onChange={(e) => setGender(e.target.value)}
                checked={gender === 'gender-female'}
                className="radio-bmi"
                id="female"
                name="gender"
              />
              <label htmlFor="female">Женский</label>
            </div>
          </div>
          <div className="line-breaker"></div>
          <h3>
            Для более точных данных могут потребоваться различные замеры частей
            тела:
          </h3>
          <div className="line-breaker"></div>
          <div className="form-wrapper">
            <label htmlFor="neckMeasure">Охват шеи в СМ:</label>
            <input
              type="number"
              value={neck}
              onChange={(e) =>
                setNeck(e.target.value === '' ? '' : Number(e.target.value))
              }
              className="input-bmi"
              id="neckMeasure"
              name="measures"
              min="0"
              max="150"
            />
          </div>
          <div className="form-wrapper">
            <label htmlFor="waistMeasure">Охват талии в СМ:</label>
            <input
              type="number"
              value={waist}
              onChange={(e) =>
                setWaist(e.target.value === '' ? '' : Number(e.target.value))
              }
              className="input-bmi"
              id="waistMeasure"
              name="measures"
              min="0"
              max="500"
            />
          </div>
          <div className="hips-wrapper" id="hips-wrapper">
            <label
              htmlFor="hipsMeasure"
              title="Измерить нужно только одно бедро"
            >
              Охват бёдер* в СМ:
            </label>
            <input
              type="number"
              value={hips}
              onChange={(e) =>
                setHips(e.target.value === '' ? '' : Number(e.target.value))
              }
              className="input-bmi"
              id="hipsMeasure"
              name="measures"
              min="0"
              max="300"
            />
          </div>
          <div className="line-breaker"></div>
          <button className="submit-button" type="submit">
            Рассчитать
          </button>
          <button onClick={handleReset} className="reset-button" type="button">
            Сбросить
          </button>
        </form>
        <div className="line-breaker"></div>
        {bmiResult ? (
          <div id="bmi-results">Ваш индекс массы тела(BMI): {bmiResult}</div>
        ) : null}
        <div className="line-breaker"></div>
        {fatPercResult ? (
          <div id="fat-perc-results">
            Ваш процент жира в теле: {fatPercResult}
          </div>
        ) : null}
        <div className="line-breaker"></div>
        {recommendations ? (
          <div id="results" className="results">
            {recommendations.text}{' '}
            <NavLink to={recommendations.link}>Подробнее</NavLink>
          </div>
        ) : null}
      </section>
    </>
  );
};

export default BmiPage;
