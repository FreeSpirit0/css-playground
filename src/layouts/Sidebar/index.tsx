import React from "react";

interface ListItemProps {
  categoryName: string;
  elementNames: string[];
}

const ListItem: React.FC<ListItemProps> = ({ categoryName, elementNames }) => {
  return (
    <li className="mt-6">
      <h5 className="mb-4 font-bold	 text-slate-900 dark:text-slate-200">
        {categoryName}
      </h5>
      <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
        <li>
          {elementNames.map((name) => (
            <a
              key={name}
              className="block border-l pl-4 py-2 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" 
              href={`#${name.toLocaleLowerCase()}`}             
            >
              {name}
            </a>
          ))}
        </li>
      </ul>
    </li>
  );
};

const Sidebar = () => {
  return (
    <aside
      id="logo-sidebar"
      className="w-64 fixed left-0 top-0 h-screen transition-transform -translate-x-full sm:translate-x-0 z-40 mt-20 border-r border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="px-6 pb-4 overflow-y-auto bg-white dark:bg-gray-800 h-full">
        <ul className="space-y-2">
          <ListItem categoryName="Spacing" elementNames={["Padding", "Margin"]} />
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
