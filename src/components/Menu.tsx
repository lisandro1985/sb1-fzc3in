export default function Menu() {
  const menuItems = [
    {
      category: "Entrées",
      items: [
        {
          name: "Truffle Risotto",
          description: "Arborio rice, wild mushrooms, parmesan, fresh truffle",
          price: "32"
        },
        {
          name: "Lobster Thermidor",
          description: "Maine lobster, cognac cream sauce, gruyère",
          price: "45"
        }
      ]
    },
    {
      category: "Main Courses",
      items: [
        {
          name: "Wagyu Beef Tenderloin",
          description: "Grade A5 wagyu, seasonal vegetables, red wine reduction",
          price: "85"
        },
        {
          name: "Mediterranean Sea Bass",
          description: "Wild-caught sea bass, citrus beurre blanc, herbs",
          price: "48"
        }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Our Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A carefully curated selection of seasonal dishes showcasing the finest ingredients
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {menuItems.map((section) => (
            <div key={section.category}>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">{section.category}</h3>
              <div className="space-y-8">
                {section.items.map((item) => (
                  <div key={item.name} className="border-b border-gray-200 pb-6">
                    <div className="flex justify-between items-baseline">
                      <h4 className="text-xl font-medium text-gray-900">{item.name}</h4>
                      <span className="text-amber-600 font-medium">${item.price}</span>
                    </div>
                    <p className="mt-2 text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}