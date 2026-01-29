import Button from '@/components/ui/Button';

export default function FAQs() {
  const faqs = [
    {
      question: 'Do I get a personal warehouse address?',
      answer: 'No. All packages are received at our shared overseas warehouse and processed securely.',
    },
    {
      question: 'Do you handle customs fees?',
      answer: 'Customs duties are determined by Nigerian customs and are not controlled by us.',
    },
    {
      question: 'Can I shop from any international store?',
      answer: 'Yes, as long as the store can ship to our warehouse location.',
    },
    {
      question: 'Can I track my package?',
      answer: "Yes. You'll receive tracking updates from warehouse to delivery.",
    },
    {
      question: 'What if my item is damaged?',
      answer: 'Optional insurance is available for eligible shipments.',
    },
  ];

  return (
    <section id="faqs" className="py-20">
      <div className="mx-auto max-w-[1000px] px-4 md:px-6 lg:px-0">
       
        <div className="mb-6 flex justify-center">
          <span className="flex items-center justify-center gap-1 rounded-full border-[0.5px] border-primary-200 bg-primary-50 px-5 py-3 text-[14px] font-normal leading-[22.4px] tracking-[-0.02em] text-primary">
            Built for You
          </span>
        </div>

  
        <h2 className="mb-4 text-center text-[32px] font-medium leading-[1.2] tracking-[0.0025em] text-grey-950 md:text-[48px] md:leading-[57.6px]">
          FAQs
        </h2>

     
        <p className="mx-auto mb-16 max-w-2xl text-center text-[16px] font-normal leading-[25.6px] tracking-[0.0015em] text-grey-700">
          Focused on your needs, our team delivers solutions to ensure <br /> adequate and secure buy and ship to Nigeria.
        </p>


        <div className="mb-16 flex flex-col items-center gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="flex  w-full max-w-[800px] flex-col justify-between gap-8 rounded-4xl bg-[#EDEDED] p-8 md:flex-row md:items-center"
            >
              <div className="md:w-[45%]">
                <h3 className="text-[16px] font-bold leading-[24px] tracking-[-0.02em] text-grey-950">
                  {faq.question}
                </h3>
              </div>
              <div className="md:w-[50%]">
                <p className="text-[16px] font-normal leading-[25.6px] tracking-[0.0015em] text-grey-700">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

     
        <div className="text-center">
          <h3 className="mb-2 text-[20px] font-bold leading-[28px] tracking-[0.01em] text-grey-950">
            Still have a question?
          </h3>
          <p className="mb-6 text-[16px] font-normal leading-[25.6px] tracking-[0.0015em] text-grey-700">
            Reach out to our support team.
          </p>
          <Button variant="outline" size="small">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
