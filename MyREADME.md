# Most Important Points for API: 
* STEP: 1: First we get data from the `Backend`
* STEP: 2: Then we save the data in the store, in the store in the initialState and in the initialState with the help of function.
* STEP: 3: Then we export it and then import it used it whether we want.

# Zustand:
* In this We learn React Native State Management with Zustand, why not Redux or Redux Toolkit. Because of features and simplicity in the state management is awosome. In which things are easier. Zustand is production ready. 
* All information are present in a single store or in a single place from where all take that information. 
* In this we make simple App to see and understand how Zustand work and how you can use that in your Application. 
* Store is the centeral point of the truth, if any component wants to know that what is the current value of that particular element he goes to the store and asks from there 
* In the store if you wandt to manipulate any of the element you just use a set hook, like we use `useState` setting for the state, so used `set` to set any thing variable or anything 

# App Folder: 
* Is the center point or central repository of the truth the store will go in here i.e `CourseStore.tsx`.

* `Middleware`: In the middleware if you want further information to be checkable in the browser just like we do in the redux you can actually do that and it will help you to check that information in the browser itself.

* `persist`: In the persist you can just store that all the store information in to the local storage of brower now may be that is a use case for you maybe not. (it is for React)
* `persist`: Saves the app's state so it can be restored later.

# Creating store: 
* `const courseStore = () => ()` : This is a simple code for creating a store.
* `set`: is used to change any of the state of any variable or any information object.
* `{}`: now opening an object, first I have to define what is the initial state of that parameter which I'm tring to manipulate.