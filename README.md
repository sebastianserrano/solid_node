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
