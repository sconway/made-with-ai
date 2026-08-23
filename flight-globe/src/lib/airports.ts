/** Major hubs for search + (later) airport pins. Coords are airport reference points. */
export interface Airport {
  iata: string
  icao: string
  name: string
  city: string
  lat: number
  lon: number
}

export const AIRPORTS: Airport[] = [
  { iata: 'ATL', icao: 'KATL', name: 'Hartsfield–Jackson', city: 'Atlanta', lat: 33.6407, lon: -84.4277 },
  { iata: 'LAX', icao: 'KLAX', name: 'Los Angeles Intl', city: 'Los Angeles', lat: 33.9425, lon: -118.4081 },
  { iata: 'ORD', icao: 'KORD', name: "O'Hare", city: 'Chicago', lat: 41.9742, lon: -87.9073 },
  { iata: 'DFW', icao: 'KDFW', name: 'Dallas/Fort Worth', city: 'Dallas', lat: 32.8998, lon: -97.0403 },
  { iata: 'DEN', icao: 'KDEN', name: 'Denver Intl', city: 'Denver', lat: 39.8561, lon: -104.6737 },
  { iata: 'JFK', icao: 'KJFK', name: 'John F. Kennedy', city: 'New York', lat: 40.6413, lon: -73.7781 },
  { iata: 'SFO', icao: 'KSFO', name: 'San Francisco Intl', city: 'San Francisco', lat: 37.6213, lon: -122.379 },
  { iata: 'SEA', icao: 'KSEA', name: 'Seattle–Tacoma', city: 'Seattle', lat: 47.4502, lon: -122.3088 },
  { iata: 'LAS', icao: 'KLAS', name: 'Harry Reid', city: 'Las Vegas', lat: 36.084, lon: -115.1537 },
  { iata: 'MCO', icao: 'KMCO', name: 'Orlando Intl', city: 'Orlando', lat: 28.4312, lon: -81.3081 },
  { iata: 'EWR', icao: 'KEWR', name: 'Newark Liberty', city: 'Newark', lat: 40.6895, lon: -74.1745 },
  { iata: 'MIA', icao: 'KMIA', name: 'Miami Intl', city: 'Miami', lat: 25.7959, lon: -80.287 },
  { iata: 'CLT', icao: 'KCLT', name: 'Charlotte Douglas', city: 'Charlotte', lat: 35.214, lon: -80.9431 },
  { iata: 'PHX', icao: 'KPHX', name: 'Phoenix Sky Harbor', city: 'Phoenix', lat: 33.4373, lon: -112.0078 },
  { iata: 'IAH', icao: 'KIAH', name: 'George Bush Intercontinental', city: 'Houston', lat: 29.9902, lon: -95.3368 },
  { iata: 'BOS', icao: 'KBOS', name: 'Logan', city: 'Boston', lat: 42.3656, lon: -71.0096 },
  { iata: 'MSP', icao: 'KMSP', name: 'Minneapolis–Saint Paul', city: 'Minneapolis', lat: 44.8848, lon: -93.2223 },
  { iata: 'DTW', icao: 'KDTW', name: 'Detroit Metro', city: 'Detroit', lat: 42.2162, lon: -83.3554 },
  { iata: 'FLL', icao: 'KFLL', name: 'Fort Lauderdale–Hollywood', city: 'Fort Lauderdale', lat: 26.0742, lon: -80.1506 },
  { iata: 'LGA', icao: 'KLGA', name: 'LaGuardia', city: 'New York', lat: 40.7769, lon: -73.874 },
  { iata: 'YYZ', icao: 'CYYZ', name: 'Toronto Pearson', city: 'Toronto', lat: 43.6777, lon: -79.6248 },
  { iata: 'YVR', icao: 'CYVR', name: 'Vancouver Intl', city: 'Vancouver', lat: 49.1967, lon: -123.1815 },
  { iata: 'MEX', icao: 'MMMX', name: 'Mexico City Intl', city: 'Mexico City', lat: 19.4363, lon: -99.0721 },
  { iata: 'LHR', icao: 'EGLL', name: 'Heathrow', city: 'London', lat: 51.47, lon: -0.4543 },
  { iata: 'LGW', icao: 'EGKK', name: 'Gatwick', city: 'London', lat: 51.1537, lon: -0.1821 },
  { iata: 'CDG', icao: 'LFPG', name: 'Charles de Gaulle', city: 'Paris', lat: 49.0097, lon: 2.5479 },
  { iata: 'ORY', icao: 'LFPO', name: 'Orly', city: 'Paris', lat: 48.7233, lon: 2.3794 },
  { iata: 'AMS', icao: 'EHAM', name: 'Schiphol', city: 'Amsterdam', lat: 52.3105, lon: 4.7683 },
  { iata: 'FRA', icao: 'EDDF', name: 'Frankfurt', city: 'Frankfurt', lat: 50.0379, lon: 8.5622 },
  { iata: 'MUC', icao: 'EDDM', name: 'Munich', city: 'Munich', lat: 48.3537, lon: 11.775 },
  { iata: 'MAD', icao: 'LEMD', name: 'Madrid-Barajas', city: 'Madrid', lat: 40.4983, lon: -3.5676 },
  { iata: 'BCN', icao: 'LEBL', name: 'Barcelona-El Prat', city: 'Barcelona', lat: 41.2971, lon: 2.0785 },
  { iata: 'FCO', icao: 'LIRF', name: 'Fiumicino', city: 'Rome', lat: 41.8003, lon: 12.2389 },
  { iata: 'MXP', icao: 'LIMC', name: 'Malpensa', city: 'Milan', lat: 45.63, lon: 8.7231 },
  { iata: 'ZRH', icao: 'LSZH', name: 'Zurich', city: 'Zurich', lat: 47.4582, lon: 8.5555 },
  { iata: 'VIE', icao: 'LOWW', name: 'Vienna', city: 'Vienna', lat: 48.1103, lon: 16.5697 },
  { iata: 'CPH', icao: 'EKCH', name: 'Copenhagen', city: 'Copenhagen', lat: 55.618, lon: 12.656 },
  { iata: 'ARN', icao: 'ESSA', name: 'Stockholm Arlanda', city: 'Stockholm', lat: 59.6519, lon: 17.9186 },
  { iata: 'OSL', icao: 'ENGM', name: 'Oslo Gardermoen', city: 'Oslo', lat: 60.1939, lon: 11.1004 },
  { iata: 'DUB', icao: 'EIDW', name: 'Dublin', city: 'Dublin', lat: 53.4264, lon: -6.2499 },
  { iata: 'LIS', icao: 'LPPT', name: 'Lisbon', city: 'Lisbon', lat: 38.7742, lon: -9.1342 },
  { iata: 'IST', icao: 'LTFM', name: 'Istanbul', city: 'Istanbul', lat: 41.2753, lon: 28.7519 },
  { iata: 'DXB', icao: 'OMDB', name: 'Dubai Intl', city: 'Dubai', lat: 25.2532, lon: 55.3657 },
  { iata: 'DOH', icao: 'OTHH', name: 'Hamad Intl', city: 'Doha', lat: 25.2731, lon: 51.6081 },
  { iata: 'AUH', icao: 'OMAA', name: 'Abu Dhabi Intl', city: 'Abu Dhabi', lat: 24.433, lon: 54.6511 },
  { iata: 'SIN', icao: 'WSSS', name: 'Changi', city: 'Singapore', lat: 1.3644, lon: 103.9915 },
  { iata: 'HKG', icao: 'VHHH', name: 'Hong Kong Intl', city: 'Hong Kong', lat: 22.308, lon: 113.9185 },
  { iata: 'NRT', icao: 'RJAA', name: 'Narita', city: 'Tokyo', lat: 35.772, lon: 140.3929 },
  { iata: 'HND', icao: 'RJTT', name: 'Haneda', city: 'Tokyo', lat: 35.5494, lon: 139.7798 },
  { iata: 'ICN', icao: 'RKSI', name: 'Incheon', city: 'Seoul', lat: 37.4602, lon: 126.4407 },
  { iata: 'PEK', icao: 'ZBAA', name: 'Beijing Capital', city: 'Beijing', lat: 40.0799, lon: 116.6031 },
  { iata: 'PVG', icao: 'ZSPD', name: 'Shanghai Pudong', city: 'Shanghai', lat: 31.1443, lon: 121.8083 },
  { iata: 'SYD', icao: 'YSSY', name: 'Kingsford Smith', city: 'Sydney', lat: -33.9399, lon: 151.1753 },
  { iata: 'MEL', icao: 'YMML', name: 'Melbourne', city: 'Melbourne', lat: -37.669, lon: 144.841 },
  { iata: 'AKL', icao: 'NZAA', name: 'Auckland', city: 'Auckland', lat: -37.0082, lon: 174.785 },
  { iata: 'GRU', icao: 'SBGR', name: 'São Paulo–Guarulhos', city: 'São Paulo', lat: -23.4356, lon: -46.4731 },
  { iata: 'EZE', icao: 'SAEZ', name: 'Ezeiza', city: 'Buenos Aires', lat: -34.8222, lon: -58.5358 },
  { iata: 'JNB', icao: 'FAOR', name: 'O. R. Tambo', city: 'Johannesburg', lat: -26.1392, lon: 28.246 },
  { iata: 'CAI', icao: 'HECA', name: 'Cairo Intl', city: 'Cairo', lat: 30.1219, lon: 31.4056 },
  { iata: 'DEL', icao: 'VIDP', name: 'Indira Gandhi', city: 'Delhi', lat: 28.5562, lon: 77.1 },
  { iata: 'BOM', icao: 'VABB', name: 'Chhatrapati Shivaji', city: 'Mumbai', lat: 19.0896, lon: 72.8656 },
]

export function findAirport(iataOrIcao: string): Airport | undefined {
  const q = iataOrIcao.trim().toUpperCase()
  return AIRPORTS.find((a) => a.iata === q || a.icao === q)
}
