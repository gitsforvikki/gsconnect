const Footer = () => {
  return (
    <div className="bg-emerald-50 dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-emerald-700 dark:text-emerald-300 mb-4">
              Village Connect
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Your digital gateway to all village activities, events, and
              celebrations.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <button
                  onClick={() => setCurrentPage("events")}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("festivals")}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  Festivals
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("gallery")}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  Gallery
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-4">
              Contact
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Email: info@villageconnect.local
              <br />
              Phone: +91-XXXXX-XXXXX
            </p>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-slate-700 pt-8">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © 2024 Village Connect. All rights reserved. Made with ❤️ for our
            community.
          </p>
        </div>
      </div>
    </div>
  );
};


export default Footer;