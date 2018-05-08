var katzDeli = [];

function takeANumber(line,name) {
  /* This function adds the given name to the given deli line. */
		  line.push(name);  // Add the given name to the next available index in the deli line array.
		  var positionInLine = "Welcome, " + name + ". You are number " + (line.indexOf(name) + 1) + " in line.";
      /* Create the string that confirms the position in line. */
      return positionInLine;
		}

function nowServing() {
 
}

function currentLine() {

}
