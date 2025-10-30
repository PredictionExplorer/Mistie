import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Mistie",
  description: "Privacy policy for Mistie's website.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 md:py-28 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl mb-12">
            Privacy Policy
          </h1>
          
          <div className="space-y-8 text-muted leading-relaxed">
            <div>
              <h2 className="font-serif text-2xl text-foreground mb-4">
                Information Collection
              </h2>
              <p>
                We collect information you provide directly to us through our contact
                form, including your name, email address, and any other information you
                choose to provide.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-foreground mb-4">
                Use of Information
              </h2>
              <p>
                We use the information we collect to respond to your inquiries,
                communicate with you about our artwork, and improve our services.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-foreground mb-4">
                Information Sharing
              </h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information
                to third parties. This does not include trusted third parties who assist
                us in operating our website, as long as those parties agree to keep this
                information confidential.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-foreground mb-4">
                Contact
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us
                at hello@mistie.art
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

