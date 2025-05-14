// ========== Create Login Form Dynamically ========== //
document.addEventListener('DOMContentLoaded', () => {
    // Create form structure
    const loginHTML = `
        <div class="login-container">
            <h2>Login</h2>
            <form id="loginForm">
                <div class="form-group">
                    <label for="username">Username or Email</label>
                    <input type="text" id="username" placeholder="Enter username/email" required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="Enter password" required>
                </div>
                <button type="submit">Login</button>
                <div id="errorMessage" class="error-message"></div>
            </form>
        </div>
    `;

    // Inject into the body (or a specific container)
    document.body.innerHTML += loginHTML;

    // Add basic styling
    const style = document.createElement('style');
    style.textContent = `
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: #f5f5f5;
        }
        .login-container {
            background: white;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px;
        }
        .form-group {
            margin-bottom: 1rem;
        }
        label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: bold;
        }
        input {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 1rem;
        }
        button {
            width: 100%;
            padding: 0.75rem;
            background: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 1rem;
            cursor: pointer;
        }
        button:hover {
            background: #0069d9;
        }
        .error-message {
            color: red;
            margin-top: 1rem;
            display: none;
        }
    `;
    document.head.appendChild(style);

    // ========== Login Logic ========== //
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');

    // Mock user database (replace with real API calls)
    const users = [
        { username: 'admin', email: 'admin@example.com', password: 'admin123' },
        { username: 'user', email: 'user@example.com', password: 'password123' }
    ];

    // Handle form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const usernameOrEmail = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Validate inputs
        if (!usernameOrEmail || !password) {
            showError('Username/Email and password are required!');
            return;
        }

        // Check credentials (replace with real auth)
        const user = users.find(u => 
            (u.username === usernameOrEmail || u.email === usernameOrEmail) && 
            u.password === password
        );

        if (user) {
            // Simulate successful login
            localStorage.setItem('currentUser', JSON.stringify(user));
            alert(`Welcome, ${user.username}! Redirecting...`);
            // window.location.href = '/dashboard.html'; // Uncomment for real redirect
        } else {
            showError('Invalid username or password!');
        }
    });

    // Show error message
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        setTimeout(() => errorMessage.style.display = 'none', 5000);
    }
});
