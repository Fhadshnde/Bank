import styles from "./style";
import Billing from './copmoents/Billing'
import Hero from './copmoents/Hero'
import Business from './copmoents/Business'
import CardDeal from './copmoents/CardDeal'
import Clients from './copmoents/Clients'
import CTA from './copmoents/CTA'
import Footer from './copmoents/Footer'
import Navbar from './copmoents/Navbar'
import Stats from './copmoents/Stats'
import Testimonials from './copmoents/TestMonials'


const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;