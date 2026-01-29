import Image from 'next/image';

export default function TopStores() {
  const stores = [
    { name: 'Adidas', src: '/adidas.svg' },
    { name: 'Chanel', src: '/Chanel.svg' },
    { name: 'Nike', src: '/nike.svg' },
    { name: 'Chanel', src: '/Chanel.svg' },
    { name: 'Amazon', src: '/Amazon.svg' },
    { name: 'eBay', src: '/ebay.png' },
    { name: 'The North Face', src: '/the_north_face.svg' },
    { name: 'Amazon', src: '/Amazon.svg' },
  ];

  return (
    <section id="stores" className="py-2">
      <div className="mx-auto max-w-[1160px] px-4 md:px-6 lg:px-0">

      
        <div className="mb-6 flex justify-center">
          <span className="flex h-[47px] w-[134px] items-center justify-center gap-1 rounded-full border-[0.5px] border-primary-200 bg-primary-50 px-[9px] py-[6px] text-[14px] font-normal leading-[22.4px] tracking-[-0.02em] text-primary">
            Popular Stores
          </span>
        </div>

        
        <h2 className="mb-4 text-center text-[32px] font-medium leading-[1.2] tracking-[0.0025em] text-grey-950 md:text-[48px] md:leading-[57.6px]">
          Top Stores Nigerians Shop From
        </h2>


        <p className="mx-auto mb-16 max-w-2xl text-center text-[16px] font-normal leading-[25.6px] tracking-[0.0015em] text-grey-700">
          Shop from trusted international brands across fashion, electronics, home, and more. We
          handle the delivery from abroad and bring your items safely to Nigeria.
        </p>

        {/* Stores Grid */}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stores.map((store, index) => (
            <div
              key={index}
              className="flex h-[140px] items-center justify-center rounded-[11px] bg-grey-100 px-[9px] py-[13px] transition-transform hover:scale-[1.02]"
            >
              <div className="relative h-12 w-32">
                <Image
                  src={store.src}
                  alt={store.name}
                  fill
                  className="object-contain opacity-80 mix-blend-multiply"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
