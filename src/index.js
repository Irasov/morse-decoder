const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let res = "";
    let str = "";
    let sym = "";
    let expr1 = "10101010111010111111";
    /*expr1 = "**********00000010100000101010";*/
    let count = expr.length / 10;

    let convert = (s) =>{
        let del = 0;
        let code = "";
        let res = "";
        let count = s.length;
        for(let j=0; j<count; j++ ){
            if(s[j] == '*'){
                return res = " ";
            }else if(s[j] == '1'){
                break;
            }else if(s[j] == '0'){
                del = j;
            } 
        }
        if (del != 0) {
            code = s.slice(del+1);
        } else {
            code = s;
        }
        for (let i = 0; i < code.length; i = i + 2){
            if(code.slice(i,i+2) == "10") {
                res = res + ".";
            } else if(code.slice(i,i+2) == "11") {
                res = res + "-";
            }
        }
        return MORSE_TABLE[res];
        /*return code;*/
    } 

    for (let i=0; i < count; i ++){
        sym = expr.slice(0,10);
        expr = expr.replace(sym, ""); 
        res = res + convert(sym);
    }

    return res;
/*    let expr1="hello word";
    let  str ="";
    let convert = (c) => {
        let s = "";
        let = ss = "";;
        for(let i = 0; i < c.length; i++ ){
            if (c == "."){
                s = s + "10";
            }else{
                s = s + "11";
            } 
        }
        if (s.length < 10) {
            for(let j=0; j < 10 - s.length; j++){
                ss = ss + '0';
            }
        }
        return ss+s;
    } ;
    let morse = (sym) => {
        for (let key in MORSE_TABLE) {
            if (sym == MORSE_TABLE[key]) {
                return convert(key);
            }
        } 
    };
    for(let i = 0; i < expr1.length; i++ ){
        if (expr1[i]==' ') {
            str = str + "**********";
        } else {
            str = str + morse(expr1[i]); 
        }
    }
    return str;*/
}

module.exports = {
    decode
}