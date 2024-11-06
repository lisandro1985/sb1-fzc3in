export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1977&q=80"
              alt="Chef Zora"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">About Chef Zora</h2>
            <div className="space-y-6 text-gray-600">
              <p>
                With over 15 years of culinary expertise, Chef Zora has mastered the art of combining classical French techniques with contemporary innovation. Her journey through prestigious kitchens across Europe and Asia has shaped her unique culinary perspective.
              </p>
              <p>
                Each dish is a reflection of her commitment to excellence, using only the finest seasonal ingredients sourced from local producers and artisans. Her philosophy centers on respecting traditional methods while embracing modern creativity.
              </p>
              <p>
                Chef Zora's restaurant has earned multiple accolades, including two Michelin stars, but her greatest satisfaction comes from creating memorable dining experiences for her guests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}