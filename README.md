This is a refactor and improvement on the Angular/Karma/Jasmine tutorial found here:

http://blog.cubettech.com/unit-testing-in-angular-applications

This example is intended to show how to begin unit testing an application using Karma and Jasmine.  Feel free to comment with questions or suggestions.

#Running

After cloning this repo, install all dependencies via npm:

```
npm install
```

Then run the unit tests using Karma:
```
karma start
```

#Focal points
In lieu of making the project unreadable by adding a bunch of comments, here's a list of things to take note of while reading through the project files:

* Organization of the tests using "describe" and "it"
* Keeping a reference to our controller so we can call its functions and access its attributes
* Using Jasmine's spyOn() to spy on functions called within our target function
* Directive unit test is very simple since our directive isn't doing much
