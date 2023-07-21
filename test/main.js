
// function divideNumbers(a, b) {
//     try {
//       if (b === 0) {
//         throw new Error("Division by zero is not allowed.");
//       }
//       return a / b;

//     } catch (error) {
      
//       console.error("An error occurred:", error.message);
      
      
//       return "Error occurred during division.";
//     }
//   }

//   console.log(`this first try ${divideNumbers(10, 2)}`); 
//   console.log(divideNumbers(8, 0)); 
 
//     var name="Baidaa alkhalaf ";
//     var newn = name.replace(/Alkhalaf/i,"Ali")
//     document.write(newn+"<br>");
  
//     var str="Is this all there is";
//     var count=(/is/g);
//     var m=str.match(count);
//     document.write(m+'<br>');

//     var str="Is this all there is";
//     var count=(/is$/m);
//     var m=str.match(count);
//     document.write(m+"<br>");

//     var str="Is this all there is";
//     var count=(/[ial]/g);
//     var m=str.match(count);
//     document.write(m+"<br>");
    

//     var num="123456789"
//     var count =(/[1-5]/g);
//     var m=num.match(count);
//     document.write(m+"<br>");


//     var str="baidaa 26years";
//     var count=(/\d/g);
//     var m=str.match(count);
//     document.write(m+"<br>");
//     console.log(m);

//  var str="baidaa ali";
//     var count=(/\s/g);
//     var m=str.match(count);
//     document.write(m+"<br>");
//     var str="Is this all there is";
//     var count=(/is\b/g);
//     var m=str.search(count);
//     document.write(m+"<br>");

//     const text = "I have 123 apples and 456 oranges.";
//     const regex= /\d+/gi; 


//     const numbers = text.re(regex);
//     console.log(numbers); 


    function validateForm() {
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const birthdate = document.getElementById('birthdate').value;
      const email = document.getElementById('email').value;
      const confirmEmail = document.getElementById('confirmEmail').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
      const mobile = document.getElementById('mobile').value;

      const nameRegex = /^[A-Za-z]+$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d{2,})(?=.*[\W_]).{8,32}$/;

      // Check first name
      if (!nameRegex.test(firstName)) {
        document.getElementById('firstNameError').textContent = 'First name should contain only letters.';
        return false;
      } else {
        document.getElementById('firstNameError').textContent = '';
      }

      // Check last name
      if (!nameRegex.test(lastName)) {
        document.getElementById('lastNameError').textContent = 'Last name should contain only letters.';
        return false;
      } else {
        document.getElementById('lastNameError').textContent = '';
      }

      // Check birth date (You can add more advanced date validation here)
      if (!birthdate) {
        document.getElementById('birthdateError').textContent = 'Please enter your birth date.';
        return false;
      } else {
        document.getElementById('birthdateError').textContent = '';
      }

      // Check email
      if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format.';
        return false;
      } else {
        document.getElementById('emailError').textContent = '';
      }

      // Confirm email
      if (email !== confirmEmail) {
        document.getElementById('confirmEmailError').textContent = 'Emails do not match.';
        return false;
      } else {
        document.getElementById('confirmEmailError').textContent = '';
      }

      // Check password
      if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must start with a capital letter, contain at least two numbers, one special character, and be between 8 and 32 characters long.';
        return false;
      } else {
        document.getElementById('passwordError').textContent = '';
      }

      // Confirm password
      if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        return false;
      } else {
        document.getElementById('confirmPasswordError').textContent = '';
      }

      // Check mobile number
      if (mobile.length !== 10 || isNaN(mobile)) {
        document.getElementById('mobileError').textContent = 'Mobile number should be 10 numbers.';
        return false;
      } else {
        document.getElementById('mobileError').textContent = '';
      }

      // Form is valid, continue with registration process
      // Your registration logic here...

      return true;
   
    }


    


