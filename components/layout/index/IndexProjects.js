import Image from "next/image";

export default function IndexProjects() {
  return (
    <div className="bg-blue-100 md:col-span-2 p-5 sm:p-10">
      <h2 id="mywork" className="max-w-md text-left py-14 font-gobold leading-tight">A neat collection<br />of some of my<br />projects</h2>
      <div className="cards grid md:grid-cols-2 lg:grid-cols-3 gap-14 mb-14">
        <div className="card flex flex-col border border-gray-500 p-2 bg-gray-100">
          <h3><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>Leeds United</h3>
          <Image className="object-cover object-top" src="/assets/images/cv-marius-hesby.jpg" width="500px" height="500px" alt="" />
          <div className="links flex justify-evenly my-7">
            <a href="http://vg.no">Github</a>
            <a href="http://vg.no">LeedsUnited.com</a>
          </div>
        </div>
        <div className="card flex flex-col border border-gray-500 p-2 bg-gray-100">
          <h3><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>Leeds United</h3>
          <Image className="object-cover" src="/assets/images/cv-marius-hesby.jpg" width="500px" height="500px" alt="" />
        </div>
        <div className="card flex flex-col border border-gray-500 p-2 bg-gray-100">
          <h3><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>Leeds United</h3>
          <Image className="object-cover" src="/assets/images/cv-marius-hesby.jpg" width="500px" height="500px" alt="" />
        </div>
      </div>
    </div>
  );
} 