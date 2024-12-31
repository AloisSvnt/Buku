import { Link } from "@inertiajs/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import type { Category } from "#types/category";
import CategoriesTable from "~/components/admin/CategoriesTable";


function Index({ categories }: { categories: Category[] }) {
  return (
    <div className="flex flex-col flex-nowrap w-full gap-3 max-h-[calc(100vh-4rem)] overflow-y-auto">
      <div className="shadow-lg w-full min-h-16 flex justify-between items-center px-4 bg-base-300 sticky top-0 z-10">
        <p className='text-2xl leading-4'>
          Categories
          <br/>
          <span className='text-xs uppercase'>List</span>
        </p>
        <Link href="/admin/categories/create" className="btn btn-primary text-primary-content">Add new</Link>
      </div>

      <div className="flex justify-between items-center px-4">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-neutral no-animation btn-sm w-52 text-neutral-content flex justify-between focus-visible:rounded-b-none focus:rounded-b-none transition-all duration-200">
            <Icon icon="mdi:clock" width="24" height="24" />
            Click
            <Icon icon="mdi:arrow-down-drop" width="24" height="24" />
          </div>
          <ul tabIndex={0} className="dropdown-content rounded-t-none menu bg-base-300 rounded-md z-[1] w-52 p-2 shadow-lg">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </div>
        
        <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd" />
          </svg>
        </label>
      </div>

      <CategoriesTable categories={categories}/>

    </div>
  );
}

export default Index;