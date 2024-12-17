document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("taskForm");
    const taskInput = document.getElementById("description");

    // Vorm submit event
    taskForm.addEventListener("submit", (e) => {
        const description = taskInput.value.trim();

        // Takistab tühjade ülesannete lisamist
        if (!description) {
            e.preventDefault();
            alert("Description can't be empty!");
        }
    });
});
