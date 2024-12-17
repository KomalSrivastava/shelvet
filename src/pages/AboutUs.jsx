import React from "react";

const AboutUs = () => {
  return (
    <div className="py-10 px-4 bg-[#fdf4ee]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#b3876f] mb-8">
          About Us
        </h1>

        {/* Company Overview Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Story
          </h2>
          <p className="text-lg text-gray-600">
            Welcome to SheLvet – Your ultimate destination for women’s fashion!
            Founded with a vision to bring stylish, affordable, and high-quality
            clothing to women of all shapes and sizes, SheLvet is a one-stop
            shop for all your fashion needs. Whether you're looking for casual
            wear, work attire, or glamorous evening outfits, we’ve got something
            for everyone. Our curated collections offer the latest trends at the
            best prices, ensuring you always look and feel your best.
          </p>
        </section>

        {/* Mission and Vision Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600">
            At SheLvet, our mission is to empower women by providing them with a
            wide range of fashion choices that not only reflect the latest
            trends but also meet their individual needs. We believe that every
            woman deserves to feel confident and beautiful in what she wears,
            and we are committed to offering high-quality clothing that enhances
            her style and personality.
          </p>
        </section>

        {/* Sustainability Section */}
        <section className="mb-12 bg-[#FAF6F1] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Sustainability at SheLvet
          </h2>
          <p className="text-lg text-gray-600">
            We care deeply about the planet and its future. That’s why we are
            dedicated to making sustainable fashion a reality. SheLvet works
            closely with eco-conscious designers and manufacturers to create
            products that are both beautiful and sustainable. From using
            eco-friendly fabrics to reducing waste in our packaging, we are
            constantly striving to reduce our environmental impact and promote
            sustainable practices in the fashion industry.
          </p>
        </section>

        {/* Customer Care Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Customer Care
          </h2>
          <p className="text-lg text-gray-600">
            At SheLvet, we value our customers and aim to provide an exceptional
            shopping experience. Our customer care team is always available to
            assist you with any questions or concerns. Whether you need help
            with choosing the right size, tracking your order, or processing a
            return, we’re here to ensure you have a seamless and satisfying
            shopping experience.
          </p>
        </section>

        {/* Fashion Trends Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Stay Ahead of the Fashion Curve
          </h2>
          <p className="text-lg text-gray-600">
            Fashion is constantly evolving, and at SheLvet, we keep you ahead of
            the curve by curating collections that are on-trend and timeless.
            From the latest seasonal trends to classic wardrobe staples, we
            ensure you always have access to the freshest and most stylish
            pieces. Explore our new arrivals regularly to stay updated with the
            latest in fashion.
          </p>
        </section>

        {/* Call to Action Section */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Join the SheLvet Family
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Ready to elevate your wardrobe? Start shopping today and discover a
            world of fashionable, affordable, and sustainable clothing for every
            occasion. We can't wait to welcome you into the SheLvet family!
          </p>
          <a
            href="/collections"
            className="inline-block bg-[#b3876f] text-white py-2 px-6 rounded-lg text-lg hover:bg-[#9a6e5b]"
          >
            Shop Now
          </a>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
