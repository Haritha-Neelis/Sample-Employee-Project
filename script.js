document.addEventListener("DOMContentLoaded", function() {
    // Get the button after DOM is loaded
    const loadBtn = document.getElementById("loadEmployees");

    // Add click event listener
    loadBtn.addEventListener("click", fetchEmployees);

    function fetchEmployees() {
        fetch("http://localhost:8080/employees") // Your backend API
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok: " + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log("Employees fetched:", data); // Check console
                displayEmployees(data);
            })
            .catch(error => {
                console.error("Error fetching employees:", error);
                alert("Failed to load employees. Check console for details.");
            });
    }

    function displayEmployees(employees) {
        const table = document.getElementById("employeeTable");

        // Reset table but keep header
        table.innerHTML = `<tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
        </tr>`;

        // Add rows for each employee
        employees.forEach(emp => {
            const row = `<tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.role}</td>
            </tr>`;
            table.innerHTML += row;
        });
    }
});