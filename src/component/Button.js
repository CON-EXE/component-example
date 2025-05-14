/*
    A react component is a JS function that returns pieces of 
    reusable code and visual elements in the form of JSX

    React offers conditional rendering to render a particular 
    component based on some condition or state of your application
*/

function Button(props) {
  return (
    <button className={props.isLoggedIn ? 'red' : 'blue'}>
      {props.isLoggedIn ? 'Logout' : 'Login'}
    </button>
  );
}

export default Button;