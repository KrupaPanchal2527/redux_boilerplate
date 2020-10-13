# Setup for REDUX in react app

## List of packages to install
- redux : 
- react-redux
- redux-thunk
- redux-devtools-extension
- redux-persist

## Folder structure to follow

(This is not mandatory to follow, but it works best for all.)

```
|- src
   |- store
      |- reducers
        - rootReducer.js
        - ...all Other reducer files
      |- actions
        - actionTypes.js
        - actions.js
      - store.js / index.js
```

Okay... so let's start by creating our store.

## Creating store

1. Open up /store/store.js

