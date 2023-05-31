import React from "react";
import Accordion from "./components/Accordion";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2 className="app">FAQs</h2>
      <Accordion title="What is React?">
        React is a JavaScript library used for building user interfaces,
        focusing on component-based development and efficient rendering through
        a virtual DOM
      </Accordion>
      <Accordion title="What skills should I look for in a React developer?">
        Proficiency in JavaScript, React, HTML, CSS, and related technologies.
        Experience with React ecosystem, testing frameworks, version control
        systems, and UI/UX principles is beneficial.
      </Accordion>
      <Accordion title="Can you explain the component lifecycle in React?">
        The component lifecycle consists of Mounting, Updating, and Unmounting
        phases. Each phase has specific methods that are called at different
        points in the component's lifecycle.
      </Accordion>
      <Accordion title="What are React Hooks?">
        React Hooks are functions that allow you to use state and other React
        features in functional components.
      </Accordion>
      <Accordion title="How do you test React components?">
        React components can be tested using frameworks like Jest and testing
        utilities like React Testing Library or Enzyme.
      </Accordion>
      <Accordion title="Can React be used for server-side rendering (SSR)?">
        Yes, React supports server-side rendering (SSR) through libraries like
        Next.js and Gatsby.js.
      </Accordion>
      <Accordion title="What is the significance of React's virtual DOM?">
        React's virtual DOM is a lightweight representation of the actual DOM,
        allowing for efficient updates and rendering of components.
      </Accordion>
      <Accordion title="How does React handle state management?">
        React provides tools like useState, Redux, and MobX for managing and
        updating the state of components.
      </Accordion>
      <Accordion title="What is JSX in React?">
        SX is a syntax extension in React that allows you to write HTML-like
        code within JavaScript.
      </Accordion>

      <Accordion title="Why do you want to learn React?">
        With the population of the 2 million
      </Accordion>
      <Accordion title="Introduce yourself">I am Tara</Accordion>
    </div>
  );
}

export default App;
