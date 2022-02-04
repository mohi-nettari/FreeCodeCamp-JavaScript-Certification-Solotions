function getRange(num){
    let romanStamp = [1,5,10,50,100,500,1000];
    let romanWordLength = romanStamp.length - 1 
    if(num != 0){
        do{
            var test = num / romanStamp[romanWordLength];
            
            romanWordLength--;
        }while(test < 1 );
    }
return romanWordLength + 1;
}
function convertToRoman(num) {

    let roman_string = "";
    let romanStamp = [1,5,10,50,100,500,1000];
    var roman = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    let rang = getRange(num);
    // return rang;

if(rang == 2)
{
    
    var i = 2;
    var new_num = num + 10;
    var new_rang = getRange(new_num);
}
if(rang >= 4)
{
    var i =4;
    var new_num = num + 100;
    var new_rang = getRange(new_num);
}


if(new_rang > rang)
{
    roman_string += roman[i];
    num = new_num;
    rang = new_rang;
    
}
var t = 1;

while(num > 0)
{
    if(num + 1 == romanStamp[rang + 1] && rang == 1 || num + 1 == romanStamp[rang + 1] && rang == 0)
    {
        
        roman_string += roman[0] + roman[rang + 1];
        num -= roman[rang];
    }

    
if(rang >= 2) 
{
    
    var i = 2;
    var new_num = num + 10;
    var new_rang = getRange(new_num);
}
if(rang >= 4 )
{
        t=1;
        var i =4;
        var new_num = num + 100;
        var new_rang = getRange(new_num);
    }
    
if(new_rang > rang && t == 1)
{
    // t = 0 ;
    roman_string += roman[i];
    num = new_num;
    rang = new_rang;
    
}
if(num >0){
    roman_string += roman[rang];
    num -= romanStamp[rang];
    rang = getRange(num); 
    new_rang = null;
    new_num = null;
}
}
    
    return roman_string;
}
var  roman = convertToRoman(2);
// var  roman = getRange(98);
console.log(roman);