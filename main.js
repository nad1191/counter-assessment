let result = document.getElementById('counter');

function up(max){
    document.getElementById('number').value = 
    parseInt(document.getElementById('number').value) +1;
    if (document.getElementById('number').value >= parseInt(max)){
        document.getElementById('number').value = max;
    }
    let resultTwo = parseInt(counter.innerText) + parseInt(number.value);
    result.innerText = resultTwo;
    if (result < 0){
        result.style.color ='red';
    }else{
        result.style.color ='black';
    }
}

function down(min){
    document.getElementById('number').value = 
    parseInt(document.getElementById('number').value) - 1;
    if (document.getElementById('number').value <= parseInt(min)){
        document.getElementById('number').value = min;
    }
    let resultTwo = parseInt(counter.innerText) + parseInt(number.value);
    result.innerText = resultTwo;
    if (result.innerText < 0){
                result.style.color ='red';
            }else{
                result.style.color ='black';
            }
}




