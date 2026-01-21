// import { Github, Linkedin, Mail } from "lucide-react"
// import { Button } from "@/components/ui/button"

// export default function Footer() {
//   return (
//     <footer className="border-t bg-background">
//       <div className="container mx-auto px-6 py-10">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

//           {/* Brand Section */}
//           <div>
//             <h2 className="text-xl font-bold">DevBlog</h2>
//             <p className="mt-2 text-sm text-muted-foreground">
//               A modern blog platform built with React, TypeScript, and shadcn/ui.
//               Share your thoughts, tutorials, and development journey.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-sm font-semibold uppercase tracking-wider">
//               Quick Links
//             </h3>
//             <ul className="mt-4 space-y-2 text-sm">
//               <li>
//                 <a href="/" className="text-muted-foreground hover:text-primary">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="/blogs" className="text-muted-foreground hover:text-primary">
//                   Blogs
//                 </a>
//               </li>
//               <li>
//                 <a href="/about" className="text-muted-foreground hover:text-primary">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href="/contact" className="text-muted-foreground hover:text-primary">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Social Section */}
//           <div>
//             <h3 className="text-sm font-semibold uppercase tracking-wider">
//               Connect With Me
//             </h3>
//             <div className="mt-4 flex space-x-3">
//              <Button variant="outline" size="icon" asChild>
//   <a
//     href="https://github.com/SudhirTiwari62600/quiz-app"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <Github className="h-4 w-4" />
//   </a>
// </Button>

//               <Button variant="outline" size="icon" asChild>
//   <a
//     href="https://www.linkedin.com/in/sudhir-tiwari-b377b9255"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <Linkedin className="h-4 w-4" />
//   </a>
// </Button>
//               <Button variant="outline" size="icon" asChild>
//                 <a href="mailto:st168035@email.com">
//                   <Mail className="h-4 w-4" />
//                 </a>
//               </Button>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
//           © {new Date().getFullYear()} DevBlog. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   )
// }
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-indigo-400 mb-3">
            CA MONK
          </h2>
          <p className="text-sm leading-relaxed text-indigo-200">
            Empowering the next generation of financial leaders with tools,
            community, and knowledge.
          </p>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-sm font-semibold tracking-widest text-indigo-300 mb-4">
            RESOURCES
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Webinars
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Case Studies
              </a>
            </li>
          </ul>
        </div>

        {/* Platform */}
        <div>
          <h4 className="text-sm font-semibold tracking-widest text-indigo-300 mb-4">
            PLATFORM
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Job Board
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Practice Tests
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Mentorship
              </a>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-sm font-semibold tracking-widest text-indigo-300 mb-4">
            CONNECT
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-xs text-indigo-200">
        <p>© 2026 CA Monk. All rights reserved.</p>
        <div className="space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-indigo-400 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-indigo-400 transition">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
