import { Trophy, Users, Clock } from "lucide-react";

function Sports() {
  const sports = [
    {
      id: 1,
      title: "Cricket Tournament",
      season: "April-May 2024",
      teams: 8,
      venue: "Village Ground",
      description: "Inter-village cricket championship",
      image: "🏏",
    },
    {
      id: 2,
      title: "Football League",
      season: "June-July 2024",
      teams: 6,
      venue: "Community Field",
      description: "Youth football competition",
      image: "⚽",
    },
    {
      id: 3,
      title: "Kabaddi Championship",
      season: "August-September 2024",
      teams: 10,
      venue: "Open Ground",
      description: "Traditional kabaddi tournament",
      image: "🤸",
    },
    {
      id: 4,
      title: "Athletics Meet",
      season: "October 2024",
      teams: 12,
      venue: "Village Stadium",
      description: "Track and field events",
      image: "🏃",
    },
    {
      id: 5,
      title: "Badminton Tournament",
      season: "November 2024",
      teams: 5,
      venue: "Sports Complex",
      description: "Indoor badminton competition",
      image: "🏸",
    },
    {
      id: 6,
      title: "Chess Championship",
      season: "December 2024",
      teams: 20,
      venue: "Community Center",
      description: "Annual chess competition",
      image: "♟️",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center gap-3 mb-12">
        <Trophy className="text-emerald-600 dark:text-emerald-400" size={32} />
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 dark:text-emerald-300">
          Sports Events
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sports.map((event) => (
          <div
            key={event.id}
            className="bg-white dark:bg-slate-800 p-6 border border-gray-200 dark:border-slate-700 rounded-lg shadow hover:shadow-lg transition-all group hover:border-emerald-400 dark:hover:border-emerald-400"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
              {event.image}
            </div>
            <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-300 mb-2">
              {event.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              {event.description}
            </p>

            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Clock
                  size={16}
                  className="text-emerald-600 dark:text-emerald-400"
                />
                <span>{event.season}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users
                  size={16}
                  className="text-emerald-600 dark:text-emerald-400"
                />
                <span>{event.teams} teams</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">📍</span>
                <span>{event.venue}</span>
              </div>
            </div>

            <button className="w-full mt-6 py-2 bg-emerald-600 dark:bg-emerald-700 text-white rounded font-medium hover:bg-emerald-700 dark:hover:bg-emerald-600 transition">
              Register Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sports;
