import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-800 py-4">
    <div className="container mx-auto px-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
        </li>
        <li>
          <Link to="/all_degrees" className="text-white hover:text-gray-300">All Degrees</Link>
        </li>
        <li>
          <Link to="/all_cohorts" className="text-white hover:text-gray-300">All Cohorts</Link>
        </li>
        <li>
          <Link to="/all_modules" className="text-white hover:text-gray-300">All Modules</Link>
        </li>
        <li>
          <Link to="/create_degree" className="text-white hover:text-gray-300">Create Degree</Link>
        </li>
        <li>
          <Link to="/create_cohort" className="text-white hover:text-gray-300">Create Cohort</Link>
        </li>
        <li>
          <Link to="/create_module" className="text-white hover:text-gray-300">Create Module</Link>
        </li>
        <li>
          <Link to="/create_student" className="text-white hover:text-gray-300">Create Student</Link>
        </li>
        <li>
          <Link to="/create_grade" className="text-white hover:text-gray-300">Create Grade</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
