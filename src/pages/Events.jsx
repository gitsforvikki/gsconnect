import { Calendar, MapPin, Users } from "lucide-react";

function Events() {
  const events = [
    {
      id: 1,
      title: "Village Fair 2024",
      date: "March 15, 2024",
      location: "Village Square",
      attendees: 150,
      description: "Annual village fair with games, food, and entertainment",
      image: "🎪",
    },
    {
      id: 2,
      title: "Community Cleanup Day",
      date: "March 22, 2024",
      location: "Village Surroundings",
      attendees: 50,
      description: "Join us to keep our village clean and green",
      image: "🧹",
    },
    {
      id: 3,
      title: "Food Festival",
      date: "April 10, 2024",
      location: "Community Center",
      attendees: 200,
      description: "Celebrate local cuisine with traditional recipes",
      image: "🍽️",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 dark:text-emerald-300 mb-12">
        Upcoming Events
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white dark:bg-slate-800 p-6 border border-gray-200 dark:border-slate-700 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <div className="text-5xl mb-4">{event.image}</div>
            <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-300 mb-2">
              {event.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {event.description}
            </p>

            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar
                  size={16}
                  className="text-emerald-600 dark:text-emerald-400"
                />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin
                  size={16}
                  className="text-emerald-600 dark:text-emerald-400"
                />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users
                  size={16}
                  className="text-emerald-600 dark:text-emerald-400"
                />
                <span>{event.attendees} interested</span>
              </div>
            </div>

            <button className="w-full mt-6 py-2 bg-emerald-600 dark:bg-emerald-700 text-white rounded font-medium hover:bg-emerald-700 dark:hover:bg-emerald-600 transition">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
