function formatTime(value) {
  let days = 0;
  let hours = 0;
  let minutes = 0;
  
  minutes = value % 60;
  hours = (value - minutes) / 60;
  
  if(hours >= 24) {
    days = (hours - hours % 24) / 24;		
    hours = hours % 24;
  }
  
  return days + ' day(s) ' + hours + ' hour(s) ' + minutes + ' minute(s)';
}
formatTime(135);	
formatTime(59);
formatTime(3601);