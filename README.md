# Redux Todos 

`npm install` then
`npm start` to run locally

Architecture Design 
5. Design a ToDo list web application. 
How your system works?
What consideration you need?
What limitations your system has? 

I have built a To Do app using React and Redux. I have styled it to look like a notepad with a checklist. The app allows users to add new tasks by clicking on the input with the placeholder “What do you want to do today?” and either hitting enter or clicking the “+” icon. New tasks are added to the list in real-time. By Clicking on a task you can toggle its completed state on and off.

The system works by using Redux state management. The store has 5 pre-written tasks which are fetched when the app initialises. The app is wrapped in a Provider, which is a Redux component for passing data from the store. The App inherits and passes it down to its children. The architecture of the app follows the container/component methodology, which Dan Abramov recommends. Containers deal with logic and data handling while components are solely for presentational purposes. The ActiveTodoList is a container component, it receives the todo list data from the store and passes it down to its children. It could also be used for other functions such as filtering the data by complete/incomplete state.

The TodoList is a presentational component, it wraps all the Todo components within an unordered list and displays them using the .map() function, it also adds the notepad style and passes click events from Todos back to its parent ActiveTodoList. Each Todo is a list item within the TodoList, it receives props to define its id, text and complete attributes. It has an input checkbox to show complete status and the text style also switches from normal to line-through.

When a user clicks on a task to indicate it is complete, the Todo component calls the onClick function which it received as a prop. Likewise the TodoList received the onTodoClick prop since it is also a presentational component and should not handle logic or data. Going back up to the ActiveTodoList we see onTodoClick is a prop which calls toggleTodo, a function imported from Redux actions. Actions define what data is going to change in the stores but they do not update the data themselves, this task is passed to reducers. The action has called TOGGLE_TODO as the type of of function it wants the reducer to handle and defined that it will pass the todos id so it can be determined which todo is being toggled.

Within the todos reducers a switch statement determines which functions to run based on the action called, TOGGLE_TODO first checks if the id matches the todo then once it has found the matching todo it toggles its complete state using !state.completed. The store is then updated, in this way the original state is never mutated, a copy of the state is created. This has a positive impact on the apps performance since it does not have to re-render every component unnecessarily.

Once the store has been updated this data will then pass down again from the Provider all the way back to the Todo component which now receive the prop complete: true and become styled accordingly. Adding new todos works in a similar fashion just with more data being passed, the addTodo action also passes text data and the ADD_TODO function within the reducers creates a copy of the original todo list array and concatenates the new item on to it. 

The limitations of the system are that it is not possible to edit or delete tasks, these features could be added if required. Also the list of tasks are not saved when users refresh the app. This feature could be added using redux-persist or by POSTing the data to a server. I could have also hosted the app on a services such as firebase to present it, however, firebase is currently experiencing issues. Their CLI throws an error that certificates have expired since Firebase CLI was updated, I have reached out to the support team to resolve but currently have not heard back. The app can be run locally quite easily by just running `npm start`.