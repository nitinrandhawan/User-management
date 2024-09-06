# User Management Application

This is a **User Management Application** built using React to perform CRUD (Create, Read, Update, Delete) operations. It uses the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) to simulate user management. The application provides a simple interface to fetch, create, update, and delete users, with responsive design and error handling.
## Click here for visiting [My Hosted User Management Website ](https://user-management-5.netlify.app/)
## Features

1. **Fetch Users**:
   - Fetch a list of users from the JSONPlaceholder API.
   - Display users in a list or table with details including:
     - Name
     - Email
     - Phone

2. **Create User**:
   - A form to create a new user.
   - Simulate user creation by sending a `POST` request to the JSONPlaceholder API.
   - Display the new user in the list upon submission.

3. **Update User**:
   - Each user has an "Edit" button.
   - Clicking "Edit" opens a form with pre-filled data.
   - Submit changes and simulate updating the user with a `PUT` request to the JSONPlaceholder API.

4. **Delete User**:
   - Each user has a "Delete" button.
   - Clicking "Delete" sends a `DELETE` request to the JSONPlaceholder API and removes the user from the list.

## Additional Requirements

- Built using **React functional components** and **React Hooks** (`useState`, `useEffect`).
- **React Router** is used for navigation between different views (home, user details, etc.).
- The layout is **responsive**, ensuring the app looks good on both desktop and mobile devices.
- **Error handling** is implemented, notifying users in case of API failures.
- Code is **well-commented** for better understanding and maintainability.
- User interactions are designed to be smooth and intuitive.

## Bonus Features

- A **loading spinner** or skeleton screen is displayed while waiting for API responses.
- The application can be extended with **TypeScript** for better type-checking and maintainability.

## Installation and Setup


  1. Clone the repository:
   ```bash
   git clone https://github.com/nitinrandhawan/User-management.git
   cd user-management-app
