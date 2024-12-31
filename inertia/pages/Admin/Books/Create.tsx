import { Link, useForm } from '@inertiajs/react';

function Create() {

  const { data, setData, post, processing, errors } = useForm({
    title: '',
    description: '',
    categoryId: '',
    authorId: '',
    isNew: false,
    isPopular: false,
    isRecommended: false,
    isOnSale: false,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    post('/admin/books');
  };

  return (
    <div className="flex flex-col flex-wrap w-full gap-3">
      <div className="shadow-lg w-full h-16 flex justify-between items-center px-4 bg-base-300">
        <p className='text-2xl leading-4'>
          Books
          <br/>
          <span className='text-xs uppercase'>Create</span>
        </p>
      </div>

      <div className="flex justify-between items-center px-4 w-3/4">
        <form onSubmit={handleSubmit} className='w-full max-w-4xl flex flex-wrap gap-x-4'>
          <label className="form-control flex-1">
            <div className="label">
              <span className="label-text">Title</span>
            </div>
            <input type="text" placeholder="" className="input input-bordered w-full" />
          </label>
          <label className="form-control flex-1">
            <div className="label">
              <span className="label-text">Author</span>
            </div>
            <input type="text" placeholder="" className="input input-bordered w-full" />
          </label>
          <label className="form-control flex-1">
            <div className="label">
              <span className="label-text">Categories</span>
            </div>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>Choose a category</option>
              <option>Lorem</option>
              <option>Ipsum</option>
            </select>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <textarea className="textarea textarea-bordered h-24 textarea-lg" placeholder=""></textarea>
          </label>
        </form>
      </div>

      <div className='w-1/4'>
        container categories
      </div>

    </div>
  );
}

export default Create;