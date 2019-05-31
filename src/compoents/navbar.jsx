import React, { Component } from 'react';

//Stateless functional Component we can maake without class is called stateless
//Ex: staatless functional component pass the props as params
//another way crete component
/*
Object destructuing argument
ex- let obj = {
    a:sonu,
    b:manoj
}

let {a,b} = obj;
console.log(a); //get the output sonu
console.log(b); //get the output manoj
Here do I similar in this.props object
*/
const NavBar = ({ totalCounters }) => {

    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar <span className="badge badge-pill badge-secondary">{totalCounters}</span>
            </a>
        </nav>
    );

}

export default NavBar;

// with State functional righht first way
// class NavBar extends Component {

//     render() {
        // return (
        //     <nav className="navbar navbar-light bg-light">
        //         <a className="navbar-brand" href="#">
        //             Navbar <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
        //         </a>
        //     </nav>
        // );
//     }
// }

// export default NavBar;