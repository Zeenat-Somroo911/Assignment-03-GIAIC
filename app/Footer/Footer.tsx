export default function Footer() {
    return (
      <footer className="bg-gradient-to-r from-fuchsia-950 to-purple-900 text-white py-6">
        <div className="container mx-auto text-center px-4">
          <div className="mb-4">
            <h3 className="text-2xl font-semibold">Connect with Me</h3>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="https://github.com/Zeenat-Somroo911" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition duration-300">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/zeenat-somroo-76b5872bb" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition duration-300">
                LinkedIn
              </a>
              <a href="mailto:zeenatsomroo29@gmail.com" className="hover:text-yellow-400 transition duration-300">
                Email
              </a>
            </div>
          </div>
          <div className="text-lg">
            &copy; 2024 zeenat somroo. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
  