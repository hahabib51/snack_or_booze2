### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

  The react router provides client side rendering so that the page does not need to refresh for every request and the user experience is improved. This includes similar features as SSR, for example updating the url in the browser bar and browser history.

- What is a single page application?

  A single page application dynamically updates the data on the page without fetching and refreshing the entire page. 

- What are some differences between client side and server side routing?

  Client side routing is a better user experience, faster load speeds, and modern architecture. Server side routing loads the whole page, a bit slower in speeds, and has traditional architecture.

- What are two ways of handling redirects with React Router? When would you use each?

  You can render a `<Redirect>` or use a `history.push()` method. You use `history.push()` when you are done with something and need to go somewhere else and a `<Redirect>` if you want to deny a user access.

- What are two different ways to handle page-not-found user experiences using React Router?

  Two ways are rendering a `<NotFound>` or using a `<Redirect>`.

- How do you grab URL parameters from within a component using React Router?

  `useParams` for grabbing URL parameters.

- What is context in React? When would you use it?

  Context is universal data found in a React application. You should use it when you want to share data between a parent component and a far away, very nested child component without worrying about the other components in betwee.

- Describe some differences between class-based components and function
  components in React.

  There are a few differences between class-based components and function components in React. One example is that function components use hooks for changing state and adding effects and have the ability to create custom hooks. Class components use lifecycle methods and declare state and props in the constructor function.

- What are some of the problems that hooks were designed to solve?

  Hooks helped the world vastly. Hooks were designed to help with the reducing of duplicative logic, they allow you to use state and lifecycle features in function components, and pass info and logic by using closures.
