<h1 align="center">Welcome to Solid Node 👋</h1>
<p>
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> A server which displays the core design principles of software development (S.O.L.I.D)

## Description

Solid Node has the following routes:
<br/>
- Create worker
- Delete workers
- Create work order
- Assign work order
- Fetch work orders by:
  - Specific worker
  - Sorted by deadline

#### Single responsibility principle

\'In this context, a responsibility is considered to be one reason to change. This principle states that if we have 2 reasons to change for a class, we have to split the functionality in two classes. Each class will handle only one responsibility and if in the future we need to make one change we are going to make it in the class which handles it\'. A good example of this statement can be seen in classes contained under the factories folder. Each factory has one responsibility, to create a certain type of object, and only when this process changes for some reason, will this factory change as well.

#### Open close principle

\'This principle states that the design and writing of the code should be done in a way that new functionality should be added with minimum changes in the existing code. The design should be done in a way to allow the adding of new functionality as new classes, keeping as much as possible existing code unchanged\'. The database class is a good illustration of this principle, since for every new query the application has to make to the database will be added as another function inside this class that only extends its functionality, but does not change any existing ones.

#### Interface segregation principle

\'The interface segregation principle states that clients should not be forced to implement interfaces they don't use. Instead of one fat interface many small interfaces are preferred based on groups of methods, each one serving one submodule\'. Because of javascripts nature of not having the ability to implement interfaces as in languages like java, this principle has to be incorporated with different techniques; one of those being duck-typing. \'Duck typing is a style of dynamic typing in which an object's current set of methods and properties determines the valid semantics, rather than its inheritance from a particular class or implementation of a specific interface\'. Again, an example of this can be seen in the DatabaseManager class, in which its various methods make it clear about it's responsibilities and semantics.


#### Dependency inversion principle

\'Let's take the classical example of a copy module which reads characters from the keyboard and writes them to the printer device. The high level class containing the logic is the Copy class. The low level classes are KeyboardReader and PrinterWriter.

In a bad design the high level class uses directly and depends heavily on the low level classes. In such a case if we want to change the design to direct the output to a new FileWriter class we have to make changes in the Copy class. (Let's assume that it is a very complex class, with a lot of logic and really hard to test).

In order to avoid such problems we can introduce an abstraction layer between high level classes and low level classes. Since the high level modules contain the complex logic they should not depend on the low level modules so the new abstraction layer should not be created based on low level modules. Low level modules are to be created based on the abstraction layer\'. The dependency inversion principle in summarized words says that there should be an abstraction layer between high level classes and low ones:

 High Level Classes --> Abstraction Layer --> Low Level Classes

This can be seen with the Database class, which is an abstraction of the various methods available to the application supplied by the database framework which in this case is \'pg-promise\', sitting in the middle of a higher-level layer, the routers in this case, and the main component, index.js, the lowest-level layer

## Install

```sh
npm install
```

## Usage

```sh
npm run start
```

## Run tests

```sh
npm run test
```

## Author

👤 **Sebastian Serrano**

* Github: [@sebastianserrano](https://github.com/sebastianserrano)
