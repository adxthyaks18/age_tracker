document.getElementById('calculate-btn').addEventListener('click', () => {
    const birthdateInput = document.getElementById('birthdate').value;
    if (!birthdateInput) return;

    const birthDate = new Date(birthdateInput);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    
    if (days < 0) {
        months--;
        
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days += previousMonth;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    
    document.getElementById('years').innerText = years;
    document.getElementById('months').innerText = months;
    document.getElementById('days').innerText = days;
});
