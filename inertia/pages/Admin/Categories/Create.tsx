import { useForm } from "@inertiajs/react";

function Create() {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    post('/admin/categories');
  };

  return (
    <div className="flex flex-col flex-wrap w-full gap-3 h-full">
      <div className="shadow-lg w-full h-16 flex justify-between items-center px-4 bg-base-300">
        <p className='text-2xl leading-4'>
          Category
          <br/>
          <span className='text-xs uppercase'>Create</span>
        </p>
      </div>

      <div className="flex justify-center items-start px-4 flex-1">
        <form onSubmit={handleSubmit} className='w-full max-w-4xl flex flex-wrap justify-end'>
          <label className="form-control flex-1">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input type="text" value={data.name} onChange={e => setData('name', e.target.value)} placeholder="" className="input input-bordered w-full" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <textarea className="textarea textarea-bordered h-24 textarea-lg" placeholder="" value={data.description} onChange={e => setData('description', e.target.value)}></textarea>
          </label>
          <button type="submit" className="btn btn-primary mt-4 self-end">Create</button>
        </form>
      </div>

    </div>
  );
}

export default Create;