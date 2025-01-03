
import Team from "../assets/img/cifa.png";


const Footer = () => {
  return (
    <>


  <div className="w-full h-auto bg-black text-white py-8 px-4 hidden md:block bg-color6 text-color8">
    <div className="max-w-6xl mx-auto p-6">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start md:flex-row gap-4">
          <div className="w-12 h-12 bg-gray-700 rounded-full">
            <img src={Team} alt="Logo" />
          </div>
          <div>
            <h1 className="text-3xl uppercase">CIFA</h1>
            <p className="text-gray-400 text-sm font-medium">Elevate Your Career</p>
          </div>
        </div>

        {/* Menu Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-gray-200 text-sm font-medium mb-2">Menu</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm font-medium capitalize">Home</li>
              <li className="text-gray-400 text-sm font-medium capitalize">Instructors</li>
              <li className="text-gray-400 text-sm font-medium capitalize">Courses</li>
              <li className="text-gray-400 text-sm font-medium capitalize">Exams</li>
              <li className="text-gray-400 text-sm font-medium capitalize">Price List</li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-200 text-sm font-medium mb-2">Menu</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm font-medium capitalize">Accreditation</li>
              <li className="text-gray-400 text-sm font-medium capitalize">Employability Tools</li>
              <li className="text-gray-400 text-sm font-medium capitalize">Hire Candidates</li>
              <li className="text-gray-400 text-sm font-medium capitalize">Corporate Tools</li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-200 text-sm font-medium mb-2">Menu</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm font-medium capitalize">University Enrolment</li>
              <li className="text-gray-400 text-sm font-medium capitalize">About CIFA</li>
              <li className="text-gray-400 text-sm font-medium capitalize">FAQs</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-700 my-8"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm font-medium gap-4">
        <div className="flex flex-wrap justify-center md:justify-start gap-8">
          <a href="#" className="hover:text-white">Terms of Use</a>
          <a href="#" className="hover:text-white">Accessibility Statement</a>
          <a href="#" className="hover:text-white">Cookies Policy</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>
        <p className="text-center md:text-right">© 2024 CIFA. All rights reserved.</p>
      </div>
    </div>
  </div>




    <div className="w-full h-auto bg-black text-white py-8 px-4 bg-color6 text-color8 block md:hidden">
      <div className="max-w-6xl mx-auto p-6">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between gap-8">


  
          <div className="w-full grid grid-cols-2 place-items-center items-start">
            {/* Logo and Tagline */}
            <div className="w-full md:w-auto">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-gray-700 rounded-full">
                  <img src={Team} alt="" />
                </div>
                {/* Logo Placeholder */}
                <h1 className="text-3xl uppercase">CIFA</h1>
              </div>
              <p className="text-gray-400 text-sm font-medium">Elevate Your Career</p>
            </div>
            {/* First Menu */}
            <div>
              <h3 className="text-gray-200 text-sm font-medium mb-2">Menu</h3>
              <ul className="space-y-2">
                <li className="text-gray-400 text-sm font-medium capitalize">Home</li>
                <li className="text-gray-400 text-sm font-medium capitalize">Instructors</li>
                <li className="text-gray-400 text-sm font-medium capitalize">Courses</li>
                <li className="text-gray-400 text-sm font-medium capitalize">Exams</li>
                <li className="text-gray-400 text-sm font-medium capitalize">Price List</li>
              </ul>
            </div>
          </div>
  


          {/* Navigation Menus */}
          <div className="grid grid-cols-2 gap-16">
            {/* Second Menu */}
            <div>
              <h3 className="text-gray-200 text-sm font-medium mb-2">Menu</h3>
              <ul className="space-y-2">
                <li className="text-gray-400 text-sm font-medium capitalize">Accreditation</li>
                <li className="text-gray-400 text-sm font-medium capitalize">Employability Tools</li>
                <li className="text-gray-400 text-sm font-medium capitalize">Hire Candidates</li>
                <li className="text-gray-400 text-sm font-medium capitalize">Corporate Tools</li>
              </ul>
            </div>
  
            {/* Third Menu */}
            <div>
              <h3 className="text-gray-200 text-sm font-medium mb-2">Menu</h3>
              <ul className="space-y-2">
                <li className="text-gray-400 text-sm font-medium capitalize">University Enrolment</li>
                <li className="text-gray-400 text-sm font-medium capitalize">About CIFA</li>
                <li className="text-gray-400 text-sm font-medium capitalize">FAQs</li>
              </ul>
            </div>
          </div>
        </div>
  
        {/* Divider */}
        <div className="w-full h-px bg-gray-700 my-8"></div>
  
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm font-medium gap-4">
          {/* Footer Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-8">
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Accessibility Statement</a>
            <a href="#" className="hover:text-white">Cookies Policy</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
  
          {/* Footer Note */}
          <p className="text-center md:text-right">© 2024 CIFA. All rights reserved.</p>
        </div>
      </div>
    </div>
  </>
  
  )
}

export default Footer;























