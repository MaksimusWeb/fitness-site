export const recommendationsBmiOnly = {
  obesity: {
    text: 'Опасный для здоровья вес. Рекомендуется следить за питанием и физической активностью.',
    link: '/training-programs/fatloss',
  },
  overweight: {
    text: 'Избыточный вес. Рекомендуется следить за питанием и физической активностью.',
    link: '/training-programs/fatloss',
  },
  normalweight: {
    text: 'Вес в норме. Поддерживайте здоровый образ жизни.',
    link: '/training-programs/mass',
  },
  underweight: {
    text: 'Недостаточный вес. Рекомендуется увеличить калорийность рациона и обратиться к специалисту.',
    link: '/training-programs/mass',
  },
};

export const recommendationsBoth = {
  obesity: {
    text: 'Опасный для здоровья вес и процент жира. Рекомендуется заняться тренировками и следить за питанием',
    link: '/training-programs/fatloss',
  },
  overweight: {
    highFat: {
      text: 'Высокий процент жира. Рекомендуется заняться тренировками и следить за питанием.',
      link: '/training-programs/fatloss',
    },
    normalFat: {
      text:
        'При лишнем весе у вас нормальный процент жира, значит у вас неплохо развита мускулатура. Рекомендуется наращивать ' +
        'или поддерживать мышечную массу.',
      link: '/training-programs/mass',
    },
    lowFat: {
      text: 'Низкий процент жира при таком весе. Рекомендуется наращивать или поддерживать мышечную массу.',
      link: '/training-programs/mass',
    },
  },

  normalweight: {
    highFat: {
      text: 'Высокий процент жира при нормальном весе. Рекомендуется заняться тренировками и следить за питанием.',
      link: '/training-programs/recomp',
    },
    normalFat: {
      text: 'Здоровый вес и нормальный процент жира. Рекомендуется наращивать мышечную массу.',
      link: '/training-programs/mass',
    },
    lowFat: {
      text: 'Низкий процент жира при нормальном весе. Рекомендуется наращивать или поддерживать мышечную массу.',
      link: '/training-programs/mass',
    },
  },

  underweight: {
    highFat: {
      text: 'Низкий вес, но повышенный процент жира. Рекомендуется улучшить мышечную массу и следить за питанием.',
      link: '/training-programs/recomp',
    },
    normalFat: {
      text: 'Низкий вес и нормальный процент жира. Рекомендуется наращивать или поддерживать мышечную массу.',
      link: '/training-programs/mass',
    },
    lowFat: {
      text: 'Низкий вес и низкий процент жира, что может быть опасно. Рекомендуется осторожно увеличивать вес и наращивать мышечную массу',
      link: '/training-programs/mass',
    },
  },
};
