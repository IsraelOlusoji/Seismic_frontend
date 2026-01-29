import Image from 'next/image';

export default function PlatformHighlights() {
  const features = [
    {
      title: 'Package Receiving',
      description: 'We receive your international orders at our overseas warehouse.',
      image: '/Image_Container.svg',
    },
    {
      title: 'Parcel Consolidation',
      description: 'Combine multiple packages into one shipment to reduce shipping costs.',
      image: '/Image_container01.svg',
    },
    {
      title: 'Shipping Cost Calculator',
      description: 'See your shipping cost before paying. No surprises.',
      image: '/Image_container02.svg',
    },
    {
      title: 'Real-Time Tracking',
      description: 'Track your package from warehouse to delivery in Nigeria.',
      image: '/Image_container03.svg',
    },
    {
      title: 'Assisted Purchase',
      description: "If a store doesn't accept your card, share the product link and we'll help you buy it.",
      image: '/Image_container04.svg',
    },
    {
      title: 'Order Notifications',
      description: 'Get updates when your package arrives, ships, and is delivered.',
      image: '/Image_container05.svg',
    },
  ];

  return (
    <section className="pb-20">
      <div className="mx-auto max-w-[1160px] px-4 md:px-6 lg:px-0">

        <div className="mb-8 flex justify-center">
          <span className="flex items-center justify-center gap-1 rounded-full border-[0.5px] border-primary-200 bg-primary-50 px-5 py-3 text-[14px] font-normal leading-[22.4px] tracking-[-0.02em] text-primary">
            Platform Highlights
          </span>
        </div>

     
        <h2 className="mb-4 text-center text-[32px] font-medium leading-[1.2] tracking-[0.0025em] text-grey-950 md:text-[48px] md:leading-[57.6px]">
          Everything You Need, In One Place
        </h2>

      
        <p className="mx-auto mb-16 max-w-2xl text-center text-[16px] font-normal leading-[25.6px] tracking-[0.0015em] text-grey-700">
          All your global shopping and shipping tools, together.
        </p>


        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative h-[460px] overflow-hidden rounded-2xl border-[0.5px] border-grey-400 bg-white transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
            >
            
              <div className="aspect-[4/3.5] w-full overflow-hidden bg-[#F3F4F6]">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

             
              <div className="p-6 ">
                <h3 className="mb-3 text-[24px] font-bold leading-[28.8px] tracking-[0.01em] text-grey-950">
                  {feature.title}
                </h3>
                <p className="text-[16px]  font-normal leading-[25.6px] tracking-[0.0015em] text-grey-700">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
