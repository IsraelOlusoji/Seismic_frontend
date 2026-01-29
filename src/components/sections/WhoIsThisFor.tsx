import Image from 'next/image';

export default function WhoIsThisFor() {

  const features = [
    {
      title: 'Shop Globally',
      description: 'Buy from US and other international stores.',
      icon: '/global.svg',
    },
    {
      title: 'Overseas Warehouse',
      description: 'We receive and process your items securely.',
      icon: 'house-2.svg',
    },
    {
      title: 'Delivered to Nigeria',
      description: 'Your package arrives at your chosen Nigerian address.',
      icon: '/group.svg',
    },
    {
      title: 'Transparent & Secure',
      description: 'Clear costs, real tracking, safe payments.',
      icon: '/shield-search.svg',
    },
  ];
  return (
    <section className="">
      <div className="mx-auto max-w-[1160px] px-4 md:px-6 lg:px-0">
       
        <div className="mb-6 flex justify-center">
          <span className="flex items-center justify-center gap-1 rounded-full border-[0.5px] border-primary-200 bg-primary-50 px-5 py-3 text-[14px] font-normal leading-[22.4px] tracking-[-0.02em] text-primary">
            Built for You
          </span>
        </div>

       
        <h2 className="mb-4 text-center text-[32px] font-medium leading-[1.2] tracking-[0.0025em] text-grey-950 md:text-[48px] md:leading-[57.6px]">
          Who Is This For?
        </h2>

       
        <p className="mx-auto mb-16 max-w-2xl text-center text-[16px] font-normal leading-[25.6px] tracking-[0.0015em] text-grey-700">
          Designed for Nigerians who shop internationally and want reliable delivery back home.
        </p>

        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {[
            {
              title: 'Small Business Owners',
              description: 'Importing items for resale in Nigeria.',
              image: '/Feature Card Left Image.svg',
            },
            {
              title: 'Everyday Shoppers',
              description: 'Buying clothes, gadgets, and accessories from abroad.',
              image: '/Feature Card Right Image.svg',
            },
          ].map((persona, index) => {
            const isImageTop = index % 2 !== 0;
            return (
              <div
                key={index}
                className={`flex h-[564px] w-full flex-col overflow-hidden rounded-[24px] border-[0.5px] border-grey-400 bg-white shadow-sm transition-shadow hover:shadow-md ${index === 1 ? 'lg:mt-[60px]' : ''
                  }`}
              >
                {isImageTop ? (
                  <>
                    <div className="relative min-h-[300px] w-full flex-1 bg-gray-50">
                      <Image
                        src={persona.image}
                        alt={persona.title}
                        width={500}
                        height={500}
                        className="absolute inset-0 h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="border-b-[0.5px] border-grey-400 p-4">
                      <h3 className="mb-2 text-[24px] font-bold leading-[28.8px] tracking-[0.01em] text-grey-950">
                        {persona.title}
                      </h3>
                      <p className="text-[16px] font-normal leading-[25.6px] tracking-[0.0015em] text-grey-700">
                        {persona.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="border-t-[0.5px] border-grey-400 p-4">
                      <h3 className="mb-2 text-[24px] font-bold leading-[28.8px] tracking-[0.01em] text-grey-950">
                        {persona.title}
                      </h3>
                      <p className="text-[16px] font-normal leading-[25.6px] tracking-[0.0015em] text-grey-700">
                        {persona.description}
                      </p>
                    </div>
                    <div className="relative min-h-[300px] w-full flex-1 bg-gray-50">
                      <Image
                        src={persona.image}
                        alt={persona.title}
                        width={500}
                        height={500}
                        className="absolute inset-0 h-full w-full object-cover object-center"
                      />
                    </div>
                  </>
                )}



              </div>
            );
          })}
        </div>




       
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 pt-10">
          {features.map((feature, index) => (
            <div key={index} className="flex w-full py-7   flex-col items-center justify-center rounded-[11px] bg-[#EDEDED] px-4 text-center transition-transform hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center">
                <Image src={feature.icon} alt={feature.title} width={50} height={50} />
              </div>
              <h4 className="mb-2 text-[20px] font-bold leading-[28px] tracking-[0.01em] text-grey-950">
                {feature.title}
              </h4>
              <p className="text-[16px] font-normal leading-[25.6px] tracking-[0.0015em] text-grey-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
