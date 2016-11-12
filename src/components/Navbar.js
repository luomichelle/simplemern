import React from 'react';
import { Link } from 'react-router';

const Navbar = props => (
    <div>
    <Link to='/'>
      <p>Home</p>
    </Link>
    <Link to='/giphy'>
      <p>Giphy</p>
    </Link>
        <form onSubmit={props.handleSubmit}>
          {props.show
            ? <input onChange={props.handleChange} placeholder="whatever" value={props.search}/>
            : null
          }
            <button>submit</button>
        </form>
        <div>{props.search}</div>
    </div>
)

export default Navbar;
