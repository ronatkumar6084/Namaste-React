// const heading = React.createElement('h1',{id:"heading"},'Hello world from react');
// console.log(heading);
// const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

{/* <div id="parent">
    <div id="child">
        <h1>I'm a child</h1>
        <h2>I'm also a child</h2>
    </div>
     <div id="child2">
        <h1>I'm a child</h1>
        <h2>I'm also a child</h2>
    </div>
</div> */}

const parent = React.createElement('div',{id:'parent'},
[React.createElement('div',{id:'child'},[
    React.createElement('h1',{},'I am a child'),
    React.createElement('h2',{},'I am also a child'),]),

React.createElement('div',{id:'child2'},[
    React.createElement('h1',{},'I am a child2'),
    React.createElement('h2',{},'I am also a child2'),]),
]);

console.log(parent);
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
