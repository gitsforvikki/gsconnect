import { Leaf, Users, Heart } from 'lucide-react';

function Home() {
  const features = [
    {
      icon: <Leaf size={32} />,
      title: 'Community Events',
      description: 'Stay updated with all village events and gatherings',
    },
    {
      icon: <Heart size={32} />,
      title: 'Cultural Heritage',
      description: 'Celebrate our traditions and festivals together',
    },
    {
      icon: <Users size={32} />,
      title: 'Village Connect',
      description: 'Connect with your neighbors and community',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-emerald-50 dark:from-slate-800 to-white dark:to-slate-900 py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-emerald-700 dark:text-emerald-300 mb-4">
            Welcome to Village Connect
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Your gateway to all things about our beautiful village - events, festivals, worships, sports, and cherished memories captured in our gallery.
          </p>
          <button className="px-8 py-3 bg-emerald-600 dark:bg-emerald-700 text-white rounded font-medium text-lg hover:bg-emerald-700 dark:hover:bg-emerald-600 transition">
            Explore More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-700 dark:text-emerald-300 mb-12">
            What We Offer
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-emerald-50 dark:bg-slate-800 p-8 text-center border border-gray-200 dark:border-slate-700 rounded-lg shadow hover:shadow-xl transition"
              >
                <div className="flex justify-center text-emerald-600 dark:text-emerald-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-300 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-12 md:py-20 px-4 bg-emerald-100 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-emerald-700 dark:text-emerald-300">50+</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Events Yearly</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-emerald-700 dark:text-emerald-300">5000+</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Residents</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-emerald-700 dark:text-emerald-300">12+</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Festivals</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-emerald-700 dark:text-emerald-300">100%</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Community</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-emerald-700 dark:text-emerald-300 mb-4">
            Stay Connected
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Subscribe to our notifications to never miss any village events and celebrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400"
            />
            <button className="px-8 py-3 bg-emerald-600 dark:bg-emerald-700 text-white rounded font-medium hover:bg-emerald-700 dark:hover:bg-emerald-600 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
