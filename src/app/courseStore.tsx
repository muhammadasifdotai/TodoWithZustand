// In this we learned how to create a store in Zustand 
// In 3 Steps: 
// Step1: Import every thing 
// Step2: Create a function 'courseStore' and in which we used 'set' method 
// Step3: and store is created out of it. so all the values and all of this is actually going up here. We simply say that we want to use the (UseCourseStore) and this being created based on the (courseStore) that we created above. and this will storing in to the local storage.

// We learn how we put the information in the store, next step 'video 3' is that how we pull the information back from the store, also we need to learn how we can manipulate that information so that information is always updated in the store. 
// In video 3: we have two goal.
// ..i. how we can pull information from the store.
// ..ii. how we can manipulate the information and make sure the store is updated.


/// ..................... SUMMARAY .........................
// STEP: 1: Install the package.
// STEP: 2: Create store from the zustand. by 'courseStore'. We are manupulating the hooks of the zustand which is the set hook that we are using.
// STEP: 3: In the create we added the 'persist(courseStore' and their name.


import {create} from 'zustand';
import {devtools, persist} from 'zustand/middleware';

// Revision: (set((state) => {}) state is responsible for doing any manipulation to (courses: [],) this variable that you have created, because it is a store variable, and after that you are taking access of the state (set((state) => {}),
//.. state will be responsible for giving you the most updated state of this variable (courses: [],) or any more variable that you have.
// ... further down the road I said that hey I have this courses now access to this one (courses:)
// ... now all I'm going to do is simply say that hey take the new course that is coming up from this ((course) =>) and then just spreading the existing state. so existing value goes in (...state.courses) but the new value also goes in (course,)

const courseStore = (set) => ({
    // here I'm storing course list in form of Array [], (it is a initial state)
    courses: [],
    // now we defining few actions, (actions are manipulator who will be manipulating, so data wil be coming in or going out, so how that needs to work, if I wand to add a course into that how that's going to work, if I want to update the existing course how that will work if I want to delete any course how that will work you simply define up here.)
    // first we define a addCourse, in the parameter() of it 'course' will pass 
    addCourse: (course) => {
        // We also add a 'set', we said 'set' that first give me a 'state', so it will give the existing state of whatever the variable you are looking for.
        set((state) => ({
            // here using our classic javaScrip, just give me existing 'cousre' and also spread it out. ([course, ...state.courses])
            courses: [course, ...state.courses]
        }))
    },
    // for removing course we need course id that's coming from backend.
    removeCourse: (courseId) => {
        //(set((state)): now using set, set is going to provide you to access the existing state wen need that 
        set((state) => ({
            // how we can remove it, the new variable will be updating this course's array so we need to first inquire that does this id exist or not, so we're going to goo ahead and say state dot courses and lets put up a filter on that, so filter is going to just remove that.
            // filter: filter further down the road we're going to say that I need each element of the courses so for each course that you are having, lets go a ahead and run a function on each of that 
            // c.id: will be putting up an id for each of the course, then we're going to say if that doesn't match to the course id that is provided, 
            // ... if the course id matches with the id that is being provide that will not be there and rest everthing who doesn't match gets into the filter, reverse logic of that. 
            courses: state.courses.filter((c) => c.id !== courseId)
        }))
    },
    // now we needing 'state' as well that whether the course is being completed whether somebody has actually tick marked that course or not 
    // for this we need course id for that 
    toggleCourseStatus: (courseId) => {
        set((state) => ({
            // for this we need to map through all of them 
            // the course that is we are designing is an object which is having three features 'name, id and simple toggle down whether it is completed or not.
            courses: state.courses.map((course) => course.id === courseId ? {...course, completed: !course.completed}: course) // : course : otherwise just return that course.
        }))
    }
})

// here we used the function name.
// We have first created this course store, now we want to use that so that anybody can push iin data to it and except the data from it and for that we creating this (useCourseStore)
// and final export this one (useCourseStore).
// some people might be thing that we need to export this one (courseStore) out no you don't need to because you need to create a store out of it.
// .. now we'll be naming our store as (useCourseStore) and that is created in the zustand by simply saying create and in which we write 'devtools' that we imported in above, 
// .. and in the dev tools further down we would like to persist every thing, and I want to persist the (courseStore)
// .. now further we need to provide a name because we are storing that in to the local storage. And the name is courses.
const useCourseStore = create(
    devtools(
        persist(courseStore, {
            name: 'courses',
        })
    )
)

// use: is coming up from the zustand itself.
export default useCourseStore;