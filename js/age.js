// Function to calculate age
function calculateAge(dob) {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// Set the date of birth
const dob = '1997-04-09'; // 9th April 1997

// Calculate the age
const age = calculateAge(dob);

// Update the age in the HTML
document.getElementById('age').innerText = `${age} Years`;