# Dev Stack Builder

A modern and responsive web application designed for developers to explore technologies, build custom technology stacks, and manage development tools efficiently.

The application provides an interactive technology grid where users can browse technologies by category, view difficulty levels and metadata, and create their own personalized development stack.

## Live Demo and Repository

* Live Website: https://jannat056.github.io/dev-stack-builder/
* GitHub Repository: https://github.com/jannat056/dev-stack-builder.git

## Features

### Interactive Technology Grid

* Browse a curated collection of development technologies.
* Technologies are organized into categories such as Frontend, Backend, Database, DevOps, and more.
* View technology information including difficulty ratings and metadata.
* Responsive card-based interface for a better browsing experience.

### Dynamic Stack Builder

* Add technologies to a personalized development stack.
* Prevent duplicate technologies from being added.
* Remove technologies from the custom stack.
* View the selected stack in real time.
* Display an empty-state message when no technologies are selected.

### Responsive Notifications

* Integrated with React-Toastify for user feedback.
* Notifications are displayed for important user actions.
* Provides clear feedback when technologies are added, removed, or duplicated.

### Loading States

* Displays loading indicators while technology data is being retrieved.
* Provides a better user experience during data loading.

### Responsive Design

* Fully responsive layout.
* Optimized for desktop, tablet, and mobile devices.
* Built using Tailwind CSS and DaisyUI.

## Technology Stack

| Technology        | Purpose                     |
| ----------------- | --------------------------- |
| React.js          | Frontend library            |
| Vite              | Development and build tool  |
| JavaScript (ES6+) | Programming language        |
| Tailwind CSS      | Utility-first CSS framework |
| DaisyUI           | UI component library        |
| React-Toastify    | Notification system         |
| Local JSON        | Data source                 |

## Data Source

The application uses a local JSON file as its technology data source.

Using local JSON keeps the project simple, fast, and easy to maintain without requiring an external backend or database.

# React Concepts and Technical Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax extension for JavaScript that allows developers to write HTML-like structures directly inside JavaScript code.

It is used in React because it makes UI development easier and more readable. JSX also allows developers to combine JavaScript logic with UI markup, making it convenient to create dynamic and interactive interfaces.

## 2. What is the difference between props and state?

### Props

Props are read-only values passed from a parent component to a child component.

They are mainly used to:

* Pass data between components.
* Configure child components.
* Display dynamic information.

Props should not be directly modified by the receiving component.

### State

State is data managed internally by a component.

It can change over time based on user interactions or application events.

In this project, state is used to manage the technologies selected by the user.

In short:

* Props: Data passed from parent to child.
* State: Data managed and changed inside a component.

## 3. What does the useState hook do, and where did you use it in this project?

The `useState` hook allows functional components to create and manage local state in React.

In this project, `useState` is used to:

* Track the technologies selected by the user.
* Manage loading states.
* Control different UI states.
* Update the stack dynamically when technologies are added or removed.

Example:

```javascript
const [selectedTech, setSelectedTech] = useState([]);
```

Here, `selectedTech` stores the selected technologies, while `setSelectedTech` is used to update the state.

## 4. What does the useEffect hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used to perform side effects in functional React components.

Common examples of side effects include:

* Fetching data.
* Subscribing to events.
* Updating external systems.
* Working with browser APIs.

In this project, `useEffect` is used to load the technology data from the local JSON source when the component is mounted.

This ensures that the data-loading operation happens at the appropriate time without causing unnecessary or infinite re-renders.

Example:

```javascript
useEffect(() => {
  // Load technology data
}, []);
```

The empty dependency array ensures that the effect runs when the component initially mounts.

## 5. Why does every item in a .map() list need a unique key prop?

React requires a unique `key` prop when rendering lists using `.map()`.

The key helps React identify individual elements and determine which items have:

* Changed.
* Been added.
* Been removed.

This allows React to update the UI efficiently instead of unnecessarily re-rendering every item in the list.

Example:

```javascript
technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))
```

Using a unique ID as the key is preferred because it provides stable identification for each item.

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI elements depending on a specific condition.

In this project, conditional rendering is used in the custom stack panel.

When the user has not selected any technology, an empty-stack message is displayed. Once technologies are selected, the selected technology list is displayed instead.

Example:

```javascript
{selectedTech.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  selectedTech.map((tech) => (
    <StackItem key={tech.id} technology={tech} />
  ))
)}
```

This allows the interface to respond dynamically to the current application state.

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

### Parent to Child

A parent component passes data to a child component using props.

Example:

```javascript
<TechnologyCard technology={technology} />
```

Here, the `technology` data is passed from the parent component to the `TechnologyCard` component.

### Child to Parent

A child component can communicate with its parent by receiving a callback function through props.

The child can then call that function and pass data back to the parent.

Example:

```javascript
<TechnologyCard
  technology={technology}
  onAdd={handleAddTechnology}
/>
```

The child component can then call:

```javascript
onAdd(technology);
```

This allows the parent component to update its state based on an action performed inside the child component.

In short:

* Parent to Child: Props.
* Child to Parent: Callback function passed through props.

## Project Structure

```text
dev-stack-builder/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Installation and Setup

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/jannat056/dev-stack-builder.git
```

### 2. Navigate to the project directory

```bash
cd dev-stack-builder
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will then be available on the local development server provided by Vite.

## Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Deployment

The project is deployed using GitHub Pages.

### Live Website

https://jannat056.github.io/dev-stack-builder/

### GitHub Repository

https://github.com/jannat056/dev-stack-builder.git

## Project Goals

The main goals of this project are to:

* Practice React component-based architecture.
* Understand state management using React Hooks.
* Work with local JSON data.
* Practice parent-child component communication.
* Implement dynamic UI updates.
* Build responsive interfaces using Tailwind CSS.
* Implement user feedback using React-Toastify.
* Develop a practical developer-focused web application.

## Author

Jannat

Statistics Student and Web Development Learner

### Project Links

* Live Project: https://jannat056.github.io/dev-stack-builder/
* GitHub Repository: https://github.com/jannat056/dev-stack-builder.git

## License

This project is created for educational and development purposes.
