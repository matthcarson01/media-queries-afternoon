import React,{Component} from 'react';
import './Navbar.css';

// export default function Navbar (){
//     return(
//         <nav>
//             <div className="HamburgerMenu btn">
//                 <span>Menu</span>
//                 <i className="fa fa-bars fa-1x" aria-hidden="true"></i>
//             </div>
            
//             <ul>
//                 <li><a>SERVICES</a></li>
//                 <li><a>PORTFOLIO</a></li>
//                 <li><a>ABOUT</a></li>
//                 <li><a>TEAM</a></li>
//                 <li><a>CONNECT</a></li>
//             </ul>         
//         </nav>
//     )
// }
export default class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    handleClick(){
        console.log('You Clicked Me');
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }


    render() {
        return (
            <nav>
                <div className="HamburgerMenu btn" onClick ={this.handleClick}>
                    <span>Menu</span>
                    <i className="fa fa-bars fa-1x" aria-hidden="true"></i>
                </div>

                <ul id="myTopnav" className = "topnav">
                    <li><a>SERVICES</a></li>
                    <li><a>PORTFOLIO</a></li>
                    <li><a>ABOUT</a></li>
                    <li><a>TEAM</a></li>
                    <li><a>CONNECT</a></li>
                </ul>
            </nav>
        );
    }
}