const text = 'coco';
let nr = 0;

switch(text){
 
    case 'leapfrog':

        console.log('hello leapfrog');
        nr=1;
        break;

    case 'mercy':

         console.log ('hi mercy');
         nr=2;
        break;
        
    case 'twitter':
        console.log('hello');
        nr=3;
        break;

    default:
        console.log('what is that?')
        break;
}

let userinput = prompt('tell me a fruit');
let convertedvalue= userinput.toLowerCase();
console.log(convertedvalue);
switch(userinput){
    case 'kiwi':
        alert('kiwi is the fruit that is situated in australia');
        break;
    case 'apple':
        alert('apple are mostly grown in cold place , specially jomsom area');
        break;
default:
    alert('unknown item');

}


