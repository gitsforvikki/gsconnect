import { Sparkles } from 'lucide-react';

function Festivals() {
  const festivals = [
    {
      id: 1,
      title: 'Holi - Festival of Colors',
      date: 'March 8, 2024',
      description: 'Celebrate the festival of colors with vibrant colors and sweets',
      image: '🎨',
      significance: 'Spring celebration of love and joy',
    },
    {
      id: 2,
      title: 'Diwali - Festival of Lights',
      date: 'November 1, 2024',
      description: 'Light up the village with diyas, lamps, and fireworks',
      image: '🪔',
      significance: 'Celebration of good over evil',
    },
    {
      id: 3,
      title: 'Harvest Festival',
      date: 'January 15, 2024',
      description: 'Celebrate the harvest season with traditional music and dance',
      image: '🌾',
      significance: 'Gratitude for a good harvest',
    },
    {
      id: 4,
      title: 'Village Anniversary',
      date: 'June 20, 2024',
      description: 'Celebrate our village with cultural programs and festivities',
      image: '🎉',
      significance: 'Remembering our village heritage',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center gap-3 mb-12">
        <Sparkles className="text-emerald-600 dark:text-emerald-400" size={32} />
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 dark:text-emerald-300">Festivals & Celebrations</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {festivals.map((festival) => (
          <div
            key={festival.id}
            className="bg-white dark:bg-slate-800 border-l-4 border-emerald-600 p-6 border border-gray-200 dark:border-slate-700 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="text-5xl flex-shrink-0">{festival.image}</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-emerald-700 dark:text-emerald-300 mb-1">{festival.title}</h3>
                <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-2">{festival.significance}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-3">{festival.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">📅 {festival.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Festivals;
