export const formatDate = date => {
  const messageTime = new Date(date);
  const hours = messageTime.getHours();
  const minutes = messageTime.getMinutes();
  const isAfternoon = hours > 12;
  const timePeriod = isAfternoon ? 'pm' : 'am';
  const formattedHours = isAfternoon ? hours - 12 : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${formattedHours}:${formattedMinutes} ${timePeriod}`;
}
