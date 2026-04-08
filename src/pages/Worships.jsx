import { Heart, Clock, MapPin } from "lucide-react";

function Worships() {
  const worships = [
    {
      id: 1,
      name: "Village Temple",
      deity: "Lord Hanuman",
      timings: "5:00 AM - 9:00 PM",
      location: "Center of Village",
      services: ["Morning Aarti", "Evening Aarti", "Special Pujas"],
      image: "🛕",
    },
    {
      id: 2,
      name: "Community Mosque",
      deity: "Islamic Prayer Center",
      timings: "Five Daily Prayers",
      location: "North Village",
      services: ["Jummah Prayer", "Quranic Classes", "Community Events"],
      image: "🕌",
    },
    {
      id: 3,
      name: "Village Church",
      deity: "Christian Worship",
      timings: "Sunday 10:00 AM",
      location: "East Village",
      services: ["Sunday Service", "Prayer Meetings", "Bible Study"],
      image: "⛪",
    },
    {
      id: 4,
      name: "Gurudwara",
      deity: "Sikh Worship Center",
      timings: "6:00 AM - 8:00 PM",
      location: "West Village",
      services: ["Langar", "Kirtan", "Spiritual Classes"],
      image: "🕉️",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center gap-3 mb-12">
        <Heart className="text-emerald-600 dark:text-emerald-400" size={32} />
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 dark:text-emerald-300">
          Places of Worship
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {worships.map((place) => (
          <div
            key={place.id}
            className="bg-white dark:bg-slate-800 p-6 border border-gray-200 dark:border-slate-700 rounded-lg shadow hover:shadow-lg transition-all hover:border-emerald-400 dark:hover:border-emerald-400"
          >
            <div className="text-5xl mb-4">{place.image}</div>
            <h3 className="text-2xl font-bold text-emerald-700 dark:text-emerald-300 mb-1">
              {place.name}
            </h3>
            <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium mb-4">
              {place.deity}
            </p>

            <div className="space-y-3 mb-4 text-gray-600 dark:text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Clock
                  size={16}
                  className="text-emerald-600 dark:text-emerald-400"
                />
                <span>{place.timings}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin
                  size={16}
                  className="text-emerald-600 dark:text-emerald-400"
                />
                <span>{place.location}</span>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 mb-2">
                Services:
              </p>
              <div className="flex flex-wrap gap-2">
                {place.services.map((service, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-emerald-700 dark:text-emerald-300 rounded-full text-xs"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Worships;
