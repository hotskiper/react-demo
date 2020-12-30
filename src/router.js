import React from 'react';
import { Link } from 'react-router-dom';

const Router = () => (
  <div>
    <Link className="btn btn-primary" to="/home">
      To-Do List
    </Link>
    <Link className="btn btn-secondary" to="/page1">
      + Add New
    </Link>
  </div>
);

export default Router;