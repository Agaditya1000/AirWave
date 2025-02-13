export const getAQIImpact = (aqi: number): { impact: string; color: string } => {
  if (aqi <= 50) {
    return { impact: 'Good', color: 'bg-green-500' };
  } else if (aqi <= 100) {
    return { impact: 'Moderate', color: 'bg-yellow-500' };
  } else if (aqi <= 150) {
    return { impact: 'Unhealthy for Sensitive Groups', color: 'bg-orange-500' };
  } else if (aqi <= 200) {
    return { impact: 'Unhealthy', color: 'bg-red-500' };
  } else if (aqi <= 300) {
    return { impact: 'Very Unhealthy', color: 'bg-purple-500' };
  } else {
    return { impact: 'Hazardous', color: 'bg-red-900' };
  }
};

export const formatTimestamp = (timestamp: string): string => {
  return new Date(timestamp).toLocaleString();
};