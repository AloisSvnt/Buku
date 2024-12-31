import { Link } from "@inertiajs/react";
import { Icon } from "@iconify/react";
import BookTable from "~/components/admin/BookTable";
import type { Book } from "#types/book"
import { DateTime } from "luxon";

function Index() {
  
  const books: Book[] = [
    {
      id: 1,
      title: "The Great Gatsby",
      description: "A novel written by American author F. Scott Fitzgerald.",
      category: "Fiction",
      author: "F. Scott Fitzgerald",
      reviews: "",
      isNew: false,
      isPopular: true,
      isRecommended: false,
      isOnSale: false,
      slug: "the-great-gatsby",
      createdAt: DateTime.now(),
      updatedAt: DateTime.now()
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      description: "A novel written by American author Harper Lee.",
      category: "Fiction",
      author: "Harper Lee",
      reviews: "",
      isNew: false,
      isPopular: true,
      isRecommended: false,
      isOnSale: false,
      slug: "to-kill-a-mockingbird",
      createdAt: DateTime.now(),
      updatedAt: DateTime.now()
    }
  ];

  return (
    <div className="flex flex-col flex-wrap w-full gap-3">
      <div className="shadow-lg w-full h-16 flex justify-between items-center px-4 bg-base-300">
        Books
        <Link href="/admin/books/create" className="btn btn-primary text-primary-content">Add new</Link>
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

      <BookTable books={books}/>

    </div>
  );
}

export default Index;