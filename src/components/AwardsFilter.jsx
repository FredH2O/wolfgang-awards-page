function AwardsFilter({ selectedGroup, awardGroups, onGroupChange }) {
  return (
    <div>
      <label htmlFor="award-group">Filter</label>

      <select
        id="award-group"
        name="award-group"
        value={selectedGroup}
        onChange={(event) => onGroupChange(event.target.value)}
      >
        <option value="All"></option>

        {awardGroups.map((group) => (
          <option key={group} value={group}>
            {group}
          </option>
        ))}
      </select>
    </div>
  );
}

export default AwardsFilter;
