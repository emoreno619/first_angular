Introduction and Setup
How This Curriculum Works

This Angular curriculum is largely self-driven. I'm giving you all the lessons for Unit 1 up front. They are part tutorial, part homework assignment. Be prepared to do some research of your own to complete these lessons.

Here's an overview of the Angular content:

Unit 1:

    Intro and Setup
    2 Way Data Binding
    Expressions and Filters
    Intro to Controllers
    Built-In Directives
    Angular Events
    Unit 1 Assessment Reddit Clone

Unit 2:

    Routing
    Custom Filters
    Controller Revisited
    Debugging Angular Apps
    Form validations
    Dependency Injection
    HTTP Service
    Custom Services/Factories
    Structuring Angular Apps for 2.0
    Custom Directives

Unit 3:

    Angular + Firebase Intro
    Firebase Auth
    Angular + Express
    Angular + Rails

Before you move on to the next lesson, you should:

    Complete all exercises and SAVE EVERY EXERCISE FOR FUTURE USE
    Answer all questions in ONE MARKDOWN FILE

This is completely self-paced, but we will be tracking your individual progress. In order to to do that, we will need to assess your knowledge as we go. Be prepared to show your exercises to instructors and engage in discussions about the questions. We will record your performance

Let's get started!
What is Angular?

According to the official Angular introduction, Angular is a:

    client-side technology, written entirely in JavaScript. It works with the long-established technologies of the web (HTML, CSS, and JavaScript) to make the development of web apps easier and faster than ever before.

It boils down to this: Angular helps us build complex, single-page applications very quickly.
Setup

We're going to start by setting up a very simple Angular app. Soon we'll learn about patterns for structuring complicated Angular apps, but for now we're just going to use a single index.html file with a few scripts.

    Create an index.html file.
    Add Angular. For now were going to use this CDN: https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.3/angular.js.
    Add jQuery. jQuery is (sort of) a dependency of Angular.
    Add ng-app to the <html> element in your document. This declares everything inside of the <html> element part of an Angular app. We will see this 'ng' prefix a lot in Angular.
    Test it out! Add the following line anywhere inside of the <body> tag: {{1 + 6}}. Open the page in your browser. If Angular is setup correctly, you should see 7 displayed.

Questions:

    Why learn Angular JS over other frameworks like Ember, Backbone, Knockout, etc?
    
    Angular is framework with lots of structure and built-in functionality. So, while it has strict requirements in terms of file structure and intial
    setup, it also comes packaged with lots of features and requires relatively
    little code to implement those features. Additionally, Angular is relatively easy to use, backed by Google and thus stable and has lots of documentation, integrated with CSS frameworks like bootstrap and prevalent among businesses.

    Angular also offers interesting technical features, perhaps most notably two-way data binding. Two-way data binding allows changes in a view to be represented in a model with fewer steps and events in between. Angular is also small to download and sometimes doesn't even require jQuery. Angular supports full dependency inject, making it easy to test and find bugs.

    People have some very strong opinions about Angular. What are 3 common complaints people have about Angular?

    Angular lacks composed views. Composed views allow for structure and a hierachy to be imposed on views and their controllers, which enable them to be more modular and their components to be recycled. Angular is too focused on views and is cluttered with too many html tags.

    Angular has two-way data binding. This is both a pro and con. Some developers do not prefer the mystique of the two-way data binding because it can obscure the innerworkings of application and how data is conferred from a view to model and vice versa. Moreover, besides obscuring how data is actually transferred and which events allow that transfer, as an application rises in complexity, the built-in functionalities of two-way data binding can become overbearingly heavy and slow and disrupt scaling.

    Dependency injection conflicts with minification. Syntax different from server-side languages, so requires specialized knowledge rather than translatable skills.


    Is Angular an MVC framework?
    
    Angular is more an MV* framework than an MVC framework because it places much of the controller logic into the views, alongside HTML.

    Why did I say jQuery is "sort of" a dependency of Angular? Does it depend on it or not?!

    Angular directives can (and should) replace most jQuery functionality since they are more lightweight. In short, Angular can do what jQuery does, so it need not be included.

    Read the docs for ng-app. What is it and what does it do?

    The ngApp directive designates the root element of the application and is typically placed near the root element of the page - e.g. on the <body> or <html> tags. Only one AngularJS application can be auto-bootstrapped per HTML document. 

Resources:

    Angular Docs
