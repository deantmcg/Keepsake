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
];
