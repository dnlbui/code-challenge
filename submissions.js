const findSum = function(array) {
    //create and define result variable
    let sum = 0;

    //iterate through the input array
    for(let i = 0; i < array.length; i++){
        //add current position of the array to the sum variable
        sum += array[i];
    }

    //return result
    return sum;
};
  
const findFrequency = function(array) {
    //return object that'll contain most and least frequent
    let resultObject = {};
    //object that is keeping count of frequency
    let frequencyObject = {};
    //array of frequency to help easier compare
    let frequencyArray = [];


    //iterate through array
    for(let i = 0; i < array.length; i++){
        //if frequencyObject[current array position value] === undefined
        if(frequencyObject[array[i]] === undefined){
            //create the key (current position) in the resultObject and assign it to 1
            frequencyObject[array[i]] = 1;
        }
        //otherwise resultObject
        else{
            //increment property value (frequencyObject[array[i]])
            frequencyObject[array[i]]++;
        }
    }

    //iterate through frequencyObject to create an array of frequency
    for(key in frequencyObject){
      //convert to an array within an array by pushing
      frequencyArray.push([key,frequencyObject[key]]);
    };

    //initialize least frequent and assign to first value of first array
    let leastFrequentValue = frequencyArray[0][1];
    //initialize most frequent and assign to first value of first array
    let mostFrequentValue = frequencyArray[0][1]; 
    //initialize least frequent letter variable and assign it to first letter of the array
    let leastFrequentLetter = frequencyArray[0][0];
    //initialize most frequent letter variable and assign it to first letter of the array
    let mostFrequentLetter = frequencyArray[0][0];

    //iterate through frequencyArray and start at index 1
    for(let i = 1; i < frequencyArray.length; i++){
      //if current value is less than leastFrequentValue
      if(frequencyArray[i][1] < leastFrequentValue){
            //assign current value leastFrequentValue
            leastFrequentValue = frequencyArray[i][1];
            //assign current letter to leastFrequentLetter
            leastFrequentLetter = frequencyArray[i][0];
        }
      //if current value is greater than mostFrequentValue
      if(frequencyArray[i][1] > mostFrequentValue){
            //assign current value mostFrequentValue
            mostFrequentValue = frequencyArray[i][1];
            //assign current letter to mostFrequentLetter
            mostFrequentLetter = frequencyArray[i][0];
        }
    }
  
    //add property most and assign mostFrequentLetter
    resultObject['most'] = mostFrequentLetter;
    //add property least and assign leastFrequentLetter
    resultObject['least'] = leastFrequentLetter;

    //return object
    return resultObject;
};
  
const isPalindrome = function(str) {
    //make sure str is lowercase
    str = str.toLowerCase();
    //create variable with empty string
    var str2 = '';
  
    //iterate backwards through str
    for(i = str.length-1; i >= 0; i--){
      //currentIndexValue variable assigned to current value
      let currentIndexValue = str[i];
      //concat currentIndexValue to str2
      str2 = str2.concat('',currentIndexValue);
    }
  
    //return boolean that compares str and str2
    return (str2 === str);
};
  
const largestPair = function(array) {
    //return number
    let largestProduct = 0;
  
    let product = 0;
  
    //string odd or even
    let evenBoolean = true;
  
    //check if array is even or odd amount
    if(array.length % 2 !== 0){
      evenBoolean = false;
    }
    
    //array for every other starting with 1
    let array1 = [];
    //array for every other start with 2
    let array2 = [];
    //array for every other start with 3
    let array3 = [];
  
    //iterate every other starting with the first element
    for(let i = 0; i < array.length; i+=2){
      array1.push(array[i]);
    }
  
    //iterate every other starting with second element
    for(let i = 1; i < array.length; i+=2){
      array2.push(array[i]);
    }
  
    //iterate ever other starting with 3rd element
    //iterate every other starting with second element
    for(let i = 2; i < array.length; i+=2){
      array3.push(array[i]);
    }
    
    //if array is even
    if(evenBoolean === true){
      //iterate through length of smallest array
      for(let i = 0; i<array1.length; i++){
            //multiply current position value
            product = array1[i] * array2[i];

            if(product > largestProduct){
                largestProduct = product;
            }
        }
      //iterate through length of smallest array
      for(let i = 0; i<array3.length; i++){
            //multiply current position value
            product = array2[i] * array3[i];

            if(product > largestProduct){
                largestProduct = product;
            }
        }
    }
    else{
          for(let i = 0; i<array2.length; i++){
                product = array1[i] * array2[i];
                if(product > largestProduct){
                    largestProduct = product;
                }
            }
            for(let i = 0; i<array2.length; i++){
                product = array2[i] * array3[i];
                if(product > largestProduct){
                    largestProduct = product;
                }
            }
        }
  
    return largestProduct;

};
  
const removeParenth = function(str) {
    //create str2 variable assign empty '';
    let str2 = '';
    //index of first parenthesis
    let index1 = str.indexOf('(');
    //index of first parenthesis
    let index2 = str.indexOf(')');
  
    //iterate through str
    for(i = 0; i < str.length; i++){
        //if i between index index1 (inclusive) and index2 (inclusive)
        if(i >= index1 && i <= index2){
          //proceed and increment for loop
          continue;
        }
        //else
        else{
          //concat current index value to str2
          str2 = str2.concat('',str[i]);
        }
    }
    //return result
    return str2;
};
  
const scoreScrabble = function(str) {
    //initalize variable and assign to 0
    let points = 0;
  
    //iterate through the string
    for(let i = 0; i < str.length; i++){
      //if current value is a,e,i,o,u,l,n,r,s,t 
      if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' || str[i] === 'l' || str[i] === 'n' || str[i] === 'r' || str[i] === 's' || str[i] === 't'){
            //then add 1 to points
            points++;
        }
      //if current value is d, g
      else if(str[i] === 'd' || str[i] === 'g'){
            //add 2 to points
            points += 2;
        }
      //if current value is b, c, m, p
      else if(str[i] === 'b' || str[i] === 'c' || str[i] === 'm' || str[i] === 'p'){
            //add 3 to points
            points += 3;
        }
      //if current value is f, h, v, w, y
      else if(str[i] === 'f' || str[i] === 'h' || str[i] === 'v' || str[i] === 'w' || str[i] === 'y'){
            //add 4 to points
            points += 4;
        }
      //if current value is k
      else if(str[i] === 'k'){
            //add 5 to points
            points += 5;
        }
      //if current value is j, x
      else if(str[i] === 'j' || str[i] === 'x'){
            //add 8 to points
            points += 8;
        }
      //if current value is q, z
      else if(str[i] === 'q' || str[i] === 'z'){
            //add 10 to points
            points += 10;
        }
      
    }
  
    //return points
    return points;
};
