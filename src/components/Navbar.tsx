import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default Link behavior
    
    if (location.pathname !== '/') {
      navigate('/'); // Navigate to home page if not already there
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link 
              to="/" 
              className="flex items-center text-navy-900 hover:text-gold-500 transition-colors"
              onClick={handleHomeClick}
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 