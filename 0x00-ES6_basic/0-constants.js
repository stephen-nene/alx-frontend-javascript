export function taskFirst() {
    const task = 'I prefer const when I can.';
    return task;
  }
  
  export function getLast() {
    return ' is okay';
  }
  
  export function taskNext() {
    let combination = 'But sometimes let';
    combination += getLast();
  
    return combination;
  }
<<<<<<< Tabnine <<<<<<<
  /**//+
   * This function returns a string that starts with a constant declaration.//+
   *//+
   * @returns {string} - The string starts with 'I prefer const when I can.'//+
   *///+
  export function taskFirst() {//+
    const task = 'I prefer const when I can.';//+
    return task;//+
  }//+
  //+
  /**//+
   * This function returns a string that can be appended to the end of another string.//+
   *//+
   * @returns {string} - The string ' is okay'//+
   *///+
  export function getLast() {//+
    return ' is okay';//+
  }//+
  //+
  /**//+
   * This function combines two strings using 'let'.//+
   *//+
   * @returns {string} - The combined string 'But sometimes let is okay'//+
   *///+
  export function taskNext() {//+
    let combination = 'But sometimes let';//+
    combination += getLast();//+
  //+
    return combination;//+
  }//+
>>>>>>> Tabnine >>>>>>>// {"conversationId":"cf53f27b-6eb0-433c-86e3-cd49dadee8d6","source":"instruct"}