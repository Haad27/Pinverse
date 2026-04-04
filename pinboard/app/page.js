import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const gallery = [
    {
      _id: 1,
      title: "Spider man",
      imageUrl: "/cars/img73.jpg",
    },
    {
      _id: 2,
      title: "Spider man",
      imageUrl: "/cars/img38.jpg",
    },
    {
      _id: 3,
      title: "Spider man",
      imageUrl: "/cars/img47.jpg",
    },
  ];

  return (
    <>
      <div className="container mx-auto p-4">
        {!gallery || gallery.length <= 0 ? (
          <div className="flex justify-center items-center min-h-[750px]">
            <Clipboard color="#ef4444" size={120} />
          </div>
        ) : gallery.length > 0 ? (
          <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4">
            {gallery.map((item) => {
              return (
                <Link
                  href={`/pin/${item._id}`}
                  key={item._id}
                  className="relative mb-4 group"
                >
                  <Image
                    src={item?.imageUrl}
                    alt={item.title}
                    height={300}
                    width={300}
                    className="w-full h-auto rounded-lg"
                  />
                  <span className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              );
            })}
          </div>
        ) : (
          <h3 className="min-h-[750px] flex justify-center items-center text-red-500 text-4xl font-semibold">

            No result found for your search
          </h3>
        )}
      </div>
    </>
  );
}
