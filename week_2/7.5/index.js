const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const input = $$('input')
const checkboxes = $$('.checkbox')
const radios = $$('.radio')

const inputName = $('#name')
const inputMail = $('#mail')
const inputBirthday = $('#birthday')
const inputUsername = $('#username')
const inputPassword = $('#password')
const inputConfirmPass = $('#confirm-password')
const textarea = $('textarea')

const validateName = $('.name-message-error')
const validateEmail = $('.mail-message-error')
const validateBirthday = $('.birthday-message-error')
const validateUsername = $('.username-message-error')
const validatePassword = $('.password-message-error')
const validateGender = $('.gender-message-error')
const validateCourse = $('.course-message-error')
const validateConfirmPass = $('.confirmpass-message-error')

inputName.focus()

for(let i=0; i<input.length;i++) {
    input[i].addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            if(i===(input.length-1)){
                textarea.focus()
                return
            } 
        input[i+1].focus()
        }
    })
}

const onValidateName = () => {
    inputName.value = inputName.value.trim()
    inputName.value = inputName.value.charAt(0).toUpperCase() + inputName.value.slice(1)
}   

const onValidateEmail = () => {
    const mailFormat = /\S+@\S+\.\S+/
    if(mailFormat.test(inputMail.value)) return
    validateEmail.innerHTML = 'Định dạng email không chính xác'
}

inputBirthday.addEventListener('keyup', function (event) {
    if(/[^\d]/.test(event.key) && event.keyCode!=13) {
        inputBirthday.value = inputBirthday.value.slice(0,-1)
    };

    if(inputBirthday.value.length == 2 || inputBirthday.value.length == 5) {
        inputBirthday.value = inputBirthday.value + '/'
    }
})

const onValidateBirthday = () => {
    inputBirthday.value
}

const onValidatePassword = () => {
    if(inputPassword.value !== inputConfirmPass.value) validateConfirmPass.innerHTML = "Mật khẩu nhập lại không khớp!"
}

const onSubmit = () => {
    let isCheckedRadio = false
    let isCheckedCheckbox = false

    inputName.value ? validateName.innerHTML = '' : validateName.innerHTML = 'Vui lòng nhập họ tên!'
    inputBirthday.value ? validateBirthday.innerHTML = '' : validateBirthday.innerHTML = 'Vui lòng nhập ngày sinh!'
    inputMail.value ? validateEmail.innerHTML = '' :  validateEmail.innerHTML = 'Vui lòng nhập email!'
    inputUsername.value ? validateUsername.innerHTML = '' : validateUsername.innerHTML = 'Vui lòng nhập tên sử dụng!'
    inputPassword.value ? validatePassword.innerHTML = '' : validatePassword.innerHTML = 'Vui lòng nhập mật khẩu!'
    inputConfirmPass.value ? validatePassword.innerHTML = '' : validateConfirmPass.innerHTML = 'Vui lòng nhập xác nhận mật khẩu!'
    radios.forEach(radio => {
        if(radio.checked) isCheckedRadio = true
    })
    isCheckedRadio ? validateGender.innerHTML = '' : validateGender.innerHTML = 'Vui lòng chọn giới tính!'

    checkboxes.forEach(checkbox => {
        if(checkbox.checked) isCheckedCheckbox = true
    })
    isCheckedCheckbox ? validateCourse.innerHTML = '' : validateCourse.innerHTML = 'Vui lòng chọn khóa học'
}