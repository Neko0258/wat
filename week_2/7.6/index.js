const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const students = [
    {
        name: 'Hoàng Thị Thảo',
        birthday: '23/6/1990',
        gender: false
    },
    {
        name: 'Ngô Mạnh Quân',
        birthday: '14/4/1992',
        gender: true
    },
    {
        name: 'Nguyễn Thanh Tùng',
        birthday: '27/9/1991',
        gender: true
    },
    {
        name: 'Hoàng Thị Ngân',
        birthday: '12/12/1992',
        gender: false
    },
]

const render = students.map((student, index) => {
    return `
        <tr>
            <td>
                <input type="checkbox" id="checkbox${index}" onchange="onChecked(this)"/>
            </td>
            <td onclick="selectedCheckbox('checkbox${index}')">${student.name}</td>
            <td onclick="selectedCheckbox('checkbox${index}')">${student.birthday}</td>
            <td onclick="selectedCheckbox('checkbox${index}')">${student.gender ? 'Nam' : 'Nữ'}</td>
        </tr>
    `
})

const selectedCheckbox = (id) => {
    $('#' + id).checked = !$('#' + id).checked
    onChecked($('#' + id))
}

const onChecked = (input) => {
    if($$('input').length -1 === $$('input:checked').length) {
        $('#check-all').checked = true
    }
    if(input.checked) {
        input.parentElement.parentElement.classList.add("checked");
    } else {
        $('#check-all').checked = false
        input.parentElement.parentElement.classList.remove("checked")
    }
}


render.unshift(`
    <tr>
        <th>
            <input type="checkbox" id="check-all">
        </th>
        <th>Họ tên</th>
        <th>Ngày sinh</th>
        <th>Giới tính</th>
    </tr>
`)
$('table').innerHTML = render.join("")

$('#check-all').addEventListener('change', () => {
    if($('#check-all').checked) {
        $$('input').forEach((input, index) => {
            if(index > 0) {
                input.checked = true
                input.parentElement.parentElement.classList.add("checked")
            }
        })
    }else {
        $$('input').forEach((input, index) => {
            if(index > 0) {
                input.checked = false
                input.parentElement.parentElement.classList.remove("checked")
            }
        })
    }
})

$$('tr').forEach((tr, index) => {

    if(index === 0) {
        tr.style.backgroundColor = 'aqua'
        return
    }

    if(index % 2 === 0) {
        tr.style.backgroundColor = 'gray'
    }else {
        const randomColor = Math.floor(Math.random()*16777215).toString(16)
        tr.style.backgroundColor = '#' + randomColor
    }

})






