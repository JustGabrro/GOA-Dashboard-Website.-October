let role = '';
const students = [];

function submitForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const roleRadioButtons = document.getElementsByName('role');
    for (const radio of roleRadioButtons) {
        if (radio.checked) {
            role = radio.value;
            break;
        }
    }
    if (username && password) {
        document.getElementById('signup-container').classList.add('hidden');
        document.getElementById('dashboard-container').classList.remove('hidden');
        displayStudents();
    }
}

function addStudent() {
    document.getElementById('add-student-container').classList.remove('hidden');
}

function saveStudent() {
    const name = document.getElementById('student-name').value;
    const mothersName = document.getElementById('mothers-name').value;
    const facebook = document.getElementById('facebook').value;
    const age = document.getElementById('age').value;
    const groupLeader = document.getElementById('group-leader').checked;

    students.push({ name, mothersName, facebook, age, groupLeader });
    document.getElementById('student-name').value = '';
    document.getElementById('mothers-name').value = '';
    document.getElementById('facebook').value = '';
    document.getElementById('age').value = '';
    document.getElementById('group-leader').checked = false;

    displayStudents();
    document.getElementById('add-student-container').classList.add('hidden');
}

function cancelAdd() {
    document.getElementById('add-student-container').classList.add('hidden');
}

function displayStudents() {
    const tableBody = document.getElementById('student-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';
    students.forEach((student, index) => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = student.name;
        row.insertCell(1).textContent = student.mothersName;
        row.insertCell(2).textContent = student.facebook;
        row.insertCell(3).textContent = student.age;
        row.insertCell(4).textContent = student.groupLeader ? 'Yes' : 'No';
        const actionsCell = row.insertCell(5);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => {
            students.splice(index, 1);
            displayStudents();
        };
        actionsCell.appendChild(deleteButton);
    });
}
