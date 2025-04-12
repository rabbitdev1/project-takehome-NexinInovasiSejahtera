import React, { useState } from "react";
import { toast } from "react-toastify";

function PermainanMatrix() {
  const [matrix, setMatrix] = useState([]);

  const [queries, setQueries] = useState([]);

  const [result, setResult] = useState([]);

  const minRotationsToMatch = (column, targetChar) => {
    const n = column.length;
    if (column[0] === targetChar) {
      return 0;
    }
    for (let i = 1; i < n; i++) {
      if (column[i] === targetChar) {
        return i;
      }
    }
    for (let i = n - 1; i > 0; i--) {
      if (column[i] === targetChar) {
        return n - i;
      }
    }
    return -1;
  };

  const solveRotations = () => {
    const resultArr = [];

    try {
      queries.forEach((query) => {
        if (!query.rowIndex || !query.target) {
          throw new Error("Query tidak lengkap.");
        }

        const rowIndex = query.rowIndex - 1; 
        const target = query.target;
        const targetLength = target.length;

        if (targetLength !== matrix[0].length) {
          resultArr.push(-1);
          toast.error("Panjang target tidak sesuai dengan jumlah kolom.");
          return;
        }

        let totalOperations = 0;
        let isPossible = true;

        for (let col = 0; col < matrix[0].length; col++) {
          const column = matrix.map((row) => row[col]); 
          const targetChar = target[col];

          const minRotations = minRotationsToMatch(column, targetChar);

          if (minRotations === -1) {
            isPossible = false;
            break;
          }
          totalOperations += minRotations;
        }

        if (isPossible) {
          resultArr.push(totalOperations);
        } else {
          resultArr.push(-1);
          toast.error("Tidak dapat membentuk string target pada baris acuan.");
        }
      });

      setResult(resultArr);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleMatrixInput = (e) => {
    const rows = e.target.value.split("\n").map((row) => row.split(""));
    setMatrix(rows);
  };

  const handleQueriesInput = (e) => {
    const queryLines = e.target.value.split("\n");
    const queryArray = queryLines.map((line) => {
      const [rowIndex, target] = line.split(" ");
      return { rowIndex: parseInt(rowIndex), target };
    });
    setQueries(queryArray);
  };

  return (
    <div>
      <h1>Permainan 2 - Rotasi Matriks</h1>
      <div>
        <h3>Masukkan Matriks:</h3>
        <textarea
          rows="5"
          cols="50"
          onChange={handleMatrixInput}
          placeholder="Masukkan matriks (baris per baris, pisahkan dengan enter)"
        ></textarea>
      </div>

      <div>
        <h3>Masukkan Kueri:</h3>
        <textarea
          rows="5"
          cols="50"
          onChange={handleQueriesInput}
          placeholder="Masukkan kueri (baris dan target string, pisahkan dengan enter)"
        ></textarea>
      </div>

      <button onClick={solveRotations}>Hitung Rotasi</button>

      <h3>Hasil:</h3>
      <ul>
        {result.length > 0 &&
          result.map((res, index) => (
            <li key={index}>
              Kueri {index + 1}: {res}
            </li>
          ))}
      </ul>

    </div>
  );
}

export default PermainanMatrix;
