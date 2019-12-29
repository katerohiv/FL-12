const userEmail = 'user@gmail.com';
const adminEmail = 'admin@gmail.com';
const minEmailLength = 5;
const emptyString = 0;
const userPass = `UserPass`;
const adminPass = `AdminPass`;


let userName = prompt(`Please enter your e-mail`);
if (userName === null || userName.length === emptyString) {
    alert(`Canceled`);
} else if (userName.length < minEmailLength) {
    alert(`I don't know any emails having name length less than 5 symbols`);
} else if (userName === userEmail || userName === adminEmail) {
    let password = prompt(`Please enter your password`);
    if (password.length === emptyString || password === null) {
        alert(`Canceled`);
    } else if (password === userPass || password === adminPass) {
        let answer = confirm(`Do you want to change the password`);
        if (answer === false) {
            alert(`You have failed the change`)
        } else {
            let oldPassword = prompt(`Please enter your old password`);
            if (oldPassword === password || oldPassword === password) {
                let newPassword = prompt(`Please enter a new password`);
                if (newPassword === null || newPassword.length === emptyString) {
                    alert(`Canceled`);
                } else if (newPassword.length >= 6){
                    let reNewPassword = prompt (`Please enter a new password again`);
                    if ( reNewPassword === newPassword) {
                        alert (`You have successfully changed your password.`)
                    }
                    else {
                        alert(`You wrote the wrong password.`)
                    }
                } else {
                    alert (`It’s too short password. Sorry.`)
                }
            }
            else {
                alert (`Wrong password`)
            }
        }
    } else {
        alert(`Wrong password`)
    }
} else {
    alert(`I don’t know you`);
}
// let response = confirm(`Do you want to change your password?`);
// if (response === false) {
//     alert(`You have failed the change.`);
// } else if (response === true) {
//     let pass = prompt(`Please enter your old password`);
//       if (pass.lenght === 0 || pass === null) {
//         alert(`Canceled`);
//       } else if (userEmail !== passUser || adminEmail !== passAdmin) {
//         alert(`Wrong password`);
//     }
// }
