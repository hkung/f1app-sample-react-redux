import delay from './delay';

const results = [
  {
    id: 1,
    name: "Mexican Grand Prix",
    date: "2016-10-30",
    venue: "Autodromo Hermanos R",
    winner: {
      driver: "Lewis Hamilton",
      team: "Mercedes",
      fastestLap: "1:22.596",
      raceTime: "1:40:31.402"
    }
  },
  {
    id: 2,
    name: "United States Grand Prix",
    date: "2016-10-23",
    venue: "Circuit of Americas",
    winner: {
      driver: "Lewis Hamilton",
      team: "Mercedes",
      fastestLap: "1:42.386",
      raceTime: "1:38:12.618"
    }
  },
  {
    id: 3,
    name: "Japanese Grand Prix",
    date: "2016-10-09",
    venue: "Suzuka",
    winner: {
        driver: "Nico Rosberg",
        team: "Mercedes",
        fastestLap: "1:36.049",
        raceTime: "1:26:43.333"
    }
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (results) => {
  return results.length + 1
};

class ResultsEndpoint {
  static getAllResults() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], results));
      }, delay);
    });
  }

  static createResult(result) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        result.id = generateId(results);
        results.push(result);
        resolve(Object.assign({}, result));
      }, delay);
    });
  }
}

export default ResultsEndpoint;
