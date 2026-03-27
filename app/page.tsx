import { Layout } from "@/components/Layout";
import { Hero, About, Skills, Certifications, Projects, Experience, Contact } from "@/sections";
import { WebVitals } from "@/components/WebVitals";

export default function Home() {
  return (
    <>
      <WebVitals />
      <Layout>
        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Certifications />
          <Projects />
          {/* <Experience /> */}
          <Contact />
        </main>
      </Layout>
    </>
  );
}
