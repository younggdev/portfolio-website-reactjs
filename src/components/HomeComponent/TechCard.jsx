export default function TechCard() {
  return (
    <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-5 items-start">
      <div className="flex flex-col border-2 border-gray">
        <h3 className="font-semibold border-b-2 border-gray p-3 max-sm:text-sm">
          Languages
        </h3>
        <p className="p-3 text-sm max-sm:text-xs text-gray">Javascript PHP</p>
      </div>

      {/* Kolom 2 */}
      <div className="flex flex-col gap-4">
        <div className="border-2 border-gray">
          <h3 className="font-semibold border-b-2 border-gray p-3 max-sm:text-sm">
            Databases
          </h3>
          <p className="p-3 text-sm text-gray max-sm:text-xs">MySQL SQLite</p>
        </div>
        <div className="border-2 border-gray">
          <h3 className="font-semibold border-b-2 border-gray p-3 max-sm:text-sm">
            Others
          </h3>
          <p className="p-3 text-sm text-gray max-sm:text-xs">
            HTML CSS ReactRouter TailwindCSS RemixIcon FramerMotion
          </p>
        </div>
      </div>

      {/* Kolom 3 */}
      <div className="flex flex-col gap-4">
        <div className="border-2 border-gray">
          <h3 className="font-semibold border-b-2 border-gray p-3 max-sm:text-sm">
            Tools
          </h3>
          <p className="p-3 text-sm text-gray max-sm:text-xs">
            VSCode Git Github
          </p>
        </div>
        <div className="border-2 border-gray">
          <h3 className="font-semibold border-b-2 border-gray p-3 max-sm:text-sm">
            Frameworks
          </h3>
          <p className="p-3 text-sm text-gray max-sm:text-xs">
            ReactJS Laravel
          </p>
        </div>
      </div>
    </div>
  );
}
