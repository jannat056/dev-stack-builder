# Dev Stack Builder

A modern, responsive web application designed for developers to explore technologies, build custom technology stacks, and manage development tools efficiently.


## Live Demo and Repository

* **Live Website:** [https://jannat056.github.io/dev-stack-builder/](https://jannat056.github.io/dev-stack-builder/)
* **GitHub Repository:** [https://github.com/jannat056/dev-stack-builder.git](https://github.com/jannat056/dev-stack-builder.git)


## Features

### Interactive Technology Grid
* Browse a curated collection of development technologies.
* Technologies are organized into categories such as Frontend, Backend, Database, DevOps, and more.
* View technology information including difficulty ratings and metadata.
* Responsive card-based interface for an optimized browsing experience.

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
* Provides a seamless user experience during data fetching.

### Responsive Design
* Fully responsive layout.
* Optimized for desktop, tablet, and mobile devices.
* Built using Tailwind CSS and DaisyUI.


## Technology Stack

| Technology        | Purpose                     |
| React.js          | Frontend library            |
| Vite              | Development and build tool  |
| JavaScript (ES6+) | Programming language        |
| Tailwind CSS      | Utility-first CSS framework |
| DaisyUI           | UI component library        |
| React-Toastify    | Notification system         |
| Local JSON        | Data source                 |



## Data Source

The application uses a local JSON file as its technology data source. Using local JSON keeps the project simple, fast, and easy to maintain without requiring an external backend or database.



## Project Structure

```text
dev-stack-builder/
│
├── public/
│   ├── assets/
│   └── technologies.json
│
├── src/
│   ├── Banner.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── TechnologyCard.jsx
│   ├── TechnologySection.jsx
│   ├── YourStack.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js


## Installation and Setup

Follow these steps to get the project up and running on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/jannat056/dev-stack-builder.git
```

### 2. Navigate to the Project Directory

```bash
cd dev-stack-builder
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

## Build and Deployment

### Build for Production

To create an optimized production build, run:

```bash
npm run build
```

### Preview Production Build

To preview the production build locally before deploying:

```bash
npm run preview
```

### Deployment

This project is configured to be deployed using **GitHub Pages**.

## React Concepts and Technical Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax extension for JavaScript that allows developers to write HTML-like structures directly inside JavaScript code.

It is used in React because it makes UI development more intuitive and readable. JSX allows developers to combine JavaScript logic with UI markup, making it easier to build dynamic and interactive user interfaces.

### 2. What is the difference between props and state?

#### Props

Props, short for properties, are read-only values passed from a parent component to a child component. They are primarily used to:

* Pass data between components.
* Configure child components.
* Display dynamic information.

Props should not be directly modified by the receiving child component.

#### State

State represents data managed inside a React component. It can change over time based on user interactions, API responses, or application events.

In this project, state is used to manage the technologies selected by the user for their custom stack.

**Summary:**

* **Props:** Data passed from parent to child.
* **State:** Data managed and updated inside a component.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook is a React Hook that allows functional components to create and manage local state.

In this project, `useState` is used to:

* Track the technologies selected by the user.
* Manage UI states.
* Control conditional UI rendering.
* Dynamically update the selected technology stack when items are added or removed.

**Example:**

```javascript
const [selectedTech, setSelectedTech] = useState([]);
```

Here, `selectedTech` stores the current array of selected technologies, while `setSelectedTech` is used to update that state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook allows functional React components to perform side effects.

Common use cases include:

* Fetching data.
* Subscribing to event listeners.
* Interacting with browser APIs.

In this project, `useEffect` is used to load the technology data from the local JSON file when the component initially mounts.

**Example:**

```javascript
useEffect(() => {
  // Logic to load technology data goes here
}, []);
```

The empty dependency array (`[]`) ensures that the effect runs once when the component is initially mounted.

### 5. Why does every item in a `.map()` list need a unique key prop?

When rendering lists using `.map()`, each item should have a unique `key` prop.

The `key` serves as a unique identifier that helps React determine which items have:

* Changed.
* Been added.
* Been removed.

A stable and unique `key` helps React update the UI efficiently.

**Example:**

```jsx
technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))
```

Using a unique ID such as `technology.id` is a good practice for stable list rendering.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering is the practice of displaying different UI elements based on specific conditions or application states.

In this project, conditional rendering is used within the custom stack panel. If the user has not selected any technologies, an empty-state message is displayed. Once technologies are selected, the selected technologies are displayed instead.

**Example:**

```jsx
{selectedTech.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  selectedTech.map((tech) => (
    <StackItem
      key={tech.id}
      technology={tech}
    />
  ))
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

#### Parent to Child

Data flows from a parent component to a child component through **props**.

**Example:**

```jsx
<TechnologyCard technology={technology} />
```

Here, the `technology` object is passed from the parent component to the `TechnologyCard` child component.

#### Child to Parent

A child component can send data back to its parent by receiving a **callback function** as a prop.

**Example:**

```jsx
<TechnologyCard
  onAdd={handleAddTechnology}
  technology={technology}
/>
```

Inside the child component, the callback can be triggered when an event occurs:

```javascript
onAdd(technology);
```

This allows the parent component to update its state based on actions performed inside the child component.

## Project Goals

The primary goals and learning objectives of this project include:

* Building a scalable React component structure.
* Learning and applying React Hooks.
* Managing application state using `useState`.
* Loading and rendering local JSON data.
* Establishing parent-to-child communication using props.
* Implementing child-to-parent communication using callback functions.
* Implementing conditional rendering.
* Creating dynamic and real-time UI updates.
* Building fully responsive layouts using Tailwind CSS.
* Enhancing user experience with React-Toastify.
* Developing a practical and developer-focused web application.

## Author

**Jannat**

*Web Development Learner*

## License

This project was created for educational and development purposes.

