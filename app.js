// toggle effect
let styles = [

    {
        body: "hsl(222, 26%, 31%)",
        text : "hsl(198, 20%, 13%)",
        screen: "hsl(224, 36%, 15%)",
        btnBody: "hsl(223, 31%, 20%)",
        button: "hsl(30, 25%, 89%)",
        btnBorder:"5px solid hsl(28, 16%, 65%)",
        delColor: "hsl(225, 21%, 49%)",
        delShadow: "5px solid hsl(224, 28%, 35%)",
        eq: "hsl(6, 63%, 50%)",
        eqShadow: "5px solid  hsl(6, 70%, 34%)",
        eqText:"hsl(30, 25%, 89%)",
        left: "5px",
        pText: 'hsl(0, 0%, 93%)',
        clr :'hsl(0, 0%, 93%)'
    },  
{
    body: "hsl(0, 0%, 90%)",
    text : "hsl(0, 0, 100%)",
    screen: "hsl(0, 0%, 93%)",
    btnBody: "hsl(0, 5%, 81%)",
    button: "hsl(45, 7%, 89%)",
    btnBorder:"5px solid hsl(28, 16%, 65%)",
    delColor: "hsl(185, 42%, 37%)",
    delShadow: "5px solid hsl(185, 58%, 25%)",
    eq: "hsl(25, 98%, 40%)",
    eqShadow: "5px solid hsl(25, 99%, 27%)",
    eqText:"hsl(45, 7%, 89%)",
    left: "28px",
    pText: 'hsl(198, 20%, 13%)',
    clr :'hsl(0, 0%, 93%)'
    
},
    
{
    body: "hsl(268, 75%, 9%)",
    text : "hsl(52, 100%, 62%)",
    screen: "hsl(268, 71%, 12%)",
    btnBody: "hsl(268, 71%, 12%)",
    button: "hsl(268, 47%, 21%)",
    btnBorder:"5px solid hsl(290, 70%, 36%)",
    delColor: "hsl(290, 70%, 36%)",
    delShadow: "5px solid hsl(285, 91%, 52%)",
    eq: "hsl(176, 100%, 44%)",
    eqShadow: " 5px solid hsl(177, 92%, 70%)",
    eqText:"hsl(198, 20%, 13%)",
    left: "55px",
    pText: 'hsl(52, 100%, 62%)',
    clr :'hsl(198, 20%, 13%)'
},
] 


let count = 0; // to determine the theme to display
let toggle = document.querySelector('.toggle-container');
let icon = document.querySelector('.toggle-icon')
let text = document.querySelector('#result')
toggle.addEventListener("click", ()=>{
    count++;
    if(count > 2){
        count = 0;
        changeTheme(count, styles)

    }
    else if(count == 1){
        changeTheme(count, styles)
        

    }
    else if(count == 2){
        changeTheme(count, styles)
    }
    
})


let screen = document.querySelector('.screen');
let btnContainer = document.querySelector('.button-container');
let shortBtn = document.querySelectorAll('.short')
let del = document.getElementById('del')
let reset = document.getElementById('reset');
let equalsTo = document.getElementById('equals')
let body = document.querySelector('body');
let para = document.querySelectorAll('p')
let link = document.querySelectorAll('a')


// Theme changer
function changeTheme(count, styles){
    document.body.style.backgroundColor = styles[count].body;
    screen.style.backgroundColor = styles[count].screen;
    btnContainer.style.backgroundColor = styles[count].btnBody;
    shortBtn.forEach((e) => {
        e.style.backgroundColor = styles[count].button;
        e.style.borderBottom = styles[count].btnBorder;
        e.style.color = styles[count].text;

    })
    para.forEach((p) => {
        p.style.color = styles[count].pText;
    });
    text.style.color = styles[count].pText;
    del.style.backgroundColor = styles[count].delColor;
    del.style.borderBottom = styles[count].delShadow;
    reset.style.backgroundColor = styles[count].delColor;
    reset.style.borderBottom = styles[count].delShadow;
    equalsTo.style.backgroundColor =styles[count].eq;
    equalsTo.style.borderBottom = styles[count].eqShadow;
    equalsTo.style.color = styles[count].clr
    icon.style.left = styles[count].left;
    icon.style.backgroundColor = styles[count].eq;
    toggle.style.backgroundColor = styles[count].btnBody;
    link.style.color = styles[count].text

}

//Class based calculator
function Calculator(op1, op2){
    this.op1 = op1;
    this.op2 = op2;
    this.result = 0;

    this.add = function(){
        this.result = this.op1 + this.op2;
        return this.result
    };

    this.sub = function(){
        this.result= this.op1 - this.op2;
        return this.result
    };
    this.multiply = function(){
        this.result= this.op1 * this.op2;
        return this.result
    };
    this.divide = function(){
        this.result= this.op1 / this.op2;
        return this.result
    }

}
let input = '';
let btnClick = document.querySelectorAll('input');
 
// listening for the value clicked
btnClick.forEach(e => {
    e.addEventListener("click", (e)=>{   
        if(e.currentTarget.value == 'DEL'){   // deleting digits from input
            if(input == ''){
                input = 0;
                text.textContent = input;
            }
            else{
                input = input.slice(0, -1);
                text.textContent = input;
            }
        }
        else if(e.currentTarget.value == 'RESET'){ // reseting digit back to zero
            input = '';
            text.textContent = "0";
        }
        else if(e.currentTarget.value == "="){
            if(input == "0" ||  input == ''){
                input = "0";
                text.textContent = input
            }
            else{
                input = performCalc(input)
                text.textContent = input
            }
            
        }

        else{
            input += e.currentTarget.value;
            text.textContent = input;
        }
        
    })
})

// function to perform basic calculations
function performCalc(str){
    let sym = ['X', '+', '-', '/']; //operator
    let leftOp, rightOp, operator; // operands & operators
    sym.forEach(s => {   // this checks which of the operator exist in input
        if(str.includes(s)){
            // assigning operands and operators
            leftOp = str.slice(0, str.indexOf(s));
            rightOp = str.slice(str.indexOf(s) + 1);
            operator = s;
        }
    })
    // instance of my calculator
    let myCalc = new Calculator(Number(leftOp), Number(rightOp));
    // test to determine operation to be performed.
    if(operator == "+"){
        return String(myCalc.add())
    }
    else if(operator == "-"){
        return String(myCalc.sub())
    }
    else if(operator == "X"){
        let answer = String(myCalc.multiply())
        if(answer.length > 10){
            return answer.slice(0, 4)
        }
        else{
            return answer
        }
    }
    else if(operator == "/"){
        let answer = String(myCalc.divide())
        if(answer.length > 10){
            return answer.slice(0, 4)
        }
        else{
            return answer
        }
        
    }
}

