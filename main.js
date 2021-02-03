(function(testFunction){
    /*
    * PHONEWORDS
    * Write a function that will take a phone word (vanity number) and return the correct telephone number.
    * The number pad looks like the following:
    * https://en.wikipedia.org/wiki/Telephone_keypad#/media/File:Telephone-keypad2.svg
    *
    * RULES
    * Given a phoneword:
    * 1. Ignore any non-alphanumeric characters (), -, etc.
    * 2. Keep any existing digits
    * 3. Resolve a letter to a number according to the keypad image
    * 4. All your code must be contained inside the 'convertPhoneWord' function shown below
    * 5. Your ultimate solution must work for ANY phoneword and not simply be implemented to cause the provided tests to pass.
    */


    var buttons = ["abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"]; //DO NOT MODIFY


    // YOU CAN ADD TO AND MODIFY THE CODE BELOW THIS LINE
    //   |
    //   V

    var convertPhoneWord = function(phoneWord) {
        var phoneNumbers = [];
        var phoneCase;
       // var character = input.charAt(i);
        //Enter your code in this function body
        
        if(phoneWord === null || phoneWord === undefined || phoneWord === '' || phoneWord === "!@#$%^&"){
            return '';
        } 
        else {
            phoneNumbers = phoneWord
            .replace("0","0")

            .replace(/-/g, '').replace(/\(/g, '').replace(/\)/g, '')

            .replace(/A/g, "2").replace("B", "2").replace("C", "2")

            .replace(/D/g, "3").replace(/E/g, "3").replace(/F/g, "3").replace(/e/g,"3")
        
            .replace(/G/g,"4").replace(/H/g,"4").replace(/I/g,"4")
            
            .replace("J","5").replace(/K/g,"5").replace(/L/g,"5")
            
            .replace(/M/g,"6").replace(/N/g,"6").replace(/O/g,"6").replace(/o/g, "6").replace(/m/g,"6")
            
            .replace(/P/g, "7").replace(/Q/g, "7").replace(/R/g, "7").replace("S","7").replace(/r/g,"7")
            
            .replace(/T/g, "8").replace(/U/g, "8").replace(/V/, "3").replace(/t/g,"8")
            
            .replace("W", "9").replace("X", "9").replace(/Y/g, "9").replace(/Z/g,"9").replace(/y/g, "9");

            return phoneNumbers;
        }
            
        //     switch (isLetter(phoneWord))
        //     {
        //         case 'a':
        //             case 'b':
        //                 case 'c': 
        //             phoneWord.replace("a"|"b"|"c","2");
        //             break;
        //         case 'd':
        //             case 'e':
        //                 case 'f': phoneWord+="3";
        //             break;
        //         case 'g':
        //             case 'h':
        //                 case 'i': phoneWord+="4";
        //             break;
        //         case 'j':
        //             case 'k': 
        //                 case 'l': phoneWord+="5";
        //             break;
        //         case 'm':
        //             case 'n':
        //                 case 'o': phoneWord+="6";
        //             break;
        //         case 'p':
        //             case 'q':
        //                 case 'r':
        //                     case 's': phoneWord+="7";
        //             break;
        //         case 't':
        //             case 'u':
        //                 case 'v': phoneWord+="8";
        //             break;
        //         case 'w':
        //             case 'x':
        //                 case 'y':
        //                     case 'z': phoneWord+="9";
        //             break;
        //         case "(":
        //             case ")":
        //                 phoneWord+= "(" && ")";
        //             break;
        //             case "-":
        //                 phoneWord+="-";
        //                 break;
        //             return phoneWord;
        //     }
        }

  //helper functions...do not modify, but you can use them in your code if you wish.

  var isDigit = function(character) {
    return "0123456789".indexOf(character) !== -1;
}

var isLetter = function(character) {
    character = character.toUpperCase();    
    return "abcdefghijklmnopqrstuvwxyz".indexOf(character) !== -1;
}

    //Run tests on the function
    testFunction(convertPhoneWord); //DO NOT MODIFY

    
})(testFunction);