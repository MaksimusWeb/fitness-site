import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout.jsx';
import Home from './components/home/Home.jsx';
import BmiPage from './components/bmi/BmiPage.jsx';
import ExercisePick from './components/exercise_pick/ExercisePick.jsx';
import TrainingPrograms from './components/training_programs/TrainingPrograms.jsx';
import Mass from './components/training_programs/Mass.jsx';
import Fatloss from './components/training_programs/Fatloss.jsx';
import Recomp from './components/training_programs/Recomp.jsx';
import UserAgreement from './components/footer/UserAgreement.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/training-programs" element={<TrainingPrograms />} />
          <Route path="/training-programs/mass" element={<Mass />} />
          <Route path="/training-programs/fatloss" element={<Fatloss />} />
          <Route path="/training-programs/recomp" element={<Recomp />} />
          <Route path="/exercise-pick" element={<ExercisePick />} />
          <Route path="/bmi" element={<BmiPage />} />
          <Route path='/user-agreement' element={<UserAgreement />} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
