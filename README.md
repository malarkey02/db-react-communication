# db-react-communication
Starting files to help me update the front end as soon as the database updates without having to refresh

<h2>Server Details:</h2>

**The front end** (written in react) can be triggered by using the ``npm start`` command from the `./client` directory
This will be served on the `Port 3000` 

**The backend server** (written in node/express/mongodb) can be launched using the `node server.js` command in the 
`./server` directory. 
This will remain active on the `Port 3001` 

**Note** <br>
You will have to change directory to both these directories and individually launch them using both the commands
written above. 

<h2>Description of the Problem: </h2>

The `useEffect` hook is programmed to extract a value from the server via an `Axios.get` request. <br>
However, this value only seems to update once the page has refreshed. It has been advised that
if the value in the `useEffect` square brackets changes, the useEffect hook is triggered again
and therefore the new value will be extracted via the `Axios.post` request **WITHOUT** the need of 
refreshing the page. 

I tried using the second method - the one that doesn't require a refresh - with a boolean variable 
called `variableX` attached to the `useEffect` hook `[]` 
However, this didn't work. 

To retain functionality, I've added a page refresh command which updates the list. 
Comments that'll help you find everything are appropriately provided. 
<h3>Your task: </h3>
Help me use the `useEffect` hook that doesn't require me to refresh the page to update 
the new values. 
