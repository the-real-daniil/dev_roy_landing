import { About } from '@/widgets/about';
import { Faq } from '@/widgets/faq';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { Hero } from '@/widgets/hero';
import { Pricing } from '@/widgets/pricing';
import { Problems } from '@/widgets/problems';
import { Product } from '@/widgets/product';
import { Program } from '@/widgets/program';
import { Results } from '@/widgets/results';
import { Trust } from '@/widgets/trust';
import { AnimationLayer } from '@/shared/animation-layer';

import styles from './home.module.css';

export function HomePage() {
  return (
    <>
      <AnimationLayer />
      <Header />
      <main>
        <Hero />
        <div className={styles.lightHoneycomb}>
          <About />
          {/* <Values /> */}
          <Problems />
        </div>
        <Program />
        <Product />
        <Trust />
        <Pricing />
        <Results />
      </main>
      <div className={styles.bottomHoneycomb}>
        <Faq />
        <Footer />
      </div>
    </>
  );
}
