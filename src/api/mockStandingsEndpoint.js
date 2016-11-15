import delay from './delay';

const standings = [
  {
    id: 1,
    name: "Nico Rosberg",
    team: "Mercedes",
    wins: "9",
    points: "349"
  },
  {
    id: 2,
    name: "Lewis Hamilton",
    team: "Mercedes",
    wins: "8",
    points: "330"
  },
  {
    id: 3,
    name: "Daniel Ricciardo",
    team: "Red Bull",
    wins: "1",
    points: "242",
  },
  {
    id: 4,
    name: "Sebastian Vettel",
    team: "Ferrari",
    wins: "0",
    points: "187"
  },
  {
    id: 5,
    name: "Kimi Raikkonen",
    team: "Ferrari",
    wins: "0",
    points: "178"
  },
  {
    id: 6,
    name: "Max Verstappen",
    team: "Red Bull",
    wins: "1",
    points: "177"
  },
  {
    id: 7,
    name: "Sergio Perez",
    team: "Force India",
    wins: "0",
    points: "85"
  },
  {
    id: 8,
    name: "Valtteri Bottas",
    team: "Williams",
    wins: "0",
    points: "85"
  },
  {
    id: 9,
    name: "Nico Hulkenberg",
    team: "Force India",
    wins: "0",
    points: "60"
  },
  {
    id: 10,
    name: "Fernando Alonso",
    team: "McLaren",
    wins: "0",
    points: "52"
  },
  {
    id: 11,
    name: "Felipe Massa",
    team: "Williams",
    wins: "0",
    points: "51"
  },
  {
    id: 12,
    name: "Carlos Sainz Jnr",
    team: "Toro Rosso",
    wins: "0",
    points: "38"
  },
  {
    id: 13,
    name: "Romain Grosjean",
    team: "Haas F1",
    wins: "0",
    points: "29"
  },
  {
    id: 14,
    name: "Danlil Kvyat",
    team: "Toro Rosso",
    wins: "0",
    points: "25"
  },
  {
    id: 15,
    name: "Jenson Button",
    team: "McLaren",
    wins: "0",
    points: "21"
  }
];

class StandingsEndpoint {
  static getAllStandings() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], standings));
      }, delay);
    });
  }
}

export default StandingsEndpoint;
