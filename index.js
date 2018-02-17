var katzDeli = [];
function takeANumber(line, name) {
  line.push(name)
  return "Welcome, " + name + ". You are number " + line.length + " in line."
}
function nowServing(katzDeli) {
  if (katzDeli.length <1) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + katzDeli.shift()+ ".";
  }
}
function currentLine(katzDeli) {
  if (katzDeli.length<1) {
    return "The line is currently empty."
  } else {
    var array = [];
    for (var i = 0; i < katzDeli.length; i++)
   return "The line is currently: 1. ${katzDeli[0]}, 2. ${katzDeli[1]}, 3. ${katzDeli[2]}  
    }
}