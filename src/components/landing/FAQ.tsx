
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I earn points with Rhino Bond?",
      answer:
        "You earn points by scanning the unique QR code on Rhino Bond products after purchase. Each product may have a different point value based on its type and price range.",
    },
    {
      question: "Can I scan the same QR code multiple times?",
      answer:
        "No, each QR code is unique and can only be scanned once. This ensures the loyalty program remains fair for all users and prevents misuse.",
    },
    {
      question: "What is KYC and why is it required?",
      answer:
        "KYC (Know Your Customer) is a verification process to confirm your identity. It's required to prevent fraud and ensure that only legitimate users participate in the loyalty program.",
    },
    {
      question: "How do I redeem my points?",
      answer:
        "You can redeem points through the app by selecting available rewards from the rewards catalog. Once you have enough points, simply select the item you want to redeem and follow the instructions.",
    },
    {
      question: "Do my points expire?",
      answer:
        "Points typically remain valid for 12 months from the date they were earned. The app will notify you before points are about to expire.",
    },
    {
      question: "Is the app available for both Android and iOS?",
      answer:
        "Currently, the app is available as an APK download for Android devices. iOS version is under development and will be available soon.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Find answers to common questions about the Rhino Bond loyalty program.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
