import React, { useState } from "react";
import { toast } from "react-toastify";

function JsonManipulasi() {
  const [inputJson, setInputJson] = useState({
    teams: {
      group1: ["A", "B", "C"],
      group2: ["D", "E"],
      group3: ["F", "G", "H"]
    },
    constraints: {
      max_group_members: 3,
      exclude_pairs: [["A", "D"], ["C", "H"]]
    }
  });

  const [outputJson, setOutputJson] = useState(null);

  function generateCombinations(groups) {
    const result = [];

    function combine(index, currentCombination) {
      if (index === groups.length) {
        result.push(currentCombination);
        return;
      }

      for (let member of groups[index]) {
        combine(index + 1, [...currentCombination, member]);
      }
    }

    combine(0, []);
    return result;
  }

  function isValidTeam(team, excludePairs) {
    for (let pair of excludePairs) {
      if (team.includes(pair[0]) && team.includes(pair[1])) {
        return false;
      }
    }
    return true;
  }

  function generateValidTeams() {
    try {
      const teams = inputJson.teams;
      const constraints = inputJson.constraints;

      const groupList = Object.values(teams);

      const allCombinations = generateCombinations(groupList);

      const validTeams = allCombinations.filter((team) =>
        isValidTeam(team, constraints.exclude_pairs)
      );

      const result = {
        data: validTeams.map((team) => ({ team }))
      };

      setOutputJson(result);
      toast.success("Tim berhasil dihasilkan!");
    } catch (error) {
      toast.error("Terjadi kesalahan dalam menghasilkan tim: " + error.message);
    }
  }

  const handleInputChange = (e) => {
    try {
      const newJson = JSON.parse(e.target.value);
      setInputJson(newJson);
      toast.info("JSON berhasil diperbarui.");
    } catch (error) {
      toast.error("JSON yang dimasukkan tidak valid!");
    }
  };

  return (
    <div>
      <h1>Permainan 3 - JSON Manipulation</h1>

      <div>
        <h3>Masukkan JSON:</h3>
        <textarea
          rows="10"
          cols="50"
          value={JSON.stringify(inputJson, null, 2)}
          onChange={handleInputChange}
          placeholder="Masukkan JSON dengan format yang benar"
        />
      </div>

      <button onClick={generateValidTeams}>Generate Tim</button>

      <div>
        <h3>Hasil:</h3>
        {outputJson ? (
           <pre
            style={{
              marginTop: "20px",
              padding: "10px",
              backgroundColor: "#f4f4f9",
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
            }}
          >
            {JSON.stringify(outputJson, null, 2)}
          </pre>
        ) : (
          <p>Tunggu hingga tim dihasilkan.</p>
        )}
      </div>

    </div>
  );
}

export default JsonManipulasi;
