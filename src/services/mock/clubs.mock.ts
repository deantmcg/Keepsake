import type { Club } from '../../types/domain';

export const MOCK_CLUBS: Club[] = [
    {
        id: '1',
        name: 'Crystal Palace',
        normalizedName: 'CRYSTAL PALACE',
        shortName: 'Palace',
        country: 'England',
        city: 'London',
        stadium: {
            id: 's1',
            name: 'Selhurst Park',
            city: 'London',
            country: 'England',
            coordinates: { latitude: 51.3983, longitude: -0.0854 },
            clubs: ['1']
        },
        coordinates: { latitude: 51.3983, longitude: -0.0854 },
        founded: 1905,
        colors: ['#27409b', '#c4122e', '#ffffff']
    },
    {
        id: '2',
        name: 'Everton',
        normalizedName: 'EVERTON',
        shortName: 'Everton',
        country: 'England',
        city: 'Liverpool',
        stadium: {
            id: 's2',
            name: 'Goodison Park',
            city: 'Liverpool',
            country: 'England',
            coordinates: { latitude: 53.4388, longitude: -2.9664 },
            clubs: ['2']
        },
        coordinates: { latitude: 53.4388, longitude: -2.9664 },
        founded: 1878,
        colors: ['#274488', '#ffffff']
    },
    {
        id: '3',
        name: 'Sheffield United',
        normalizedName: 'SHEFFIELD UNITED',
        shortName: 'Sheffield Utd',
        country: 'England',
        city: 'Sheffield',
        stadium: {
            id: 's3',
            name: 'Bramall Lane',
            city: 'Sheffield',
            country: 'England',
            coordinates: { latitude: 53.3703, longitude: -1.4708 },
            clubs: ['3']
        },
        coordinates: { latitude: 53.3703, longitude: -1.4708 },
        founded: 1889,
        colors: ['#ec2227', '#ffffff', '#000000']
    },
    {
        id: '4',
        name: 'Manchester United',
        normalizedName: 'MANCHESTER UNITED',
        shortName: 'Man Utd',
        country: 'England',
        city: 'Manchester',
        stadium: {
            id: 's4',
            name: 'Old Trafford',
            city: 'Manchester',
            country: 'England',
            coordinates: { latitude: 53.4631, longitude: -2.2913 },
            clubs: ['4']
        },
        coordinates: { latitude: 53.4631, longitude: -2.2913 },
        founded: 1878,
        colors: ['#da030e', '#000000', '#ffffff']
    },
    {
        id: '5',
        name: 'Aston Villa',
        normalizedName: 'ASTON VILLA',
        shortName: 'Villa',
        country: 'England',
        city: 'Birmingham',
        stadium: {
            id: 's5',
            name: 'Villa Park',
            city: 'Birmingham',
            country: 'England',
            coordinates: { latitude: 52.5092, longitude: -1.8848 },
            clubs: ['5']
        },
        coordinates: { latitude: 52.5092, longitude: -1.8848 },
        founded: 1874,
        colors: ['#7b003a', '#a3c5e9']
    },
    {
        id: '6',
        name: 'Tottenham Hotspur',
        normalizedName: 'TOTTENHAM HOTSPUR',
        shortName: 'Spurs',
        country: 'England',
        city: 'London',
        stadium: {
            id: 's6',
            name: 'Tottenham Hotspur Stadium',
            city: 'London',
            country: 'England',
            coordinates: { latitude: 51.6043, longitude: -0.0661 },
            clubs: ['6']
        },
        coordinates: { latitude: 51.6043, longitude: -0.0661 },
        founded: 1882,
        colors: ['#ffffff', '#132257']
    },
    {
        id: '7',
        name: 'Wolverhampton Wanderers',
        normalizedName: 'WOLVERHAMPTON WANDERERS',
        shortName: 'Wolves',
        country: 'England',
        city: 'Wolverhampton',
        stadium: {
            id: 's7',
            name: 'Molineux Stadium',
            city: 'Wolverhampton',
            country: 'England',
            coordinates: { latitude: 52.5902, longitude: -2.1304 },
            clubs: ['7']
        },
        coordinates: { latitude: 52.5902, longitude: -2.1304 },
        founded: 1877,
        colors: ['#fdb913', '#000000', '#ffffff']
    },
    {
        id: '8',
        name: 'Norwich City',
        normalizedName: 'NORWICH CITY',
        shortName: 'Norwich',
        country: 'England',
        city: 'Norwich',
        stadium: {
            id: 's8',
            name: 'Carrow Road',
            city: 'Norwich',
            country: 'England',
            coordinates: { latitude: 52.6222, longitude: 1.3089 },
            clubs: ['8']
        },
        coordinates: { latitude: 52.6222, longitude: 1.3089 },
        founded: 1902,
        colors: ['#ffee00', '#00a650']
    },
    {
        id: '9',
        name: 'West Ham United',
        normalizedName: 'WEST HAM UNITED',
        shortName: 'West Ham',
        country: 'England',
        city: 'London',
        stadium: {
            id: 's9',
            name: 'London Stadium',
            city: 'London',
            country: 'England',
            coordinates: { latitude: 51.5386, longitude: -0.0163 },
            clubs: ['9']
        },
        coordinates: { latitude: 51.5386, longitude: -0.0163 },
        founded: 1895,
        colors: ['#7f0000', '#7acbe5', '#ffffff']
    },
    {
        id: '10',
        name: 'Manchester City',
        normalizedName: 'MANCHESTER CITY',
        shortName: 'Man City',
        country: 'England',
        city: 'Manchester',
        stadium: {
            id: 's10',
            name: 'Etihad Stadium',
            city: 'Manchester',
            country: 'England',
            coordinates: { latitude: 53.4831, longitude: -2.2004 },
            clubs: ['10']
        },
        coordinates: { latitude: 53.4831, longitude: -2.2004 },
        founded: 1880,
        colors: ['#6caddf', '#ffffff']
    },
    {
        id: '11',
        name: 'Arsenal',
        normalizedName: 'ARSENAL',
        shortName: 'Arsenal',
        country: 'England',
        city: 'London',
        stadium: {
            id: 's11',
            name: 'Emirates Stadium',
            city: 'London',
            country: 'England',
            coordinates: { latitude: 51.5549, longitude: -0.1084 },
            clubs: ['11']
        },
        coordinates: { latitude: 51.5549, longitude: -0.1084 },
        founded: 1886,
        colors: ['#ff0000', '#ffffff', '#023474']
    },
    {
        id: '12',
        name: 'Leicester City',
        normalizedName: 'LEICESTER CITY',
        shortName: 'Leicester',
        country: 'England',
        city: 'Leicester',
        stadium: {
            id: 's12',
            name: 'King Power Stadium',
            city: 'Leicester',
            country: 'England',
            coordinates: { latitude: 52.6204, longitude: -1.142 },
            clubs: ['12']
        },
        coordinates: { latitude: 52.6204, longitude: -1.142 },
        founded: 1884,
        colors: ['#0053a0', '#ffffff', '#fdbe11']
    },
    {
        id: '13',
        name: 'Chelsea',
        normalizedName: 'CHELSEA',
        shortName: 'Chelsea',
        country: 'England',
        city: 'London',
        stadium: {
            id: 's13',
            name: 'Stamford Bridge',
            city: 'London',
            country: 'England',
            coordinates: { latitude: 51.4817, longitude: -0.1909 },
            clubs: ['13']
        },
        coordinates: { latitude: 51.4817, longitude: -0.1909 },
        founded: 1905,
        colors: ['#034694', '#ffffff']
    },
    {
        id: '16',
        name: 'Liverpool',
        normalizedName: 'LIVERPOOL',
        shortName: 'Liverpool',
        country: 'England',
        city: 'Liverpool',
        stadium: {
            id: 's16',
            name: 'Anfield',
            city: 'Liverpool',
            country: 'England',
            coordinates: { latitude: 53.4308, longitude: -2.9608 },
            clubs: ['16']
        },
        coordinates: { latitude: 53.4308, longitude: -2.9608 },
        founded: 1892,
        colors: ['#dd0000', '#ffffff']
    },
    {
        id: '17',
        name: 'Burnley',
        normalizedName: 'BURNLEY',
        shortName: 'Burnley',
        country: 'England',
        city: 'Burnley',
        stadium: {
            id: 's17',
            name: 'Turf Moor',
            city: 'Burnley',
            country: 'England',
            coordinates: { latitude: 53.7889, longitude: -2.2303 },
            clubs: ['17']
        },
        coordinates: { latitude: 53.7889, longitude: -2.2303 },
        founded: 1882,
        colors: ['#800000', '#80bfff', '#ffffff']
    },
    {
        id: '18',
        name: 'Bournemouth',
        normalizedName: 'BOURNEMOUTH',
        shortName: 'Bournemouth',
        country: 'England',
        city: 'Bournemouth',
        stadium: {
            id: 's18',
            name: 'Vitality Stadium',
            city: 'Bournemouth',
            country: 'England',
            coordinates: { latitude: 50.7351, longitude: -1.8384 },
            clubs: ['18']
        },
        coordinates: { latitude: 50.7351, longitude: -1.8384 },
        founded: 1899,
        colors: ['#8b0304', '#000000', '#ffffff']
    },
    {
        id: '19',
        name: 'Newcastle United',
        normalizedName: 'NEWCASTLE UNITED',
        shortName: 'Newcastle',
        country: 'England',
        city: 'Newcastle upon Tyne',
        stadium: {
            id: 's19',
            name: 'St James\' Park',
            city: 'Newcastle upon Tyne',
            country: 'England',
            coordinates: { latitude: 54.9756, longitude: -1.6217 },
            clubs: ['19']
        },
        coordinates: { latitude: 54.9756, longitude: -1.6217 },
        founded: 1892,
        colors: ['#231f20', '#ffffff', '#00b6f1']
    },
    {
        id: '20',
        name: 'Brighton & Hove Albion',
        normalizedName: 'BRIGHTON & HOVE ALBION',
        shortName: 'Brighton',
        country: 'England',
        city: 'Brighton',
        stadium: {
            id: 's20',
            name: 'Amex Stadium',
            city: 'Brighton',
            country: 'England',
            coordinates: { latitude: 50.8609, longitude: -0.0831 },
            clubs: ['20']
        },
        coordinates: { latitude: 50.8609, longitude: -0.0831 },
        founded: 1901,
        colors: ['#005daa', '#ffffff']
    },
    {
        id: '21',
        name: 'Watford',
        normalizedName: 'WATFORD',
        shortName: 'Watford',
        country: 'England',
        city: 'Watford',
        stadium: {
            id: 's21',
            name: 'Vicarage Road',
            city: 'Watford',
            country: 'England',
            coordinates: { latitude: 51.6498, longitude: -0.4015 },
            clubs: ['21']
        },
        coordinates: { latitude: 51.6498, longitude: -0.4015 },
        founded: 1881,
        colors: ['#fbee23', '#ed2127', '#000000']
    },
    {
        id: '30',
        name: 'Southampton',
        normalizedName: 'SOUTHAMPTON',
        shortName: 'Southampton',
        country: 'England',
        city: 'Southampton',
        stadium: {
            id: 's30',
            name: 'St Mary\'s Stadium',
            city: 'Southampton',
            country: 'England',
            coordinates: { latitude: 50.9058, longitude: -1.391 },
            clubs: ['30']
        },
        coordinates: { latitude: 50.9058, longitude: -1.391 },
        founded: 1885,
        colors: ['#ed1a3b', '#ffffff', '#000000']
    },
    {
        id: '32',
        name: 'Valencia',
        normalizedName: 'VALENCIA',
        shortName: 'Valencia',
        country: 'Spain',
        city: 'Valencia',
        stadium: {
            id: 's32',
            name: 'Mestalla',
            city: 'Valencia',
            country: 'Spain',
            coordinates: { latitude: 39.4747, longitude: -0.3583 },
            clubs: ['32']
        },
        coordinates: { latitude: 39.4747, longitude: -0.3583 },
        founded: 1919,
        colors: ['#ffffff', '#ffdf1c', '#ee3524']
    },
    {
        id: '33',
        name: 'Lille',
        normalizedName: 'LILLE',
        shortName: 'Lille',
        country: 'France',
        city: 'Lille',
        stadium: {
            id: 's33',
            name: 'Stade Pierre-Mauroy',
            city: 'Lille',
            country: 'France',
            coordinates: { latitude: 50.6119, longitude: 3.1304 },
            clubs: ['33']
        },
        coordinates: { latitude: 50.6119, longitude: 3.1304 },
        founded: 1944,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '38',
        name: 'Bayern Munich',
        normalizedName: 'BAYERN MUNICH',
        shortName: 'Bayern',
        country: 'Germany',
        city: 'Munich',
        stadium: {
            id: 's38',
            name: 'Allianz Arena',
            city: 'Munich',
            country: 'Germany',
            coordinates: { latitude: 48.2188, longitude: 11.625 },
            clubs: ['38']
        },
        coordinates: { latitude: 48.2188, longitude: 11.625 },
        founded: 1900,
        colors: ['#dc052d', '#0066b2', '#ffffff']
    },
    {
        id: '42',
        name: 'Napoli',
        normalizedName: 'NAPOLI',
        shortName: 'Napoli',
        country: 'Italy',
        city: 'Naples',
        stadium: {
            id: 's42',
            name: 'Stadio Diego Armando Maradona',
            city: 'Naples',
            country: 'Italy',
            coordinates: { latitude: 40.8279, longitude: 14.193 },
            clubs: ['42']
        },
        coordinates: { latitude: 40.8279, longitude: 14.193 },
        founded: 1926,
        colors: ['#12a0d7', '#003c82', '#ffffff']
    },
    {
        id: '45',
        name: 'Atlético Madrid',
        normalizedName: 'ATLETICO MADRID',
        shortName: 'Atlético',
        country: 'Spain',
        city: 'Madrid',
        stadium: {
            id: 's45',
            name: 'Metropolitano Stadium',
            city: 'Madrid',
            country: 'Spain',
            coordinates: { latitude: 40.4362, longitude: -3.5994 },
            clubs: ['45']
        },
        coordinates: { latitude: 40.4362, longitude: -3.5994 },
        founded: 1903,
        colors: ['#ce3524', '#ce3524', '#ffffff']
    },
    {
        id: '50',
        name: 'Atalanta',
        normalizedName: 'ATALANTA',
        shortName: 'Atalanta',
        country: 'Italy',
        city: 'Bergamo',
        stadium: {
            id: 's50',
            name: 'Gewiss Stadium',
            city: 'Bergamo',
            country: 'Italy',
            coordinates: { latitude: 45.7092, longitude: 9.6808 },
            clubs: ['50']
        },
        coordinates: { latitude: 45.7092, longitude: 9.6808 },
        founded: 1907,
        colors: ['#0071bc', '#231f20', '#ffffff']
    },
    {
        id: '79',
        name: 'RB Leipzig',
        normalizedName: 'RB LEIPZIG',
        shortName: 'Leipzig',
        country: 'Germany',
        city: 'Leipzig',
        stadium: {
            id: 's79',
            name: 'Red Bull Arena',
            city: 'Leipzig',
            country: 'Germany',
            coordinates: { latitude: 51.3458, longitude: 12.348 },
            clubs: ['79']
        },
        coordinates: { latitude: 51.3458, longitude: 12.348 },
        founded: 2009,
        colors: ['#ffffff', '#dd0741', '#001f47']
    },
    {
        id: '98',
        name: 'Leganés',
        normalizedName: 'LEGANES',
        shortName: 'Leganés',
        country: 'Spain',
        city: 'Leganés',
        stadium: {
            id: 's98',
            name: 'Estadio Municipal de Butarque',
            city: 'Leganés',
            country: 'Spain',
            coordinates: { latitude: 40.3403, longitude: -3.7683 },
            clubs: ['98']
        },
        coordinates: { latitude: 40.3403, longitude: -3.7683 },
        founded: 1928,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '99',
        name: 'Villarreal',
        normalizedName: 'VILLARREAL',
        shortName: 'Villarreal',
        country: 'Spain',
        city: 'Villarreal',
        stadium: {
            id: 's99',
            name: 'Estadio de la Cerámica',
            city: 'Villarreal',
            country: 'Spain',
            coordinates: { latitude: 39.9442, longitude: -0.1035 },
            clubs: ['99']
        },
        coordinates: { latitude: 39.9442, longitude: -0.1035 },
        founded: 1923,
        colors: ['#ffe667', '#005187', '#ffffff']
    },
    {
        id: '100',
        name: 'Valladolid',
        normalizedName: 'VALLADOLID',
        shortName: 'Valladolid',
        country: 'Spain',
        city: 'Valladolid',
        stadium: {
            id: 's100',
            name: 'Estadio José Zorrilla',
            city: 'Valladolid',
            country: 'Spain',
            coordinates: { latitude: 41.6441, longitude: -4.7614 },
            clubs: ['100']
        },
        coordinates: { latitude: 41.6441, longitude: -4.7614 },
        founded: 1928,
        colors: ['#9765c1', '#ffffff', '#178555']
    },
    {
        id: '101',
        name: 'Barcelona',
        normalizedName: 'BARCELONA',
        shortName: 'Barça',
        country: 'Spain',
        city: 'Barcelona',
        stadium: {
            id: 's101',
            name: 'Spotify Camp Nou',
            city: 'Barcelona',
            country: 'Spain',
            coordinates: { latitude: 41.3809, longitude: 2.1228 },
            clubs: ['101']
        },
        coordinates: { latitude: 41.3809, longitude: 2.1228 },
        founded: 1899,
        colors: ['#db0030', '#004d98', '#ffed02']
    },
    {
        id: '102',
        name: 'Mallorca',
        normalizedName: 'MALLORCA',
        shortName: 'Mallorca',
        country: 'Spain',
        city: 'Palma',
        stadium: {
            id: 's102',
            name: 'Estadi Mallorca Son Moix',
            city: 'Palma',
            country: 'Spain',
            coordinates: { latitude: 39.5903, longitude: 2.63 },
            clubs: ['102']
        },
        coordinates: { latitude: 39.5903, longitude: 2.63 },
        founded: 1916,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '103',
        name: 'Sevilla',
        normalizedName: 'SEVILLA',
        shortName: 'Sevilla',
        country: 'Spain',
        city: 'Seville',
        stadium: {
            id: 's103',
            name: 'Ramón Sánchez Pizjuán',
            city: 'Seville',
            country: 'Spain',
            coordinates: { latitude: 37.3837, longitude: -5.9706 },
            clubs: ['103']
        },
        coordinates: { latitude: 37.3837, longitude: -5.9706 },
        founded: 1890,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '104',
        name: 'Espanyol',
        normalizedName: 'ESPANYOL',
        shortName: 'Espanyol',
        country: 'Spain',
        city: 'Barcelona',
        stadium: {
            id: 's104',
            name: 'RCDE Stadium',
            city: 'Barcelona',
            country: 'Spain',
            coordinates: { latitude: 41.3479, longitude: 2.075 },
            clubs: ['104']
        },
        coordinates: { latitude: 41.3479, longitude: 2.075 },
        founded: 1900,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '105',
        name: 'Eibar',
        normalizedName: 'EIBAR',
        shortName: 'Eibar',
        country: 'Spain',
        city: 'Eibar',
        stadium: {
            id: 's105',
            name: 'Ipurua',
            city: 'Eibar',
            country: 'Spain',
            coordinates: { latitude: 43.1864, longitude: -2.4714 },
            clubs: ['105']
        },
        coordinates: { latitude: 43.1864, longitude: -2.4714 },
        founded: 1940,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '106',
        name: 'Athletic Club',
        normalizedName: 'ATHLETIC CLUB',
        shortName: 'Athletic',
        country: 'Spain',
        city: 'Bilbao',
        stadium: {
            id: 's106',
            name: 'San Mamés',
            city: 'Bilbao',
            country: 'Spain',
            coordinates: { latitude: 43.2641, longitude: -2.9493 },
            clubs: ['106']
        },
        coordinates: { latitude: 43.2641, longitude: -2.9493 },
        founded: 1898,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '107',
        name: 'Real Madrid',
        normalizedName: 'REAL MADRID',
        shortName: 'Real Madrid',
        country: 'Spain',
        city: 'Madrid',
        stadium: {
            id: 's107',
            name: 'Santiago Bernabéu',
            city: 'Madrid',
            country: 'Spain',
            coordinates: { latitude: 40.453, longitude: -3.6883 },
            clubs: ['107']
        },
        coordinates: { latitude: 40.453, longitude: -3.6883 },
        founded: 1902,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '114',
        name: 'Paris Saint-Germain',
        normalizedName: 'PARIS SAINT-GERMAIN',
        shortName: 'PSG',
        country: 'France',
        city: 'Paris',
        stadium: {
            id: 's114',
            name: 'Parc des Princes',
            city: 'Paris',
            country: 'France',
            coordinates: { latitude: 48.8414, longitude: 2.253 },
            clubs: ['114']
        },
        coordinates: { latitude: 48.8414, longitude: 2.253 },
        founded: 1970,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '125',
        name: 'Eintracht Frankfurt',
        normalizedName: 'EINTRACHT FRANKFURT',
        shortName: 'Frankfurt',
        country: 'Germany',
        city: 'Frankfurt',
        stadium: {
            id: 's125',
            name: 'Deutsche Bank Park',
            city: 'Frankfurt',
            country: 'Germany',
            coordinates: { latitude: 50.0686, longitude: 8.6452 },
            clubs: ['125']
        },
        coordinates: { latitude: 50.0686, longitude: 8.6452 },
        founded: 1899,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '126',
        name: 'Werder Bremen',
        normalizedName: 'WERDER BREMEN',
        shortName: 'Bremen',
        country: 'Germany',
        city: 'Bremen',
        stadium: {
            id: 's126',
            name: 'Weserstadion',
            city: 'Bremen',
            country: 'Germany',
            coordinates: { latitude: 53.0664, longitude: 8.8376 },
            clubs: ['126']
        },
        coordinates: { latitude: 53.0664, longitude: 8.8376 },
        founded: 1899,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '127',
        name: 'Schalke 04',
        normalizedName: 'SCHALKE 04',
        shortName: 'Schalke',
        country: 'Germany',
        city: 'Gelsenkirchen',
        stadium: {
            id: 's127',
            name: 'Veltins-Arena',
            city: 'Gelsenkirchen',
            country: 'Germany',
            coordinates: { latitude: 51.5545, longitude: 7.0676 },
            clubs: ['127']
        },
        coordinates: { latitude: 51.5545, longitude: 7.0676 },
        founded: 1904,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '128',
        name: 'Bayer Leverkusen',
        normalizedName: 'BAYER LEVERKUSEN',
        shortName: 'Leverkusen',
        country: 'Germany',
        city: 'Leverkusen',
        stadium: {
            id: 's128',
            name: 'BayArena',
            city: 'Leverkusen',
            country: 'Germany',
            coordinates: { latitude: 51.0378, longitude: 6.9868 },
            clubs: ['128']
        },
        coordinates: { latitude: 51.0378, longitude: 6.9868 },
        founded: 1904,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '129',
        name: 'Wolfsburg',
        normalizedName: 'WOLFSBURG',
        shortName: 'Wolfsburg',
        country: 'Germany',
        city: 'Wolfsburg',
        stadium: {
            id: 's129',
            name: 'Volkswagen Arena',
            city: 'Wolfsburg',
            country: 'Germany',
            coordinates: { latitude: 52.4319, longitude: 10.8037 },
            clubs: ['129']
        },
        coordinates: { latitude: 52.4319, longitude: 10.8037 },
        founded: 1945,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '130',
        name: 'Freiburg',
        normalizedName: 'FREIBURG',
        shortName: 'Freiburg',
        country: 'Germany',
        city: 'Freiburg',
        stadium: {
            id: 's130',
            name: 'Europa-Park Stadion',
            city: 'Freiburg',
            country: 'Germany',
            coordinates: { latitude: 47.9889, longitude: 7.8933 },
            clubs: ['130']
        },
        coordinates: { latitude: 47.9889, longitude: 7.8933 },
        founded: 1904,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '131',
        name: 'Hertha BSC',
        normalizedName: 'HERTHA BSC',
        shortName: 'Hertha',
        country: 'Germany',
        city: 'Berlin',
        stadium: {
            id: 's131',
            name: 'Olympiastadion',
            city: 'Berlin',
            country: 'Germany',
            coordinates: { latitude: 52.5147, longitude: 13.2395 },
            clubs: ['131']
        },
        coordinates: { latitude: 52.5147, longitude: 13.2395 },
        founded: 1892,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '132',
        name: 'Köln',
        normalizedName: 'KOLN',
        shortName: 'Köln',
        country: 'Germany',
        city: 'Cologne',
        stadium: {
            id: 's132',
            name: 'RheinEnergieStadion',
            city: 'Cologne',
            country: 'Germany',
            coordinates: { latitude: 50.9336, longitude: 6.8753 },
            clubs: ['132']
        },
        coordinates: { latitude: 50.9336, longitude: 6.8753 },
        founded: 1948,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '133',
        name: 'Paderborn 07',
        normalizedName: 'PADERBORN 07',
        shortName: 'Paderborn',
        country: 'Germany',
        city: 'Paderborn',
        stadium: {
            id: 's133',
            name: 'Benteler-Arena',
            city: 'Paderborn',
            country: 'Germany',
            coordinates: { latitude: 51.7315, longitude: 8.711 },
            clubs: ['133']
        },
        coordinates: { latitude: 51.7315, longitude: 8.711 },
        founded: 1907,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '134',
        name: 'Hoffenheim',
        normalizedName: 'HOFFENHEIM',
        shortName: 'Hoffenheim',
        country: 'Germany',
        city: 'Sinsheim',
        stadium: {
            id: 's134',
            name: 'PreZero Arena',
            city: 'Sinsheim',
            country: 'Germany',
            coordinates: { latitude: 49.2394, longitude: 8.8867 },
            clubs: ['134']
        },
        coordinates: { latitude: 49.2394, longitude: 8.8867 },
        founded: 1899,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '135',
        name: 'Düsseldorf',
        normalizedName: 'DUSSELDORF',
        shortName: 'Düsseldorf',
        country: 'Germany',
        city: 'Düsseldorf',
        stadium: {
            id: 's135',
            name: 'Merkur Spiel-Arena',
            city: 'Düsseldorf',
            country: 'Germany',
            coordinates: { latitude: 51.2611, longitude: 6.7326 },
            clubs: ['135']
        },
        coordinates: { latitude: 51.2611, longitude: 6.7326 },
        founded: 1895,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '136',
        name: 'Dortmund',
        normalizedName: 'DORTMUND',
        shortName: 'Dortmund',
        country: 'Germany',
        city: 'Dortmund',
        stadium: {
            id: 's136',
            name: 'Signal Iduna Park',
            city: 'Dortmund',
            country: 'Germany',
            coordinates: { latitude: 51.4926, longitude: 7.4519 },
            clubs: ['136']
        },
        coordinates: { latitude: 51.4926, longitude: 7.4519 },
        founded: 1909,
        colors: ['#fbff00', '#000000', '#000000']
    },
    {
        id: '137',
        name: 'Augsburg',
        normalizedName: 'AUGSBURG',
        shortName: 'Augsburg',
        country: 'Germany',
        city: 'Augsburg',
        stadium: {
            id: 's137',
            name: 'WWK Arena',
            city: 'Augsburg',
            country: 'Germany',
            coordinates: { latitude: 48.3233, longitude: 10.8828 },
            clubs: ['137']
        },
        coordinates: { latitude: 48.3233, longitude: 10.8828 },
        founded: 1907,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '231',
        name: 'Torino',
        normalizedName: 'TORINO',
        shortName: 'Torino',
        country: 'Italy',
        city: 'Turin',
        stadium: {
            id: 's274',
            name: 'Stadio Olimpico Grande Torino',
            city: 'Turin',
            country: 'Italy',
            coordinates: { latitude: 45.0619, longitude: 7.6414 },
            clubs: ['274', '280']
        },
        coordinates: { latitude: 45.0619, longitude: 7.6414 },
        founded: 1906,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '248',
        name: 'Alavés',
        normalizedName: 'ALAVES',
        shortName: 'Alavés',
        country: 'Spain',
        city: 'Vitoria-Gasteiz',
        stadium: {
            id: 's248',
            name: 'Mendizorrotza',
            city: 'Vitoria-Gasteiz',
            country: 'Spain',
            coordinates: { latitude: 42.8397, longitude: -2.6867 },
            clubs: ['248']
        },
        coordinates: { latitude: 42.8397, longitude: -2.6867 },
        founded: 1921,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '249',
        name: 'Levante',
        normalizedName: 'LEVANTE',
        shortName: 'Levante',
        country: 'Spain',
        city: 'Valencia',
        stadium: {
            id: 's249',
            name: 'Estadi Ciutat de València',
            city: 'Valencia',
            country: 'Spain',
            coordinates: { latitude: 39.4764, longitude: -0.3592 },
            clubs: ['249']
        },
        coordinates: { latitude: 39.4764, longitude: -0.3592 },
        founded: 1909,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '250',
        name: 'Real Sociedad',
        normalizedName: 'REAL SOCIEDAD',
        shortName: 'Real Sociedad',
        country: 'Spain',
        city: 'San Sebastián',
        stadium: {
            id: 's250',
            name: 'Anoeta',
            city: 'San Sebastián',
            country: 'Spain',
            coordinates: { latitude: 43.3014, longitude: -1.9731 },
            clubs: ['250']
        },
        coordinates: { latitude: 43.3014, longitude: -1.9731 },
        founded: 1909,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '251',
        name: 'Osasuna',
        normalizedName: 'OSASUNA',
        shortName: 'Osasuna',
        country: 'Spain',
        city: 'Pamplona',
        stadium: {
            id: 's251',
            name: 'El Sadar',
            city: 'Pamplona',
            country: 'Spain',
            coordinates: { latitude: 42.7967, longitude: -1.6372 },
            clubs: ['251']
        },
        coordinates: { latitude: 42.7967, longitude: -1.6372 },
        founded: 1920,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '252',
        name: 'Granada',
        normalizedName: 'GRANADA',
        shortName: 'Granada',
        country: 'Spain',
        city: 'Granada',
        stadium: {
            id: 's252',
            name: 'Nuevo Los Cármenes',
            city: 'Granada',
            country: 'Spain',
            coordinates: { latitude: 37.1542, longitude: -3.605 },
            clubs: ['252']
        },
        coordinates: { latitude: 37.1542, longitude: -3.605 },
        founded: 1931,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '253',
        name: 'Getafe',
        normalizedName: 'GETAFE',
        shortName: 'Getafe',
        country: 'Spain',
        city: 'Getafe',
        stadium: {
            id: 's253',
            name: 'Coliseum',
            city: 'Getafe',
            country: 'Spain',
            coordinates: { latitude: 40.3255, longitude: -3.7147 },
            clubs: ['253']
        },
        coordinates: { latitude: 40.3255, longitude: -3.7147 },
        founded: 1983,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '254',
        name: 'Real Betis',
        normalizedName: 'REAL BETIS',
        shortName: 'Betis',
        country: 'Spain',
        city: 'Seville',
        stadium: {
            id: 's254',
            name: 'Benito Villamarín',
            city: 'Seville',
            country: 'Spain',
            coordinates: { latitude: 37.3564, longitude: -5.9817 },
            clubs: ['254']
        },
        coordinates: { latitude: 37.3564, longitude: -5.9817 },
        founded: 1907,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '257',
        name: 'Lyon',
        normalizedName: 'LYON',
        shortName: 'Lyon',
        country: 'France',
        city: 'Lyon',
        stadium: {
            id: 's257',
            name: 'Parc Olympique Lyonnais',
            city: 'Lyon',
            country: 'France',
            coordinates: { latitude: 45.7653, longitude: 4.982 },
            clubs: ['257']
        },
        coordinates: { latitude: 45.7653, longitude: 4.982 },
        founded: 1950,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '266',
        name: 'Fiorentina',
        normalizedName: 'FIORENTINA',
        shortName: 'Fiorentina',
        country: 'Italy',
        city: 'Florence',
        stadium: {
            id: 's266',
            name: 'Stadio Artemio Franchi',
            city: 'Florence',
            country: 'Italy',
            coordinates: { latitude: 43.7808, longitude: 11.2825 },
            clubs: ['266']
        },
        coordinates: { latitude: 43.7808, longitude: 11.2825 },
        founded: 1926,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '267',
        name: 'SPAL',
        normalizedName: 'SPAL',
        shortName: 'SPAL',
        country: 'Italy',
        city: 'Ferrara',
        stadium: {
            id: 's267',
            name: 'Stadio Paolo Mazza',
            city: 'Ferrara',
            country: 'Italy',
            coordinates: { latitude: 44.842, longitude: 11.5986 },
            clubs: ['267']
        },
        coordinates: { latitude: 44.842, longitude: 11.5986 },
        founded: 1907,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '268',
        name: 'Genoa',
        normalizedName: 'GENOA',
        shortName: 'Genoa',
        country: 'Italy',
        city: 'Genoa',
        stadium: {
            id: 's268',
            name: 'Stadio Luigi Ferraris',
            city: 'Genoa',
            country: 'Italy',
            coordinates: { latitude: 44.4167, longitude: 8.9524 },
            clubs: ['268', '303']
        },
        coordinates: { latitude: 44.4167, longitude: 8.9524 },
        founded: 1893,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '269',
        name: 'Internazionale',
        normalizedName: 'INTERNAZIONALE',
        shortName: 'Inter',
        country: 'Italy',
        city: 'Milan',
        stadium: {
            id: 's269',
            name: 'San Siro',
            city: 'Milan',
            country: 'Italy',
            coordinates: { latitude: 45.4781, longitude: 9.124 },
            clubs: ['269', '271']
        },
        coordinates: { latitude: 45.4781, longitude: 9.124 },
        founded: 1908,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '270',
        name: 'Juventus',
        normalizedName: 'JUVENTUS',
        shortName: 'Juventus',
        country: 'Italy',
        city: 'Turin',
        stadium: {
            id: 's270',
            name: 'Allianz Stadium',
            city: 'Turin',
            country: 'Italy',
            coordinates: { latitude: 45.1096, longitude: 7.6413 },
            clubs: ['270']
        },
        coordinates: { latitude: 45.1096, longitude: 7.6413 },
        founded: 1897,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '271',
        name: 'Milan',
        normalizedName: 'MILAN',
        shortName: 'Milan',
        country: 'Italy',
        city: 'Milan',
        stadium: {
            id: 's269',
            name: 'San Siro',
            city: 'Milan',
            country: 'Italy',
            coordinates: { latitude: 45.4781, longitude: 9.124 },
            clubs: ['269', '271']
        },
        coordinates: { latitude: 45.4781, longitude: 9.124 },
        founded: 1899,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '272',
        name: 'Udinese',
        normalizedName: 'UDINESE',
        shortName: 'Udinese',
        country: 'Italy',
        city: 'Udine',
        stadium: {
            id: 's272',
            name: 'Bluenergy Stadium',
            city: 'Udine',
            country: 'Italy',
            coordinates: { latitude: 46.0822, longitude: 13.2028 },
            clubs: ['272']
        },
        coordinates: { latitude: 46.0822, longitude: 13.2028 },
        founded: 1896,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '273',
        name: 'Brescia',
        normalizedName: 'BRESCIA',
        shortName: 'Brescia',
        country: 'Italy',
        city: 'Brescia',
        stadium: {
            id: 's273',
            name: 'Stadio Mario Rigamonti',
            city: 'Brescia',
            country: 'Italy',
            coordinates: { latitude: 45.535, longitude: 10.2178 },
            clubs: ['273']
        },
        coordinates: { latitude: 45.535, longitude: 10.2178 },
        founded: 1911,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '274',
        name: 'Lazio',
        normalizedName: 'LAZIO',
        shortName: 'Lazio',
        country: 'Italy',
        city: 'Rome',
        stadium: {
            id: 's274',
            name: 'Stadio Olimpico',
            city: 'Rome',
            country: 'Italy',
            coordinates: { latitude: 41.9342, longitude: 12.4547 },
            clubs: ['274', '280']
        },
        coordinates: { latitude: 41.9342, longitude: 12.4547 },
        founded: 1900,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '275',
        name: 'Sassuolo',
        normalizedName: 'SASSUOLO',
        shortName: 'Sassuolo',
        country: 'Italy',
        city: 'Reggio Emilia',
        stadium: {
            id: 's275',
            name: 'Mapei Stadium',
            city: 'Reggio Emilia',
            country: 'Italy',
            coordinates: { latitude: 44.7244, longitude: 10.7361 },
            clubs: ['275']
        },
        coordinates: { latitude: 44.7244, longitude: 10.7361 },
        founded: 1920,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '276',
        name: 'Parma',
        normalizedName: 'PARMA',
        shortName: 'Parma',
        country: 'Italy',
        city: 'Parma',
        stadium: {
            id: 's276',
            name: 'Stadio Ennio Tardini',
            city: 'Parma',
            country: 'Italy',
            coordinates: { latitude: 44.7939, longitude: 10.3386 },
            clubs: ['276']
        },
        coordinates: { latitude: 44.7939, longitude: 10.3386 },
        founded: 1913,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '277',
        name: 'Cagliari',
        normalizedName: 'CAGLIARI',
        shortName: 'Cagliari',
        country: 'Italy',
        city: 'Cagliari',
        stadium: {
            id: 's277',
            name: 'Unipol Domus',
            city: 'Cagliari',
            country: 'Italy',
            coordinates: { latitude: 39.1994, longitude: 9.1378 },
            clubs: ['277']
        },
        coordinates: { latitude: 39.1994, longitude: 9.1378 },
        founded: 1920,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '278',
        name: 'Hellas Verona',
        normalizedName: 'HELLAS VERONA',
        shortName: 'Verona',
        country: 'Italy',
        city: 'Verona',
        stadium: {
            id: 's278',
            name: 'Stadio Marcantonio Bentegodi',
            city: 'Verona',
            country: 'Italy',
            coordinates: { latitude: 45.435, longitude: 10.9686 },
            clubs: ['278']
        },
        coordinates: { latitude: 45.435, longitude: 10.9686 },
        founded: 1903,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '279',
        name: 'Lecce',
        normalizedName: 'LECCE',
        shortName: 'Lecce',
        country: 'Italy',
        city: 'Lecce',
        stadium: {
            id: 's279',
            name: 'Stadio Via del Mare',
            city: 'Lecce',
            country: 'Italy',
            coordinates: { latitude: 40.3517, longitude: 18.1422 },
            clubs: ['279']
        },
        coordinates: { latitude: 40.3517, longitude: 18.1422 },
        founded: 1908,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '280',
        name: 'Roma',
        normalizedName: 'ROMA',
        shortName: 'Roma',
        country: 'Italy',
        city: 'Rome',
        stadium: {
            id: 's274',
            name: 'Stadio Olimpico',
            city: 'Rome',
            country: 'Italy',
            coordinates: { latitude: 41.9342, longitude: 12.4547 },
            clubs: ['274', '280']
        },
        coordinates: { latitude: 41.9342, longitude: 12.4547 },
        founded: 1927,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '281',
        name: 'Bologna',
        normalizedName: 'BOLOGNA',
        shortName: 'Bologna',
        country: 'Italy',
        city: 'Bologna',
        stadium: {
            id: 's281',
            name: 'Stadio Renato Dall\'Ara',
            city: 'Bologna',
            country: 'Italy',
            coordinates: { latitude: 44.4925, longitude: 11.31 },
            clubs: ['281']
        },
        coordinates: { latitude: 44.4925, longitude: 11.31 },
        founded: 1909,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '295',
        name: 'Mainz 05',
        normalizedName: 'MAINZ 05',
        shortName: 'Mainz',
        country: 'Germany',
        city: 'Mainz',
        stadium: {
            id: 's295',
            name: 'Mewa Arena',
            city: 'Mainz',
            country: 'Germany',
            coordinates: { latitude: 49.9844, longitude: 8.2242 },
            clubs: ['295']
        },
        coordinates: { latitude: 49.9844, longitude: 8.2242 },
        founded: 1905,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '303',
        name: 'Sampdoria',
        normalizedName: 'SAMPDORIA',
        shortName: 'Sampdoria',
        country: 'Italy',
        city: 'Genoa',
        stadium: {
            id: 's268',
            name: 'Stadio Luigi Ferraris',
            city: 'Genoa',
            country: 'Italy',
            coordinates: { latitude: 44.4167, longitude: 8.9524 },
            clubs: ['268', '303']
        },
        coordinates: { latitude: 44.4167, longitude: 8.9524 },
        founded: 1946,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '333',
        name: 'Celta Vigo',
        normalizedName: 'CELTA VIGO',
        shortName: 'Celta',
        country: 'Spain',
        city: 'Vigo',
        stadium: {
            id: 's333',
            name: 'Abanca-Balaídos',
            city: 'Vigo',
            country: 'Spain',
            coordinates: { latitude: 42.2117, longitude: -8.7397 },
            clubs: ['333']
        },
        coordinates: { latitude: 42.2117, longitude: -8.7397 },
        founded: 1923,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '366',
        name: 'Mönchengladbach',
        normalizedName: 'MONCHENGLADBACH',
        shortName: 'Gladbach',
        country: 'Germany',
        city: 'Mönchengladbach',
        stadium: {
            id: 's366',
            name: 'Borussia-Park',
            city: 'Mönchengladbach',
            country: 'Germany',
            coordinates: { latitude: 51.1744, longitude: 6.3856 },
            clubs: ['366']
        },
        coordinates: { latitude: 51.1744, longitude: 6.3856 },
        founded: 1900,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '474',
        name: 'Union Berlin',
        normalizedName: 'UNION BERLIN',
        shortName: 'Union Berlin',
        country: 'Germany',
        city: 'Berlin',
        stadium: {
            id: 's474',
            name: 'An der Alten Försterei',
            city: 'Berlin',
            country: 'Germany',
            coordinates: { latitude: 52.4572, longitude: 13.5683 },
            clubs: ['474']
        },
        coordinates: { latitude: 52.4572, longitude: 13.5683 },
        founded: 1966,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '488',
        name: 'Monaco',
        normalizedName: 'MONACO',
        shortName: 'Monaco',
        country: 'France',
        city: 'Monaco',
        stadium: {
            id: 's488',
            name: 'Stade Louis II',
            city: 'Monaco',
            country: 'France',
            coordinates: { latitude: 43.7278, longitude: 7.4156 },
            clubs: ['488']
        },
        coordinates: { latitude: 43.7278, longitude: 7.4156 },
        founded: 1924,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '489',
        name: 'Marseille',
        normalizedName: 'MARSEILLE',
        shortName: 'Marseille',
        country: 'France',
        city: 'Marseille',
        stadium: {
            id: 's489',
            name: 'Stade Vélodrome',
            city: 'Marseille',
            country: 'France',
            coordinates: { latitude: 43.2698, longitude: 5.3956 },
            clubs: ['489']
        },
        coordinates: { latitude: 43.2698, longitude: 5.3956 },
        founded: 1899,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '490',
        name: 'Reims',
        normalizedName: 'REIMS',
        shortName: 'Reims',
        country: 'France',
        city: 'Reims',
        stadium: {
            id: 's490',
            name: 'Stade Auguste-Delaune',
            city: 'Reims',
            country: 'France',
            coordinates: { latitude: 49.2469, longitude: 4.0247 },
            clubs: ['490']
        },
        coordinates: { latitude: 49.2469, longitude: 4.0247 },
        founded: 1931,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '491',
        name: 'Nice',
        normalizedName: 'NICE',
        shortName: 'Nice',
        country: 'France',
        city: 'Nice',
        stadium: {
            id: 's491',
            name: 'Allianz Riviera',
            city: 'Nice',
            country: 'France',
            coordinates: { latitude: 43.7053, longitude: 7.1925 },
            clubs: ['491']
        },
        coordinates: { latitude: 43.7053, longitude: 7.1925 },
        founded: 1904,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '492',
        name: 'Saint-Étienne',
        normalizedName: 'SAINT-ETIENNE',
        shortName: 'Saint-Étienne',
        country: 'France',
        city: 'Saint-Étienne',
        stadium: {
            id: 's492',
            name: 'Stade Geoffroy-Guichard',
            city: 'Saint-Étienne',
            country: 'France',
            coordinates: { latitude: 45.4608, longitude: 4.3903 },
            clubs: ['492']
        },
        coordinates: { latitude: 45.4608, longitude: 4.3903 },
        founded: 1919,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '493',
        name: 'Dijon',
        normalizedName: 'DIJON',
        shortName: 'Dijon',
        country: 'France',
        city: 'Dijon',
        stadium: {
            id: 's493',
            name: 'Stade Gaston Gérard',
            city: 'Dijon',
            country: 'France',
            coordinates: { latitude: 47.3289, longitude: 5.0689 },
            clubs: ['493']
        },
        coordinates: { latitude: 47.3289, longitude: 5.0689 },
        founded: 1998,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '494',
        name: 'Bordeaux',
        normalizedName: 'BORDEAUX',
        shortName: 'Bordeaux',
        country: 'France',
        city: 'Bordeaux',
        stadium: {
            id: 's494',
            name: 'Matmut Atlantique',
            city: 'Bordeaux',
            country: 'France',
            coordinates: { latitude: 44.8978, longitude: -0.5611 },
            clubs: ['494']
        },
        coordinates: { latitude: 44.8978, longitude: -0.5611 },
        founded: 1881,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '495',
        name: 'Toulouse',
        normalizedName: 'TOULOUSE',
        shortName: 'Toulouse',
        country: 'France',
        city: 'Toulouse',
        stadium: {
            id: 's495',
            name: 'Stadium de Toulouse',
            city: 'Toulouse',
            country: 'France',
            coordinates: { latitude: 43.5833, longitude: 1.4342 },
            clubs: ['495']
        },
        coordinates: { latitude: 43.5833, longitude: 1.4342 },
        founded: 1970,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '496',
        name: 'Amiens',
        normalizedName: 'AMIENS',
        shortName: 'Amiens',
        country: 'France',
        city: 'Amiens',
        stadium: {
            id: 's496',
            name: 'Stade de la Licorne',
            city: 'Amiens',
            country: 'France',
            coordinates: { latitude: 49.8942, longitude: 2.2636 },
            clubs: ['496']
        },
        coordinates: { latitude: 49.8942, longitude: 2.2636 },
        founded: 1901,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '511',
        name: 'Strasbourg',
        normalizedName: 'STRASBOURG',
        shortName: 'Strasbourg',
        country: 'France',
        city: 'Strasbourg',
        stadium: {
            id: 's511',
            name: 'Stade de la Meinau',
            city: 'Strasbourg',
            country: 'France',
            coordinates: { latitude: 48.56, longitude: 7.755 },
            clubs: ['511']
        },
        coordinates: { latitude: 48.56, longitude: 7.755 },
        founded: 1906,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '514',
        name: 'Metz',
        normalizedName: 'METZ',
        shortName: 'Metz',
        country: 'France',
        city: 'Metz',
        stadium: {
            id: 's514',
            name: 'Stade Saint-Symphorien',
            city: 'Metz',
            country: 'France',
            coordinates: { latitude: 49.11, longitude: 6.1597 },
            clubs: ['514']
        },
        coordinates: { latitude: 49.11, longitude: 6.1597 },
        founded: 1932,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '515',
        name: 'Rennes',
        normalizedName: 'RENNES',
        shortName: 'Rennes',
        country: 'France',
        city: 'Rennes',
        stadium: {
            id: 's515',
            name: 'Roazhon Park',
            city: 'Rennes',
            country: 'France',
            coordinates: { latitude: 48.1078, longitude: -1.7128 },
            clubs: ['515']
        },
        coordinates: { latitude: 48.1078, longitude: -1.7128 },
        founded: 1901,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '516',
        name: 'Nantes',
        normalizedName: 'NANTES',
        shortName: 'Nantes',
        country: 'France',
        city: 'Nantes',
        stadium: {
            id: 's516',
            name: 'Stade de la Beaujoire',
            city: 'Nantes',
            country: 'France',
            coordinates: { latitude: 47.2561, longitude: -1.5247 },
            clubs: ['516']
        },
        coordinates: { latitude: 47.2561, longitude: -1.5247 },
        founded: 1943,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '517',
        name: 'Montpellier',
        normalizedName: 'MONTPELLIER',
        shortName: 'Montpellier',
        country: 'France',
        city: 'Montpellier',
        stadium: {
            id: 's517',
            name: 'Stade de la Mosson',
            city: 'Montpellier',
            country: 'France',
            coordinates: { latitude: 43.6225, longitude: 3.8122 },
            clubs: ['517']
        },
        coordinates: { latitude: 43.6225, longitude: 3.8122 },
        founded: 1974,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '518',
        name: 'Brest',
        normalizedName: 'BREST',
        shortName: 'Brest',
        country: 'France',
        city: 'Brest',
        stadium: {
            id: 's518',
            name: 'Stade Francis-Le Blé',
            city: 'Brest',
            country: 'France',
            coordinates: { latitude: 48.3892, longitude: -4.4619 },
            clubs: ['518']
        },
        coordinates: { latitude: 48.3892, longitude: -4.4619 },
        founded: 1950,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '620',
        name: 'Angers',
        normalizedName: 'ANGERS',
        shortName: 'Angers',
        country: 'France',
        city: 'Angers',
        stadium: {
            id: 's620',
            name: 'Stade Raymond Kopa',
            city: 'Angers',
            country: 'France',
            coordinates: { latitude: 47.4603, longitude: -0.5311 },
            clubs: ['620']
        },
        coordinates: { latitude: 47.4603, longitude: -0.5311 },
        founded: 1919,
        colors: ['#000000', '#FFFFFF']
    },
    {
        id: '621',
        name: 'Nîmes',
        normalizedName: 'NIMES',
        shortName: 'Nîmes',
        country: 'France',
        city: 'Nîmes',
        stadium: {
            id: 's621',
            name: 'Stade des Costières',
            city: 'Nîmes',
            country: 'France',
            coordinates: { latitude: 43.8136, longitude: 4.3544 },
            clubs: ['621']
        },
        coordinates: { latitude: 43.8136, longitude: 4.3544 },
        founded: 1937,
        colors: ['#000000', '#FFFFFF']
    },
    // Primeira Liga (Portugal) - Rank 6
    {
        id: '622',
        name: 'Benfica',
        normalizedName: 'BENFICA',
        shortName: 'Benfica',
        country: 'Portugal',
        city: 'Lisbon',
        stadium: {
            id: 's622',
            name: 'Estádio da Luz',
            city: 'Lisbon',
            country: 'Portugal',
            coordinates: { latitude: 38.7526, longitude: -9.1847 },
            clubs: ['622']
        },
        coordinates: { latitude: 38.7526, longitude: -9.1847 },
        founded: 1904,
        colors: ['#e30613', '#ffffff']
    },
    {
        id: '623',
        name: 'Porto',
        normalizedName: 'PORTO',
        shortName: 'Porto',
        country: 'Portugal',
        city: 'Porto',
        stadium: {
            id: 's623',
            name: 'Estádio do Dragão',
            city: 'Porto',
            country: 'Portugal',
            coordinates: { latitude: 41.1619, longitude: -8.5833 },
            clubs: ['623']
        },
        coordinates: { latitude: 41.1619, longitude: -8.5833 },
        founded: 1893,
        colors: ['#0066cc', '#ffffff']
    },
    {
        id: '624',
        name: 'Sporting CP',
        normalizedName: 'SPORTING CP',
        shortName: 'Sporting',
        country: 'Portugal',
        city: 'Lisbon',
        stadium: {
            id: 's624',
            name: 'Estádio José Alvalade',
            city: 'Lisbon',
            country: 'Portugal',
            coordinates: { latitude: 38.7614, longitude: -9.1608 },
            clubs: ['624']
        },
        coordinates: { latitude: 38.7614, longitude: -9.1608 },
        founded: 1906,
        colors: ['#00b140', '#ffffff']
    },
    {
        id: '625',
        name: 'Braga',
        normalizedName: 'BRAGA',
        shortName: 'Braga',
        country: 'Portugal',
        city: 'Braga',
        stadium: {
            id: 's625',
            name: 'Estádio Municipal de Braga',
            city: 'Braga',
            country: 'Portugal',
            coordinates: { latitude: 41.5622, longitude: -8.4308 },
            clubs: ['625']
        },
        coordinates: { latitude: 41.5622, longitude: -8.4308 },
        founded: 1921,
        colors: ['#ed1c24', '#ffffff']
    },
    // Eredivisie (Netherlands) - Rank 7
    {
        id: '626',
        name: 'Ajax',
        normalizedName: 'AJAX',
        shortName: 'Ajax',
        country: 'Netherlands',
        city: 'Amsterdam',
        stadium: {
            id: 's626',
            name: 'Johan Cruyff Arena',
            city: 'Amsterdam',
            country: 'Netherlands',
            coordinates: { latitude: 52.3142, longitude: 4.9419 },
            clubs: ['626']
        },
        coordinates: { latitude: 52.3142, longitude: 4.9419 },
        founded: 1900,
        colors: ['#d2122e', '#ffffff']
    },
    {
        id: '627',
        name: 'PSV Eindhoven',
        normalizedName: 'PSV EINDHOVEN',
        shortName: 'PSV',
        country: 'Netherlands',
        city: 'Eindhoven',
        stadium: {
            id: 's627',
            name: 'Philips Stadion',
            city: 'Eindhoven',
            country: 'Netherlands',
            coordinates: { latitude: 51.4417, longitude: 5.4675 },
            clubs: ['627']
        },
        coordinates: { latitude: 51.4417, longitude: 5.4675 },
        founded: 1913,
        colors: ['#ed1b2e', '#ffffff']
    },
    {
        id: '628',
        name: 'Feyenoord',
        normalizedName: 'FEYENOORD',
        shortName: 'Feyenoord',
        country: 'Netherlands',
        city: 'Rotterdam',
        stadium: {
            id: 's628',
            name: 'De Kuip',
            city: 'Rotterdam',
            country: 'Netherlands',
            coordinates: { latitude: 51.8939, longitude: 4.5236 },
            clubs: ['628']
        },
        coordinates: { latitude: 51.8939, longitude: 4.5236 },
        founded: 1908,
        colors: ['#e30613', '#ffffff']
    },
    {
        id: '629',
        name: 'AZ Alkmaar',
        normalizedName: 'AZ ALKMAAR',
        shortName: 'AZ',
        country: 'Netherlands',
        city: 'Alkmaar',
        stadium: {
            id: 's629',
            name: 'AFAS Stadion',
            city: 'Alkmaar',
            country: 'Netherlands',
            coordinates: { latitude: 52.6097, longitude: 4.7394 },
            clubs: ['629']
        },
        coordinates: { latitude: 52.6097, longitude: 4.7394 },
        founded: 1967,
        colors: ['#da020e', '#ffffff']
    },
    // Belgian Pro League - Rank 8
    {
        id: '630',
        name: 'Club Brugge',
        normalizedName: 'CLUB BRUGGE',
        shortName: 'Club Brugge',
        country: 'Belgium',
        city: 'Bruges',
        stadium: {
            id: 's630',
            name: 'Jan Breydel Stadium',
            city: 'Bruges',
            country: 'Belgium',
            coordinates: { latitude: 51.1948, longitude: 3.1789 },
            clubs: ['630']
        },
        coordinates: { latitude: 51.1948, longitude: 3.1789 },
        founded: 1891,
        colors: ['#005baa', '#000000']
    },
    {
        id: '631',
        name: 'Anderlecht',
        normalizedName: 'ANDERLECHT',
        shortName: 'Anderlecht',
        country: 'Belgium',
        city: 'Brussels',
        stadium: {
            id: 's631',
            name: 'Lotto Park',
            city: 'Brussels',
            country: 'Belgium',
            coordinates: { latitude: 50.8333, longitude: 4.2975 },
            clubs: ['631']
        },
        coordinates: { latitude: 50.8333, longitude: 4.2975 },
        founded: 1908,
        colors: ['#6c2782', '#ffffff']
    },
    {
        id: '632',
        name: 'Standard Liège',
        normalizedName: 'STANDARD LIEGE',
        shortName: 'Standard',
        country: 'Belgium',
        city: 'Liège',
        stadium: {
            id: 's632',
            name: 'Maurice Dufrasne Stadium',
            city: 'Liège',
            country: 'Belgium',
            coordinates: { latitude: 50.6114, longitude: 5.5392 },
            clubs: ['632']
        },
        coordinates: { latitude: 50.6114, longitude: 5.5392 },
        founded: 1898,
        colors: ['#ed1c24', '#ffffff']
    },
    // MLS (USA/Canada) - Rank 9
    {
        id: '633',
        name: 'LA Galaxy',
        normalizedName: 'LA GALAXY',
        shortName: 'LA Galaxy',
        country: 'USA',
        city: 'Los Angeles',
        stadium: {
            id: 's633',
            name: 'Dignity Health Sports Park',
            city: 'Los Angeles',
            country: 'USA',
            coordinates: { latitude: 33.8644, longitude: -118.2611 },
            clubs: ['633']
        },
        coordinates: { latitude: 33.8644, longitude: -118.2611 },
        founded: 1995,
        colors: ['#00245d', '#ffd200', '#ffffff']
    },
    {
        id: '634',
        name: 'Seattle Sounders',
        normalizedName: 'SEATTLE SOUNDERS',
        shortName: 'Sounders',
        country: 'USA',
        city: 'Seattle',
        stadium: {
            id: 's634',
            name: 'Lumen Field',
            city: 'Seattle',
            country: 'USA',
            coordinates: { latitude: 47.5952, longitude: -122.3316 },
            clubs: ['634']
        },
        coordinates: { latitude: 47.5952, longitude: -122.3316 },
        founded: 2007,
        colors: ['#5d9741', '#005595', '#002f65']
    },
    {
        id: '635',
        name: 'Inter Miami',
        normalizedName: 'INTER MIAMI',
        shortName: 'Inter Miami',
        country: 'USA',
        city: 'Miami',
        stadium: {
            id: 's635',
            name: 'Chase Stadium',
            city: 'Fort Lauderdale',
            country: 'USA',
            coordinates: { latitude: 26.1931, longitude: -80.1628 },
            clubs: ['635']
        },
        coordinates: { latitude: 26.1931, longitude: -80.1628 },
        founded: 2018,
        colors: ['#f7b5cd', '#000000']
    },
    // Süper Lig (Turkey) - Rank 10
    {
        id: '636',
        name: 'Galatasaray',
        normalizedName: 'GALATASARAY',
        shortName: 'Galatasaray',
        country: 'Turkey',
        city: 'Istanbul',
        stadium: {
            id: 's636',
            name: 'Türk Telekom Stadium',
            city: 'Istanbul',
            country: 'Turkey',
            coordinates: { latitude: 41.1039, longitude: 28.9903 },
            clubs: ['636']
        },
        coordinates: { latitude: 41.1039, longitude: 28.9903 },
        founded: 1905,
        colors: ['#fbb800', '#b71c1c']
    },
    {
        id: '637',
        name: 'Fenerbahçe',
        normalizedName: 'FENERBAHCE',
        shortName: 'Fenerbahçe',
        country: 'Turkey',
        city: 'Istanbul',
        stadium: {
            id: 's637',
            name: 'Şükrü Saracoğlu Stadium',
            city: 'Istanbul',
            country: 'Turkey',
            coordinates: { latitude: 40.9894, longitude: 29.0361 },
            clubs: ['637']
        },
        coordinates: { latitude: 40.9894, longitude: 29.0361 },
        founded: 1907,
        colors: ['#ffed00', '#001489']
    },
    {
        id: '638',
        name: 'Beşiktaş',
        normalizedName: 'BESIKTAS',
        shortName: 'Beşiktaş',
        country: 'Turkey',
        city: 'Istanbul',
        stadium: {
            id: 's638',
            name: 'Vodafone Park',
            city: 'Istanbul',
            country: 'Turkey',
            coordinates: { latitude: 41.0392, longitude: 29.0031 },
            clubs: ['638']
        },
        coordinates: { latitude: 41.0392, longitude: 29.0031 },
        founded: 1903,
        colors: ['#000000', '#ffffff']
    },
    // Liga Profesional (Argentina) - Rank 11
    {
        id: '639',
        name: 'Boca Juniors',
        normalizedName: 'BOCA JUNIORS',
        shortName: 'Boca',
        country: 'Argentina',
        city: 'Buenos Aires',
        stadium: {
            id: 's639',
            name: 'La Bombonera',
            city: 'Buenos Aires',
            country: 'Argentina',
            coordinates: { latitude: -34.6356, longitude: -58.3647 },
            clubs: ['639']
        },
        coordinates: { latitude: -34.6356, longitude: -58.3647 },
        founded: 1905,
        colors: ['#005ca9', '#fbff09']
    },
    {
        id: '640',
        name: 'River Plate',
        normalizedName: 'RIVER PLATE',
        shortName: 'River',
        country: 'Argentina',
        city: 'Buenos Aires',
        stadium: {
            id: 's640',
            name: 'Estadio Monumental',
            city: 'Buenos Aires',
            country: 'Argentina',
            coordinates: { latitude: -34.5453, longitude: -58.4497 },
            clubs: ['640']
        },
        coordinates: { latitude: -34.5453, longitude: -58.4497 },
        founded: 1901,
        colors: ['#ffffff', '#ed1c24']
    },
    {
        id: '641',
        name: 'Racing Club',
        normalizedName: 'RACING CLUB',
        shortName: 'Racing',
        country: 'Argentina',
        city: 'Avellaneda',
        stadium: {
            id: 's641',
            name: 'Estadio Presidente Perón',
            city: 'Avellaneda',
            country: 'Argentina',
            coordinates: { latitude: -34.6672, longitude: -58.3697 },
            clubs: ['641']
        },
        coordinates: { latitude: -34.6672, longitude: -58.3697 },
        founded: 1903,
        colors: ['#6bb4e7', '#ffffff']
    },
    // Brasileirão (Brazil) - Rank 12
    {
        id: '642',
        name: 'Flamengo',
        normalizedName: 'FLAMENGO',
        shortName: 'Flamengo',
        country: 'Brazil',
        city: 'Rio de Janeiro',
        stadium: {
            id: 's642',
            name: 'Maracanã',
            city: 'Rio de Janeiro',
            country: 'Brazil',
            coordinates: { latitude: -22.9122, longitude: -43.2302 },
            clubs: ['642', '643']
        },
        coordinates: { latitude: -22.9122, longitude: -43.2302 },
        founded: 1895,
        colors: ['#e31f26', '#000000']
    },
    {
        id: '643',
        name: 'Fluminense',
        normalizedName: 'FLUMINENSE',
        shortName: 'Fluminense',
        country: 'Brazil',
        city: 'Rio de Janeiro',
        stadium: {
            id: 's642',
            name: 'Maracanã',
            city: 'Rio de Janeiro',
            country: 'Brazil',
            coordinates: { latitude: -22.9122, longitude: -43.2302 },
            clubs: ['642', '643']
        },
        coordinates: { latitude: -22.9122, longitude: -43.2302 },
        founded: 1902,
        colors: ['#6f263d', '#006341', '#ffffff']
    },
    {
        id: '644',
        name: 'Palmeiras',
        normalizedName: 'PALMEIRAS',
        shortName: 'Palmeiras',
        country: 'Brazil',
        city: 'São Paulo',
        stadium: {
            id: 's644',
            name: 'Allianz Parque',
            city: 'São Paulo',
            country: 'Brazil',
            coordinates: { latitude: -23.5272, longitude: -46.6794 },
            clubs: ['644']
        },
        coordinates: { latitude: -23.5272, longitude: -46.6794 },
        founded: 1914,
        colors: ['#006f3c', '#ffffff']
    },
    {
        id: '645',
        name: 'São Paulo',
        normalizedName: 'SAO PAULO',
        shortName: 'São Paulo',
        country: 'Brazil',
        city: 'São Paulo',
        stadium: {
            id: 's645',
            name: 'Morumbi',
            city: 'São Paulo',
            country: 'Brazil',
            coordinates: { latitude: -23.6000, longitude: -46.7208 },
            clubs: ['645']
        },
        coordinates: { latitude: -23.6000, longitude: -46.7208 },
        founded: 1930,
        colors: ['#ed1c24', '#000000', '#ffffff']
    },
    // Liga MX (Mexico) - Rank 13
    {
        id: '646',
        name: 'Club América',
        normalizedName: 'CLUB AMERICA',
        shortName: 'América',
        country: 'Mexico',
        city: 'Mexico City',
        stadium: {
            id: 's646',
            name: 'Estadio Azteca',
            city: 'Mexico City',
            country: 'Mexico',
            coordinates: { latitude: 19.3028, longitude: -99.1506 },
            clubs: ['646']
        },
        coordinates: { latitude: 19.3028, longitude: -99.1506 },
        founded: 1916,
        colors: ['#ffed00', '#002d62']
    },
    {
        id: '647',
        name: 'Chivas Guadalajara',
        normalizedName: 'CHIVAS GUADALAJARA',
        shortName: 'Chivas',
        country: 'Mexico',
        city: 'Guadalajara',
        stadium: {
            id: 's647',
            name: 'Estadio Akron',
            city: 'Guadalajara',
            country: 'Mexico',
            coordinates: { latitude: 20.6869, longitude: -103.4644 },
            clubs: ['647']
        },
        coordinates: { latitude: 20.6869, longitude: -103.4644 },
        founded: 1906,
        colors: ['#ed1c24', '#ffffff', '#001f5c']
    },
    {
        id: '648',
        name: 'Cruz Azul',
        normalizedName: 'CRUZ AZUL',
        shortName: 'Cruz Azul',
        country: 'Mexico',
        city: 'Mexico City',
        stadium: {
            id: 's648',
            name: 'Estadio Ciudad de los Deportes',
            city: 'Mexico City',
            country: 'Mexico',
            coordinates: { latitude: 19.4061, longitude: -99.1808 },
            clubs: ['648']
        },
        coordinates: { latitude: 19.4061, longitude: -99.1808 },
        founded: 1927,
        colors: ['#0066b3', '#ffffff']
    },
    // J1 League (Japan) - Rank 14
    {
        id: '649',
        name: 'Urawa Red Diamonds',
        normalizedName: 'URAWA RED DIAMONDS',
        shortName: 'Urawa',
        country: 'Japan',
        city: 'Saitama',
        stadium: {
            id: 's649',
            name: 'Saitama Stadium 2002',
            city: 'Saitama',
            country: 'Japan',
            coordinates: { latitude: 35.9072, longitude: 139.6953 },
            clubs: ['649']
        },
        coordinates: { latitude: 35.9072, longitude: 139.6953 },
        founded: 1950,
        colors: ['#e30613', '#000000']
    },
    {
        id: '650',
        name: 'Yokohama F. Marinos',
        normalizedName: 'YOKOHAMA F. MARINOS',
        shortName: 'Marinos',
        country: 'Japan',
        city: 'Yokohama',
        stadium: {
            id: 's650',
            name: 'Nissan Stadium',
            city: 'Yokohama',
            country: 'Japan',
            coordinates: { latitude: 35.5092, longitude: 139.6050 },
            clubs: ['650']
        },
        coordinates: { latitude: 35.5092, longitude: 139.6050 },
        founded: 1972,
        colors: ['#004a9d', '#ffffff']
    },
    {
        id: '651',
        name: 'Kawasaki Frontale',
        normalizedName: 'KAWASAKI FRONTALE',
        shortName: 'Kawasaki',
        country: 'Japan',
        city: 'Kawasaki',
        stadium: {
            id: 's651',
            name: 'Todoroki Athletics Stadium',
            city: 'Kawasaki',
            country: 'Japan',
            coordinates: { latitude: 35.5667, longitude: 139.6544 },
            clubs: ['651']
        },
        coordinates: { latitude: 35.5667, longitude: 139.6544 },
        founded: 1955,
        colors: ['#28b8e7', '#000000']
    },
    // Scottish Premiership - Rank 26
    {
        id: '652',
        name: 'Celtic',
        normalizedName: 'CELTIC',
        shortName: 'Celtic',
        country: 'Scotland',
        city: 'Glasgow',
        stadium: {
            id: 's652',
            name: 'Celtic Park',
            city: 'Glasgow',
            country: 'Scotland',
            coordinates: { latitude: 55.8494, longitude: -4.2055 },
            clubs: ['652']
        },
        coordinates: { latitude: 55.8494, longitude: -4.2055 },
        founded: 1887,
        colors: ['#009a44', '#ffffff']
    },
    {
        id: '653',
        name: 'Rangers',
        normalizedName: 'RANGERS',
        shortName: 'Rangers',
        country: 'Scotland',
        city: 'Glasgow',
        stadium: {
            id: 's653',
            name: 'Ibrox Stadium',
            city: 'Glasgow',
            country: 'Scotland',
            coordinates: { latitude: 55.8533, longitude: -4.3092 },
            clubs: ['653']
        },
        coordinates: { latitude: 55.8533, longitude: -4.3092 },
        founded: 1872,
        colors: ['#0d4fa5', '#ed1c24', '#ffffff']
    },
    {
        id: '654',
        name: 'Aberdeen',
        normalizedName: 'ABERDEEN',
        shortName: 'Aberdeen',
        country: 'Scotland',
        city: 'Aberdeen',
        stadium: {
            id: 's654',
            name: 'Pittodrie Stadium',
            city: 'Aberdeen',
            country: 'Scotland',
            coordinates: { latitude: 57.1594, longitude: -2.0886 },
            clubs: ['654']
        },
        coordinates: { latitude: 57.1594, longitude: -2.0886 },
        founded: 1903,
        colors: ['#ed1c24', '#ffffff']
    },
    // Saudi Pro League - Rank 25
    {
        id: '655',
        name: 'Al Hilal',
        normalizedName: 'AL HILAL',
        shortName: 'Al Hilal',
        country: 'Saudi Arabia',
        city: 'Riyadh',
        stadium: {
            id: 's655',
            name: 'King Fahd International Stadium',
            city: 'Riyadh',
            country: 'Saudi Arabia',
            coordinates: { latitude: 24.6881, longitude: 46.6833 },
            clubs: ['655']
        },
        coordinates: { latitude: 24.6881, longitude: 46.6833 },
        founded: 1957,
        colors: ['#0066cc', '#ffffff']
    },
    {
        id: '656',
        name: 'Al Nassr',
        normalizedName: 'AL NASSR',
        shortName: 'Al Nassr',
        country: 'Saudi Arabia',
        city: 'Riyadh',
        stadium: {
            id: 's656',
            name: 'Mrsool Park',
            city: 'Riyadh',
            country: 'Saudi Arabia',
            coordinates: { latitude: 24.6947, longitude: 46.7089 },
            clubs: ['656']
        },
        coordinates: { latitude: 24.6947, longitude: 46.7089 },
        founded: 1955,
        colors: ['#ffed00', '#0066cc']
    },
    {
        id: '657',
        name: 'Al Ittihad',
        normalizedName: 'AL ITTIHAD',
        shortName: 'Al Ittihad',
        country: 'Saudi Arabia',
        city: 'Jeddah',
        stadium: {
            id: 's657',
            name: 'King Abdullah Sports City',
            city: 'Jeddah',
            country: 'Saudi Arabia',
            coordinates: { latitude: 21.6708, longitude: 39.1147 },
            clubs: ['657']
        },
        coordinates: { latitude: 21.6708, longitude: 39.1147 },
        founded: 1927,
        colors: ['#000000', '#ffed00']
    },
    // Additional European leagues
    // Danish Superligaen - Rank 17
    {
        id: '658',
        name: 'FC Copenhagen',
        normalizedName: 'FC COPENHAGEN',
        shortName: 'Copenhagen',
        country: 'Denmark',
        city: 'Copenhagen',
        stadium: {
            id: 's658',
            name: 'Parken Stadium',
            city: 'Copenhagen',
            country: 'Denmark',
            coordinates: { latitude: 55.7025, longitude: 12.5722 },
            clubs: ['658']
        },
        coordinates: { latitude: 55.7025, longitude: 12.5722 },
        founded: 1992,
        colors: ['#001f5c', '#ffffff']
    },
    {
        id: '659',
        name: 'Brøndby',
        normalizedName: 'BRONDBY',
        shortName: 'Brøndby',
        country: 'Denmark',
        city: 'Brøndby',
        stadium: {
            id: 's659',
            name: 'Brøndby Stadium',
            city: 'Brøndby',
            country: 'Denmark',
            coordinates: { latitude: 55.6475, longitude: 12.4253 },
            clubs: ['659']
        },
        coordinates: { latitude: 55.6475, longitude: 12.4253 },
        founded: 1964,
        colors: ['#003d7a', '#ffed00']
    },
    // Swedish Allsvenskan - Rank 18
    {
        id: '660',
        name: 'Malmö FF',
        normalizedName: 'MALMO FF',
        shortName: 'Malmö',
        country: 'Sweden',
        city: 'Malmö',
        stadium: {
            id: 's660',
            name: 'Eleda Stadion',
            city: 'Malmö',
            country: 'Sweden',
            coordinates: { latitude: 55.5636, longitude: 12.9958 },
            clubs: ['660']
        },
        coordinates: { latitude: 55.5636, longitude: 12.9958 },
        founded: 1910,
        colors: ['#6bb4e7', '#ffffff']
    },
    {
        id: '661',
        name: 'AIK',
        normalizedName: 'AIK',
        shortName: 'AIK',
        country: 'Sweden',
        city: 'Stockholm',
        stadium: {
            id: 's661',
            name: 'Friends Arena',
            city: 'Stockholm',
            country: 'Sweden',
            coordinates: { latitude: 59.3717, longitude: 17.9297 },
            clubs: ['661']
        },
        coordinates: { latitude: 59.3717, longitude: 17.9297 },
        founded: 1891,
        colors: ['#000000', '#ffed00']
    },
    // Austrian Bundesliga - Rank 20
    {
        id: '662',
        name: 'Red Bull Salzburg',
        normalizedName: 'RED BULL SALZBURG',
        shortName: 'Salzburg',
        country: 'Austria',
        city: 'Salzburg',
        stadium: {
            id: 's662',
            name: 'Red Bull Arena',
            city: 'Salzburg',
            country: 'Austria',
            coordinates: { latitude: 47.8167, longitude: 13.0447 },
            clubs: ['662']
        },
        coordinates: { latitude: 47.8167, longitude: 13.0447 },
        founded: 1933,
        colors: ['#ed1b2e', '#ffffff']
    },
    {
        id: '663',
        name: 'Rapid Wien',
        normalizedName: 'RAPID WIEN',
        shortName: 'Rapid',
        country: 'Austria',
        city: 'Vienna',
        stadium: {
            id: 's663',
            name: 'Allianz Stadion',
            city: 'Vienna',
            country: 'Austria',
            coordinates: { latitude: 48.1603, longitude: 16.2697 },
            clubs: ['663']
        },
        coordinates: { latitude: 48.1603, longitude: 16.2697 },
        founded: 1899,
        colors: ['#009a44', '#ffffff']
    },
    // Swiss Super League - Rank 21
    {
        id: '664',
        name: 'Young Boys',
        normalizedName: 'YOUNG BOYS',
        shortName: 'Young Boys',
        country: 'Switzerland',
        city: 'Bern',
        stadium: {
            id: 's664',
            name: 'Wankdorf Stadium',
            city: 'Bern',
            country: 'Switzerland',
            coordinates: { latitude: 46.9631, longitude: 7.4650 },
            clubs: ['664']
        },
        coordinates: { latitude: 46.9631, longitude: 7.4650 },
        founded: 1898,
        colors: ['#ffed00', '#000000']
    },
    {
        id: '665',
        name: 'Basel',
        normalizedName: 'BASEL',
        shortName: 'Basel',
        country: 'Switzerland',
        city: 'Basel',
        stadium: {
            id: 's665',
            name: 'St. Jakob-Park',
            city: 'Basel',
            country: 'Switzerland',
            coordinates: { latitude: 47.5417, longitude: 7.6208 },
            clubs: ['665']
        },
        coordinates: { latitude: 47.5417, longitude: 7.6208 },
        founded: 1893,
        colors: ['#ed1c24', '#0066cc']
    },
    // Norwegian Eliteserien - Rank 22
    {
        id: '666',
        name: 'Rosenborg',
        normalizedName: 'ROSENBORG',
        shortName: 'Rosenborg',
        country: 'Norway',
        city: 'Trondheim',
        stadium: {
            id: 's666',
            name: 'Lerkendal Stadion',
            city: 'Trondheim',
            country: 'Norway',
            coordinates: { latitude: 63.4128, longitude: 10.4053 },
            clubs: ['666']
        },
        coordinates: { latitude: 63.4128, longitude: 10.4053 },
        founded: 1917,
        colors: ['#ffffff', '#000000']
    },
    {
        id: '667',
        name: 'Molde',
        normalizedName: 'MOLDE',
        shortName: 'Molde',
        country: 'Norway',
        city: 'Molde',
        stadium: {
            id: 's667',
            name: 'Aker Stadion',
            city: 'Molde',
            country: 'Norway',
            coordinates: { latitude: 62.7411, longitude: 7.2164 },
            clubs: ['667']
        },
        coordinates: { latitude: 62.7411, longitude: 7.2164 },
        founded: 1911,
        colors: ['#0066cc', '#ffffff']
    },
    // Polish Ekstraklasa - Rank 16
    {
        id: '668',
        name: 'Legia Warsaw',
        normalizedName: 'LEGIA WARSAW',
        shortName: 'Legia',
        country: 'Poland',
        city: 'Warsaw',
        stadium: {
            id: 's668',
            name: 'Stadion Wojska Polskiego',
            city: 'Warsaw',
            country: 'Poland',
            coordinates: { latitude: 52.2308, longitude: 20.9944 },
            clubs: ['668']
        },
        coordinates: { latitude: 52.2308, longitude: 20.9944 },
        founded: 1916,
        colors: ['#009a44', '#ffffff']
    },
    {
        id: '669',
        name: 'Lech Poznań',
        normalizedName: 'LECH POZNAN',
        shortName: 'Lech',
        country: 'Poland',
        city: 'Poznań',
        stadium: {
            id: 's669',
            name: 'ENEA Stadium',
            city: 'Poznań',
            country: 'Poland',
            coordinates: { latitude: 52.3975, longitude: 16.8847 },
            clubs: ['669']
        },
        coordinates: { latitude: 52.3975, longitude: 16.8847 },
        founded: 1922,
        colors: ['#0066cc', '#ffffff']
    },
    // Croatian Prva HNL - Rank 15
    {
        id: '670',
        name: 'Dinamo Zagreb',
        normalizedName: 'DINAMO ZAGREB',
        shortName: 'Dinamo',
        country: 'Croatia',
        city: 'Zagreb',
        stadium: {
            id: 's670',
            name: 'Stadion Maksimir',
            city: 'Zagreb',
            country: 'Croatia',
            coordinates: { latitude: 45.8197, longitude: 16.0169 },
            clubs: ['670']
        },
        coordinates: { latitude: 45.8197, longitude: 16.0169 },
        founded: 1945,
        colors: ['#0066cc', '#ffffff']
    },
    {
        id: '671',
        name: 'Hajduk Split',
        normalizedName: 'HAJDUK SPLIT',
        shortName: 'Hajduk',
        country: 'Croatia',
        city: 'Split',
        stadium: {
            id: 's671',
            name: 'Stadion Poljud',
            city: 'Split',
            country: 'Croatia',
            coordinates: { latitude: 43.5203, longitude: 16.4383 },
            clubs: ['671']
        },
        coordinates: { latitude: 43.5203, longitude: 16.4383 },
        founded: 1911,
        colors: ['#ffffff', '#0066cc']
    },
    // Czech First League - Rank 23
    {
        id: '672',
        name: 'Slavia Prague',
        normalizedName: 'SLAVIA PRAGUE',
        shortName: 'Slavia',
        country: 'Czech Republic',
        city: 'Prague',
        stadium: {
            id: 's672',
            name: 'Fortuna Arena',
            city: 'Prague',
            country: 'Czech Republic',
            coordinates: { latitude: 50.0697, longitude: 14.4711 },
            clubs: ['672']
        },
        coordinates: { latitude: 50.0697, longitude: 14.4711 },
        founded: 1892,
        colors: ['#ed1c24', '#ffffff']
    },
    {
        id: '673',
        name: 'Sparta Prague',
        normalizedName: 'SPARTA PRAGUE',
        shortName: 'Sparta',
        country: 'Czech Republic',
        city: 'Prague',
        stadium: {
            id: 's673',
            name: 'Generali Česká pojišťovna Arena',
            city: 'Prague',
            country: 'Czech Republic',
            coordinates: { latitude: 50.0997, longitude: 14.4164 },
            clubs: ['673']
        },
        coordinates: { latitude: 50.0997, longitude: 14.4164 },
        founded: 1893,
        colors: ['#9c1919', '#ffed00']
    },
    // Ukrainian Premier League - Rank 39
    {
        id: '674',
        name: 'Dynamo Kyiv',
        normalizedName: 'DYNAMO KYIV',
        shortName: 'Dynamo',
        country: 'Ukraine',
        city: 'Kyiv',
        stadium: {
            id: 's674',
            name: 'NSC Olimpiyskiy',
            city: 'Kyiv',
            country: 'Ukraine',
            coordinates: { latitude: 50.4339, longitude: 30.5217 },
            clubs: ['674']
        },
        coordinates: { latitude: 50.4339, longitude: 30.5217 },
        founded: 1927,
        colors: ['#ffffff', '#0066cc']
    },
    {
        id: '675',
        name: 'Shakhtar Donetsk',
        normalizedName: 'SHAKHTAR DONETSK',
        shortName: 'Shakhtar',
        country: 'Ukraine',
        city: 'Donetsk',
        stadium: {
            id: 's675',
            name: 'Donbass Arena',
            city: 'Donetsk',
            country: 'Ukraine',
            coordinates: { latitude: 48.0161, longitude: 37.8047 },
            clubs: ['675']
        },
        coordinates: { latitude: 48.0161, longitude: 37.8047 },
        founded: 1936,
        colors: ['#ff6600', '#000000']
    },
    // Russian Premier League - Rank 19
    {
        id: '676',
        name: 'Zenit St Petersburg',
        normalizedName: 'ZENIT ST PETERSBURG',
        shortName: 'Zenit',
        country: 'Russia',
        city: 'St Petersburg',
        stadium: {
            id: 's676',
            name: 'Gazprom Arena',
            city: 'St Petersburg',
            country: 'Russia',
            coordinates: { latitude: 59.9729, longitude: 30.2217 },
            clubs: ['676']
        },
        coordinates: { latitude: 59.9729, longitude: 30.2217 },
        founded: 1925,
        colors: ['#0066cc', '#ffffff']
    },
    {
        id: '677',
        name: 'Spartak Moscow',
        normalizedName: 'SPARTAK MOSCOW',
        shortName: 'Spartak',
        country: 'Russia',
        city: 'Moscow',
        stadium: {
            id: 's677',
            name: 'Otkritie Arena',
            city: 'Moscow',
            country: 'Russia',
            coordinates: { latitude: 55.8181, longitude: 37.4406 },
            clubs: ['677']
        },
        coordinates: { latitude: 55.8181, longitude: 37.4406 },
        founded: 1922,
        colors: ['#ed1c24', '#ffffff']
    },
    // Liga Pro (Ecuador) - Rank 24
    {
        id: '678',
        name: 'Barcelona SC',
        normalizedName: 'BARCELONA SC',
        shortName: 'Barcelona SC',
        country: 'Ecuador',
        city: 'Guayaquil',
        stadium: {
            id: 's678',
            name: 'Estadio Monumental',
            city: 'Guayaquil',
            country: 'Ecuador',
            coordinates: { latitude: -2.1453, longitude: -79.8858 },
            clubs: ['678']
        },
        coordinates: { latitude: -2.1453, longitude: -79.8858 },
        founded: 1925,
        colors: ['#ffed00', '#000000']
    },
    {
        id: '679',
        name: 'LDU Quito',
        normalizedName: 'LDU QUITO',
        shortName: 'LDU',
        country: 'Ecuador',
        city: 'Quito',
        stadium: {
            id: 's679',
            name: 'Estadio Rodrigo Paz Delgado',
            city: 'Quito',
            country: 'Ecuador',
            coordinates: { latitude: -0.1352, longitude: -78.4633 },
            clubs: ['679']
        },
        coordinates: { latitude: -0.1352, longitude: -78.4633 },
        founded: 1918,
        colors: ['#ffffff', '#000000']
    },
    // Cypriot First Division - Rank 27
    {
        id: '680',
        name: 'APOEL',
        normalizedName: 'APOEL',
        shortName: 'APOEL',
        country: 'Cyprus',
        city: 'Nicosia',
        stadium: {
            id: 's680',
            name: 'GSP Stadium',
            city: 'Nicosia',
            country: 'Cyprus',
            coordinates: { latitude: 35.1575, longitude: 33.3444 },
            clubs: ['680']
        },
        coordinates: { latitude: 35.1575, longitude: 33.3444 },
        founded: 1926,
        colors: ['#0066cc', '#ffed00']
    },
    {
        id: '681',
        name: 'Omonia',
        normalizedName: 'OMONIA',
        shortName: 'Omonia',
        country: 'Cyprus',
        city: 'Nicosia',
        stadium: {
            id: 's681',
            name: 'GSP Stadium',
            city: 'Nicosia',
            country: 'Cyprus',
            coordinates: { latitude: 35.1575, longitude: 33.3444 },
            clubs: ['681']
        },
        coordinates: { latitude: 35.1575, longitude: 33.3444 },
        founded: 1948,
        colors: ['#009a44', '#ffffff']
    },
    // Colombian Primera A - Rank 28
    {
        id: '682',
        name: 'Millonarios',
        normalizedName: 'MILLONARIOS',
        shortName: 'Millonarios',
        country: 'Colombia',
        city: 'Bogotá',
        stadium: {
            id: 's682',
            name: 'Estadio El Campín',
            city: 'Bogotá',
            country: 'Colombia',
            coordinates: { latitude: 4.6481, longitude: -74.0772 },
            clubs: ['682']
        },
        coordinates: { latitude: 4.6481, longitude: -74.0772 },
        founded: 1946,
        colors: ['#0066cc', '#ffffff']
    },
    {
        id: '683',
        name: 'Atlético Nacional',
        normalizedName: 'ATLETICO NACIONAL',
        shortName: 'Nacional',
        country: 'Colombia',
        city: 'Medellín',
        stadium: {
            id: 's683',
            name: 'Estadio Atanasio Girardot',
            city: 'Medellín',
            country: 'Colombia',
            coordinates: { latitude: 6.2567, longitude: -75.5903 },
            clubs: ['683']
        },
        coordinates: { latitude: 6.2567, longitude: -75.5903 },
        founded: 1947,
        colors: ['#009a44', '#ffffff']
    },
    // Serie B (Italy) - Rank 29
    {
        id: '684',
        name: 'Cremonese',
        normalizedName: 'CREMONESE',
        shortName: 'Cremonese',
        country: 'Italy',
        city: 'Cremona',
        stadium: {
            id: 's684',
            name: 'Stadio Giovanni Zini',
            city: 'Cremona',
            country: 'Italy',
            coordinates: { latitude: 45.1478, longitude: 10.0511 },
            clubs: ['684']
        },
        coordinates: { latitude: 45.1478, longitude: 10.0511 },
        founded: 1903,
        colors: ['#ed1c24', '#808080']
    },
    {
        id: '685',
        name: 'Palermo',
        normalizedName: 'PALERMO',
        shortName: 'Palermo',
        country: 'Italy',
        city: 'Palermo',
        stadium: {
            id: 's685',
            name: 'Stadio Renzo Barbera',
            city: 'Palermo',
            country: 'Italy',
            coordinates: { latitude: 38.1511, longitude: 13.3386 },
            clubs: ['685']
        },
        coordinates: { latitude: 38.1511, longitude: 13.3386 },
        founded: 1900,
        colors: ['#ffb6c1', '#000000']
    },
    // Uruguayan Primera División - Rank 30
    {
        id: '686',
        name: 'Peñarol',
        normalizedName: 'PENAROL',
        shortName: 'Peñarol',
        country: 'Uruguay',
        city: 'Montevideo',
        stadium: {
            id: 's686',
            name: 'Estadio Campeón del Siglo',
            city: 'Montevideo',
            country: 'Uruguay',
            coordinates: { latitude: -34.8919, longitude: -56.1564 },
            clubs: ['686']
        },
        coordinates: { latitude: -34.8919, longitude: -56.1564 },
        founded: 1891,
        colors: ['#ffed00', '#000000']
    },
    {
        id: '687',
        name: 'Nacional',
        normalizedName: 'NACIONAL',
        shortName: 'Nacional',
        country: 'Uruguay',
        city: 'Montevideo',
        stadium: {
            id: 's687',
            name: 'Estadio Gran Parque Central',
            city: 'Montevideo',
            country: 'Uruguay',
            coordinates: { latitude: -34.8944, longitude: -56.1689 },
            clubs: ['687']
        },
        coordinates: { latitude: -34.8944, longitude: -56.1689 },
        founded: 1899,
        colors: ['#0066cc', '#ed1c24', '#ffffff']
    },
    // Israeli Ligat HaAl - Rank 31
    {
        id: '688',
        name: 'Maccabi Tel Aviv',
        normalizedName: 'MACCABI TEL AVIV',
        shortName: 'Maccabi TA',
        country: 'Israel',
        city: 'Tel Aviv',
        stadium: {
            id: 's688',
            name: 'Bloomfield Stadium',
            city: 'Tel Aviv',
            country: 'Israel',
            coordinates: { latitude: 32.0656, longitude: 34.7731 },
            clubs: ['688']
        },
        coordinates: { latitude: 32.0656, longitude: 34.7731 },
        founded: 1906,
        colors: ['#ffed00', '#0066cc']
    },
    {
        id: '689',
        name: 'Maccabi Haifa',
        normalizedName: 'MACCABI HAIFA',
        shortName: 'Maccabi Haifa',
        country: 'Israel',
        city: 'Haifa',
        stadium: {
            id: 's689',
            name: 'Sammy Ofer Stadium',
            city: 'Haifa',
            country: 'Israel',
            coordinates: { latitude: 32.7964, longitude: 34.9889 },
            clubs: ['689']
        },
        coordinates: { latitude: 32.7964, longitude: 34.9889 },
        founded: 1913,
        colors: ['#009a44', '#ffffff']
    },
    // Chilean Primera División - Rank 32
    {
        id: '690',
        name: 'Colo-Colo',
        normalizedName: 'COLO-COLO',
        shortName: 'Colo-Colo',
        country: 'Chile',
        city: 'Santiago',
        stadium: {
            id: 's690',
            name: 'Estadio Monumental',
            city: 'Santiago',
            country: 'Chile',
            coordinates: { latitude: -33.4639, longitude: -70.6064 },
            clubs: ['690']
        },
        coordinates: { latitude: -33.4639, longitude: -70.6064 },
        founded: 1925,
        colors: ['#ffffff', '#000000']
    },
    {
        id: '691',
        name: 'Universidad de Chile',
        normalizedName: 'UNIVERSIDAD DE CHILE',
        shortName: 'U de Chile',
        country: 'Chile',
        city: 'Santiago',
        stadium: {
            id: 's691',
            name: 'Estadio Nacional',
            city: 'Santiago',
            country: 'Chile',
            coordinates: { latitude: -33.4644, longitude: -70.6111 },
            clubs: ['691']
        },
        coordinates: { latitude: -33.4644, longitude: -70.6111 },
        founded: 1927,
        colors: ['#0066cc', '#ed1c24']
    },
    // Costa Rican Primera División - Rank 33
    {
        id: '692',
        name: 'Saprissa',
        normalizedName: 'SAPRISSA',
        shortName: 'Saprissa',
        country: 'Costa Rica',
        city: 'San José',
        stadium: {
            id: 's692',
            name: 'Estadio Ricardo Saprissa',
            city: 'San José',
            country: 'Costa Rica',
            coordinates: { latitude: 9.9500, longitude: -84.0903 },
            clubs: ['692']
        },
        coordinates: { latitude: 9.9500, longitude: -84.0903 },
        founded: 1935,
        colors: ['#6f263d', '#ffffff']
    },
    {
        id: '693',
        name: 'Alajuelense',
        normalizedName: 'ALAJUELENSE',
        shortName: 'Alajuelense',
        country: 'Costa Rica',
        city: 'Alajuela',
        stadium: {
            id: 's693',
            name: 'Estadio Alejandro Morera Soto',
            city: 'Alajuela',
            country: 'Costa Rica',
            coordinates: { latitude: 10.0167, longitude: -84.2167 },
            clubs: ['693']
        },
        coordinates: { latitude: 10.0167, longitude: -84.2167 },
        founded: 1919,
        colors: ['#ed1c24', '#000000']
    },
    // Slovak Super Liga - Rank 34
    {
        id: '694',
        name: 'Slovan Bratislava',
        normalizedName: 'SLOVAN BRATISLAVA',
        shortName: 'Slovan',
        country: 'Slovakia',
        city: 'Bratislava',
        stadium: {
            id: 's694',
            name: 'Tehelné pole',
            city: 'Bratislava',
            country: 'Slovakia',
            coordinates: { latitude: 48.1569, longitude: 17.1244 },
            clubs: ['694']
        },
        coordinates: { latitude: 48.1569, longitude: 17.1244 },
        founded: 1919,
        colors: ['#6bb4e7', '#ffffff']
    },
    {
        id: '695',
        name: 'Spartak Trnava',
        normalizedName: 'SPARTAK TRNAVA',
        shortName: 'Spartak',
        country: 'Slovakia',
        city: 'Trnava',
        stadium: {
            id: 's695',
            name: 'Štadión Antona Malatinského',
            city: 'Trnava',
            country: 'Slovakia',
            coordinates: { latitude: 48.3697, longitude: 17.5886 },
            clubs: ['695']
        },
        coordinates: { latitude: 48.3697, longitude: 17.5886 },
        founded: 1923,
        colors: ['#0066cc', '#ffffff']
    },
    // Slovenian PrvaLiga - Rank 35
    {
        id: '696',
        name: 'Maribor',
        normalizedName: 'MARIBOR',
        shortName: 'Maribor',
        country: 'Slovenia',
        city: 'Maribor',
        stadium: {
            id: 's696',
            name: 'Stadion Ljudski vrt',
            city: 'Maribor',
            country: 'Slovenia',
            coordinates: { latitude: 46.5544, longitude: 15.6472 },
            clubs: ['696']
        },
        coordinates: { latitude: 46.5544, longitude: 15.6472 },
        founded: 1960,
        colors: ['#6f263d', '#ffffff']
    },
    {
        id: '697',
        name: 'Olimpija Ljubljana',
        normalizedName: 'OLIMPIJA LJUBLJANA',
        shortName: 'Olimpija',
        country: 'Slovenia',
        city: 'Ljubljana',
        stadium: {
            id: 's697',
            name: 'Stožice Stadium',
            city: 'Ljubljana',
            country: 'Slovenia',
            coordinates: { latitude: 46.0786, longitude: 14.5106 },
            clubs: ['697']
        },
        coordinates: { latitude: 46.0786, longitude: 14.5106 },
        founded: 2005,
        colors: ['#009a44', '#ffffff']
    },
    // Iranian Persian Gulf Pro League - Rank 36
    {
        id: '698',
        name: 'Persepolis',
        normalizedName: 'PERSEPOLIS',
        shortName: 'Persepolis',
        country: 'Iran',
        city: 'Tehran',
        stadium: {
            id: 's698',
            name: 'Azadi Stadium',
            city: 'Tehran',
            country: 'Iran',
            coordinates: { latitude: 35.7219, longitude: 51.2797 },
            clubs: ['698', '699']
        },
        coordinates: { latitude: 35.7219, longitude: 51.2797 },
        founded: 1963,
        colors: ['#ed1c24', '#ffffff']
    },
    {
        id: '699',
        name: 'Esteghlal',
        normalizedName: 'ESTEGHLAL',
        shortName: 'Esteghlal',
        country: 'Iran',
        city: 'Tehran',
        stadium: {
            id: 's698',
            name: 'Azadi Stadium',
            city: 'Tehran',
            country: 'Iran',
            coordinates: { latitude: 35.7219, longitude: 51.2797 },
            clubs: ['698', '699']
        },
        coordinates: { latitude: 35.7219, longitude: 51.2797 },
        founded: 1945,
        colors: ['#0066cc', '#ffffff']
    },
    // Bolivian Primera División - Rank 37
    {
        id: '700',
        name: 'Bolívar',
        normalizedName: 'BOLIVAR',
        shortName: 'Bolívar',
        country: 'Bolivia',
        city: 'La Paz',
        stadium: {
            id: 's700',
            name: 'Estadio Hernando Siles',
            city: 'La Paz',
            country: 'Bolivia',
            coordinates: { latitude: -16.5306, longitude: -68.0869 },
            clubs: ['700']
        },
        coordinates: { latitude: -16.5306, longitude: -68.0869 },
        founded: 1925,
        colors: ['#6bb4e7', '#ffffff']
    },
    {
        id: '701',
        name: 'The Strongest',
        normalizedName: 'THE STRONGEST',
        shortName: 'The Strongest',
        country: 'Bolivia',
        city: 'La Paz',
        stadium: {
            id: 's701',
            name: 'Estadio Rafael Mendoza',
            city: 'La Paz',
            country: 'Bolivia',
            coordinates: { latitude: -16.5333, longitude: -68.0611 },
            clubs: ['701']
        },
        coordinates: { latitude: -16.5333, longitude: -68.0611 },
        founded: 1908,
        colors: ['#ffed00', '#000000']
    },
    // UAE Pro League - Rank 38
    {
        id: '702',
        name: 'Al Ain',
        normalizedName: 'AL AIN',
        shortName: 'Al Ain',
        country: 'United Arab Emirates',
        city: 'Al Ain',
        stadium: {
            id: 's702',
            name: 'Hazza bin Zayed Stadium',
            city: 'Al Ain',
            country: 'United Arab Emirates',
            coordinates: { latitude: 24.1917, longitude: 55.7339 },
            clubs: ['702']
        },
        coordinates: { latitude: 24.1917, longitude: 55.7339 },
        founded: 1968,
        colors: ['#6f263d', '#ffffff']
    },
    {
        id: '703',
        name: 'Al Wahda',
        normalizedName: 'AL WAHDA',
        shortName: 'Al Wahda',
        country: 'United Arab Emirates',
        city: 'Abu Dhabi',
        stadium: {
            id: 's703',
            name: 'Al Nahyan Stadium',
            city: 'Abu Dhabi',
            country: 'United Arab Emirates',
            coordinates: { latitude: 24.4461, longitude: 54.3697 },
            clubs: ['703']
        },
        coordinates: { latitude: 24.4461, longitude: 54.3697 },
        founded: 1974,
        colors: ['#ed1c24', '#ffffff']
    },
    // South African PSL - Rank 40
    {
        id: '704',
        name: 'Kaizer Chiefs',
        normalizedName: 'KAIZER CHIEFS',
        shortName: 'Chiefs',
        country: 'South Africa',
        city: 'Johannesburg',
        stadium: {
            id: 's704',
            name: 'FNB Stadium',
            city: 'Johannesburg',
            country: 'South Africa',
            coordinates: { latitude: -26.2347, longitude: 27.9822 },
            clubs: ['704', '705']
        },
        coordinates: { latitude: -26.2347, longitude: 27.9822 },
        founded: 1970,
        colors: ['#ffed00', '#000000']
    },
    {
        id: '705',
        name: 'Orlando Pirates',
        normalizedName: 'ORLANDO PIRATES',
        shortName: 'Pirates',
        country: 'South Africa',
        city: 'Johannesburg',
        stadium: {
            id: 's704',
            name: 'FNB Stadium',
            city: 'Johannesburg',
            country: 'South Africa',
            coordinates: { latitude: -26.2347, longitude: 27.9822 },
            clubs: ['704', '705']
        },
        coordinates: { latitude: -26.2347, longitude: 27.9822 },
        founded: 1937,
        colors: ['#000000', '#ffffff']
    },
    // Australian A-League - Rank 41
    {
        id: '706',
        name: 'Sydney FC',
        normalizedName: 'SYDNEY FC',
        shortName: 'Sydney',
        country: 'Australia',
        city: 'Sydney',
        stadium: {
            id: 's706',
            name: 'Allianz Stadium',
            city: 'Sydney',
            country: 'Australia',
            coordinates: { latitude: -33.8886, longitude: 151.2247 },
            clubs: ['706']
        },
        coordinates: { latitude: -33.8886, longitude: 151.2247 },
        founded: 2004,
        colors: ['#6bb4e7', '#ffffff']
    },
    {
        id: '707',
        name: 'Melbourne Victory',
        normalizedName: 'MELBOURNE VICTORY',
        shortName: 'Victory',
        country: 'Australia',
        city: 'Melbourne',
        stadium: {
            id: 's707',
            name: 'AAMI Park',
            city: 'Melbourne',
            country: 'Australia',
            coordinates: { latitude: -37.8250, longitude: 144.9839 },
            clubs: ['707']
        },
        coordinates: { latitude: -37.8250, longitude: 144.9839 },
        founded: 2004,
        colors: ['#001f5c', '#ffffff']
    },
    // Bulgarian First League - Rank 42
    {
        id: '708',
        name: 'Ludogorets',
        normalizedName: 'LUDOGORETS',
        shortName: 'Ludogorets',
        country: 'Bulgaria',
        city: 'Razgrad',
        stadium: {
            id: 's708',
            name: 'Ludogorets Arena',
            city: 'Razgrad',
            country: 'Bulgaria',
            coordinates: { latitude: 43.5328, longitude: 26.5147 },
            clubs: ['708']
        },
        coordinates: { latitude: 43.5328, longitude: 26.5147 },
        founded: 1945,
        colors: ['#009a44', '#ffffff']
    },
    {
        id: '709',
        name: 'CSKA Sofia',
        normalizedName: 'CSKA SOFIA',
        shortName: 'CSKA',
        country: 'Bulgaria',
        city: 'Sofia',
        stadium: {
            id: 's709',
            name: 'Bulgarian Army Stadium',
            city: 'Sofia',
            country: 'Bulgaria',
            coordinates: { latitude: 42.6550, longitude: 23.3806 },
            clubs: ['709']
        },
        coordinates: { latitude: 42.6550, longitude: 23.3806 },
        founded: 1948,
        colors: ['#ed1c24', '#ffffff']
    },
    // Peruvian Primera División - Rank 43
    {
        id: '710',
        name: 'Universitario',
        normalizedName: 'UNIVERSITARIO',
        shortName: 'Universitario',
        country: 'Peru',
        city: 'Lima',
        stadium: {
            id: 's710',
            name: 'Estadio Monumental',
            city: 'Lima',
            country: 'Peru',
            coordinates: { latitude: -12.0686, longitude: -77.0256 },
            clubs: ['710']
        },
        coordinates: { latitude: -12.0686, longitude: -77.0256 },
        founded: 1924,
        colors: ['#c8aa7a', '#ed1c24']
    },
    {
        id: '711',
        name: 'Alianza Lima',
        normalizedName: 'ALIANZA LIMA',
        shortName: 'Alianza',
        country: 'Peru',
        city: 'Lima',
        stadium: {
            id: 's711',
            name: 'Estadio Alejandro Villanueva',
            city: 'Lima',
            country: 'Peru',
            coordinates: { latitude: -12.0681, longitude: -77.0333 },
            clubs: ['711']
        },
        coordinates: { latitude: -12.0681, longitude: -77.0333 },
        founded: 1901,
        colors: ['#0066cc', '#ffffff']
    },
    // Portuguese Liga 2 - Rank 44
    {
        id: '712',
        name: 'Vitória Guimarães',
        normalizedName: 'VITORIA GUIMARAES',
        shortName: 'Vitória',
        country: 'Portugal',
        city: 'Guimarães',
        stadium: {
            id: 's712',
            name: 'Estádio D. Afonso Henriques',
            city: 'Guimarães',
            country: 'Portugal',
            coordinates: { latitude: 41.4456, longitude: -8.3011 },
            clubs: ['712']
        },
        coordinates: { latitude: 41.4456, longitude: -8.3011 },
        founded: 1922,
        colors: ['#ffffff', '#000000']
    },
    {
        id: '713',
        name: 'Rio Ave',
        normalizedName: 'RIO AVE',
        shortName: 'Rio Ave',
        country: 'Portugal',
        city: 'Vila do Conde',
        stadium: {
            id: 's713',
            name: 'Estádio dos Arcos',
            city: 'Vila do Conde',
            country: 'Portugal',
            coordinates: { latitude: 41.3508, longitude: -8.7414 },
            clubs: ['713']
        },
        coordinates: { latitude: 41.3508, longitude: -8.7414 },
        founded: 1939,
        colors: ['#009a44', '#ffffff']
    },
    // Serbian SuperLiga - Rank 45
    {
        id: '714',
        name: 'Red Star Belgrade',
        normalizedName: 'RED STAR BELGRADE',
        shortName: 'Red Star',
        country: 'Serbia',
        city: 'Belgrade',
        stadium: {
            id: 's714',
            name: 'Rajko Mitić Stadium',
            city: 'Belgrade',
            country: 'Serbia',
            coordinates: { latitude: 44.7833, longitude: 20.4672 },
            clubs: ['714']
        },
        coordinates: { latitude: 44.7833, longitude: 20.4672 },
        founded: 1945,
        colors: ['#ed1c24', '#ffffff']
    },
    {
        id: '715',
        name: 'Partizan',
        normalizedName: 'PARTIZAN',
        shortName: 'Partizan',
        country: 'Serbia',
        city: 'Belgrade',
        stadium: {
            id: 's715',
            name: 'Stadion Partizana',
            city: 'Belgrade',
            country: 'Serbia',
            coordinates: { latitude: 44.7886, longitude: 20.4608 },
            clubs: ['715']
        },
        coordinates: { latitude: 44.7886, longitude: 20.4608 },
        founded: 1945,
        colors: ['#000000', '#ffffff']
    },
    // Bosnian Premier League - Rank 46
    {
        id: '716',
        name: 'FK Sarajevo',
        normalizedName: 'FK SARAJEVO',
        shortName: 'Sarajevo',
        country: 'Bosnia and Herzegovina',
        city: 'Sarajevo',
        stadium: {
            id: 's716',
            name: 'Asim Ferhatović Hase Stadium',
            city: 'Sarajevo',
            country: 'Bosnia and Herzegovina',
            coordinates: { latitude: 43.8628, longitude: 18.3928 },
            clubs: ['716']
        },
        coordinates: { latitude: 43.8628, longitude: 18.3928 },
        founded: 1946,
        colors: ['#9c1919', '#ffffff']
    },
    {
        id: '717',
        name: 'Zrinjski Mostar',
        normalizedName: 'ZRINJSKI MOSTAR',
        shortName: 'Zrinjski',
        country: 'Bosnia and Herzegovina',
        city: 'Mostar',
        stadium: {
            id: 's717',
            name: 'Stadion pod Bijelim Brijegom',
            city: 'Mostar',
            country: 'Bosnia and Herzegovina',
            coordinates: { latitude: 43.3442, longitude: 17.8106 },
            clubs: ['717']
        },
        coordinates: { latitude: 43.3442, longitude: 17.8106 },
        founded: 1905,
        colors: ['#ed1c24', '#ffffff']
    },
    // Additional Primeira Liga teams (Portugal)
    {
        id: '718',
        name: 'Vitória Setúbal',
        normalizedName: 'VITORIA SETUBAL',
        shortName: 'Vitória',
        country: 'Portugal',
        city: 'Setúbal',
        stadium: {
            id: 's718',
            name: 'Estádio do Bonfim',
            city: 'Setúbal',
            country: 'Portugal',
            coordinates: { latitude: 38.5244, longitude: -8.8975 },
            clubs: ['718']
        },
        coordinates: { latitude: 38.5244, longitude: -8.8975 },
        founded: 1910,
        colors: ['#009a44', '#ffffff']
    },
    {
        id: '719',
        name: 'Boavista',
        normalizedName: 'BOAVISTA',
        shortName: 'Boavista',
        country: 'Portugal',
        city: 'Porto',
        stadium: {
            id: 's719',
            name: 'Estádio do Bessa',
            city: 'Porto',
            country: 'Portugal',
            coordinates: { latitude: 41.1622, longitude: -8.6433 },
            clubs: ['719']
        },
        coordinates: { latitude: 41.1622, longitude: -8.6433 },
        founded: 1903,
        colors: ['#000000', '#ffffff']
    },
    {
        id: '720',
        name: 'Moreirense',
        normalizedName: 'MOREIRENSE',
        shortName: 'Moreirense',
        country: 'Portugal',
        city: 'Moreira de Cónegos',
        stadium: {
            id: 's720',
            name: 'Parque de Jogos Comendador Joaquim de Almeida Freitas',
            city: 'Moreira de Cónegos',
            country: 'Portugal',
            coordinates: { latitude: 41.4164, longitude: -8.3383 },
            clubs: ['720']
        },
        coordinates: { latitude: 41.4164, longitude: -8.3383 },
        founded: 1938,
        colors: ['#009a44', '#ffffff']
    },
    {
        id: '721',
        name: 'Paços de Ferreira',
        normalizedName: 'PACOS DE FERREIRA',
        shortName: 'Paços',
        country: 'Portugal',
        city: 'Paços de Ferreira',
        stadium: {
            id: 's721',
            name: 'Estádio da Mata Real',
            city: 'Paços de Ferreira',
            country: 'Portugal',
            coordinates: { latitude: 41.2811, longitude: -8.3731 },
            clubs: ['721']
        },
        coordinates: { latitude: 41.2811, longitude: -8.3731 },
        founded: 1950,
        colors: ['#ffed00', '#009a44']
    },
    {
        id: '722',
        name: 'Belenenses',
        normalizedName: 'BELENENSES',
        shortName: 'Belenenses',
        country: 'Portugal',
        city: 'Lisbon',
        stadium: {
            id: 's722',
            name: 'Estádio do Restelo',
            city: 'Lisbon',
            country: 'Portugal',
            coordinates: { latitude: 38.7033, longitude: -9.2047 },
            clubs: ['722']
        },
        coordinates: { latitude: 38.7033, longitude: -9.2047 },
        founded: 1919,
        colors: ['#0066cc', '#ffffff']
    },
    {
        id: '723',
        name: 'Marítimo',
        normalizedName: 'MARITIMO',
        shortName: 'Marítimo',
        country: 'Portugal',
        city: 'Funchal',
        stadium: {
            id: 's723',
            name: 'Estádio dos Barreiros',
            city: 'Funchal',
            country: 'Portugal',
            coordinates: { latitude: 32.6497, longitude: -16.9197 },
            clubs: ['723']
        },
        coordinates: { latitude: 32.6497, longitude: -16.9197 },
        founded: 1910,
        colors: ['#009a44', '#ed1c24']
    },
    {
        id: '724',
        name: 'Santa Clara',
        normalizedName: 'SANTA CLARA',
        shortName: 'Santa Clara',
        country: 'Portugal',
        city: 'Ponta Delgada',
        stadium: {
            id: 's724',
            name: 'Estádio de São Miguel',
            city: 'Ponta Delgada',
            country: 'Portugal',
            coordinates: { latitude: 37.7517, longitude: -25.6664 },
            clubs: ['724']
        },
        coordinates: { latitude: 37.7517, longitude: -25.6664 },
        founded: 1921,
        colors: ['#ed1c24', '#009a44']
    },
    {
        id: '725',
        name: 'Arouca',
        normalizedName: 'AROUCA',
        shortName: 'Arouca',
        country: 'Portugal',
        city: 'Arouca',
        stadium: {
            id: 's725',
            name: 'Estádio Municipal de Arouca',
            city: 'Arouca',
            country: 'Portugal',
            coordinates: { latitude: 40.9333, longitude: -8.2456 },
            clubs: ['725']
        },
        coordinates: { latitude: 40.9333, longitude: -8.2456 },
        founded: 1952,
        colors: ['#ffed00', '#000000']
    },
    // Additional Eredivisie teams (Netherlands)
    {
        id: '726',
        name: 'FC Utrecht',
        normalizedName: 'FC UTRECHT',
        shortName: 'Utrecht',
        country: 'Netherlands',
        city: 'Utrecht',
        stadium: {
            id: 's726',
            name: 'Stadion Galgenwaard',
            city: 'Utrecht',
            country: 'Netherlands',
            coordinates: { latitude: 52.0783, longitude: 5.1461 },
            clubs: ['726']
        },
        coordinates: { latitude: 52.0783, longitude: 5.1461 },
        founded: 1970,
        colors: ['#ed1c24', '#ffffff']
    },
    {
        id: '727',
        name: 'FC Twente',
        normalizedName: 'FC TWENTE',
        shortName: 'Twente',
        country: 'Netherlands',
        city: 'Enschede',
        stadium: {
            id: 's727',
            name: 'De Grolsch Veste',
            city: 'Enschede',
            country: 'Netherlands',
            coordinates: { latitude: 52.2394, longitude: 6.8314 },
            clubs: ['727']
        },
        coordinates: { latitude: 52.2394, longitude: 6.8314 },
        founded: 1965,
        colors: ['#ed1c24', '#ffffff']
    },
    {
        id: '728',
        name: 'Vitesse',
        normalizedName: 'VITESSE',
        shortName: 'Vitesse',
        country: 'Netherlands',
        city: 'Arnhem',
        stadium: {
            id: 's728',
            name: 'GelreDome',
            city: 'Arnhem',
            country: 'Netherlands',
            coordinates: { latitude: 51.9631, longitude: 5.8939 },
            clubs: ['728']
        },
        coordinates: { latitude: 51.9631, longitude: 5.8939 },
        founded: 1892,
        colors: ['#ffed00', '#000000']
    },
    {
        id: '729',
        name: 'SC Heerenveen',
        normalizedName: 'SC HEERENVEEN',
        shortName: 'Heerenveen',
        country: 'Netherlands',
        city: 'Heerenveen',
        stadium: {
            id: 's729',
            name: 'Abe Lenstra Stadion',
            city: 'Heerenveen',
            country: 'Netherlands',
            coordinates: { latitude: 52.9597, longitude: 5.9414 },
            clubs: ['729']
        },
        coordinates: { latitude: 52.9597, longitude: 5.9414 },
        founded: 1920,
        colors: ['#0066cc', '#ffffff']
    },
    {
        id: '730',
        name: 'FC Groningen',
        normalizedName: 'FC GRONINGEN',
        shortName: 'Groningen',
        country: 'Netherlands',
        city: 'Groningen',
        stadium: {
            id: 's730',
            name: 'Euroborg',
            city: 'Groningen',
            country: 'Netherlands',
            coordinates: { latitude: 53.2081, longitude: 6.5919 },
            clubs: ['730']
        },
        coordinates: { latitude: 53.2081, longitude: 6.5919 },
        founded: 1971,
        colors: ['#009a44', '#ffffff']
    },
    {
        id: '731',
        name: 'Sparta Rotterdam',
        normalizedName: 'SPARTA ROTTERDAM',
        shortName: 'Sparta',
        country: 'Netherlands',
        city: 'Rotterdam',
        stadium: {
            id: 's731',
            name: 'Het Kasteel',
            city: 'Rotterdam',
            country: 'Netherlands',
            coordinates: { latitude: 51.9172, longitude: 4.4369 },
            clubs: ['731']
        },
        coordinates: { latitude: 51.9172, longitude: 4.4369 },
        founded: 1888,
        colors: ['#ed1c24', '#ffffff']
    },
    {
        id: '732',
        name: 'Go Ahead Eagles',
        normalizedName: 'GO AHEAD EAGLES',
        shortName: 'Go Ahead',
        country: 'Netherlands',
        city: 'Deventer',
        stadium: {
            id: 's732',
            name: 'De Adelaarshorst',
            city: 'Deventer',
            country: 'Netherlands',
            coordinates: { latitude: 52.2519, longitude: 6.1669 },
            clubs: ['732']
        },
        coordinates: { latitude: 52.2519, longitude: 6.1669 },
        founded: 1902,
        colors: ['#ed1c24', '#ffed00']
    },
    {
        id: '733',
        name: 'PEC Zwolle',
        normalizedName: 'PEC ZWOLLE',
        shortName: 'Zwolle',
        country: 'Netherlands',
        city: 'Zwolle',
        stadium: {
            id: 's733',
            name: 'MAC³PARK stadion',
            city: 'Zwolle',
            country: 'Netherlands',
            coordinates: { latitude: 52.5089, longitude: 6.1194 },
            clubs: ['733']
        },
        coordinates: { latitude: 52.5089, longitude: 6.1194 },
        founded: 1910,
        colors: ['#0066cc', '#ffffff']
    },
    // Additional Belgian Pro League teams
    {
        id: '734',
        name: 'KAA Gent',
        normalizedName: 'KAA GENT',
        shortName: 'Gent',
        country: 'Belgium',
        city: 'Ghent',
        stadium: {
            id: 's734',
            name: 'Ghelamco Arena',
            city: 'Ghent',
            country: 'Belgium',
            coordinates: { latitude: 51.0292, longitude: 3.7383 },
            clubs: ['734']
        },
        coordinates: { latitude: 51.0292, longitude: 3.7383 },
        founded: 1864,
        colors: ['#0066cc', '#ffffff']
    },
    {
        id: '735',
        name: 'Royal Antwerp',
        normalizedName: 'ROYAL ANTWERP',
        shortName: 'Antwerp',
        country: 'Belgium',
        city: 'Antwerp',
        stadium: {
            id: 's735',
            name: 'Bosuilstadion',
            city: 'Antwerp',
            country: 'Belgium',
            coordinates: { latitude: 51.2289, longitude: 4.4331 },
            clubs: ['735']
        },
        coordinates: { latitude: 51.2289, longitude: 4.4331 },
        founded: 1880,
        colors: ['#ed1c24', '#ffffff']
    },
    {
        id: '736',
        name: 'Genk',
        normalizedName: 'GENK',
        shortName: 'Genk',
        country: 'Belgium',
        city: 'Genk',
        stadium: {
            id: 's736',
            name: 'Luminus Arena',
            city: 'Genk',
            country: 'Belgium',
            coordinates: { latitude: 50.9636, longitude: 5.5281 },
            clubs: ['736']
        },
        coordinates: { latitude: 50.9636, longitude: 5.5281 },
        founded: 1988,
        colors: ['#0066cc', '#ffffff']
    },
    {
        id: '737',
        name: 'Cercle Brugge',
        normalizedName: 'CERCLE BRUGGE',
        shortName: 'Cercle',
        country: 'Belgium',
        city: 'Bruges',
        stadium: {
            id: 's737',
            name: 'Jan Breydel Stadium',
            city: 'Bruges',
            country: 'Belgium',
            coordinates: { latitude: 51.1948, longitude: 3.1789 },
            clubs: ['737']
        },
        coordinates: { latitude: 51.1948, longitude: 3.1789 },
        founded: 1899,
        colors: ['#009a44', '#000000']
    },
    {
        id: '738',
        name: 'Union Saint-Gilloise',
        normalizedName: 'UNION SAINT-GILLOISE',
        shortName: 'Union SG',
        country: 'Belgium',
        city: 'Brussels',
        stadium: {
            id: 's738',
            name: 'Joseph Marien Stadium',
            city: 'Brussels',
            country: 'Belgium',
            coordinates: { latitude: 50.8142, longitude: 4.3369 },
            clubs: ['738']
        },
        coordinates: { latitude: 50.8142, longitude: 4.3369 },
        founded: 1897,
        colors: ['#ffed00', '#0066cc']
    },
    {
        id: '739',
        name: 'KV Mechelen',
        normalizedName: 'KV MECHELEN',
        shortName: 'Mechelen',
        country: 'Belgium',
        city: 'Mechelen',
        stadium: {
            id: 's739',
            name: 'AFAS Stadion Achter de Kazerne',
            city: 'Mechelen',
            country: 'Belgium',
            coordinates: { latitude: 51.0242, longitude: 4.4875 },
            clubs: ['739']
        },
        coordinates: { latitude: 51.0242, longitude: 4.4875 },
        founded: 1904,
        colors: ['#ffed00', '#ed1c24']
    },
    {
        id: '740',
        name: 'KV Kortrijk',
        normalizedName: 'KV KORTRIJK',
        shortName: 'Kortrijk',
        country: 'Belgium',
        city: 'Kortrijk',
        stadium: {
            id: 's740',
            name: 'Guldensporenstadion',
            city: 'Kortrijk',
            country: 'Belgium',
            coordinates: { latitude: 50.8247, longitude: 3.2739 },
            clubs: ['740']
        },
        coordinates: { latitude: 50.8247, longitude: 3.2739 },
        founded: 1901,
        colors: ['#ed1c24', '#ffffff']
    },
    {
        id: '741',
        name: 'OH Leuven',
        normalizedName: 'OH LEUVEN',
        shortName: 'Leuven',
        country: 'Belgium',
        city: 'Leuven',
        stadium: {
            id: 's741',
            name: 'King Power at Den Dreef Stadium',
            city: 'Leuven',
            country: 'Belgium',
            coordinates: { latitude: 50.8789, longitude: 4.7206 },
            clubs: ['741']
        },
        coordinates: { latitude: 50.8789, longitude: 4.7206 },
        founded: 2002,
        colors: ['#ffffff', '#000000']
    },
    // Additional MLS teams
    {
        id: '742',
        name: 'Atlanta United',
        normalizedName: 'ATLANTA UNITED',
        shortName: 'Atlanta',
        country: 'USA',
        city: 'Atlanta',
        stadium: {
            id: 's742',
            name: 'Mercedes-Benz Stadium',
            city: 'Atlanta',
            country: 'USA',
            coordinates: { latitude: 33.7554, longitude: -84.4008 },
            clubs: ['742']
        },
        coordinates: { latitude: 33.7554, longitude: -84.4008 },
        founded: 2014,
        colors: ['#ed1c24', '#000000', '#ffc629']
    },
    {
        id: '743',
        name: 'LAFC',
        normalizedName: 'LAFC',
        shortName: 'LAFC',
        country: 'USA',
        city: 'Los Angeles',
        stadium: {
            id: 's743',
            name: 'BMO Stadium',
            city: 'Los Angeles',
            country: 'USA',
            coordinates: { latitude: 34.0121, longitude: -118.2857 },
            clubs: ['743']
        },
        coordinates: { latitude: 34.0121, longitude: -118.2857 },
        founded: 2014,
        colors: ['#000000', '#c39e6d']
    },
    {
        id: '744',
        name: 'Portland Timbers',
        normalizedName: 'PORTLAND TIMBERS',
        shortName: 'Portland',
        country: 'USA',
        city: 'Portland',
        stadium: {
            id: 's744',
            name: 'Providence Park',
            city: 'Portland',
            country: 'USA',
            coordinates: { latitude: 45.5214, longitude: -122.6917 },
            clubs: ['744']
        },
        coordinates: { latitude: 45.5214, longitude: -122.6917 },
        founded: 1975,
        colors: ['#004812', '#ebe72e']
    },
    {
        id: '745',
        name: 'Sporting Kansas City',
        normalizedName: 'SPORTING KANSAS CITY',
        shortName: 'Sporting KC',
        country: 'USA',
        city: 'Kansas City',
        stadium: {
            id: 's745',
            name: 'Children\'s Mercy Park',
            city: 'Kansas City',
            country: 'USA',
            coordinates: { latitude: 39.1217, longitude: -94.8231 },
            clubs: ['745']
        },
        coordinates: { latitude: 39.1217, longitude: -94.8231 },
        founded: 1995,
        colors: ['#93b1d7', '#002b5c']
    },
    {
        id: '746',
        name: 'New York Red Bulls',
        normalizedName: 'NEW YORK RED BULLS',
        shortName: 'NY Red Bulls',
        country: 'USA',
        city: 'Harrison',
        stadium: {
            id: 's746',
            name: 'Red Bull Arena',
            city: 'Harrison',
            country: 'USA',
            coordinates: { latitude: 40.7369, longitude: -74.1503 },
            clubs: ['746']
        },
        coordinates: { latitude: 40.7369, longitude: -74.1503 },
        founded: 1995,
        colors: ['#ed1c24', '#ffcd00', '#001e60']
    },
    {
        id: '747',
        name: 'Toronto FC',
        normalizedName: 'TORONTO FC',
        shortName: 'Toronto',
        country: 'Canada',
        city: 'Toronto',
        stadium: {
            id: 's747',
            name: 'BMO Field',
            city: 'Toronto',
            country: 'Canada',
            coordinates: { latitude: 43.6330, longitude: -79.4186 },
            clubs: ['747']
        },
        coordinates: { latitude: 43.6330, longitude: -79.4186 },
        founded: 2005,
        colors: ['#ed1c24', '#b4202e']
    },
    {
        id: '748',
        name: 'CF Montréal',
        normalizedName: 'CF MONTREAL',
        shortName: 'Montréal',
        country: 'Canada',
        city: 'Montréal',
        stadium: {
            id: 's748',
            name: 'Stade Saputo',
            city: 'Montréal',
            country: 'Canada',
            coordinates: { latitude: 45.5619, longitude: -73.5528 },
            clubs: ['748']
        },
        coordinates: { latitude: 45.5619, longitude: -73.5528 },
        founded: 2010,
        colors: ['#0033a1', '#000000']
    },
    {
        id: '749',
        name: 'Vancouver Whitecaps',
        normalizedName: 'VANCOUVER WHITECAPS',
        shortName: 'Vancouver',
        country: 'Canada',
        city: 'Vancouver',
        stadium: {
            id: 's749',
            name: 'BC Place',
            city: 'Vancouver',
            country: 'Canada',
            coordinates: { latitude: 49.2769, longitude: -123.1119 },
            clubs: ['749']
        },
        coordinates: { latitude: 49.2769, longitude: -123.1119 },
        founded: 1974,
        colors: ['#00245d', '#9dc2ea']
    },
    {
        id: '750',
        name: 'Austin FC',
        normalizedName: 'AUSTIN FC',
        shortName: 'Austin',
        country: 'USA',
        city: 'Austin',
        stadium: {
            id: 's750',
            name: 'Q2 Stadium',
            city: 'Austin',
            country: 'USA',
            coordinates: { latitude: 30.3883, longitude: -97.7197 },
            clubs: ['750']
        },
        coordinates: { latitude: 30.3883, longitude: -97.7197 },
        founded: 2018,
        colors: ['#00b140', '#000000']
    },
    {
        id: '751',
        name: 'FC Cincinnati',
        normalizedName: 'FC CINCINNATI',
        shortName: 'Cincinnati',
        country: 'USA',
        city: 'Cincinnati',
        stadium: {
            id: 's751',
            name: 'TQL Stadium',
            city: 'Cincinnati',
            country: 'USA',
            coordinates: { latitude: 39.1106, longitude: -84.5203 },
            clubs: ['751']
        },
        coordinates: { latitude: 39.1106, longitude: -84.5203 },
        founded: 2015,
        colors: ['#fe5000', '#003087']
    },
    {
        id: '752',
        name: 'Columbus Crew',
        normalizedName: 'COLUMBUS CREW',
        shortName: 'Columbus',
        country: 'USA',
        city: 'Columbus',
        stadium: {
            id: 's752',
            name: 'Lower.com Field',
            city: 'Columbus',
            country: 'USA',
            coordinates: { latitude: 39.9682, longitude: -82.9921 },
            clubs: ['752']
        },
        coordinates: { latitude: 39.9682, longitude: -82.9921 },
        founded: 1994,
        colors: ['#ffed00', '#000000']
    },
    {
        id: '753',
        name: 'Nashville SC',
        normalizedName: 'NASHVILLE SC',
        shortName: 'Nashville',
        country: 'USA',
        city: 'Nashville',
        stadium: {
            id: 's753',
            name: 'GEODIS Park',
            city: 'Nashville',
            country: 'USA',
            coordinates: { latitude: 36.1314, longitude: -86.7675 },
            clubs: ['753']
        },
        coordinates: { latitude: 36.1314, longitude: -86.7675 },
        founded: 2016,
        colors: ['#ece716', '#001e62']
    },
    {
        id: '754',
        name: 'Charlotte FC',
        normalizedName: 'CHARLOTTE FC',
        shortName: 'Charlotte',
        country: 'USA',
        city: 'Charlotte',
        stadium: {
            id: 's754',
            name: 'Bank of America Stadium',
            city: 'Charlotte',
            country: 'USA',
            coordinates: { latitude: 35.2258, longitude: -80.8531 },
            clubs: ['754']
        },
        coordinates: { latitude: 35.2258, longitude: -80.8531 },
        founded: 2019,
        colors: ['#7cc0ee', '#000000']
    },
    // Additional Turkish Süper Lig teams
    {
        id: '755',
        name: 'Trabzonspor',
        normalizedName: 'TRABZONSPOR',
        shortName: 'Trabzonspor',
        country: 'Turkey',
        city: 'Trabzon',
        stadium: {
            id: 's755',
            name: 'Şenol Güneş Stadium',
            city: 'Trabzon',
            country: 'Turkey',
            coordinates: { latitude: 40.9939, longitude: 39.7344 },
            clubs: ['755']
        },
        coordinates: { latitude: 40.9939, longitude: 39.7344 },
        founded: 1967,
        colors: ['#6f263d', '#0066cc']
    },
    {
        id: '756',
        name: 'Başakşehir',
        normalizedName: 'BASAKSEHIR',
        shortName: 'Başakşehir',
        country: 'Turkey',
        city: 'Istanbul',
        stadium: {
            id: 's756',
            name: 'Başakşehir Fatih Terim Stadium',
            city: 'Istanbul',
            country: 'Turkey',
            coordinates: { latitude: 41.0786, longitude: 28.8094 },
            clubs: ['756']
        },
        coordinates: { latitude: 41.0786, longitude: 28.8094 },
        founded: 1990,
        colors: ['#ff6600', '#001e62']
    },
    {
        id: '757',
        name: 'Sivasspor',
        normalizedName: 'SIVASSPOR',
        shortName: 'Sivasspor',
        country: 'Turkey',
        city: 'Sivas',
        stadium: {
            id: 's757',
            name: 'Sivas 4 Eylül Stadium',
            city: 'Sivas',
            country: 'Turkey',
            coordinates: { latitude: 39.7411, longitude: 37.0261 },
            clubs: ['757']
        },
        coordinates: { latitude: 39.7411, longitude: 37.0261 },
        founded: 1967,
        colors: ['#ed1c24', '#ffffff']
    },
    {
        id: '758',
        name: 'Antalyaspor',
        normalizedName: 'ANTALYASPOR',
        shortName: 'Antalyaspor',
        country: 'Turkey',
        city: 'Antalya',
        stadium: {
            id: 's758',
            name: 'Antalya Stadium',
            city: 'Antalya',
            country: 'Turkey',
            coordinates: { latitude: 36.8903, longitude: 30.6664 },
            clubs: ['758']
        },
        coordinates: { latitude: 36.8903, longitude: 30.6664 },
        founded: 1966,
        colors: ['#ed1c24', '#ffffff']
    },
    {
        id: '759',
        name: 'Konyaspor',
        normalizedName: 'KONYASPOR',
        shortName: 'Konyaspor',
        country: 'Turkey',
        city: 'Konya',
        stadium: {
            id: 's759',
            name: 'Konya Büyükşehir Stadium',
            city: 'Konya',
            country: 'Turkey',
            coordinates: { latitude: 37.9450, longitude: 32.5047 },
            clubs: ['759']
        },
        coordinates: { latitude: 37.9450, longitude: 32.5047 },
        founded: 1922,
        colors: ['#009a44', '#ffffff']
    },
    {
        id: '760',
        name: 'Alanyaspor',
        normalizedName: 'ALANYASPOR',
        shortName: 'Alanyaspor',
        country: 'Turkey',
        city: 'Alanya',
        stadium: {
            id: 's760',
            name: 'Bahçeşehir Okulları Stadium',
            city: 'Alanya',
            country: 'Turkey',
            coordinates: { latitude: 36.5453, longitude: 31.9931 },
            clubs: ['760']
        },
        coordinates: { latitude: 36.5453, longitude: 31.9931 },
        founded: 1948,
        colors: ['#ff6600', '#009a44']
    },
    {
        id: '761',
        name: 'Kasımpaşa',
        normalizedName: 'KASIMPASA',
        shortName: 'Kasımpaşa',
        country: 'Turkey',
        city: 'Istanbul',
        stadium: {
            id: 's761',
            name: 'Recep Tayyip Erdoğan Stadium',
            city: 'Istanbul',
            country: 'Turkey',
            coordinates: { latitude: 41.0617, longitude: 28.9761 },
            clubs: ['761']
        },
        coordinates: { latitude: 41.0617, longitude: 28.9761 },
        founded: 1921,
        colors: ['#001e62', '#ffffff']
    },
    {
        id: '762',
        name: 'Gaziantep FK',
        normalizedName: 'GAZIANTEP FK',
        shortName: 'Gaziantep',
        country: 'Turkey',
        city: 'Gaziantep',
        stadium: {
            id: 's762',
            name: 'Kalyon Stadium',
            city: 'Gaziantep',
            country: 'Turkey',
            coordinates: { latitude: 37.0333, longitude: 37.3167 },
            clubs: ['762']
        },
        coordinates: { latitude: 37.0333, longitude: 37.3167 },
        founded: 1988,
        colors: ['#ed1c24', '#000000']
    },
    // Additional Argentine Liga Profesional teams
    {
        id: '763',
        name: 'Independiente',
        normalizedName: 'INDEPENDIENTE',
        shortName: 'Independiente',
        country: 'Argentina',
        city: 'Avellaneda',
        stadium: {
            id: 's763',
            name: 'Estadio Libertadores de América',
            city: 'Avellaneda',
            country: 'Argentina',
            coordinates: { latitude: -34.6703, longitude: -58.3714 },
            clubs: ['763']
        },
        coordinates: { latitude: -34.6703, longitude: -58.3714 },
        founded: 1905,
        colors: ['#ed1c24', '#ffffff']
    },
    {
        id: '764',
        name: 'San Lorenzo',
        normalizedName: 'SAN LORENZO',
        shortName: 'San Lorenzo',
        country: 'Argentina',
        city: 'Buenos Aires',
        stadium: {
            id: 's764',
            name: 'Estadio Pedro Bidegain',
            city: 'Buenos Aires',
            country: 'Argentina',
            coordinates: { latitude: -34.6592, longitude: -58.4386 },
            clubs: ['764']
        },
        coordinates: { latitude: -34.6592, longitude: -58.4386 },
        founded: 1908,
        colors: ['#0066cc', '#ed1c24']
    },
    {
        id: '765',
        name: 'Vélez Sarsfield',
        normalizedName: 'VELEZ SARSFIELD',
        shortName: 'Vélez',
        country: 'Argentina',
        city: 'Buenos Aires',
        stadium: {
            id: 's765',
            name: 'Estadio José Amalfitani',
            city: 'Buenos Aires',
            country: 'Argentina',
            coordinates: { latitude: -34.6361, longitude: -58.5197 },
            clubs: ['765']
        },
        coordinates: { latitude: -34.6361, longitude: -58.5197 },
        founded: 1910,
        colors: ['#ffffff', '#0066cc']
    },
    {
        id: '766',
        name: 'Newell\'s Old Boys',
        normalizedName: 'NEWELLS OLD BOYS',
        shortName: 'Newell\'s',
        country: 'Argentina',
        city: 'Rosario',
        stadium: {
            id: 's766',
            name: 'Estadio Marcelo Bielsa',
            city: 'Rosario',
            country: 'Argentina',
            coordinates: { latitude: -32.9408, longitude: -60.6642 },
            clubs: ['766']
        },
        coordinates: { latitude: -32.9408, longitude: -60.6642 },
        founded: 1903,
        colors: ['#ed1c24', '#000000']
    },
    {
        id: '767',
        name: 'Rosario Central',
        normalizedName: 'ROSARIO CENTRAL',
        shortName: 'Rosario Central',
        country: 'Argentina',
        city: 'Rosario',
        stadium: {
            id: 's767',
            name: 'Estadio Gigante de Arroyito',
            city: 'Rosario',
            country: 'Argentina',
            coordinates: { latitude: -32.9242, longitude: -60.6628 },
            clubs: ['767']
        },
        coordinates: { latitude: -32.9242, longitude: -60.6628 },
        founded: 1889,
        colors: ['#ffed00', '#0066cc']
    },
    {
        id: '768',
        name: 'Estudiantes',
        normalizedName: 'ESTUDIANTES',
        shortName: 'Estudiantes',
        country: 'Argentina',
        city: 'La Plata',
        stadium: {
            id: 's768',
            name: 'Estadio Jorge Luis Hirschi',
            city: 'La Plata',
            country: 'Argentina',
            coordinates: { latitude: -34.9067, longitude: -57.9322 },
            clubs: ['768']
        },
        coordinates: { latitude: -34.9067, longitude: -57.9322 },
        founded: 1905,
        colors: ['#ed1c24', '#ffffff']
    },
    {
        id: '769',
        name: 'Gimnasia La Plata',
        normalizedName: 'GIMNASIA LA PLATA',
        shortName: 'Gimnasia',
        country: 'Argentina',
        city: 'La Plata',
        stadium: {
            id: 's769',
            name: 'Estadio Juan Carmelo Zerillo',
            city: 'La Plata',
            country: 'Argentina',
            coordinates: { latitude: -34.9064, longitude: -57.9417 },
            clubs: ['769']
        },
        coordinates: { latitude: -34.9064, longitude: -57.9417 },
        founded: 1887,
        colors: ['#ffffff', '#0066cc']
    },
    {
        id: '770',
        name: 'Lanús',
        normalizedName: 'LANUS',
        shortName: 'Lanús',
        country: 'Argentina',
        city: 'Lanús',
        stadium: {
            id: 's770',
            name: 'Estadio Ciudad de Lanús - Néstor Díaz Pérez',
            city: 'Lanús',
            country: 'Argentina',
            coordinates: { latitude: -34.6906, longitude: -58.3964 },
            clubs: ['770']
        },
        coordinates: { latitude: -34.6906, longitude: -58.3964 },
        founded: 1915,
        colors: ['#9c1919', '#ffffff']
    },
    // Additional Brasileirão teams
    {
        id: '771',
        name: 'Corinthians',
        normalizedName: 'CORINTHIANS',
        shortName: 'Corinthians',
        country: 'Brazil',
        city: 'São Paulo',
        stadium: {
            id: 's771',
            name: 'Neo Química Arena',
            city: 'São Paulo',
            country: 'Brazil',
            coordinates: { latitude: -23.5456, longitude: -46.4733 },
            clubs: ['771']
        },
        coordinates: { latitude: -23.5456, longitude: -46.4733 },
        founded: 1910,
        colors: ['#000000', '#ffffff']
    },
    {
        id: '772',
        name: 'Santos',
        normalizedName: 'SANTOS',
        shortName: 'Santos',
        country: 'Brazil',
        city: 'Santos',
        stadium: {
            id: 's772',
            name: 'Vila Belmiro',
            city: 'Santos',
            country: 'Brazil',
            coordinates: { latitude: -23.9522, longitude: -46.3356 },
            clubs: ['772']
        },
        coordinates: { latitude: -23.9522, longitude: -46.3356 },
        founded: 1912,
        colors: ['#ffffff', '#000000']
    },
    {
        id: '773',
        name: 'Grêmio',
        normalizedName: 'GREMIO',
        shortName: 'Grêmio',
        country: 'Brazil',
        city: 'Porto Alegre',
        stadium: {
            id: 's773',
            name: 'Arena do Grêmio',
            city: 'Porto Alegre',
            country: 'Brazil',
            coordinates: { latitude: -29.9775, longitude: -51.1958 },
            clubs: ['773']
        },
        coordinates: { latitude: -29.9775, longitude: -51.1958 },
        founded: 1903,
        colors: ['#0066cc', '#000000', '#ffffff']
    },
    {
        id: '774',
        name: 'Internacional',
        normalizedName: 'INTERNACIONAL',
        shortName: 'Internacional',
        country: 'Brazil',
        city: 'Porto Alegre',
        stadium: {
            id: 's774',
            name: 'Estádio Beira-Rio',
            city: 'Porto Alegre',
            country: 'Brazil',
            coordinates: { latitude: -30.0664, longitude: -51.2353 },
            clubs: ['774']
        },
        coordinates: { latitude: -30.0664, longitude: -51.2353 },
        founded: 1909,
        colors: ['#ed1c24', '#ffffff']
    },
    {
        id: '775',
        name: 'Atlético Mineiro',
        normalizedName: 'ATLETICO MINEIRO',
        shortName: 'Atlético-MG',
        country: 'Brazil',
        city: 'Belo Horizonte',
        stadium: {
            id: 's775',
            name: 'Arena MRV',
            city: 'Belo Horizonte',
            country: 'Brazil',
            coordinates: { latitude: -19.8658, longitude: -43.9708 },
            clubs: ['775']
        },
        coordinates: { latitude: -19.8658, longitude: -43.9708 },
        founded: 1908,
        colors: ['#000000', '#ffffff']
    },
    {
        id: '776',
        name: 'Cruzeiro',
        normalizedName: 'CRUZEIRO',
        shortName: 'Cruzeiro',
        country: 'Brazil',
        city: 'Belo Horizonte',
        stadium: {
            id: 's776',
            name: 'Mineirão',
            city: 'Belo Horizonte',
            country: 'Brazil',
            coordinates: { latitude: -19.8664, longitude: -43.9708 },
            clubs: ['776']
        },
        coordinates: { latitude: -19.8664, longitude: -43.9708 },
        founded: 1921,
        colors: ['#0066cc', '#ffffff']
    },
    {
        id: '777',
        name: 'Botafogo',
        normalizedName: 'BOTAFOGO',
        shortName: 'Botafogo',
        country: 'Brazil',
        city: 'Rio de Janeiro',
        stadium: {
            id: 's777',
            name: 'Estádio Nilton Santos',
            city: 'Rio de Janeiro',
            country: 'Brazil',
            coordinates: { latitude: -22.8919, longitude: -43.2933 },
            clubs: ['777']
        },
        coordinates: { latitude: -22.8919, longitude: -43.2933 },
        founded: 1894,
        colors: ['#000000', '#ffffff']
    },
    {
        id: '778',
        name: 'Vasco da Gama',
        normalizedName: 'VASCO DA GAMA',
        shortName: 'Vasco',
        country: 'Brazil',
        city: 'Rio de Janeiro',
        stadium: {
            id: 's778',
            name: 'São Januário',
            city: 'Rio de Janeiro',
            country: 'Brazil',
            coordinates: { latitude: -22.8889, longitude: -43.2300 },
            clubs: ['778']
        },
        coordinates: { latitude: -22.8889, longitude: -43.2300 },
        founded: 1898,
        colors: ['#000000', '#ffffff']
    },
    {
        id: '779',
        name: 'Athletico Paranaense',
        normalizedName: 'ATHLETICO PARANAENSE',
        shortName: 'Athletico-PR',
        country: 'Brazil',
        city: 'Curitiba',
        stadium: {
            id: 's779',
            name: 'Ligga Arena',
            city: 'Curitiba',
            country: 'Brazil',
            coordinates: { latitude: -25.4486, longitude: -49.2764 },
            clubs: ['779']
        },
        coordinates: { latitude: -25.4486, longitude: -49.2764 },
        founded: 1924,
        colors: ['#ed1c24', '#000000']
    },
    {
        id: '780',
        name: 'Bahia',
        normalizedName: 'BAHIA',
        shortName: 'Bahia',
        country: 'Brazil',
        city: 'Salvador',
        stadium: {
            id: 's780',
            name: 'Arena Fonte Nova',
            city: 'Salvador',
            country: 'Brazil',
            coordinates: { latitude: -12.9789, longitude: -38.5042 },
            clubs: ['780']
        },
        coordinates: { latitude: -12.9789, longitude: -38.5042 },
        founded: 1931,
        colors: ['#0066cc', '#ed1c24', '#ffffff']
    },
    {
        id: '781',
        name: 'Fortaleza',
        normalizedName: 'FORTALEZA',
        shortName: 'Fortaleza',
        country: 'Brazil',
        city: 'Fortaleza',
        stadium: {
            id: 's781',
            name: 'Arena Castelão',
            city: 'Fortaleza',
            country: 'Brazil',
            coordinates: { latitude: -3.8075, longitude: -38.5217 },
            clubs: ['781']
        },
        coordinates: { latitude: -3.8075, longitude: -38.5217 },
        founded: 1918,
        colors: ['#ed1c24', '#0066cc', '#ffffff']
    },
    // Additional Liga MX teams
    {
        id: '782',
        name: 'Tigres UANL',
        normalizedName: 'TIGRES UANL',
        shortName: 'Tigres',
        country: 'Mexico',
        city: 'Monterrey',
        stadium: {
            id: 's782',
            name: 'Estadio Universitario',
            city: 'Monterrey',
            country: 'Mexico',
            coordinates: { latitude: 25.7225, longitude: -100.3111 },
            clubs: ['782']
        },
        coordinates: { latitude: 25.7225, longitude: -100.3111 },
        founded: 1960,
        colors: ['#ffed00', '#001e62']
    },
    {
        id: '783',
        name: 'CF Monterrey',
        normalizedName: 'CF MONTERREY',
        shortName: 'Monterrey',
        country: 'Mexico',
        city: 'Monterrey',
        stadium: {
            id: 's783',
            name: 'Estadio BBVA',
            city: 'Monterrey',
            country: 'Mexico',
            coordinates: { latitude: 25.7208, longitude: -100.2431 },
            clubs: ['783']
        },
        coordinates: { latitude: 25.7208, longitude: -100.2431 },
        founded: 1945,
        colors: ['#001e62', '#ffffff']
    },
    {
        id: '784',
        name: 'Club León',
        normalizedName: 'CLUB LEON',
        shortName: 'León',
        country: 'Mexico',
        city: 'León',
        stadium: {
            id: 's784',
            name: 'Estadio León',
            city: 'León',
            country: 'Mexico',
            coordinates: { latitude: 21.1225, longitude: -101.6628 },
            clubs: ['784']
        },
        coordinates: { latitude: 21.1225, longitude: -101.6628 },
        founded: 1944,
        colors: ['#009a44', '#ffffff']
    },
    {
        id: '785',
        name: 'Pumas UNAM',
        normalizedName: 'PUMAS UNAM',
        shortName: 'Pumas',
        country: 'Mexico',
        city: 'Mexico City',
        stadium: {
            id: 's785',
            name: 'Estadio Olímpico Universitario',
            city: 'Mexico City',
            country: 'Mexico',
            coordinates: { latitude: 19.3322, longitude: -99.1919 },
            clubs: ['785']
        },
        coordinates: { latitude: 19.3322, longitude: -99.1919 },
        founded: 1954,
        colors: ['#001e62', '#ffed00']
    },
    {
        id: '786',
        name: 'Santos Laguna',
        normalizedName: 'SANTOS LAGUNA',
        shortName: 'Santos',
        country: 'Mexico',
        city: 'Torreón',
        stadium: {
            id: 's786',
            name: 'Estadio Corona',
            city: 'Torreón',
            country: 'Mexico',
            coordinates: { latitude: 25.5681, longitude: -103.4161 },
            clubs: ['786']
        },
        coordinates: { latitude: 25.5681, longitude: -103.4161 },
        founded: 1983,
        colors: ['#009a44', '#ffffff']
    },
    {
        id: '787',
        name: 'CF Pachuca',
        normalizedName: 'CF PACHUCA',
        shortName: 'Pachuca',
        country: 'Mexico',
        city: 'Pachuca',
        stadium: {
            id: 's787',
            name: 'Estadio Hidalgo',
            city: 'Pachuca',
            country: 'Mexico',
            coordinates: { latitude: 20.0842, longitude: -98.7586 },
            clubs: ['787']
        },
        coordinates: { latitude: 20.0842, longitude: -98.7586 },
        founded: 1901,
        colors: ['#ffffff', '#0066cc']
    },
    {
        id: '788',
        name: 'Toluca',
        normalizedName: 'TOLUCA',
        shortName: 'Toluca',
        country: 'Mexico',
        city: 'Toluca',
        stadium: {
            id: 's788',
            name: 'Estadio Nemesio Díez',
            city: 'Toluca',
            country: 'Mexico',
            coordinates: { latitude: 19.2881, longitude: -99.6683 },
            clubs: ['788']
        },
        coordinates: { latitude: 19.2881, longitude: -99.6683 },
        founded: 1917,
        colors: ['#ed1c24', '#ffffff']
    },
    {
        id: '789',
        name: 'Atlas',
        normalizedName: 'ATLAS',
        shortName: 'Atlas',
        country: 'Mexico',
        city: 'Guadalajara',
        stadium: {
            id: 's789',
            name: 'Estadio Jalisco',
            city: 'Guadalajara',
            country: 'Mexico',
            coordinates: { latitude: 20.6739, longitude: -103.3325 },
            clubs: ['789']
        },
        coordinates: { latitude: 20.6739, longitude: -103.3325 },
        founded: 1916,
        colors: ['#000000', '#ed1c24']
    },
    // Additional J1 League teams (Japan)
    {
        id: '790',
        name: 'Cerezo Osaka',
        normalizedName: 'CEREZO OSAKA',
        shortName: 'Cerezo',
        country: 'Japan',
        city: 'Osaka',
        stadium: {
            id: 's790',
            name: 'Yanmar Stadium Nagai',
            city: 'Osaka',
            country: 'Japan',
            coordinates: { latitude: 34.6067, longitude: 135.5161 },
            clubs: ['790']
        },
        coordinates: { latitude: 34.6067, longitude: 135.5161 },
        founded: 1957,
        colors: ['#ffb6c1', '#ffffff']
    },
    {
        id: '791',
        name: 'Gamba Osaka',
        normalizedName: 'GAMBA OSAKA',
        shortName: 'Gamba',
        country: 'Japan',
        city: 'Suita',
        stadium: {
            id: 's791',
            name: 'Panasonic Stadium Suita',
            city: 'Suita',
            country: 'Japan',
            coordinates: { latitude: 34.7864, longitude: 135.5219 },
            clubs: ['791']
        },
        coordinates: { latitude: 34.7864, longitude: 135.5219 },
        founded: 1980,
        colors: ['#0066cc', '#000000']
    },
    {
        id: '792',
        name: 'Kashima Antlers',
        normalizedName: 'KASHIMA ANTLERS',
        shortName: 'Kashima',
        country: 'Japan',
        city: 'Kashima',
        stadium: {
            id: 's792',
            name: 'Kashima Stadium',
            city: 'Kashima',
            country: 'Japan',
            coordinates: { latitude: 35.9914, longitude: 140.6311 },
            clubs: ['792']
        },
        coordinates: { latitude: 35.9914, longitude: 140.6311 },
        founded: 1947,
        colors: ['#660033', '#ffffff']
    },
    {
        id: '793',
        name: 'FC Tokyo',
        normalizedName: 'FC TOKYO',
        shortName: 'FC Tokyo',
        country: 'Japan',
        city: 'Tokyo',
        stadium: {
            id: 's793',
            name: 'Ajinomoto Stadium',
            city: 'Tokyo',
            country: 'Japan',
            coordinates: { latitude: 35.6647, longitude: 139.5272 },
            clubs: ['793']
        },
        coordinates: { latitude: 35.6647, longitude: 139.5272 },
        founded: 1935,
        colors: ['#ed1c24', '#0066cc']
    },
    {
        id: '794',
        name: 'Nagoya Grampus',
        normalizedName: 'NAGOYA GRAMPUS',
        shortName: 'Nagoya',
        country: 'Japan',
        city: 'Nagoya',
        stadium: {
            id: 's794',
            name: 'Toyota Stadium',
            city: 'Nagoya',
            country: 'Japan',
            coordinates: { latitude: 35.0989, longitude: 137.0194 },
            clubs: ['794']
        },
        coordinates: { latitude: 35.0989, longitude: 137.0194 },
        founded: 1939,
        colors: ['#ff6600', '#ffffff']
    },
    {
        id: '795',
        name: 'Vissel Kobe',
        normalizedName: 'VISSEL KOBE',
        shortName: 'Vissel',
        country: 'Japan',
        city: 'Kobe',
        stadium: {
            id: 's795',
            name: 'Noevir Stadium Kobe',
            city: 'Kobe',
            country: 'Japan',
            coordinates: { latitude: 34.6611, longitude: 135.1703 },
            clubs: ['795']
        },
        coordinates: { latitude: 34.6611, longitude: 135.1703 },
        founded: 1966,
        colors: ['#9c1919', '#000000']
    },
    {
        id: '796',
        name: 'Sanfrecce Hiroshima',
        normalizedName: 'SANFRECCE HIROSHIMA',
        shortName: 'Sanfrecce',
        country: 'Japan',
        city: 'Hiroshima',
        stadium: {
            id: 's796',
            name: 'Edion Peace Wing Hiroshima',
            city: 'Hiroshima',
            country: 'Japan',
            coordinates: { latitude: 34.4000, longitude: 132.4631 },
            clubs: ['796']
        },
        coordinates: { latitude: 34.4000, longitude: 132.4631 },
        founded: 1938,
        colors: ['#6f263d', '#ffffff']
    },
    {
        id: '797',
        name: 'Consadole Sapporo',
        normalizedName: 'CONSADOLE SAPPORO',
        shortName: 'Consadole',
        country: 'Japan',
        city: 'Sapporo',
        stadium: {
            id: 's797',
            name: 'Sapporo Dome',
            city: 'Sapporo',
            country: 'Japan',
            coordinates: { latitude: 43.0153, longitude: 141.4097 },
            clubs: ['797']
        },
        coordinates: { latitude: 43.0153, longitude: 141.4097 },
        founded: 1935,
        colors: ['#ed1c24', '#000000']
    },
    // Additional Scottish Premiership teams
    {
        id: '798',
        name: 'Heart of Midlothian',
        normalizedName: 'HEART OF MIDLOTHIAN',
        shortName: 'Hearts',
        country: 'Scotland',
        city: 'Edinburgh',
        stadium: {
            id: 's798',
            name: 'Tynecastle Park',
            city: 'Edinburgh',
            country: 'Scotland',
            coordinates: { latitude: 55.9383, longitude: -3.2322 },
            clubs: ['798']
        },
        coordinates: { latitude: 55.9383, longitude: -3.2322 },
        founded: 1874,
        colors: ['#9c1919', '#ffffff']
    },
    {
        id: '799',
        name: 'Hibernian',
        normalizedName: 'HIBERNIAN',
        shortName: 'Hibs',
        country: 'Scotland',
        city: 'Edinburgh',
        stadium: {
            id: 's799',
            name: 'Easter Road',
            city: 'Edinburgh',
            country: 'Scotland',
            coordinates: { latitude: 55.9619, longitude: -3.1653 },
            clubs: ['799']
        },
        coordinates: { latitude: 55.9619, longitude: -3.1653 },
        founded: 1875,
        colors: ['#009a44', '#ffffff']
    },
    {
        id: '800',
        name: 'Motherwell',
        normalizedName: 'MOTHERWELL',
        shortName: 'Motherwell',
        country: 'Scotland',
        city: 'Motherwell',
        stadium: {
            id: 's800',
            name: 'Fir Park',
            city: 'Motherwell',
            country: 'Scotland',
            coordinates: { latitude: 55.7808, longitude: -3.9828 },
            clubs: ['800']
        },
        coordinates: { latitude: 55.7808, longitude: -3.9828 },
        founded: 1886,
        colors: ['#ffb800', '#9c1919']
    },
    {
        id: '801',
        name: 'Dundee United',
        normalizedName: 'DUNDEE UNITED',
        shortName: 'Dundee Utd',
        country: 'Scotland',
        city: 'Dundee',
        stadium: {
            id: 's801',
            name: 'Tannadice Park',
            city: 'Dundee',
            country: 'Scotland',
            coordinates: { latitude: 56.4747, longitude: -2.9689 },
            clubs: ['801']
        },
        coordinates: { latitude: 56.4747, longitude: -2.9689 },
        founded: 1909,
        colors: ['#ff6600', '#000000']
    },
    {
        id: '802',
        name: 'Kilmarnock',
        normalizedName: 'KILMARNOCK',
        shortName: 'Kilmarnock',
        country: 'Scotland',
        city: 'Kilmarnock',
        stadium: {
            id: 's802',
            name: 'Rugby Park',
            city: 'Kilmarnock',
            country: 'Scotland',
            coordinates: { latitude: 55.6092, longitude: -4.5097 },
            clubs: ['802']
        },
        coordinates: { latitude: 55.6092, longitude: -4.5097 },
        founded: 1869,
        colors: ['#0066cc', '#ffffff']
    },
    {
        id: '803',
        name: 'St Mirren',
        normalizedName: 'ST MIRREN',
        shortName: 'St Mirren',
        country: 'Scotland',
        city: 'Paisley',
        stadium: {
            id: 's803',
            name: 'SMISA Stadium',
            city: 'Paisley',
            country: 'Scotland',
            coordinates: { latitude: 55.8469, longitude: -4.4306 },
            clubs: ['803']
        },
        coordinates: { latitude: 55.8469, longitude: -4.4306 },
        founded: 1877,
        colors: ['#000000', '#ffffff']
    },
    {
        id: '804',
        name: 'St Johnstone',
        normalizedName: 'ST JOHNSTONE',
        shortName: 'St Johnstone',
        country: 'Scotland',
        city: 'Perth',
        stadium: {
            id: 's804',
            name: 'McDiarmid Park',
            city: 'Perth',
            country: 'Scotland',
            coordinates: { latitude: 56.4092, longitude: -3.4756 },
            clubs: ['804']
        },
        coordinates: { latitude: 56.4092, longitude: -3.4756 },
        founded: 1884,
        colors: ['#0066cc', '#ffffff']
    },
    {
        id: '805',
        name: 'Ross County',
        normalizedName: 'ROSS COUNTY',
        shortName: 'Ross County',
        country: 'Scotland',
        city: 'Dingwall',
        stadium: {
            id: 's805',
            name: 'Global Energy Stadium',
            city: 'Dingwall',
            country: 'Scotland',
            coordinates: { latitude: 57.5950, longitude: -4.4275 },
            clubs: ['805']
        },
        coordinates: { latitude: 57.5950, longitude: -4.4275 },
        founded: 1929,
        colors: ['#001e62', '#ed1c24']
    },
    // Additional Saudi Pro League teams
    {
        id: '806',
        name: 'Al Ahli',
        normalizedName: 'AL AHLI',
        shortName: 'Al Ahli',
        country: 'Saudi Arabia',
        city: 'Jeddah',
        stadium: {
            id: 's806',
            name: 'King Abdullah Sports City',
            city: 'Jeddah',
            country: 'Saudi Arabia',
            coordinates: { latitude: 21.6708, longitude: 39.1147 },
            clubs: ['806']
        },
        coordinates: { latitude: 21.6708, longitude: 39.1147 },
        founded: 1937,
        colors: ['#009a44', '#ffffff']
    },
    {
        id: '807',
        name: 'Al Ettifaq',
        normalizedName: 'AL ETTIFAQ',
        shortName: 'Al Ettifaq',
        country: 'Saudi Arabia',
        city: 'Dammam',
        stadium: {
            id: 's807',
            name: 'Prince Mohamed bin Fahd Stadium',
            city: 'Dammam',
            country: 'Saudi Arabia',
            coordinates: { latitude: 26.3947, longitude: 50.1383 },
            clubs: ['807']
        },
        coordinates: { latitude: 26.3947, longitude: 50.1383 },
        founded: 1945,
        colors: ['#ffed00', '#000000']
    },
    {
        id: '808',
        name: 'Al Fayha',
        normalizedName: 'AL FAYHA',
        shortName: 'Al Fayha',
        country: 'Saudi Arabia',
        city: 'Al Majma\'ah',
        stadium: {
            id: 's808',
            name: 'Al Majma\'ah Sports City Stadium',
            city: 'Al Majma\'ah',
            country: 'Saudi Arabia',
            coordinates: { latitude: 25.9000, longitude: 45.3667 },
            clubs: ['808']
        },
        coordinates: { latitude: 25.9000, longitude: 45.3667 },
        founded: 1954,
        colors: ['#ff6600', '#ffffff']
    },
    {
        id: '809',
        name: 'Al Shabab',
        normalizedName: 'AL SHABAB',
        shortName: 'Al Shabab',
        country: 'Saudi Arabia',
        city: 'Riyadh',
        stadium: {
            id: 's809',
            name: 'Al Shabab Club Stadium',
            city: 'Riyadh',
            country: 'Saudi Arabia',
            coordinates: { latitude: 24.6833, longitude: 46.7333 },
            clubs: ['809']
        },
        coordinates: { latitude: 24.6833, longitude: 46.7333 },
        founded: 1947,
        colors: ['#ffffff', '#000000']
    },
    {
        id: '810',
        name: 'Al Fateh',
        normalizedName: 'AL FATEH',
        shortName: 'Al Fateh',
        country: 'Saudi Arabia',
        city: 'Al-Hasa',
        stadium: {
            id: 's810',
            name: 'Prince Abdullah bin Jalawi Stadium',
            city: 'Al-Hasa',
            country: 'Saudi Arabia',
            coordinates: { latitude: 25.3667, longitude: 49.5833 },
            clubs: ['810']
        },
        coordinates: { latitude: 25.3667, longitude: 49.5833 },
        founded: 1958,
        colors: ['#ffed00', '#000000']
    },
    {
        id: '811',
        name: 'Al Taawoun',
        normalizedName: 'AL TAAWOUN',
        shortName: 'Al Taawoun',
        country: 'Saudi Arabia',
        city: 'Buraidah',
        stadium: {
            id: 's811',
            name: 'King Abdullah Sport City Stadium',
            city: 'Buraidah',
            country: 'Saudi Arabia',
            coordinates: { latitude: 26.3333, longitude: 43.9667 },
            clubs: ['811']
        },
        coordinates: { latitude: 26.3333, longitude: 43.9667 },
        founded: 1956,
        colors: ['#808080', '#000000']
    },
    {
        id: '812',
        name: 'Abha',
        normalizedName: 'ABHA',
        shortName: 'Abha',
        country: 'Saudi Arabia',
        city: 'Abha',
        stadium: {
            id: 's812',
            name: 'Prince Sultan bin Abdul Aziz Stadium',
            city: 'Abha',
            country: 'Saudi Arabia',
            coordinates: { latitude: 18.2167, longitude: 42.5053 },
            clubs: ['812']
        },
        coordinates: { latitude: 18.2167, longitude: 42.5053 },
        founded: 1950,
        colors: ['#009a44', '#ffed00']
    },
    {
        id: '813',
        name: 'Damac FC',
        normalizedName: 'DAMAC FC',
        shortName: 'Damac',
        country: 'Saudi Arabia',
        city: 'Khamis Mushait',
        stadium: {
            id: 's813',
            name: 'Prince Sultan bin Abdul Aziz Stadium',
            city: 'Khamis Mushait',
            country: 'Saudi Arabia',
            coordinates: { latitude: 18.3000, longitude: 42.7333 },
            clubs: ['813']
        },
        coordinates: { latitude: 18.3000, longitude: 42.7333 },
        founded: 1972,
        colors: ['#0066cc', '#ffed00']
    },
    // Additional Croatian Prva HNL teams
    {
        id: '814',
        name: 'Rijeka',
        normalizedName: 'RIJEKA',
        shortName: 'Rijeka',
        country: 'Croatia',
        city: 'Rijeka',
        stadium: {
            id: 's814',
            name: 'Stadion Rujevica',
            city: 'Rijeka',
            country: 'Croatia',
            coordinates: { latitude: 45.3403, longitude: 14.3994 },
            clubs: ['814']
        },
        coordinates: { latitude: 45.3403, longitude: 14.3994 },
        founded: 1946,
        colors: ['#ffffff', '#0066cc']
    },
    {
        id: '815',
        name: 'Osijek',
        normalizedName: 'OSIJEK',
        shortName: 'Osijek',
        country: 'Croatia',
        city: 'Osijek',
        stadium: {
            id: 's815',
            name: 'Stadion Gradski vrt',
            city: 'Osijek',
            country: 'Croatia',
            coordinates: { latitude: 45.5500, longitude: 18.6925 },
            clubs: ['815']
        },
        coordinates: { latitude: 45.5500, longitude: 18.6925 },
        founded: 1947,
        colors: ['#0066cc', '#ffffff']
    },
    {
        id: '816',
        name: 'Lokomotiva Zagreb',
        normalizedName: 'LOKOMOTIVA ZAGREB',
        shortName: 'Lokomotiva',
        country: 'Croatia',
        city: 'Zagreb',
        stadium: {
            id: 's816',
            name: 'Stadion Kranjčevićeva',
            city: 'Zagreb',
            country: 'Croatia',
            coordinates: { latitude: 45.8053, longitude: 15.9497 },
            clubs: ['816']
        },
        coordinates: { latitude: 45.8053, longitude: 15.9497 },
        founded: 1914,
        colors: ['#0066cc', '#ffffff']
    },
    {
        id: '817',
        name: 'Istra 1961',
        normalizedName: 'ISTRA 1961',
        shortName: 'Istra',
        country: 'Croatia',
        city: 'Pula',
        stadium: {
            id: 's817',
            name: 'Aldo Drosina Stadium',
            city: 'Pula',
            country: 'Croatia',
            coordinates: { latitude: 44.8731, longitude: 13.8478 },
            clubs: ['817']
        },
        coordinates: { latitude: 44.8731, longitude: 13.8478 },
        founded: 1961,
        colors: ['#009a44', '#ffed00']
    },
    {
        id: '818',
        name: 'Gorica',
        normalizedName: 'GORICA',
        shortName: 'Gorica',
        country: 'Croatia',
        city: 'Velika Gorica',
        stadium: {
            id: 's818',
            name: 'Stadion Radnika',
            city: 'Velika Gorica',
            country: 'Croatia',
            coordinates: { latitude: 45.7167, longitude: 16.0667 },
            clubs: ['818']
        },
        coordinates: { latitude: 45.7167, longitude: 16.0667 },
        founded: 2009,
        colors: ['#0066cc', '#ffffff']
    },
    {
        id: '819',
        name: 'Varaždin',
        normalizedName: 'VARAZDIN',
        shortName: 'Varaždin',
        country: 'Croatia',
        city: 'Varaždin',
        stadium: {
            id: 's819',
            name: 'Stadion Anđelko Herjavec',
            city: 'Varaždin',
            country: 'Croatia',
            coordinates: { latitude: 46.3069, longitude: 16.3472 },
            clubs: ['819']
        },
        coordinates: { latitude: 46.3069, longitude: 16.3472 },
        founded: 2012,
        colors: ['#ffffff', '#0066cc']
    },
    // Additional Polish Ekstraklasa teams
    {
        id: '820',
        name: 'Wisła Kraków',
        normalizedName: 'WISLA KRAKOW',
        shortName: 'Wisła',
        country: 'Poland',
        city: 'Kraków',
        stadium: {
            id: 's820',
            name: 'Stadion Miejski im. Henryka Reymana',
            city: 'Kraków',
            country: 'Poland',
            coordinates: { latitude: 50.0603, longitude: 19.9278 },
            clubs: ['820']
        },
        coordinates: { latitude: 50.0603, longitude: 19.9278 },
        founded: 1906,
        colors: ['#ed1c24', '#ffffff']
    },
    {
        id: '821',
        name: 'Raków Częstochowa',
        normalizedName: 'RAKOW CZESTOCHOWA',
        shortName: 'Raków',
        country: 'Poland',
        city: 'Częstochowa',
        stadium: {
            id: 's821',
            name: 'Stadion Raków',
            city: 'Częstochowa',
            country: 'Poland',
            coordinates: { latitude: 50.8167, longitude: 19.1167 },
            clubs: ['821']
        },
        coordinates: { latitude: 50.8167, longitude: 19.1167 },
        founded: 1921,
        colors: ['#ed1c24', '#0066cc']
    },
    {
        id: '822',
        name: 'Cracovia',
        normalizedName: 'CRACOVIA',
        shortName: 'Cracovia',
        country: 'Poland',
        city: 'Kraków',
        stadium: {
            id: 's822',
            name: 'Stadion Cracovii',
            city: 'Kraków',
            country: 'Poland',
            coordinates: { latitude: 50.0367, longitude: 19.9447 },
            clubs: ['822']
        },
        coordinates: { latitude: 50.0367, longitude: 19.9447 },
        founded: 1906,
        colors: ['#ed1c24', '#ffffff']
    },
    {
        id: '823',
        name: 'Pogoń Szczecin',
        normalizedName: 'POGON SZCZECIN',
        shortName: 'Pogoń',
        country: 'Poland',
        city: 'Szczecin',
        stadium: {
            id: 's823',
            name: 'Stadion Florian Krygier',
            city: 'Szczecin',
            country: 'Poland',
            coordinates: { latitude: 53.4292, longitude: 14.5561 },
            clubs: ['823']
        },
        coordinates: { latitude: 53.4292, longitude: 14.5561 },
        founded: 1948,
        colors: ['#6f263d', '#0066cc']
    },
    {
        id: '824',
        name: 'Jagiellonia Białystok',
        normalizedName: 'JAGIELLONIA BIALYSTOK',
        shortName: 'Jagiellonia',
        country: 'Poland',
        city: 'Białystok',
        stadium: {
            id: 's824',
            name: 'Stadion Miejski',
            city: 'Białystok',
            country: 'Poland',
            coordinates: { latitude: 53.1264, longitude: 23.1608 },
            clubs: ['824']
        },
        coordinates: { latitude: 53.1264, longitude: 23.1608 },
        founded: 1920,
        colors: ['#ed1c24', '#ffed00']
    },
    {
        id: '825',
        name: 'Górnik Zabrze',
        normalizedName: 'GORNIK ZABRZE',
        shortName: 'Górnik',
        country: 'Poland',
        city: 'Zabrze',
        stadium: {
            id: 's825',
            name: 'Stadion im. Ernesta Pohla',
            city: 'Zabrze',
            country: 'Poland',
            coordinates: { latitude: 50.2986, longitude: 18.7539 },
            clubs: ['825']
        },
        coordinates: { latitude: 50.2986, longitude: 18.7539 },
        founded: 1948,
        colors: ['#0066cc', '#ffffff']
    },
    {
        id: '826',
        name: 'Śląsk Wrocław',
        normalizedName: 'SLASK WROCLAW',
        shortName: 'Śląsk',
        country: 'Poland',
        city: 'Wrocław',
        stadium: {
            id: 's826',
            name: 'Tarczyński Arena',
            city: 'Wrocław',
            country: 'Poland',
            coordinates: { latitude: 51.1408, longitude: 16.9431 },
            clubs: ['826']
        },
        coordinates: { latitude: 51.1408, longitude: 16.9431 },
        founded: 1947,
        colors: ['#009a44', '#ffffff']
    },
    {
        id: '827',
        name: 'Zagłębie Lubin',
        normalizedName: 'ZAGLEBIE LUBIN',
        shortName: 'Zagłębie',
        country: 'Poland',
        city: 'Lubin',
        stadium: {
            id: 's827',
            name: 'Stadion Zagłębia Lubin',
            city: 'Lubin',
            country: 'Poland',
            coordinates: { latitude: 51.4014, longitude: 16.2003 },
            clubs: ['827']
        },
        coordinates: { latitude: 51.4014, longitude: 16.2003 },
        founded: 1945,
        colors: ['#ff6600', '#009a44']
    },
    // Additional Danish Superligaen teams
    {
        id: '828',
        name: 'Midtjylland',
        normalizedName: 'MIDTJYLLAND',
        shortName: 'Midtjylland',
        country: 'Denmark',
        city: 'Herning',
        stadium: {
            id: 's828',
            name: 'MCH Arena',
            city: 'Herning',
            country: 'Denmark',
            coordinates: { latitude: 56.1281, longitude: 9.0061 },
            clubs: ['828']
        },
        coordinates: { latitude: 56.1281, longitude: 9.0061 },
        founded: 1999,
        colors: ['#000000', '#ed1c24', '#ffffff']
    },
    {
        id: '829',
        name: 'AGF',
        normalizedName: 'AGF',
        shortName: 'AGF',
        country: 'Denmark',
        city: 'Aarhus',
        stadium: {
            id: 's829',
            name: 'Ceres Park',
            city: 'Aarhus',
            country: 'Denmark',
            coordinates: { latitude: 56.1325, longitude: 10.2008 },
            clubs: ['829']
        },
        coordinates: { latitude: 56.1325, longitude: 10.2008 },
        founded: 1880,
        colors: ['#ffffff', '#0066cc']
    },
    {
        id: '830',
        name: 'Nordsjælland',
        normalizedName: 'NORDSJAELLAND',
        shortName: 'Nordsjælland',
        country: 'Denmark',
        city: 'Farum',
        stadium: {
            id: 's830',
            name: 'Right to Dream Park',
            city: 'Farum',
            country: 'Denmark',
            coordinates: { latitude: 55.8083, longitude: 12.3611 },
            clubs: ['830']
        },
        coordinates: { latitude: 55.8083, longitude: 12.3611 },
        founded: 1991,
        colors: ['#ed1c24', '#ffed00']
    },
    {
        id: '831',
        name: 'Silkeborg',
        normalizedName: 'SILKEBORG',
        shortName: 'Silkeborg',
        country: 'Denmark',
        city: 'Silkeborg',
        stadium: {
            id: 's831',
            name: 'JYSK park',
            city: 'Silkeborg',
            country: 'Denmark',
            coordinates: { latitude: 56.1825, longitude: 9.5364 },
            clubs: ['831']
        },
        coordinates: { latitude: 56.1825, longitude: 9.5364 },
        founded: 1917,
        colors: ['#ed1c24', '#ffffff']
    },
    {
        id: '832',
        name: 'Randers',
        normalizedName: 'RANDERS',
        shortName: 'Randers',
        country: 'Denmark',
        city: 'Randers',
        stadium: {
            id: 's832',
            name: 'Cepheus Park Randers',
            city: 'Randers',
            country: 'Denmark',
            coordinates: { latitude: 56.4639, longitude: 10.0361 },
            clubs: ['832']
        },
        coordinates: { latitude: 56.4639, longitude: 10.0361 },
        founded: 2003,
        colors: ['#0066cc', '#ffffff']
    },
    {
        id: '833',
        name: 'Viborg',
        normalizedName: 'VIBORG',
        shortName: 'Viborg',
        country: 'Denmark',
        city: 'Viborg',
        stadium: {
            id: 's833',
            name: 'Energi Viborg Arena',
            city: 'Viborg',
            country: 'Denmark',
            coordinates: { latitude: 56.4500, longitude: 9.3833 },
            clubs: ['833']
        },
        coordinates: { latitude: 56.4500, longitude: 9.3833 },
        founded: 1896,
        colors: ['#009a44', '#ffffff']
    },
    {
        id: '834',
        name: 'Aalborg BK',
        normalizedName: 'AALBORG BK',
        shortName: 'Aalborg',
        country: 'Denmark',
        city: 'Aalborg',
        stadium: {
            id: 's834',
            name: 'Aalborg Portland Park',
            city: 'Aalborg',
            country: 'Denmark',
            coordinates: { latitude: 57.0467, longitude: 9.9200 },
            clubs: ['834']
        },
        coordinates: { latitude: 57.0467, longitude: 9.9200 },
        founded: 1885,
        colors: ['#ed1c24', '#ffffff']
    },
    {
        id: '835',
        name: 'Odense BK',
        normalizedName: 'ODENSE BK',
        shortName: 'Odense',
        country: 'Denmark',
        city: 'Odense',
        stadium: {
            id: 's835',
            name: 'Nature Energy Park',
            city: 'Odense',
            country: 'Denmark',
            coordinates: { latitude: 55.3978, longitude: 10.3656 },
            clubs: ['835']
        },
        coordinates: { latitude: 55.3978, longitude: 10.3656 },
        founded: 1887,
        colors: ['#0066cc', '#ffffff']
    },
    // Additional Swedish Allsvenskan teams
    {
        id: '836',
        name: 'IFK Göteborg',
        normalizedName: 'IFK GOTEBORG',
        shortName: 'IFK Göteborg',
        country: 'Sweden',
        city: 'Gothenburg',
        stadium: {
            id: 's836',
            name: 'Gamla Ullevi',
            city: 'Gothenburg',
            country: 'Sweden',
            coordinates: { latitude: 57.7072, longitude: 11.9881 },
            clubs: ['836']
        },
        coordinates: { latitude: 57.7072, longitude: 11.9881 },
        founded: 1904,
        colors: ['#0066cc', '#ffffff']
    },
    {
        id: '837',
        name: 'Djurgårdens IF',
        normalizedName: 'DJURGARDENS IF',
        shortName: 'Djurgården',
        country: 'Sweden',
        city: 'Stockholm',
        stadium: {
            id: 's837',
            name: 'Tele2 Arena',
            city: 'Stockholm',
            country: 'Sweden',
            coordinates: { latitude: 59.2939, longitude: 18.0808 },
            clubs: ['837']
        },
        coordinates: { latitude: 59.2939, longitude: 18.0808 },
        founded: 1891,
        colors: ['#0066cc', '#ffffff']
    },
    {
        id: '838',
        name: 'IF Elfsborg',
        normalizedName: 'IF ELFSBORG',
        shortName: 'Elfsborg',
        country: 'Sweden',
        city: 'Borås',
        stadium: {
            id: 's838',
            name: 'Borås Arena',
            city: 'Borås',
            country: 'Sweden',
            coordinates: { latitude: 57.7225, longitude: 12.9394 },
            clubs: ['838']
        },
        coordinates: { latitude: 57.7225, longitude: 12.9394 },
        founded: 1904,
        colors: ['#ffed00', '#000000']
    },
    {
        id: '839',
        name: 'Hammarby IF',
        normalizedName: 'HAMMARBY IF',
        shortName: 'Hammarby',
        country: 'Sweden',
        city: 'Stockholm',
        stadium: {
            id: 's839',
            name: 'Tele2 Arena',
            city: 'Stockholm',
            country: 'Sweden',
            coordinates: { latitude: 59.2939, longitude: 18.0808 },
            clubs: ['839']
        },
        coordinates: { latitude: 59.2939, longitude: 18.0808 },
        founded: 1889,
        colors: ['#009a44', '#ffffff']
    },
    {
        id: '840',
        name: 'BK Häcken',
        normalizedName: 'BK HACKEN',
        shortName: 'Häcken',
        country: 'Sweden',
        city: 'Gothenburg',
        stadium: {
            id: 's840',
            name: 'Bravida Arena',
            city: 'Gothenburg',
            country: 'Sweden',
            coordinates: { latitude: 57.6986, longitude: 12.0594 },
            clubs: ['840']
        },
        coordinates: { latitude: 57.6986, longitude: 12.0594 },
        founded: 1940,
        colors: ['#ffed00', '#000000']
    },
    {
        id: '841',
        name: 'IFK Norrköping',
        normalizedName: 'IFK NORRKOPING',
        shortName: 'Norrköping',
        country: 'Sweden',
        city: 'Norrköping',
        stadium: {
            id: 's841',
            name: 'Platinumcars Arena',
            city: 'Norrköping',
            country: 'Sweden',
            coordinates: { latitude: 58.5894, longitude: 16.1906 },
            clubs: ['841']
        },
        coordinates: { latitude: 58.5894, longitude: 16.1906 },
        founded: 1897,
        colors: ['#0066cc', '#ffffff']
    },
    {
        id: '842',
        name: 'IK Sirius',
        normalizedName: 'IK SIRIUS',
        shortName: 'Sirius',
        country: 'Sweden',
        city: 'Uppsala',
        stadium: {
            id: 's842',
            name: 'Studenternas IP',
            city: 'Uppsala',
            country: 'Sweden',
            coordinates: { latitude: 59.8586, longitude: 17.6389 },
            clubs: ['842']
        },
        coordinates: { latitude: 59.8586, longitude: 17.6389 },
        founded: 1907,
        colors: ['#0066cc', '#000000']
    },
    {
        id: '843',
        name: 'Kalmar FF',
        normalizedName: 'KALMAR FF',
        shortName: 'Kalmar',
        country: 'Sweden',
        city: 'Kalmar',
        stadium: {
            id: 's843',
            name: 'Guldfågeln Arena',
            city: 'Kalmar',
            country: 'Sweden',
            coordinates: { latitude: 56.6656, longitude: 16.3383 },
            clubs: ['843']
        },
        coordinates: { latitude: 56.6656, longitude: 16.3383 },
        founded: 1910,
        colors: ['#ed1c24', '#ffffff']
    },
    // Additional Austrian Bundesliga teams
    {
        id: '844',
        name: 'Sturm Graz',
        normalizedName: 'STURM GRAZ',
        shortName: 'Sturm Graz',
        country: 'Austria',
        city: 'Graz',
        stadium: {
            id: 's844',
            name: 'Merkur Arena',
            city: 'Graz',
            country: 'Austria',
            coordinates: { latitude: 47.0631, longitude: 15.4333 },
            clubs: ['844']
        },
        coordinates: { latitude: 47.0631, longitude: 15.4333 },
        founded: 1909,
        colors: ['#000000', '#ffffff']
    },
    {
        id: '845',
        name: 'Austria Wien',
        normalizedName: 'AUSTRIA WIEN',
        shortName: 'Austria',
        country: 'Austria',
        city: 'Vienna',
        stadium: {
            id: 's845',
            name: 'Generali Arena',
            city: 'Vienna',
            country: 'Austria',
            coordinates: { latitude: 48.1653, longitude: 16.3814 },
            clubs: ['845']
        },
        coordinates: { latitude: 48.1653, longitude: 16.3814 },
        founded: 1911,
        colors: ['#6f263d', '#ffffff']
    },
    {
        id: '846',
        name: 'LASK',
        normalizedName: 'LASK',
        shortName: 'LASK',
        country: 'Austria',
        city: 'Linz',
        stadium: {
            id: 's846',
            name: 'Raiffeisen Arena',
            city: 'Linz',
            country: 'Austria',
            coordinates: { latitude: 48.3119, longitude: 14.2931 },
            clubs: ['846']
        },
        coordinates: { latitude: 48.3119, longitude: 14.2931 },
        founded: 1908,
        colors: ['#000000', '#ffffff']
    },
    {
        id: '847',
        name: 'Wolfsberger AC',
        normalizedName: 'WOLFSBERGER AC',
        shortName: 'Wolfsberg',
        country: 'Austria',
        city: 'Wolfsberg',
        stadium: {
            id: 's847',
            name: 'Lavanttal-Arena',
            city: 'Wolfsberg',
            country: 'Austria',
            coordinates: { latitude: 46.8367, longitude: 14.8428 },
            clubs: ['847']
        },
        coordinates: { latitude: 46.8367, longitude: 14.8428 },
        founded: 1931,
        colors: ['#ffffff', '#000000']
    },
    {
        id: '848',
        name: 'TSV Hartberg',
        normalizedName: 'TSV HARTBERG',
        shortName: 'Hartberg',
        country: 'Austria',
        city: 'Hartberg',
        stadium: {
            id: 's848',
            name: 'Profertil Arena',
            city: 'Hartberg',
            country: 'Austria',
            coordinates: { latitude: 47.2833, longitude: 15.9833 },
            clubs: ['848']
        },
        coordinates: { latitude: 47.2833, longitude: 15.9833 },
        founded: 1946,
        colors: ['#0066cc', '#ffffff']
    },
    {
        id: '849',
        name: 'WSG Tirol',
        normalizedName: 'WSG TIROL',
        shortName: 'WSG Tirol',
        country: 'Austria',
        city: 'Wattens',
        stadium: {
            id: 's849',
            name: 'Gernot Langes Stadion',
            city: 'Wattens',
            country: 'Austria',
            coordinates: { latitude: 47.2883, longitude: 11.5922 },
            clubs: ['849']
        },
        coordinates: { latitude: 47.2883, longitude: 11.5922 },
        founded: 1930,
        colors: ['#009a44', '#000000']
    },
    {
        id: '850',
        name: 'Rheindorf Altach',
        normalizedName: 'RHEINDORF ALTACH',
        shortName: 'Altach',
        country: 'Austria',
        city: 'Altach',
        stadium: {
            id: 's850',
            name: 'Cashpoint Arena',
            city: 'Altach',
            country: 'Austria',
            coordinates: { latitude: 47.3619, longitude: 9.6494 },
            clubs: ['850']
        },
        coordinates: { latitude: 47.3619, longitude: 9.6494 },
        founded: 1929,
        colors: ['#000000', '#ffffff']
    },
    {
        id: '851',
        name: 'SK Austria Klagenfurt',
        normalizedName: 'SK AUSTRIA KLAGENFURT',
        shortName: 'Klagenfurt',
        country: 'Austria',
        city: 'Klagenfurt',
        stadium: {
            id: 's851',
            name: 'Wörthersee Stadion',
            city: 'Klagenfurt',
            country: 'Austria',
            coordinates: { latitude: 46.6083, longitude: 14.2600 },
            clubs: ['851']
        },
        coordinates: { latitude: 46.6083, longitude: 14.2600 },
        founded: 2007,
        colors: ['#6f263d', '#ffffff']
    },
    // Additional Swiss Super League teams
    {
        id: '852',
        name: 'FC Zürich',
        normalizedName: 'FC ZURICH',
        shortName: 'Zürich',
        country: 'Switzerland',
        city: 'Zürich',
        stadium: {
            id: 's852',
            name: 'Letzigrund',
            city: 'Zürich',
            country: 'Switzerland',
            coordinates: { latitude: 47.3783, longitude: 8.5058 },
            clubs: ['852']
        },
        coordinates: { latitude: 47.3783, longitude: 8.5058 },
        founded: 1896,
        colors: ['#0066cc', '#ffffff']
    },
    {
        id: '853',
        name: 'Grasshopper Club Zürich',
        normalizedName: 'GRASSHOPPER CLUB ZURICH',
        shortName: 'Grasshoppers',
        country: 'Switzerland',
        city: 'Zürich',
        stadium: {
            id: 's853',
            name: 'Letzigrund',
            city: 'Zürich',
            country: 'Switzerland',
            coordinates: { latitude: 47.3783, longitude: 8.5058 },
            clubs: ['853']
        },
        coordinates: { latitude: 47.3783, longitude: 8.5058 },
        founded: 1886,
        colors: ['#0066cc', '#ffffff']
    },
    {
        id: '854',
        name: 'Servette',
        normalizedName: 'SERVETTE',
        shortName: 'Servette',
        country: 'Switzerland',
        city: 'Geneva',
        stadium: {
            id: 's854',
            name: 'Stade de Genève',
            city: 'Geneva',
            country: 'Switzerland',
            coordinates: { latitude: 46.1767, longitude: 6.1258 },
            clubs: ['854']
        },
        coordinates: { latitude: 46.1767, longitude: 6.1258 },
        founded: 1890,
        colors: ['#9c1919', '#ffffff']
    },
    {
        id: '855',
        name: 'FC Lugano',
        normalizedName: 'FC LUGANO',
        shortName: 'Lugano',
        country: 'Switzerland',
        city: 'Lugano',
        stadium: {
            id: 's855',
            name: 'Stadio di Cornaredo',
            city: 'Lugano',
            country: 'Switzerland',
            coordinates: { latitude: 46.0306, longitude: 8.9439 },
            clubs: ['855']
        },
        coordinates: { latitude: 46.0306, longitude: 8.9439 },
        founded: 1908,
        colors: ['#ffffff', '#000000']
    },
    {
        id: '856',
        name: 'FC St. Gallen',
        normalizedName: 'FC ST. GALLEN',
        shortName: 'St. Gallen',
        country: 'Switzerland',
        city: 'St. Gallen',
        stadium: {
            id: 's856',
            name: 'Kybunpark',
            city: 'St. Gallen',
            country: 'Switzerland',
            coordinates: { latitude: 47.4178, longitude: 9.3117 },
            clubs: ['856']
        },
        coordinates: { latitude: 47.4178, longitude: 9.3117 },
        founded: 1879,
        colors: ['#009a44', '#ffffff']
    },
    {
        id: '857',
        name: 'FC Sion',
        normalizedName: 'FC SION',
        shortName: 'Sion',
        country: 'Switzerland',
        city: 'Sion',
        stadium: {
            id: 's857',
            name: 'Stade de Tourbillon',
            city: 'Sion',
            country: 'Switzerland',
            coordinates: { latitude: 46.2333, longitude: 7.3633 },
            clubs: ['857']
        },
        coordinates: { latitude: 46.2333, longitude: 7.3633 },
        founded: 1909,
        colors: ['#ed1c24', '#ffffff']
    },
    {
        id: '858',
        name: 'FC Winterthur',
        normalizedName: 'FC WINTERTHUR',
        shortName: 'Winterthur',
        country: 'Switzerland',
        city: 'Winterthur',
        stadium: {
            id: 's858',
            name: 'Schützenwiese',
            city: 'Winterthur',
            country: 'Switzerland',
            coordinates: { latitude: 47.5000, longitude: 8.7333 },
            clubs: ['858']
        },
        coordinates: { latitude: 47.5000, longitude: 8.7333 },
        founded: 1896,
        colors: ['#ed1c24', '#000000']
    },
    {
        id: '859',
        name: 'Yverdon-Sport',
        normalizedName: 'YVERDON-SPORT',
        shortName: 'Yverdon',
        country: 'Switzerland',
        city: 'Yverdon-les-Bains',
        stadium: {
            id: 's859',
            name: 'Stade Municipal',
            city: 'Yverdon-les-Bains',
            country: 'Switzerland',
            coordinates: { latitude: 46.7783, longitude: 6.6411 },
            clubs: ['859']
        },
        coordinates: { latitude: 46.7783, longitude: 6.6411 },
        founded: 1897,
        colors: ['#0066cc', '#ed1c24']
    },
];
