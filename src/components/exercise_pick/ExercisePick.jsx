import pecsImg from '../../images/muscles/pecs.jpg';
import shouldersImg from '../../images/muscles/shoulders.jpg';
import bicepsImg from '../../images/muscles/biceps.jpg';
import tricepsImg from '../../images/muscles/triceps.jpg';
import backImg from '../../images/muscles/back.jpg';
import legsImg from '../../images/muscles/legs.jpg';
import { useState } from 'react';

const ExercisePick = () => {
  const [openBlock, setOpenBlock] = useState({
    chest: false,
    shoulders: false,
    biceps: false,
    triceps: false,
    back: false,
    legs: false,
  });
  const toggleBlock = (name) => {
    setOpenBlock({ ...openBlock, [name]: !openBlock[name] });
  };

  return (
    <>
      <div className="choose-muscle-group-wrapper">
        <div className="choose-muscle-group-container">
          <div className="choose-muscle-group">
            <h2>Выберите группу мышц:</h2>
            <div className="muscle-group" onClick={() => toggleBlock('chest')}>
              <p>
                Грудь — придаёт массивность передней части тела. Развитая грудь
                делает торс рельефным и мощным, визуально «наполняет» верх.
                <img className="" src={pecsImg} alt="Грудные мышцы" />
              </p>
            </div>
            {openBlock.chest && (
              <p className="active-block">
                Лучшие упражнения: жим лёжа (штанги или гантелей), разведения
                гантелей / бабочка, отжимания на брусьях.
              </p>
            )}

            <div
              className="muscle-group"
              onClick={() => toggleBlock('shoulders')}
            >
              <p>
                Плечи — создают ширину верха тела и формируют V-образный силуэт.
                Чем шире и круглее плечи, тем уже кажется талия.
                <img src={shouldersImg} alt="Мышцы плеч" />
              </p>
            </div>
            {openBlock.shoulders && (
              <p className="active-block">
                Лучшие упражнения: армейский жим, махи в кроссовере/гантелями в
                сторону, тяга блока к подбородку, жим гантелей сидя.
              </p>
            )}

            <div className="muscle-group" onClick={() => toggleBlock('biceps')}>
              <p>
                Бицепс — отвечает за объём руки спереди. При согнутой руке
                именно бицепс создаёт «шар» и подчёркивает вашу потенциальную
                мощь.
                <img src={bicepsImg} alt="Бицепс" />
              </p>
            </div>
            {openBlock.biceps && (
              <p className="active-block">
                Лучшие упражнения: Подъем штанги/гантелей на бицепс, молотки,
                вариации подъёмов на скамье Скотта.{' '}
              </p>
            )}

            <div
              className="muscle-group"
              onClick={() => toggleBlock('triceps')}
            >
              <p>
                Трицепс — формирует большую часть объёма руки сзади. Без
                прокачанного трицепса руки выглядят тонкими, даже при развитом
                бицепсе.
                <img src={tricepsImg} alt="Трицепс" />
              </p>
            </div>
            {openBlock.triceps && (
              <p className="active-block">
                Лучшие упражнения: Французский жим, разгибания рук на верхнем
                блоке, жим лёжа узким хватом, отжимания на брусьях.
              </p>
            )}

            <div className="muscle-group" onClick={() => toggleBlock('back')}>
              <p>
                Спина — ширина и рельеф спины усиливают V-образную форму. Также
                развитая спина добавляет массивности даже в профиль, делает
                осанку крепче и стабильнее.
                <img src={backImg} alt="Спина" />
              </p>
            </div>
            {openBlock.back && (
              <p className="active-block">
                Лучшие упражнения: Подтягивания любой вариации, тяга
                горизонтального блока, тяга штанги в наклоне.{' '}
              </p>
            )}

            <div className="muscle-group" onClick={() => toggleBlock('legs')}>
              <p>
                Ноги — развитые квадрицепсы, бёдра и икры создают гармонию между
                верхом и низом. Без тренировки ног тело выглядит неестественно
                непропорциональным.
                <img src={legsImg} alt="Ноги" />
              </p>
            </div>
            {openBlock.legs && (
              <p className="active-block">
                Лучшие упражнения: Приседания со штангой (squats), румынская
                тяга, жим ногами.{' '}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExercisePick;
