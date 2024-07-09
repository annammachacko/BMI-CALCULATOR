function calculateBMI() {
    // To get input values
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value) / 100; // convert height to meters
    var gender = document.querySelector('input[name="gender"]:checked');

    // validating all fields
    if (isNaN(weight) || isNaN(height) || !gender) {
        alert("Please enter all fields.");
        return;
    }

    // Calculate BMI
    var bmi = weight / (height * height);

    document.getElementById('bmiValue').textContent = bmi.toFixed(1);

    var bmiCategory;
    if (bmi < 18.5) {
        bmiCategory = "Under Weight";
    } else if (bmi < 24.9) {
        bmiCategory = "Normal Weight";
    } else if (bmi < 29.9) {
        bmiCategory = "Over Weight";
    } else {
        bmiCategory = "Obese";
    }

    // To give styles for the result
    var bmiCategoryElement = document.getElementById('bmiCategory')
    bmiCategoryElement.textContent = bmiCategory
    bmiCategoryElement.className = ""
    if (bmiCategory === "Under Weight") {
        bmiCategoryElement.classList.add("underWeight")
    } else if (bmiCategory === "Normal Weight") {
        bmiCategoryElement.classList.add("normalWeight")
    } else if (bmiCategory === "Over Weight") {
        bmiCategoryElement.classList.add("overWeight")
    } else {
        bmiCategoryElement.classList.add("obese")
    }
}
function reset() {
    // Clear input fields and result
    document.getElementById('male').checked = false;
    document.getElementById('female').checked = false;
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('bmiValue').textContent = '';
    document.getElementById('bmiCategory').textContent = '';
}
