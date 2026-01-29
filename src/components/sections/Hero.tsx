import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="pt-28 md:pt-36 pb-20 px-4 md:px-10 lg:px-0">
      <div className="max-w-5xl mx-auto text-center">

        <div className="flex justify-center mb-8">
          <span className="flex w-[231px] h-[47px] items-center justify-center gap-1 rounded-full border-[0.5px] border-primary/20 bg-primary-50 px-[9px] py-[6px] text-[14px] font-normal leading-[22.4px] tracking-[-0.02em] text-primary">
            Global Shopping, Made Simple
          </span>
        </div>


        <h1 className="mx-auto mb-10 max-w-4xl text-center text-[32px] font-black tracking-[0.0025em] text-grey-950 leading-[1.2] md:text-[52px] md:leading-[62.4px]">
          Buy from International Stores.
          <br />
          We Deliver to Nigeria.
        </h1>

       
        <div className="relative mx-auto mb-20 mt-16 h-[280px] w-full max-w-[1110px] hidden md:block">
          <div className="relative h-full w-[1102px] mx-auto scale-[0.65] lg:scale-[0.8] xl:scale-100 origin-top">

         
            <div
              style={{
                top: '52px',
                left: '0px',
                transform: 'rotate(-15deg)',
                zIndex: 10,
                boxShadow: '-6px 6px 19px 0px #C7C7C71A, -25px 23px 34px 0px #C7C7C717, -56px 53px 46px 0px #C7C7C70D, -100px 94px 55px 0px #C7C7C703, -157px 147px 60px 0px #C7C7C700'
              }}
              className="absolute h-[200px] w-[200px] overflow-hidden rounded-[20px] border-[0.5px] border-grey-200"
            >
              <div className="h-full w-full overflow-hidden rounded-[13px]">
                <Image width={500} height={500} src="/cloth.jpg" alt="Product 1" className="h-full w-full object-cover" />
              </div>
            </div>

           
            <div
              style={{
                top: '0px',
                left: '145px',
                transform: 'rotate(-10deg)',
                zIndex: 20,
                boxShadow: '-6px 6px 19px 0px #C7C7C71A, -25px 23px 34px 0px #C7C7C717, -56px 53px 46px 0px #C7C7C70D, -100px 94px 55px 0px #C7C7C703, -157px 147px 60px 0px #C7C7C700'
              }}
              className="absolute h-[200px] w-[200px] overflow-hidden rounded-[20px] border-[0.5px] border-grey-200"
            >
              <div className="h-full w-full overflow-hidden rounded-[13px]">
                <Image width={200} height={200} src="/blenders.jpg" alt="Product 2" className="h-full w-full object-cover" />
              </div>
            </div>

          
            <div
              style={{
                top: '28.14px',
                left: '317.14px',
                transform: 'rotate(-5deg)',
                zIndex: 30,
                boxShadow: '-6px 6px 19px 0px #C7C7C71A, -25px 23px 34px 0px #C7C7C717, -56px 53px 46px 0px #C7C7C70D, -100px 94px 55px 0px #C7C7C703, -157px 147px 60px 0px #C7C7C700'
              }}
              className="absolute h-[200px] w-[200px] overflow-hidden rounded-[20px] border-[0.5px] border-grey-200 bg-white "
            >
              <div className="h-full w-full overflow-hidden rounded-[13px]">
                <Image width={200} height={200} src="/chair.jpg" alt="Product 3" className="h-full w-full object-cover" />
              </div>
            </div>

            <div
              style={{
                top: '8px',
                left: '473.81px',
                transform: 'rotate(0deg)',
                zIndex: 40,
                boxShadow: '-6px 6px 19px 0px #C7C7C71A, -25px 23px 34px 0px #C7C7C717, -56px 53px 46px 0px #C7C7C70D, -100px 94px 55px 0px #C7C7C703, -157px 147px 60px 0px #C7C7C700'
              }}
              className="absolute h-[200px] w-[200px] overflow-hidden rounded-[20px] border-[0.5px] border-grey-200 bg-white "
            >
              <div className="h-full w-full overflow-hidden rounded-[13px]">
                <Image width={200} height={200} src="/shoe.jpg" alt="Product 4" className="h-full w-full object-cover" />
              </div>
            </div>

            
            <div
              style={{
                top: '28.14px',
                left: '613.81px',
                transform: 'rotate(5deg)',
                zIndex: 30,
                boxShadow: '-6px 6px 19px 0px #C7C7C71A, -25px 23px 34px 0px #C7C7C717, -56px 53px 46px 0px #C7C7C70D, -100px 94px 55px 0px #C7C7C703, -157px 147px 60px 0px #C7C7C700'
              }}
              className="absolute h-[200px] w-[200px] overflow-hidden rounded-[20px] border-[0.5px] border-grey-200 bg-white "
            >
              <div className="h-full w-full overflow-hidden rounded-[13px]">
                <Image width={200} height={200} src="/devices.jpg" alt="Product 5" className="h-full w-full object-cover" />
              </div>
            </div>

            
            <div
              style={{
                top: '0px',
                left: '770.48px',
                transform: 'rotate(10deg)',
                zIndex: 20,
                boxShadow: '-6px 6px 19px 0px #C7C7C71A, -25px 23px 34px 0px #C7C7C717, -56px 53px 46px 0px #C7C7C70D, -100px 94px 55px 0px #C7C7C703, -157px 147px 60px 0px #C7C7C700'
              }}
              className="absolute h-[200px] w-[200px] overflow-hidden rounded-[20px] border-[0.5px] border-grey-200 "
            >
              <div className="h-full w-full overflow-hidden rounded-[13px]">
                <Image width={200} height={200} src="/console.jpg" alt="Product 6" className="h-full w-full object-cover" />
              </div>
            </div>

         
            <div
              style={{
                top: '52px',
                left: '902px',
                transform: 'rotate(15deg)',
                zIndex: 10,
                boxShadow: '-6px 6px 19px 0px #C7C7C71A, -25px 23px 34px 0px #C7C7C717, -56px 53px 46px 0px #C7C7C70D, -100px 94px 55px 0px #C7C7C703, -157px 147px 60px 0px #C7C7C700'
              }}
              className="absolute h-[200px] w-[200px] overflow-hidden rounded-[20px] border-[0.5px] border-grey-200"
            >
              <div className="h-full w-full overflow-hidden rounded-[13px]">
                <Image width={200} height={200} src="/sound.jpg" alt="Product 7" className="h-full w-full object-cover" />
              </div>
            </div>

           
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[300px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-50/50 to-teal-50/50 blur-3xl opacity-60" />
          </div>
        </div>

        {/* Mobile View Placeholder (Simplified stack for small screens) */}
        <div className="md:hidden relative mx-auto mb-16 mt-8 flex flex-col items-center">
          <div className="relative z-10 h-[200px] w-[200px] rotate-[-5deg] rounded-[20px] border-[0.5px] border-[#A2A2A2] bg-white p-2 shadow-xl">
            <Image width={200} height={200} src="/shoe.jpg" alt="Mobile Product" className="h-full w-full object-cover rounded-[13px]" />
          </div>
          <div className="absolute top-4 scale-95 z-0 h-[200px] w-[200px] rotate-[5deg] rounded-[20px] border-[0.5px] border-[#A2A2A2] bg-white p-2 opacity-60">
            <Image width={200} height={200} src="/cloth.jpg" alt="Mobile Product" className="h-full w-full object-cover rounded-[13px]" />
          </div>
        </div>

        {/* Description */}
        <p className="mx-auto mb-10 max-w-3xl text-center text-[16px] font-normal leading-[25.6px] tracking-[0.0015em] text-grey-700">
          We help <span className="text-primary">Nigerians shop from abroad,</span> receive items at our overseas warehouse, and <br />
          <span className="text-primary">ship them safely to Nigeria,</span> with clear pricing and full tracking.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="primary" size="default">
            Get Started
          </Button>
          <Button variant="outline" size="default">
            How it Works
          </Button>
        </div>
      </div>
    </section>
  );
}
