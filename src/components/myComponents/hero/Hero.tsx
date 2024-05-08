import Image from "next/image";

function Hero() {
  return (
    <section className="bg-primary text-white">
      <div className="container mx-auto flex items-center justify-between p-8">
        <div className="flex-1">
          <h1 className="text-4xl font-bold">Welcome to ECommerce</h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
            velit, vulputate eu pharetra nec, mattis ac neque.
          </p>
          <button className="mt-8 px-4 py-2 bg-gray-600 hover:bg-gray-700">
            Shop Now
          </button>

          <div className="mt-8">
            <a href="#" className="hover:text-gray-300">
              Learn More
            </a>

            <a href="#" className="ml-4 hover:text-gray-300">
              About Us
            </a>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="https://miro.medium.com/v2/resize:fit:1400/0*YJV9mU08M1Pe1zgp"
            alt="ECommerce"
            className="w-full h-full object-cover"
            width={400}
            height={200}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
