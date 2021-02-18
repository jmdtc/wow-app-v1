# Explanation
## Start project

```
yarn install
yarn start
```

## Project structure

- root - bunch of configuration files
- /src - sourcecode
  - App.tsx - main React element
  - index.tsx - where to load the React app and other JS services
  - /components - reusable UI elements, MUST start with a uppercase
    - /AppLayout - app skeleton loaded after login
    - /Main - container for the pages content
    - /SideBar - leftside menu, uses dot notation like <SideBar.SubComponent>Content</SideBar.SubComponent>
      - Container - styling for the whole SideBar, also extends items to apply shared styles
      - Item - normal text only button
      - IconItem - button with text and icon
  - /slices - redux toolkit files, one for each feature. Basically each slice describe the frontend logic in each part of the application. See redux toolkit documentation as slices implement different concepts such as actions, reducers, selectors and also implement type definitions for 
  - /store - redux central state made of the different reducers
  - /pages - speaks for itself he
  - /styles - just the outdir for tailwind
- /public - static files

## Rules of import
Each category of import should be separated by a line-break and imported in this order
- node_modules - with React on top
- pages - should be only in App.tsx
- components
- slices - and their different submodules
- utils, custom hooks
- css - should be only on App.tsx as well

## React notions to know
- FC - is just a type for React component created with a function. The other React type of component is made through classes (it's shit).
- Dot notation
  - if you export multiple components in an object like "export default MyComponent = {Container, SubComp}", you can use it like
  ```
  <MyComponent.Container>
    <MyComponent.SubComp>
        Content
    <MyComponent.SubComp>
  </MyComponent.Container>
  ```
  - then in the definition of the SubComp you can retrieve the content through props.children
  - convenient and readable convention for components composed of a container and different subcomponents such as lists
- Children, isValidElement and cloneElement - are all React functions to work on props.children
  - Children with uppercase, which is not children, just concat children into an array, as children can be null, a string, a reactElement, an array of reactElements or an array of arrays... Useful to map on all children without caring on the precise list structure.
  - isValidElement just makes sure that the element is a correct React DOM node
  - cloneElement clones the element and adds new props like
  ```
  cloneElement(<Component>, {newKey: "value", somethingElse: true})
  ```

## Tests
Each file, except indexes, should have a test file like so "fileName.test.tsx"

### /components
- Should contain a snapshot
- Should contain a unit test if they implement some state logic

### /pages
- Should contain a snapshot
- Should contain integration tests with multiple scenarios

### /slices
- Should contain unit tests which focus on input vs output
- Make sure to test empty values and reset to initial state