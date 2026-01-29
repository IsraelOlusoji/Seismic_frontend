import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function CTA() {
  return (
    <section className="py-20 ">
      <div className="mx-auto max-w-[1160px] px-4 md:px-6 lg:px-0">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="max-w-xl flex-shrink-0 lg:w-1/2">
            <h2 className="mb-6 text-[52px] font-black leading-[62.4px] tracking-[0.0025em] text-grey-950">
              Start Shipping From Abroad Without Stress
            </h2>
            <p className="mb-8 text-[18px] font-normal leading-[28.8px] tracking-[0.01em] text-grey-700">
              Shop internationally with confidence and receive your items in Nigeria with ease.
            </p>
            <Button variant="primary" size="large">
              Create an Account
            </Button>
          </div>

          <div className="flex flex-col gap-4 lg:w-1/2">
          
            <div className="w-full overflow-hidden rounded-3xl ">
              <div className="aspect-[2/1] w-full bg-gray-100">
                <Image
                  src="/Imagee.svg"
                  alt="Process Flow"
                  width={500}
                  height={250}
                  className="h-full w-full  object-center"
                />
              </div>
            </div>

           
            <div className="flex gap-4">
          
              <div className="w-1/2 overflow-hidden rounded-3xl ">
                
                <div className="aspect-square w-full overflow-hidden rounded-3xl bg-gray-100">
                  <Image
                    src="/Imagee01.svg"
                    alt="Package Check"
                    width={250}
                    height={250}
                    className="h-full w-full object-center"
                  />
                </div>
              </div>

             
              <div className="w-1/2 overflow-hidden rounded-3xl ">
                <div className="aspect-square w-full bg-gray-100">
                  <Image
                    src="/Imagee02.svg"
                    alt="Tracking"
                    width={250}
                    height={250}
                    className="h-full w-full object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
