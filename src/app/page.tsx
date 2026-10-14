import { Footer } from "@/components/footer-component";
import { NewsletterTestimonials } from "@/components/Newsletter/testimonials/newsletter-testimonials";
import {
  WaitlistAudience,
  WaitlistCta,
  WaitlistCurriculum,
  WaitlistFaq,
  WaitlistGuide,
  WaitlistHeader,
  WaitlistHero,
  WaitlistIncluded,
  WaitlistMethod,
  WaitlistOverview,
} from "@/components/Waitlist/waitlist-sections";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <WaitlistHeader />
      <main>
        <WaitlistHero />
        <WaitlistOverview />
        <NewsletterTestimonials ctaHref="#registro" ctaLabel="Apuntarme a la lista de espera" />
        <WaitlistGuide />
        <WaitlistMethod />
        <WaitlistAudience />
        <WaitlistCurriculum />
        <WaitlistCta />
        <WaitlistIncluded />
        <WaitlistFaq />
        <WaitlistCta />
      </main>
      <Footer />
    </div>
  );
}
