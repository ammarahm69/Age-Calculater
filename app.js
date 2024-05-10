function ageCalculate() {
    //Intialized variable 
    let month = document.getElementById('month');
    let date = document.getElementById('date');
    let year = document.getElementById('year');
    let para = document.getElementById('para')
    //Get inner values
    let selectedMonth = parseInt(month.value);
    let selectedDate = parseInt(date.value);
    let selectedYear = parseInt(year.value);
    //current date  
    let now = new Date();
    let currentYear = now.getFullYear();
    let currentMonth = now.getMonth() + 1;
    console.log(currentMonth);
    let currentDate = now.getDate();

    let age = currentYear - selectedYear;
    console.log(age + 'years');
    // let mon = currentMonth - selectedMonth;
    // console.log(mon + 'months');
    let dat = selectedDate - currentDate;
    let no = '+';
    if(dat <= 0){
        no+=dat
    }else{
        dat+=dat
    }
    para.innerText= `Your age is ${age} year${dat} days  `;
    para.style.color='black';
    para.style.fontSize='28px';
    para.style.position='relative';
    para.style.left='2%';
    para.style.top='30%';
    para.style.backgroundColor='yellow';
    para.style.textAlign='center'
}




