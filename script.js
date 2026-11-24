// prop() function
function prop(id) {
    return document.getElementById(id).value;
}

// Store student details
let students = JSON.parse(localStorage.getItem("students")) || [];

// Display student details
function displayStudents() {
    let output = "";

    students.forEach((student, index) => {
        output += `
            <div class="student-card">
                <h3>${student.name}</h3>
                <p>Course: ${student.course}</p>
                <p>Faculty: ${student.faculty}</p>
                <button class="delete-btn"
                onclick="deleteStudent(${index})">
                Delete
                </button>
            </div>
        `;
    });

    document.getElementById("studentList").innerHTML = output;
}

// Save student details
document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let student = {
        name: prop("name"),
        course: prop("course"),
        faculty: prop("faculty")
    };

    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    document.getElementById("studentForm").reset();

    displayStudents();
});

// Delete student details
function deleteStudent(index) {
    students.splice(index, 1);

    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();
}

// Show saved records
displayStudents();