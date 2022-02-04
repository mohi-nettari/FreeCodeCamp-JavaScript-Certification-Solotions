function rot13(str) {

    let array =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let string = '';
  for(let i =0; i<str.length; i++){
  let length=0;
    if(str[i] === ' '){
      string+=' ';
      length++;
    }
    for(let j=0; j<array.length; j++){
      if(str[i] === array[j] && j<=12){
      //  str = str.replace(str[i],array[j+13]);
      string+=array[j+13];
      length++;
     }
  
     else if(str[i] === array[j] && j>12){
      // str = str.replace(str[i],array[j-13]);
      string+=array[j-13];
      length++;
     }
  
    }
    if(length === 0){
      string+=str[i];
    }
  }
  //console.log(string);
  return string;
  
  }
  
  rot13("SERR!");