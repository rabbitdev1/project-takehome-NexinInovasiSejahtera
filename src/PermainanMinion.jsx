import React, { useState } from "react";
import { toast } from "react-toastify";

function PermainanMinion() {
  const [inputString, setInputString] = useState("");
  const [result, setResult] = useState("");
  const [substrings, setSubstrings] = useState([]);
  const [scoreDetails, setScoreDetails] = useState([]);

  const vowels = ["A", "E", "I", "O", "U"];

  const calculateScore = () => {
    const str = inputString.toUpperCase();
    let kevinScore = 0;
    let stuartScore = 0;
    const substringCount = {};

    if (str.trim() === "") {
      toast.error("Input string tidak boleh kosong!");
      return;
    }

    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        const substring = str.slice(i, j);
        // Mencatat frekuensi substring
        substringCount[substring] = (substringCount[substring] || 0) + 1;
      }
    }

    const scoreDetails = [];
    for (let substring in substringCount) {
      const frequency = substringCount[substring];
      if (vowels.includes(substring[0])) {
        kevinScore += frequency;
        scoreDetails.push({ player: "Kevin", substring, frequency });
      } else {
        stuartScore += frequency;
        scoreDetails.push({ player: "Stuart", substring, frequency });
      }
    }

    setSubstrings(Object.keys(substringCount)); 
    setScoreDetails(scoreDetails);

    // Menentukan pemenang
    if (kevinScore > stuartScore) {
      setResult(`Kevin ${kevinScore}`);
      toast.success(`Kevin menang dengan skor ${kevinScore}!`);
    } else if (stuartScore > kevinScore) {
      setResult(`Stuart ${stuartScore}`);
      toast.success(`Stuart menang dengan skor ${stuartScore}!`);
    } else {
      setResult("Draw");
      toast.info("Permainan berakhir imbang.");
    }
  };

  const handleInputChange = (e) => {
    setInputString(e.target.value);
  };

  const handleReset = () => {
    setInputString("");
    setResult("");
    setSubstrings([]);
    setScoreDetails([]);
  };

  return (
    <div className="game-container">
      <h1>PErmainan 1 - Permainan Minion</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Masukkan string"
          value={inputString}
          onChange={handleInputChange}
          onBlur={calculateScore}
        />
        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
      </div>

      <div className="results">
        <h2>Hasil:</h2>
        <p>{result}</p>

        {scoreDetails.length > 0 && (
          <div className="score-details">
            <h3>Rincian Skor:</h3>
            <ul>
              {scoreDetails.map((item, index) => (
                <li key={index}>
                  {item.player} : {item.substring} ({item.frequency}x)
                </li>
              ))}
            </ul>
          </div>
        )}

        {substrings.length > 0 && (
          <div className="all-substrings">
            <h3>Semua Substring:</h3>
            <ul>
              {substrings.map((substring, index) => (
                <li key={index}>{substring}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

    </div>
  );
}

export default PermainanMinion;
