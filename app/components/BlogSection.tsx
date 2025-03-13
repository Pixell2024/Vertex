"use client";
import userIcon from "../../public/icons/user.svg";
import comnt from "../../public/icons/comnt.svg";

import {
  CalendarMonth,
  ChatBubbleOutline,
  ArrowForward,
} from "@mui/icons-material";

interface BlogPost {
  date: string;
  author: string;
  comments: string;
  title: string;
  imageUrl: string;
}

const blogPosts: BlogPost[] = [
  {
    date: "May 19, 2023",
    author: "Mesbah",
    comments: "Comments (05)",
    title: "Innovate, Create, Inspire: Bring Your Brand to Life",
    imageUrl:
      "https://images.unsplash.com/photo-1712847333437-f9386beb83e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFufGVufDB8fDB8fHww",
  },
  {
    date: "May 19, 2023",
    author: "Mesbah",
    comments: "Comments (05)",
    title: "What Services Does Your Billboard Company Offer?",
    imageUrl:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2069",
  },
  {
    date: "May 19, 2023",
    author: "Mesbah",
    comments: "Comments (05)",
    title: "What Types of Billboards Are Available?",
    imageUrl:
      "https://images.unsplash.com/photo-1513061379709-ef0cd1695189?q=80&w=2000",
  },
];

export default function BlogSection() {
  console.log("com", comnt);
  return (
    <section className="py-24 ">
      <div className=" px-4 md:px-24 ">
        {/* Section Header */}
        <div className=" grid grid-cols-1 gap-6 md:grid-cols-2 mb-20">
          <div>
            <h3 className=" font-bold text-green-600">LATEST BLOG</h3>
            <h2 className="md:text-5xl text-3xl font-bold tracking-tight text-gray-900">
              Where The Beat Meets Business Billboard
            </h2>
          </div>
          <div className=" flex items-center">
            <p className="text-gray-600 leading-relaxed">
              Billboard advertising is a powerful marketing too businesBillboard
              advertising is a powerful marketing tool that he businesses gain
              visibility and reach their target audienceses
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Blog Content */}
              <div className="p-8">
                {/* Meta Info */}
                <div className=" relative flex items-center justify-between mb-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-6">
                    <div className=" flex gap-1 items-center cursor-pointer">
                      <img
                        src={userIcon.src}
                        alt="UserIcon"
                        className="w-4 h-4"
                      />
                      <span className=" text-[16px]">{post.author}</span>
                    </div>
                    <div className="flex space-x-2 items-center cursor-pointer">
                      <img src={comnt.src} alt="UserIcon" className="w-4 h-4" />
                      <span className=" text-[16px]">{post.comments}</span>
                    </div>
                  </div>
                  <div className=" bg-[#175177] rounded-3xl absolute -right-5 -top-12 flex items-center space-x-2 text-white px-4 py-1 cursor-pointer">
                    <CalendarMonth className="w-5 h-5" />
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Blog Title */}
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  {post.title}
                </h3>

                {/* Read More Button */}
                <button className="inline-flex items-center text-black hover:text-gray-700 transition-all cursor-pointer">
                  <span className="mr-2 font-medium py-2 px-4 rounded-3xl border bg-white">
                    Read More <ArrowForward sx={{ width: 15, height: 15 }} />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
