import Image from "next/image";
import Link from "next/link";

export default function Brands() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-5xl font-bold text-center mb-20">Brands</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Toyota */}
        <Link href="/toyota">
          <div className="cursor-pointer bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center">
            <div className="h-40 flex items-center justify-center">
              <Image
                src="/images/Brands/Toyota-logo.png"
                alt="Toyota logo"
                width={300}
                height={260}
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-medium mt-4">Toyota</h2>
          </div>
        </Link>

        {/* Ford */}
        <Link href="/ford">
          <div className="cursor-pointer bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center">
            <div className="h-40 flex items-center justify-center">
              <Image
                src="/images/Brands/ford.jpg"
                alt="Ford logo"
                width={300}
                height={260}
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-medium mt-4">Ford</h2>
          </div>
        </Link>

        {/* BMW */}
        <Link href="/bmw">
          <div className="cursor-pointer bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center">
            <div className="h-40 flex items-center justify-center">
              <Image
                src="/images/Brands/bmw.png"
                alt="BMW logo"
                width={400}
                height={260}
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-medium mt-4">BMW</h2>
          </div>
        </Link>

        {/* Mercedes-Benz */}
        <Link href="/mercedes">
          <div className="cursor-pointer bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center">
            <div className="h-40 flex items-center justify-center">
              <Image
                src="/images/Brands/mercedes.jpg"
                alt="Mercedes-Benz logo"
                width={200}
                height={160}
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-medium mt-4">Mercedes-Benz</h2>
          </div>
        </Link>

        {/* Tesla */}
        <Link href="/tesla">
          <div className="cursor-pointer bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center">
            <div className="h-40 flex items-center justify-center">
              <Image
                src="/images/Brands/tesla.png"
                alt="Tesla logo"
                width={300}
                height={360}
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-medium mt-4">Tesla</h2>
          </div>
        </Link>

        {/* Honda */}
        <Link href="/honda">
          <div className="cursor-pointer bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center">
            <div className="h-40 flex items-center justify-center">
              <Image
                src="/images/Brands/honda.png"
                alt="Honda logo"
                width={300}
                height={360}
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-medium mt-4">Honda</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}
