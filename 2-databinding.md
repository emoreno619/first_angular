2 Way Data Binding

Let's start by building something simple that showcases the power of Angular.

In traditional frameworks, controllers package up data from the models with a template and then render a view to the user. That view is a snapshot in time; it only reflects the state of data at the time it was rendered. Newer JavaScript frameworks like Angular and Ember allow us to write dynamic, live templates. This means that we can write Angular templates that will automatically update when our data changes.

This is called 2-way or bi-directional binding.

    when a model changes, the view knows about it
    when a view changes, the model also knows about it.

Let's try it out! In index.html create a text input.

    <input type="text" placeholder="What is your name">

Add a new attribute ng-model="name" to the text input. This binds the value of the text input to a property called "name". Technically, ng-model tries to bind "name" by evaluating the expression on the current $scope, and since the property "name" doesn't already exist on this $scope, it will be created implicitly and added to the $scope. We'll talk a lot more about this when we learn about controllers in a few lessons, so don't worry about it for now.

Now that we've bound the input to the "name" property, let's display the value of "name" on the page. We can write expressions in our HTML using {{ }}.

    <h1>My name is: {{name}}</h1>

Open up index.html in your browser. What does the h1 say when the page loads? Try typing something into the input and notice that the h1 reflects whatever value we type into the input. This is our first example of 2-way data binding.

EXERCISE: Replicate the exact same functionality without using Angular. In a new file, write vanilla JS code that will automatically update the h1 when the value in the text input changes.

EXERCISE: Use ng-model with a dropdown menu(select tag). Give the user the following four items to pick from: "Dogs", "Cats", "Dogs and Cats", "Neither". Display the user's choice in an h3. For example, if the user selects "Dogs", the h3 should say "I love dogs <3".

Questions

    What does ng-model do?

    Ng-model creates a new variable in the model that is named with whatever value is passed to ng-model.

    What is "dirty checking"?

    "Dirty checking" is the process of watching certain variables for changes. For a list of variables within a scope, all of those variables will be checked until a change is noticed and the DOM is updated to reflect that change.

    Find a way to set the initial value of "name" as "BoJack"(without writing a controller).
    
    ng-init

    What are those {{ }} expressions? Are they Handlebars?

    The double curly braces represent binding, a core feature of Angular. The binding tells Angular that it should evaluate an expression and insert the result into the DOM in place of the binding. Rather than a one-time insert, as we'll see in the next steps, a binding will result in efficient continuous updates whenever the result of the expression evaluation changes.

    Explain what 2-way data binding is.
    
    2-way data binding allows models and views to be connected and simluatneously updated. So a change to a model on the DOM is reflected in the model and similarly a change in the model is reflected on the DOM in concert.

    BONUS: Research the $digest loop

Resources:

    Data Binding Reference
    ng-model Docs
