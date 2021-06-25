# passwordgenerator-HW3
## HW2 by David Lucio

*JavaScript: Password Generator for UW Bootcamp*

>**UW Bootcamp Homework 03**<br/>
Create a password generator.

- When button is pushed...
  - User is prompted for password length (<span style="color:red">**X**</span>)

  - User is prompted what type of characters to include (<span style="color:red">**Y**</span>)

- System takes user input and calls 'generate' function
  - Function compiles list of all possible characters based on <span style="color:red">**Y**</span>

  - Function chooses random characters from list <span style="color:red">**X**</span> number of times

  - Function concatonates individual characters into string <span style="color:red">**Z**</span>

- Validator parses string <span style="color:red">**Z**</span> to ensure it meets parameters
    - <span style="color:red">**Z**</span> must be <span style="color:red">**X**</span> long

    - <span style="color:red">**Z**</span> must include *at least one* of each type <span style="color:red">**Y**</span>

    - If it doesn't meet these conditions, 'generate' is run again

- If validator approves password, 'generate' function returns Password

&nbsp;

*Assignment completed 6/24*: [Deployment Link](https://davidlucio.github.io/passwordgenerator-HW3/)

### **Screenshot of completed project:**
![First Iteration of Portfolio Page](./assets/images/screenshot_passwordgenerator-HW3.png)

**REPO**: https://github.com/davidlucio/passwordgenerator-HW3