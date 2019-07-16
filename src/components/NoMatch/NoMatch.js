import React from 'react';
import { Link } from 'react-router-dom';
import sadMumu from '../../assets/images/sad_mumu.png';

export default function NoMatch() {
  return (
    <div>
      <img src={sadMumu} alt="amumu, the sad mummuy. sorry, this page does not exist" />
      <h2>Sorry, that page does not exist!</h2>
      <Link to="/">
        <button>
          Back
        </button>
      </Link>
    </div>
  )
}
