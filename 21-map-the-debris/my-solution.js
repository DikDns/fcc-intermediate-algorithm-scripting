function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  
  return arr.map(obj => {
    // Rumus Jarak Orbit
    // a = jari-jari bumi + jarak permukaan object dari bumi 
    const a = earthRadius + obj["avgAlt"];
    
    // Rumus Periode
    // T = 2 * PI * Akar( a^3 / GM )
    const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(a, 3) / GM));

    return {
      name: obj["name"],
      orbitalPeriod
    }
  });
}

console.log(
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])
);

console.log(
  orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])
);
