function AwardsFilter({ selectedGroup, awardGroups, onGroupChange }) {
  return (
    <div className="flex w-full md:w-auto items-center">
      <label
        htmlFor="award-group"
        className="font-semibold pr-3 hidden md:block"
      >
        Filter
      </label>

      <div className="relative w-full md:w-72">
        <select
          id="award-group"
          name="award-group"
          value={selectedGroup}
          onChange={(event) => onGroupChange(event.target.value)}
          className="border-1 rounded-full py-3 pl-5 pr-10 w-full appearance-none bg-white border-green-950"
        >
          <option value="All">All Awards</option>

          {awardGroups.map((group) => (
            <option key={group} value={group}>
              {group}
            </option>
          ))}
        </select>

        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-green-950">
          ↓
        </span>
      </div>
    </div>
  );
}

export default AwardsFilter;
