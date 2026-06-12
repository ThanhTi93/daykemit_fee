import Hero from './Hero';
import FAQ from './FAQ';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import CompanySection from './CompanySection';
import WhyChooseSection from './WhyChooseSection';
import RoadmapSection from './RoadmapSection';
import CourseSection from './CourseSection';
import ResultSection from './ResultSection';
import BlogSection from './BlogSection';
import CTASection from './CTASection';

function Home() {
    return (
        <div>
            <Hero />
            <CompanySection />
            <WhyChooseSection />
            <RoadmapSection />
            <CourseSection />
            <ResultSection />
            {/* <Courses /> */}
            <Pricing />
            <Testimonials />
            <BlogSection /> 
            <FAQ />
            <CTASection />
        </div>
    );
}

export default Home;
