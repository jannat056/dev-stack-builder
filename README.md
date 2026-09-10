Dev Stack Builder

A modern web application designed for developers to explore technologies, build custom tech stacks, and manage development tools efficiently.

Features

- Interactive Technology Grid: Browse through a curated collection of technologies categorized by Frontend, Backend, Database, DevOps, and more, complete with difficulty ratings and metadata.
- Dynamic Stack Builder: Seamlessly add desired technologies to a custom stack panel with real-time duplicate prevention and item management capabilities.
- Responsive Notifications and Loading States: Integrated with React-Toastify for user feedback alerts, complemented by responsive loading states during data retrieval operations.

Technology Stack

- Frontend Library: React.js (Vite)
- Styling Framework: Tailwind CSS, DaisyUI
- Notification System: React-Toastify
- Language: JavaScript (ES6+)
- Data Source: Local JSON

React Concepts and Technical Answers

1. What is JSX, and why is it used in React?
JSX is a syntax extension for JavaScript that allows developers to write HTML structures directly within JavaScript code. It is used in React because it simplifies UI creation, improves code readability, and allows developers to leverage the full power of JavaScript alongside UI markup.

2. What is the difference between props and state?
- Props: Immutable, read-only data passed from parent components to child components to configure or display information.
- State: Mutable, internal data managed within a component that changes over time in response to user interactions or events.

3. What does the useState hook do, and where did you use it in this project?
The useState hook enables functional components to manage local state. In this project, it was utilized to track selected technologies in the user stack, manage loading indicators, and control component UI visibility states.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
The useEffect hook allows functional components to perform side effects such as data fetching, subscriptions, or direct DOM manipulation. It was necessary to asynchronously fetch the technology JSON data upon component mount while preventing infinite rendering loops.

5. Why does every item in a .map() list need a unique key prop?
A unique key prop helps React identify which items have changed, been added, or been removed. This optimizes rendering performance by enabling React to precisely update only the modified elements rather than re-rendering the entire list.

6. What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering is the practice of displaying different UI elements based on specific conditions using operators like ternary or logical operators. An example in this project is toggling between the empty state message and the active item list inside the stack panel.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
- Parent to Child: Data is passed downward as properties through component attributes.
- Child to Parent: The parent passes a callback function down via properties, which the child invokes with data as arguments to communicate updates back to the parent component.