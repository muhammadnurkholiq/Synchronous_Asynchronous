const inputNumber = document.getElementById('inputNumber');

const outputOdd = document.getElementById('outputOdd');
const outputEven = document.getElementById('outputEven');

const synchronousBtn = document.getElementById('synchronousBtn');
const asynchronousBtn = document.getElementById('asynchronousBtn');

synchronousBtn.addEventListener("click", (e) => {

    if(inputNumber.value.length == 0){
        alert('Input Number is required')
        inputNumber.focus();
    } else {
        let odd = []
        let even = []
    
        for(let i = 1; i < inputNumber.value; i++) {
            if(i % 2 !== 0) {
                odd.push(i)
                oddString = odd.join(' ')
                outputOdd.innerHTML = oddString
            }
        }
    
        for(let i = 1; i < inputNumber.value; i++) {
            if(i % 2 === 0){
                even.push(i)
                evenString = even.join(' ')
                outputEven.innerHTML = evenString
            }
        }
    }
    
})

asynchronousBtn.addEventListener("click", (e) => {

    if(inputNumber.value.length == 0){
        alert('Input Number is required')
        inputNumber.focus();
    } else {
        let odd = []
        let even = []

        let i = 0
        setInterval(() => {
            if(i <= inputNumber.value)
                if(i % 2 !== 0) {
                    odd.push(i)
                    oddString = odd.join(' ')
                    outputOdd.innerHTML = oddString
                }
            i++
        }, 300)

        let j = 0
        setInterval(() => {
            if(j <= inputNumber.value)
                if(j % 2 === 0){
                    even.push(j)
                    evenString = even.join(' ')
                    outputEven.innerHTML = evenString
                }
            j++
        }, 300)
    }
})