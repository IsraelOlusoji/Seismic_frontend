export default function HowItWorks() {

  const steps = [
    {
      step: 'ONE',
      number: '01',
      title: 'Shop Online',
      description: 'Buy items from international stores that ship to our overseas warehouse.',
    },
    {
      step: 'TWO',
      number: '02',
      title: 'We Receive Your Item',
      description: 'Your order arrives at our shared overseas warehouse, where it is checked in and prepared for shipping.',
    },
    {
      step: 'THREE',
      number: '03',
      title: 'Choose Shipping & Pay',
      description: 'Select your shipping option, view the cost, and complete payment.',
    },
    {
      step: 'FOUR',
      number: '04',
      title: 'Delivered to Nigeria',
      description: 'Your package is shipped to Nigeria and delivered to your address, with tracking updates along the way.',
    },
  ];

  const StepCard = ({
    step,
    number,
    title,
    description,
  }: {
    step: string;
    number: string;
    title: string;
    description: string;
  }) => {
    return (
      <div className="flex w-[348px] flex-col items-start rounded-[11px] relative z-10">

        <div className="mb-[17px] flex w-full items-center justify-between rounded-full bg-white px-6 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-gray-100 relative z-20">
          <span className="text-[15px] font-bold uppercase tracking-wider text-grey-950">
            STEP {step}
          </span>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-dashed border-primary text-sm font-bold text-primary">
            {number}
          </div>
        </div>

        <div className="relative z-10 flex h-[249px] w-full flex-col justify-end rounded-3xl bg-white p-5 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
          <h3 className="mb-4 text-[24px] font-bold leading-[28.8px] tracking-[0.01em] text-grey-950">
            {title}
          </h3>
          <p className="text-[16px] font-normal leading-[25.6px] tracking-[0.0015em] text-grey-700">
            {description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section id="how-it-works " className="overflow-hidden pt-30 pb-20">
      <div className="relative mx-auto max-w-[1160px] px-4 md:px-6 lg:px-0">

        {/* Label */}
        <div className="mb-8 flex justify-center">
          <span className="flex items-center justify-center gap-1 rounded-full border-[0.5px] border-primary-200 bg-primary-50 px-4 py-3 text-[14px] font-normal leading-[22.4px] tracking-[-0.02em] text-primary">
            Simple Steps
          </span>
        </div>

        {/* Heading */}
        <h2 className="mb-4 text-center text-[32px] font-medium leading-[1.2] tracking-[0.0025em] text-grey-950 md:text-[48px] md:leading-[57.6px]">
          How it Works
        </h2>


        <p className="mx-auto mb-20 max-w-2xl text-center text-[16px] font-normal leading-[25.6px] tracking-[0.0015em] text-grey-700">
          Buying from international stores doesn&apos;t have to be complicated. <br /> Here&apos;s how we make it simple.
        </p>


        <div className="relative hidden w-full text-left lg:block" style={{ height: '1200px' }}>


          <svg className="absolute inset-0 h-full w-full pointer-events-none z-20" viewBox="0 0 1160 1300" fill="none">

            <path
              d="
                M 460 200
                H 550
                L 610 410
                H 696
                
                M 870 553
                V 648

                M 696 903
                H 625
                L 550 1135
                H 468
              "
              stroke="#003631"
              strokeWidth="4"
              fill="none"
              strokeLinejoin="round"
            />
            {/* Dots */}
            <circle cx="465" cy="200" r="8" fill="#003631" />
            <circle cx="700" cy="410" r="8" fill="#003631" />

            <circle cx="870" cy="559" r="8" fill="#003631" />
            <circle cx="870" cy="653" r="8" fill="#003631" />

            <circle cx="700" cy="903" r="8" fill="#003631" />
            <circle cx="465" cy="1135" r="8" fill="#003631" />
          </svg>

          {/* Step 1: */}
          <div className="absolute left-30 top-[-20px] z-10">
            <StepCard {...steps[0]} />
          </div>

          {/* Step 2: */}
          <div className="absolute right-29 top-[180px] z-10">
            <StepCard {...steps[1]} />
          </div>

          {/* Step 3: */}
          <div className="absolute right-29 top-[610px] z-10">
            <StepCard {...steps[2]} />
          </div>

          {/* Step 4: */}
          <div className="absolute left-30 top-[850px] z-10">
            <StepCard {...steps[3]} />
          </div>
        </div>

        {/* Mobile Layout (Stacked) */}
        <div className="flex flex-col items-center space-y-12 lg:hidden">
          {steps.map((step, index) => (
            <div key={index} className="relative w-full max-w-[348px]">
              <StepCard {...step} />
              {index < steps.length - 1 && (
                <div className="absolute bottom-[-48px] left-[50%] h-12 w-[2px] -translate-x-1/2 bg-primary opacity-20"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
