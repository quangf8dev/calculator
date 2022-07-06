const keys = document.querySelector('.key');
const display = document.querySelector('.calculator__display')
const calculator = document.querySelector('.calculator')



keys.addEventListener('click',e => {
   
    if( e.target.matches('button') ){  // khi click vào button thi co event
    const key = e.target; // lay the button vua click vao
    const action = key.dataset.action; // lấy data cua attribute action
    const keycontent = key.textContent; // lấy số hoặc + - x / hay nội dung của button
    const displayNum = display.textContent; // lấy ra phần nội dung của output giúp thay đổi giá trị output
    
    
    
    Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed')); // nó xóa tât cả các trường hợp có is-depressed đi
    
    
    if(!action){
        if(display.textContent === '0' || calculator.dataset.previousKeyType === 'operator')
            display.textContent = keycontent;
        else{
            display.textContent = displayNum + keycontent;
        }
        calculator.dataset.previousKeyType = 'number';
    }
    
    if(
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'){
        console.log('operator key');
        key.classList.add('is-depressed');
        // Add custom attribute
        calculator.dataset.previousKeyType = 'operator';        
        calculator.dataset.firstValue = displayNum;
        calculator.dataset.operator = action;
        }
 // kiểm tra button là Number hay operator sau do add class is-depressed neu la operator va them previousKeyType = operator

     if (action === 'clear') {
        console.log('clear key!');
        display.textContent="0";
        calculator.dataset.previousKeyType = 'clear';
    }

    // if (displayNum === '0' || calculator.dataset.previousKeyType === 'operator') {
    //     display.textContent = keycontent;
    //     calculator.dataset.previousKeyType= ""; // xóa previousKeyType
    //     console.log( calculator.dataset.previousKeyType);
    // } else {
    //     display.textContent = displayNum + keycontent;
    //     calculator.dataset.previousKeyType= ""; // xoa previousKeyType
    // }
   
    if (action === 'calculate') {
        console.log('equal key!');
        const firstValue = calculator.dataset.firstValue;
        const operator = calculator.dataset.operator;
        const secondValue = displayNum;
        
        if(firstValue!= undefined && operator !=undefined){
            console.log(operator);
            console.log(display.textContent);
            display.textContent = calculate(firstValue, operator, secondValue);
            console.log(display.textContent);   
            calculator.dataset.previousKeyType = 'calculate';
        }
    }


    }
})

function calculate(firstNum,operator,secondNum){
    if(operator === 'add'){
        return parseFloat(firstNum) +parseFloat(secondNum) ;
    }
    if(operator === 'subtract'){
        console.log('subtract');
        return parseFloat(firstNum) - parseFloat(secondNum) ;
    }
    if(operator === 'multiply'){
        return parseFloat(firstNum) *parseFloat(secondNum) ;
    }
    if(operator === 'divide'){
        return parseFloat(firstNum) /parseFloat(secondNum) ;
    }
}