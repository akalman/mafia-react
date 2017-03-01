# mafia-react

## Install Instructions

1. install nodejs
1. install global dependencies
   
   ```
   npm install -g yarn typescript webpack
   ```
1. clone repository
   
   ```
   git clone git@github.com:akalman/mafia-react
   ```

## Build Instructions

1. install dependencies
   
   ```
   yarn
   npm link typescript
   ```
1. build
   
   ```
   yarn build #there is a bug with yarn v18 causing this command to hang, use the one below
   npm run build
   ```
1. start server
   
   ```
   yarn start
   ```