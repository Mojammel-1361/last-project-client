import React from 'react';

const Blog = () => {
    return (
      <div>
        <div>
          <h1 className="text-3xl">
            What are the different ways to manage a state in a React
            application?
          </h1>
          <p>
            Local state <br /> Global state
            <br /> Server state <br />
            URL state
            <br />
            Local (UI) state – Local state is data we manage in one or another
            component. Local state is most often managed in React using the
            useState hook. For example, local state would be needed to show or
            hide a modal component or to track values for a form component, such
            as form submission, when the form is disabled and the values of a
            form’s inputs.
            <br />
            <br /> Global (UI) state – Global state is data we manage across
            multiple components. Global state is necessary when we want to get
            and update data anywhere in our app, or in multiple components at
            least. A common example of global state is authenticated user state.
            If a user is logged into our app, it is necessary to get and change
            their data throughout our application. Sometimes state we think
            should be local might become global. <br />
            <br />
            Server state – Data that comes from an external server that must be
            integrated with our UI state. Server state is a simple concept, but
            can be hard to manage alongside all of our local and global UI
            state. There are several pieces of state that must be managed every
            time you fetch or update data from an external server, including
            loading and error state. Fortunately there are tools such as SWR and
            React Query that make managing server state much easier. <br />
            <br />
            URL state – Data that exists on our URLs, including the pathname and
            query parameters. URL state is often missing as a category of state,
            but it is an important one. In many cases, a lot of major parts of
            our application rely upon accessing URL state. Try to imagine
            building a blog without being able to fetch a post based off of its
            slug or id that is located in the URL! There are undoubtedly more
            pieces of state that we could identify, but these are the major
            categories worth focusing on for most applications you build.
          </p>
        </div>
        <div>
          <h1 className="text-3xl mb-5">
            How does prototypical inheritance work?
          </h1>
          <p>
            How does prototypical inheritance work? The Prototypal Inheritance
            is a feature in javascript used to add methods and properties in
            objects. It is a method by which an object can inherit the
            properties and methods of another object. Traditionally, in order to
            get and set the [[Prototype]] of an object, we use
            Object.getPrototypeOf and Object. JavaScript objects are dynamic
            "bags" of properties (referred to as own properties). JavaScript
            objects have a link to a prototype object. When trying to access a
            property of an object, the property will not only be sought on the
            object but on the prototype of the object, the prototype of the
            prototype, and so on until either a property with a matching name is
            found or the end of the prototype chain is reached. While this
            confusion is often considered to be one of JavaScript's weaknesses,
            the prototypical inheritance model itself is, in fact, more powerful
            than the classic model. It is, for example, fairly trivial to build
            a classic model on top of a prototypical model — which is how
            classes are implemented.
          </p>
        </div>
        <div>
          <h1 className="text-3xl mb-5">
            What is a unit test? Why should we write unit tests?
          </h1>
          <p>
            Unit Testing is a type of software testing where individual units or
            components of a software are tested. The purpose is to validate that
            each unit of the software code performs as expected. Unit Testing is
            done during the development (coding phase) of an application by the
            developers. Unit Tests isolate a section of code and verify its
            correctness. A unit may be an individual function, method,
            procedure, module, or object.
            <br /> What are unit tests, why unit testing is important, and how
            it they help developers and business owners? For the answers to
            these questions and more, read on. Let’s start with the definition:
            Unit testing is a software testing method where “units”—the
            individual components of software—are tested. Developers write unit
            tests for their code to make sure that the code works correctly.
            This helps to detect and protect against bugs in the future.
            Sometimes developers write unit tests first, then write the code.
            This approach is also known as test-driven development (TDD). In
            TDD, requirements are turned into specific test cases, then the
            software is improved to pass the new tests. In this approach, no
            code is added that hasn’t been proven to meet defined requirements.
            Unit testing is similar, in that it allows developers to modify code
            without affecting the functionality of other units or the product,
            as a whole. Unit tests are usually written in the form of functions
            and check the value and behavior of these functions in various
            scenarios. For example, let’s imagine a function for the division of
            two numbers: the developer decides to follow the TDD approach, first
            writing a test with the input of values ‘4’ and ‘2’ (4 divided by 2)
            with ‘2’ expected as the result. Another example: when the divisor
            is zero, we don’t expect that the function will produce a value—we
            expect that it will generate an exception. We can expect that the
            function will notify some component about an attempt to divide by
            zero. Thus, we test two cases:
          </p>
        </div>
        <div>
          <h1 className="text-3xl mb-5">React vs. Angular vs. Vue?</h1>
          <p>
            React is a front-end JavaScript library that allows you to build
            user interfaces from reusable UI components. React uses server-side
            rendering to provide a flexible and performance-based solution. It
            allows developers to create seamless UX and complex UI. Since React
            follows the “Learn Once, Write Anywhere” principle, it’s the
            preferred choice for developers to build fast and scalable
            applications. Along with JavaScript, React can also be used with
            JSX. Developed by Facebook, React is maintained by Facebook
            communities and individual developers.
            <br />
            Angular is an open-source JavaScript front-end framework developed
            and managed by Google’s Angular team. Angular is the most popular
            client-side framework for developing scalable and high-performing
            mobile and web apps using HTML, CSS, and TypeScript. The latest
            version of Angular is Angular 13, which offers enterprise-ready web
            app development solutions. Angular is a complete rewrite of
            AngularJS (Angular 1.0) released in 2010. However, if you are not
            aware of the difference between Angular vs AngularJS, you can read
            our blog for better clarity. The MVC (Model View Controller)
            technique is used by Angular, which divides work into logical pieces
            and speeds up the initial webpage loading time.
            <br />
            Vue.js: One of the major advantages of Vue.js is that it has a
            smaller file size, which comprises only about 18KB to 20KB. It
            allows the users to segregate the template-to-virtual-DOM compiler
            and even the run time. Vue.js is easy to understand as it is blessed
            to have large-scale templates. It also saves a lot of developers’
            time as well. It also has an uncomplicated structure and you can
            easily find errors in the blocks. One of the factors that
            distinguish Vue.js from other frameworks is that it can be used for
            developing both single-page applications and contributing the
            components to existing apps. It comprises component logic and
            structure and allows them to contain in one file. This is one area
            where Vue.js excels over React JS. It is known for its comprehensive
            documentation. If you are a starter, then you just need the basic
            knowledge of JavaScript and HTML.
          </p>
        </div>
      </div>
    );
};

export default Blog;