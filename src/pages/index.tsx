import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <main className="p-8">
        <section className="text-center space-y-4">
          <h2 className="text-4xl font-bold">
            I do code and make content about it!
          </h2>
          <p>
            I am an intern Frontend Developer specializing in creating intuitive
            web applications.
          </p>
          <button className="mt-4 p-3 bg-blue-600 text-white rounded">
            Get In Touch
          </button>
          <button className="mt-4 p-3 bg-gray-600 text-white rounded">
            Download CV
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
