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

### Q5. What information should be kept inside `this.state` in this component?

<!-- Your answer here! -->

### Q6. What props does this component receive from its parent component?

<!-- Your answer here! -->

### Q7. What additional components might we create to help implement this component?

<!-- Your answer here! -->

## `Post` Component

### Q8. What interactions with the server will be required in order to fully implement this component?

<!-- Your answer here! -->

### Q9. What information should be kept inside `this.state` in this component?

<!-- Your answer here! -->

### Q10. What props does this component receive from its parent component?

<!-- Your answer here! -->

### Q11. What additional components might we create to help implement this component?

<!-- Your answer here! -->

## `Create` Component

### Q12. What interactions with the server will be required in order to fully implement this component?

<!-- Your answer here! -->

### Q13. What information should be kept inside `this.state` in this component?

<!-- Your answer here! -->

### Q14. What props does this component receive from its parent component?

<!-- Your answer here! -->

### Q15. What additional components might we create to help implement this component?

<!-- Your answer here! -->
