
//PascalCasing is the capitalization of letters in variables to understand the names.
function Message(){
    //return <h1>Hello World!</h1>;
    //The tags are JSX code, JavaScript XML. It gets converted to HTML using react. Can check that at babeljs.io/repl
    //JSX makes very easy to add dynamic values and show in UI.

    const name = '';
    if(name)
        return <h1>Hello {name}!</h1>
    return <h1>Hello World!</h1>
}

export default Message;