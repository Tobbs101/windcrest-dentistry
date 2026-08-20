import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type DoctorProfileProps = {
  name: string;
  credentials: string;
  specialty: string;
  image: StaticImageData;
  bio: string;
  highlights: string[];
};

const DoctorProfile = ({
  name,
  credentials,
  specialty,
  image,
  bio,
  highlights,
}: DoctorProfileProps) => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-20">
      <div className="container mx-auto grid max-w-5xl items-center gap-10 px-4 lg:grid-cols-[minmax(280px,0.8fr)_1.2fr] lg:gap-14">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl shadow-sm">
          <Image
            src={image}
            alt={name}
            fill
            priority
            className="object-cover object-top"
          />
        </div>

        <div>
          <span className="mb-4 inline-block rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            {specialty}
          </span>
          <h1 className="mb-2 text-4xl font-bold text-gray-800 md:text-5xl">
            {name}
          </h1>
          <p className="mb-6 text-xl font-semibold text-sky-600">
            {credentials}
          </p>
          <p className="text-lg leading-relaxed text-gray-600">{bio}</p>

          <div className="my-7 border-y border-gray-200 py-5">
            <h2 className="mb-3 text-lg font-bold text-gray-800">
              At a glance
            </h2>
            <ul className="space-y-2 text-gray-600">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="font-bold text-sky-500" aria-hidden="true">
                    •
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/meet-the-team"
            className="inline-flex rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Meet the full team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
