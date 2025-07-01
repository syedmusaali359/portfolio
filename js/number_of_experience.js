document.addEventListener("DOMContentLoaded", function() {
    // Function to calculate years of experience with decimal precision
    function calculateExperience(startDate) {
        const today = new Date();
        const start = new Date(startDate);
        
        // Calculate difference in years, including fractional years (months/days)
        const years = today.getFullYear() - start.getFullYear();
        const months = today.getMonth() - start.getMonth();
        const days = today.getDate() - start.getDate();
        
        // If the month or day hasn't passed yet, subtract one year and adjust months accordingly
        let experience = years + (months / 12) + (days / 365);
        
        // Round to 1 decimal place
        return experience.toFixed(1);
    }

    // Set the start date of your professional career
    const startDate = '2021-04-04'; // 4th April 2021

    // Calculate the years of experience
    const experience = calculateExperience(startDate);

    // Update the experience in the HTML
    document.getElementById('experience-years').innerText = experience;
});
