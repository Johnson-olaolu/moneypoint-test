import AppStyles from "./app.module.scss";
import Footer from "./components/footer";
import Header from "./components/header";
import Section1 from "./components/section-1";
import Section2 from "./components/section-2";
import Section3 from "./components/section-3";

function App() {
  return (
    <div className={AppStyles.body}>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
}

export default App;
