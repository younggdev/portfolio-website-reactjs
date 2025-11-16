export default function ContactForm() {
  return (
    <form action="">
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-3 py-3">
        <input
          type="text"
          placeholder="Name"
          required
          className="border-2 border-stone-300 rounded-md px-4 py-2 placeholder-stone-500 transition-all duration-200"
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="border-2 border-stone-300 rounded-md px-4 py-2 placeholder-stone-500 transition-all duration-200"
        />
      </div>
      <div className="grid grid-cols-1 gap-3 py-3">
        <textarea
          name="pesan"
          required
          id="pesan"
          cols="30"
          rows="10"
          placeholder="Message"
          className="border-2 border-stone-300 rounded-md px-4 py-2 placeholder-stone-500 transition-all duration-200"
        ></textarea>
      </div>
      <div className="flex items-center justify-end py-3">
        <button className="px-4 py-2 bg-gray/50 rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray/30">
          Send
        </button>
      </div>
    </form>
  );
}
