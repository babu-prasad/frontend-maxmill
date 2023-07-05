import React, { useState } from "react";

const TestEntries = () => {
  const [entries, setEntries] = useState([]);
  async function logJSONData() {
    const response = await fetch("https://api.publicapis.org/entries");
    const jsonData = await response.json();
    console.log(jsonData.count);
    console.log(jsonData.entries);
    console.log(typeof(jsonData));
   
    setEntries(jsonData.entries);
    console.log(entries);
    console.log(typeof(entries));

  }
  logJSONData();

  if (entries.length === 0) {
    return (
      <div>
        <h1>No TestEntries found...</h1>
      </div>
    );
  }

  return (
    <div>
      {entries.slice(1,10).map((entry, index) => {
        const { Category, Description } = entry;
        console.log(entry);
        return (
          <div key={entry.index}>
            
            <h3>Category is:{Category}</h3>
            <h4>Description :{Description}</h4>
          </div>
        );
      })}
    </div>
  );
};
export default TestEntries;
