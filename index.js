function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance<=400){
    return "This one is on me!"
  }else if (distance > 2000 && distance <= 2499) {
    return "I will gladly take your thirty bucks.";
  } else if (distance > 2500) {
    return "No can do.";
  } else {
    return "choose your distance";
  }
}

function ternaryCheckCity(city){
  // Write your code here!
 const result = (city === "NYC") ? "Ok, sounds good.": (city === "Pittsburgh") ? "No go.": "i operate only in NYC";
 return result;
}



function switchOnCharmFromTip(generousityCheck) {
  // Write your code here!
  let message;
  switch (generousityCheck) {
    case "generous":
      message = "Thank you so much.";
      break;
    case "not as generous":
      message = "Thank you.";
      break;
    case "thanks for everything":
      message = "Bye.";
      break;
    default:
      message = "Thanks";
  }
  return message;
}