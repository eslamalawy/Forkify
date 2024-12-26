# Forkify

**Forkify** is a web application that allows users to search for recipes, view recipe details, and save favorite recipes. The application provides a clean and efficient way to discover and organize your culinary adventures. Built using the MVC (Model-View-Controller) design pattern, it offers a responsive, user-friendly interface for browsing recipes.

## Features

- **Search Recipes:** Allows users to search for recipes by ingredient or dish name.
- **Recipe Details:** View detailed information about a recipe, including ingredients, preparation steps, and more.
- **Save Favorite Recipes:** Users can save their favorite recipes for later reference.
- **Responsive Design:** The application is fully responsive and works on all device sizes, providing a seamless user experience.

## Technologies Used

- **HTML5:** Structures the application content and layout.
- **CSS3:** Provides styling for the application, ensuring a clean and modern design.
- **JavaScript (ES6+):** Handles the app logic, including API interactions and DOM manipulation.
- **MVC Pattern:** Organizes the code into Model, View, and Controller components for maintainability and scalability.
  - **Model:** Manages the data and business logic of the application.
  - **View:** Responsible for rendering the user interface and displaying data.
  - **Controller:** Coordinates user input, updates the model, and updates the view accordingly.
- **Fetch API:** Used to interact with external recipe data from an API (e.g., Spoonacular or Edamam).
- **LocalStorage:** Stores the user’s favorite recipes so that they persist across sessions.

## How It Works

### MVC Structure

1. **Model:** 
   - The Model is responsible for interacting with the data layer, including fetching recipe data and managing the state of the application.
   - It makes API calls to retrieve recipe information based on user queries and stores the data.

2. **View:**
   - The View is responsible for rendering the UI and displaying the recipe data. It updates dynamically based on the data from the Model.
   - It listens for user actions (e.g., clicks, form submissions) and triggers appropriate methods in the Controller.

3. **Controller:**
   - The Controller acts as the intermediary between the Model and View.
   - It listens for user actions and updates the View by calling the Model's methods to fetch or modify data.
   - For example, when a user searches for a recipe, the Controller handles the input, fetches the data from the Model, and updates the View to display the results.

### Example Usage

1. **Search for Recipes:** 
   - Type an ingredient or recipe name in the search bar.
   - The Controller calls the Model to fetch matching recipes from the API and updates the View with the results.

2. **View Recipe Details:**
   - Click on a recipe from the search results to view detailed information such as ingredients, cooking steps, and more.
   - The Controller updates the View with the recipe details.

3. **Save Favorite Recipes:**
   - After viewing a recipe, you can save it to your favorites.
   - The Model stores the saved recipes in **localStorage**, and the View is updated accordingly.

### Example Flow:

- **User Input:** Search query for "Pizza"
- **Controller:** Handles the input, calls the Model to fetch recipes from the API.
- **Model:** Makes the API call to fetch matching recipes and returns the data.
- **Controller:** Updates the View to display the recipes.
- **User Action:** Clicks on a recipe to view more details.
- **Controller:** Fetches recipe details from the Model and updates the View to display them.

## Live Demo

Experience the application firsthand: [![Netlify](https://img.shields.io/badge/Netlify-Deployed-blue?logo=netlify)](https://forkify-eslam.netlify.app/)

## Getting Started

To run the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/eslamalawy/Forkify.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd Forkify
   ```

3. **Install dependencies:**  
   ```bash
   npm install
   ```
   
4. **Start the development server:**  
   ```bash
   npm start
   ```

The application should load on ```http://localhost:1234```, and you can start searching for recipes e.g try search by 'pizza'.  

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests to enhance the application's features and design.
