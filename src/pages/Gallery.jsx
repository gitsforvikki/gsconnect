import { useState } from "react";
import { X } from "lucide-react";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      title: "Village Fair 2023",
      emoji: "🎪",
      category: "Events",
    },
    {
      id: 2,
      title: "Holi Celebration",
      emoji: "🎨",
      category: "Festivals",
    },
    {
      id: 3,
      title: "Temple Festival",
      emoji: "🛕",
      category: "Worship",
    },
    {
      id: 4,
      title: "Cricket Tournament",
      emoji: "🏏",
      category: "Sports",
    },
    {
      id: 5,
      title: "Community Gathering",
      emoji: "👥",
      category: "Events",
    },
    {
      id: 6,
      title: "Diwali Lights",
      emoji: "🪔",
      category: "Festivals",
    },
    {
      id: 7,
      title: "Food Festival",
      emoji: "🍽️",
      category: "Events",
    },
    {
      id: 8,
      title: "Football Match",
      emoji: "⚽",
      category: "Sports",
    },
    {
      id: 9,
      title: "Village Landscape",
      emoji: "🌾",
      category: "Nature",
    },
    {
      id: 10,
      title: "Evening Gathering",
      emoji: "🌅",
      category: "Events",
    },
    {
      id: 11,
      title: "Market Day",
      emoji: "🏪",
      category: "Events",
    },
    {
      id: 12,
      title: "Cultural Program",
      emoji: "🎭",
      category: "Festivals",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 dark:text-emerald-300 mb-12">
        Photo Gallery
      </h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {galleryImages.map((image) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className="bg-white dark:bg-slate-800 p-6 aspect-square flex flex-col items-center justify-center border border-gray-200 dark:border-slate-700 cursor-pointer group hover:border-emerald-400 dark:hover:border-emerald-400 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="text-6xl group-hover:scale-125 transition-transform duration-200 mb-3">
              {image.emoji}
            </div>
            <h3 className="text-center font-semibold text-emerald-700 dark:text-emerald-300 text-sm group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
              {image.title}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              {image.category}
            </p>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 dark:bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-800 rounded-lg max-w-2xl w-full p-6 md:p-8 relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition"
            >
              <X size={24} className="text-gray-600 dark:text-gray-300" />
            </button>

            {/* Image Content */}
            <div className="flex flex-col items-center">
              <div className="text-9xl mb-6">{selectedImage.emoji}</div>
              <h2 className="text-3xl font-bold text-emerald-700 dark:text-emerald-300 mb-2 text-center">
                {selectedImage.title}
              </h2>
              <span className="px-4 py-2 bg-emerald-100 dark:bg-slate-700 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium">
                {selectedImage.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
