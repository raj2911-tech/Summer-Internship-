// Source: https://readymadeui.com/tailwind-components/sidebar

export default function Sidebar() {

   const sidebarSections = [
      {
         items: [
            { name: "Dashboard", href: "#", current: true },
         ],
      },
      {
         title: "Information",
         items: [
            { name: "Audience", href: "#" },
            { name: "Posts", href: "#" },
            { name: "Schedules", href: "#" },
         ],
      },
      {
         title: "Income",
         items: [
            { name: "Earnings and taxes", href: "#" },
            { name: "Refunds", href: "#" },
            { name: "Declines", href: "#" },
         ],
      },
      {
         title: "Actions",
         items: [
            { name: "Profile", href: "#" },
            { name: "Settings", href: "#" },
         ],
      },
   ];

   return (
      <aside className="bg-white border-r border-slate-300 w-full h-full fixed top-0 left-0 max-w-[264px] py-6 px-4 overflow-auto">
         <div className="mb-6 px-3">
            <img
               src="https://readymadeui.com/logo-alt.svg"
               alt="Company logo"
               className="h-9 w-auto"
            />
         </div>

         <nav aria-label="Primary sidebar navigation">
            {sidebarSections.map((section, sectionIndex) => (
               <div key={sectionIndex} className={sectionIndex > 0 ? "mt-6" : undefined}>
                  {section.title && (
                     <div className="text-blue-700 text-sm font-semibold px-3">
                        {section.title}
                     </div>
                  )}

                  <ul className={`mt-2 space-y-0.5 text-sm text-slate-800 font-medium`}>
                     {section.items.map((item) => (
                        <li key={item.name}>
                           <a
                              href={item.href}
                              aria-current={item.current ? "page" : undefined}
                              className="block hover:text-slate-900 hover:bg-slate-100 rounded-md px-3 py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                           >
                              {item.name}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>
            ))}
         </nav>
      </aside>
   );
}