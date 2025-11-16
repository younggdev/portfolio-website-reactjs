export default function Divider({ text, width }) {
  return (
    <div className="flex justify-between items-center mt-20 pb-10 max-md:pb-5">
      <div className={`flex items-center gap-2 w-${width}`}>
        <h2 className="text-lg font-mono">
          <i className="ri-hashtag text-primary"></i>
          {text}
        </h2>
        <div className="flex-1 border-t-2 border-primary"></div>
      </div>
    </div>
  );
}
