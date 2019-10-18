// Functional
// Jeff. I am still very lost on OOP and FP. I admit, I should have said something earlier. 
// When you were going over the assignment, I had no idea what you were talking about. 
// I ended up having to scrap what I was doing, and start from scratch at the last minute.
// I didn't know what you were looking for, and where I was supposed to begin.
// Again, I now realize I should've spoken up sooner. I will make sure to speak up next time so that this doesn't happen again.
// I will continue to study OOP and FP, and work on this assignment outside of class hours.


user = new User(email, password, passwordConfirmation)
function signUp(user){
    email = prompt('Please enter your email')
        if(email != null){
            console.log('Email successfully created')
        }
    password = prompt('Please create a new password')
        if(password != null){
            console.log('Password successfully created')
        }
    passwordConfirmation = prompt('Re-enter your password for confirmation')
        if(passwordConfirmation != null && passwordConfirmation === password){
            console.log('Passwords match')
        }
    
}
signIn(user)
signOut(user)
changePassword(previous, next, user)




// Object Oriented
// user = new User(email:, password:, passwordConfirmation:)
//     user.signUp()
//     user.signIn()
//     user.signOut()
//     user.changePassword(previous:, next:)