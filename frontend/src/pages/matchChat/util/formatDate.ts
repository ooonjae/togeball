export const formatDate = ( date ) =>  {
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; 
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + minutes + " " + ampm
  
  return strTime
}