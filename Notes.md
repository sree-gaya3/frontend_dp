
Dependency Injection Project

1. npm init --y
2. npm i typescript inversify reflect-metadata
3. tsc --init
4. configure the options in tsconfig.json    



Builder Pattern

**Intent**
   - step by step creation
   - produce diff types and representations of an obj using the same construction code

**Motivation**
    - some obj's are simple, but other need a lot of ceremony to create
    - having more arguments is not productive
    - Builder provides an API for constucting an object step-by-step

**Notes**
- return the builder whenever we are muting a builder



Form Builder Project

1. yarn create react-app react-formbuilder --template typescript

