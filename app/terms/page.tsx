import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use - Mistie",
  description: "Terms of use for Mistie's website.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 md:py-28 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl mb-12">
            Terms of Use
          </h1>
          
          <div className="space-y-8 text-muted leading-relaxed">
            <div>
              <h2 className="font-serif text-2xl text-foreground mb-4">
                Copyright
              </h2>
              <p>
                All artwork, images, text, and other content on this website are the
                intellectual property of Mistie and are protected by copyright law.
                Unauthorized use, reproduction, or distribution is prohibited.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-foreground mb-4">
                Artwork Purchases
              </h2>
              <p>
                All artwork sales are subject to availability and confirmation. Prices
                are available upon request. We reserve the right to refuse any sale at
                our discretion.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-foreground mb-4">
                Website Use
              </h2>
              <p>
                This website is provided for informational purposes only. We make no
                warranties about the completeness, reliability, or accuracy of this
                information.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-foreground mb-4">
                Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these terms at any time. Please review
                these terms periodically for changes.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-foreground mb-4">
                Contact
              </h2>
              <p>
                For questions about these terms, please contact us at hello@mistie.art
              </p>
            </div>

            <p className="text-sm pt-8 border-t border-border">
              Last updated: October 2025
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

