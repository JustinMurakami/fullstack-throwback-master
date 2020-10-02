# Module 3 - Front end Questions

## `App` Component

### Q1. Why do we need the `renderView` method?

<!-- Your answer here! -->
The render view method allows for the different components (a list of posts, a form for creating new posts, or individual posts) to be shown, depending on the current value of the 'view' property of the App's state.

### Q2. What value do we expect `this.state.view` to be in order to render the Post component?

<!-- Your answer here! -->
We would expect a post ID to be the value of 'this.state.view.'


### Q3. Why do we need to bind `this.changeView` to the keyword this (on line 16)?

<!-- Your answer here! -->
'this.changeView' must be bound to keyword 'this' on line 16 in order to ensure that when it is called in a rendered component, it still refers to the App's state when using the setState method.  Otherwise, the property 'view' that it changes will be undefined.

## `Posts` Component

### Q4. What interactions with the server will be required in order to fully implement this component?

<!-- Your answer here! -->
In order to retrieve all the current posts' information, the client will need to submit a get request to the server to query the database and receive that data back.

### Q5. What information should be kept inside `this.state` in this component?

<!-- Your answer here! -->
The information retrieved for all posts and stored in the component's state should include each post's title, number of upvotes and number of comments (what is being rendered in the component), and each post's id.

### Q6. What props does this component receive from its parent component?

<!-- Your answer here! -->
It receives the changeView method as a prop from its parent component, index.jsx.

### Q7. What additional components might we create to help implement this component?

<!-- Your answer here! -->
We should create a list item component.  This will help implementation of the Posts component by allowing us to map and render each post's summary information to each list item, which will be children components of the Post component.

## `Post` Component

### Q8. What interactions with the server will be required in order to fully implement this component?

<!-- Your answer here! -->
We will need to retrieve all the information for the one post in question based on the id being passed from the view state of the app. This will require an API get request.  We are also asked to allow the user to increment the number of votes for the post, which will require a post request.  We are also asked to allow the user to add a comment to the post's information, which will require another post request, and the dynamically render a list of the post's comments, another get request for the post's updated information.

### Q9. What information should be kept inside `this.state` in this component?

<!-- Your answer here! -->
The full data for the post in question, in order to render it to the browser from the component's state.

### Q10. What props does this component receive from its parent component?

<!-- Your answer here! -->
This component will receive the id of the post that is to be displayed.

### Q11. What additional components might we create to help implement this component?

<!-- Your answer here! -->
We might create comment list item components to dynamically render the comments (mapping them from the post in state).


## `Create` Component

### Q12. What interactions with the server will be required in order to fully implement this component?

<!-- Your answer here! -->

We will need to implement a post request in order to send a new post to the database and store it, and a get request in order to retrieve the information to appear in the Post component.

### Q13. What information should be kept inside `this.state` in this component?

<!-- Your answer here! -->
We will need to store the new post's title and body in state.

### Q14. What props does this component receive from its parent component?

<!-- Your answer here! -->
It receives the changeView method as a prop.

### Q15. What additional components might we create to help implement this component?

<!-- Your answer here! -->
None needed.
