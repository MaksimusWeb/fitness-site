export function calculateBmi(height, weight, age) {
  if (height >= 50 && weight >= 20 && age >= 16){
  const heightMeters = height / 100;
  return weight / (heightMeters * heightMeters);
  }
  return null
}

export function calculateFatPerc(height, neck, waist, hips, gender) {
  if (gender === 'gender-male' && neck > 0 && waist > 0 && waist - neck > 0) {
    return (
      495 /
        (1.0324 -
          0.19077 * Math.log10(waist - neck) +
          0.15456 * Math.log10(height)) -
      450
    );
  } else if (gender === 'gender-female' && neck > 0 && waist > 0 && hips > 0) {
    return (
      495 /
        (1.29579 -
          0.35004 * Math.log10(waist + hips - neck) +
          0.221 * Math.log10(height)) -
      450
    );
  } 
  else return null;
}

export function getBmiCategory(bmi) {
  if (bmi <= 18.5) return 'underweight';
  if (bmi <= 24.9) return 'normalweight';
  if (bmi <= 29.9) return 'overweight';
  return 'obesity';
}

export function getFatPercCategory(fatPerc, gender) {
  if (gender === "gender-male") {
    if (fatPerc <= 9) return "lowFat" 
    else if (fatPerc <= 20) return "normalFat"
    else return "highFat"
  }
  else {
    if (fatPerc <= 20) return "lowFat"
    else if (fatPerc <= 30) return "normalFat"
    else return "highFat";
  }
}
