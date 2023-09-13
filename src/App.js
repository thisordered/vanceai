import Footer from "./components/Footer";
import Header from "./components/Header";
import CustomerFeedbacks from "./components/home/CustomerFeedbacks";
import Hero from "./components/home/Hero";
import HotAIFeatures from "./components/home/HotAIFeatures";
import JobDescription from "./components/home/JobDescription";
import LatestArticles from "./components/home/LatestArticles";
import LoyalCustomers from "./components/home/LoyalCustomers";
import NewReleases from "./components/home/NewReleases";
import Recommendation from "./components/home/Recommendation";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Recommendation />
      <HotAIFeatures />
      <NewReleases />
      <JobDescription />
      <CustomerFeedbacks />
      <LoyalCustomers />
      <LatestArticles />
      <Footer />
    </div>
  );
}

export default App;
