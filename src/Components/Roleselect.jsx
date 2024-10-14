

function Roleselect({ onRoleSelect }) {
  const handleRoleChange = (event) => {
    onRoleSelect(event.target.value); // Pass the selected role back to the parent
  };

  return (
    <div>
      <h1>Please select the role of the player</h1>
      <select onChange={handleRoleChange}>
        <option value="">Select Role</option>
        <option value="batsman">Batsman</option>
        <option value="bowler">Bowler</option>
        <option value="allrounder">Allrounder</option>
      </select>
    </div>
  );
}

export default Roleselect;
