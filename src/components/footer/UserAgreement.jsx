import { useNavigate } from 'react-router-dom';

const UserAgreement = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="text-border-box text-size-adapt text-color text-centered user-agreement-form"
    >
      <h2>Пользователь согласен?</h2>
      <button className="submit-button" type="submit">
        Согласен
      </button>
    </form>
  );
};

export default UserAgreement;
