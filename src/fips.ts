const stateFIPs = {
	'01': 'Alabama',
	'02': 'Alaska',
	'04': 'Arizona',
	'05': 'Arkansas',
	'06': 'California',
	'08': 'Colorado',
	'09': 'Connecticut',
	'10': 'Delaware',
	'11': 'District of Columbia',
	'12': 'Florida',
	'13': 'Geogia',
	'15': 'Hawaii',
	'16': 'Idaho',
	'17': 'Illinois',
	'18': 'Indiana',
	'19': 'Iowa',
	'20': 'Kansas',
	'21': 'Kentucky',
	'22': 'Louisiana',
	'23': 'Maine',
	'24': 'Maryland',
	'25': 'Massachusetts',
	'26': 'Michigan',
	'27': 'Minnesota',
	'28': 'Mississippi',
	'29': 'Missouri',
	'30': 'Montana',
	'31': 'Nebraska',
	'32': 'Nevada',
	'33': 'New Hampshire',
	'34': 'New Jersey',
	'35': 'New Mexico',
	'36': 'New York',
	'37': 'North Carolina',
	'38': 'North Dakota',
	'39': 'Ohio',
	'40': 'Oklahoma',
	'41': 'Oregon',
	'42': 'Pennsylvania',
	'44': 'Rhode Island',
	'45': 'South Carolina',
	'46': 'South Dakota',
	'47': 'Tennessee',
	'48': 'Texas',
	'49': 'Utah',
	'50': 'Vermont',
	'51': 'Virginia',
	'53': 'Washington',
	'54': 'West Virginia',
	'55': 'Wisconsin',
	'56': 'Wyoming',
};

const allFIPs = {
  "10001": {
	 "stateAbbr": "DE",
	 "name": "Kent County (DE)",
	 "stateId": "10"
  },
  "10003": {
	 "stateAbbr": "DE",
	 "name": "New Castle County (DE)",
	 "stateId": "10"
  },
  "10005": {
	 "stateAbbr": "DE",
	 "name": "Sussex County (DE)",
	 "stateId": "10"
  },
  "11001": {
	 "stateAbbr": "DC",
	 "name": "District of Columbia (DC)",
	 "stateId": "11"
  },
  "12001": {
	 "stateAbbr": "FL",
	 "name": "Alachua County (FL)",
	 "stateId": "12"
  },
  "12003": {
	 "stateAbbr": "FL",
	 "name": "Baker County (FL)",
	 "stateId": "12"
  },
  "12005": {
	 "stateAbbr": "FL",
	 "name": "Bay County (FL)",
	 "stateId": "12"
  },
  "12007": {
	 "stateAbbr": "FL",
	 "name": "Bradford County (FL)",
	 "stateId": "12"
  },
  "12009": {
	 "stateAbbr": "FL",
	 "name": "Brevard County (FL)",
	 "stateId": "12"
  },
  "12011": {
	 "stateAbbr": "FL",
	 "name": "Broward County (FL)",
	 "stateId": "12"
  },
  "12013": {
	 "stateAbbr": "FL",
	 "name": "Calhoun County (FL)",
	 "stateId": "12"
  },
  "12015": {
	 "stateAbbr": "FL",
	 "name": "Charlotte County (FL)",
	 "stateId": "12"
  },
  "12017": {
	 "stateAbbr": "FL",
	 "name": "Citrus County (FL)",
	 "stateId": "12"
  },
  "12019": {
	 "stateAbbr": "FL",
	 "name": "Clay County (FL)",
	 "stateId": "12"
  },
  "12021": {
	 "stateAbbr": "FL",
	 "name": "Collier County (FL)",
	 "stateId": "12"
  },
  "12023": {
	 "stateAbbr": "FL",
	 "name": "Columbia County (FL)",
	 "stateId": "12"
  },
  "12027": {
	 "stateAbbr": "FL",
	 "name": "DeSoto County (FL)",
	 "stateId": "12"
  },
  "12029": {
	 "stateAbbr": "FL",
	 "name": "Dixie County (FL)",
	 "stateId": "12"
  },
  "12031": {
	 "stateAbbr": "FL",
	 "name": "Duval County (FL)",
	 "stateId": "12"
  },
  "12033": {
	 "stateAbbr": "FL",
	 "name": "Escambia County (FL)",
	 "stateId": "12"
  },
  "12035": {
	 "stateAbbr": "FL",
	 "name": "Flagler County (FL)",
	 "stateId": "12"
  },
  "12037": {
	 "stateAbbr": "FL",
	 "name": "Franklin County (FL)",
	 "stateId": "12"
  },
  "12039": {
	 "stateAbbr": "FL",
	 "name": "Gadsden County (FL)",
	 "stateId": "12"
  },
  "12041": {
	 "stateAbbr": "FL",
	 "name": "Gilchrist County (FL)",
	 "stateId": "12"
  },
  "12043": {
	 "stateAbbr": "FL",
	 "name": "Glades County (FL)",
	 "stateId": "12"
  },
  "12045": {
	 "stateAbbr": "FL",
	 "name": "Gulf County (FL)",
	 "stateId": "12"
  },
  "12047": {
	 "stateAbbr": "FL",
	 "name": "Hamilton County (FL)",
	 "stateId": "12"
  },
  "12049": {
	 "stateAbbr": "FL",
	 "name": "Hardee County (FL)",
	 "stateId": "12"
  },
  "12051": {
	 "stateAbbr": "FL",
	 "name": "Hendry County (FL)",
	 "stateId": "12"
  },
  "12053": {
	 "stateAbbr": "FL",
	 "name": "Hernando County (FL)",
	 "stateId": "12"
  },
  "12055": {
	 "stateAbbr": "FL",
	 "name": "Highlands County (FL)",
	 "stateId": "12"
  },
  "12057": {
	 "stateAbbr": "FL",
	 "name": "Hillsborough County (FL)",
	 "stateId": "12"
  },
  "12059": {
	 "stateAbbr": "FL",
	 "name": "Holmes County (FL)",
	 "stateId": "12"
  },
  "12061": {
	 "stateAbbr": "FL",
	 "name": "Indian River County (FL)",
	 "stateId": "12"
  },
  "12063": {
	 "stateAbbr": "FL",
	 "name": "Jackson County (FL)",
	 "stateId": "12"
  },
  "12065": {
	 "stateAbbr": "FL",
	 "name": "Jefferson County (FL)",
	 "stateId": "12"
  },
  "12067": {
	 "stateAbbr": "FL",
	 "name": "Lafayette County (FL)",
	 "stateId": "12"
  },
  "12069": {
	 "stateAbbr": "FL",
	 "name": "Lake County (FL)",
	 "stateId": "12"
  },
  "12071": {
	 "stateAbbr": "FL",
	 "name": "Lee County (FL)",
	 "stateId": "12"
  },
  "12073": {
	 "stateAbbr": "FL",
	 "name": "Leon County (FL)",
	 "stateId": "12"
  },
  "12075": {
	 "stateAbbr": "FL",
	 "name": "Levy County (FL)",
	 "stateId": "12"
  },
  "12077": {
	 "stateAbbr": "FL",
	 "name": "Liberty County (FL)",
	 "stateId": "12"
  },
  "12079": {
	 "stateAbbr": "FL",
	 "name": "Madison County (FL)",
	 "stateId": "12"
  },
  "12081": {
	 "stateAbbr": "FL",
	 "name": "Manatee County (FL)",
	 "stateId": "12"
  },
  "12083": {
	 "stateAbbr": "FL",
	 "name": "Marion County (FL)",
	 "stateId": "12"
  },
  "12085": {
	 "stateAbbr": "FL",
	 "name": "Martin County (FL)",
	 "stateId": "12"
  },
  "12086": {
	 "stateAbbr": "FL",
	 "name": "Miami-Dade County (FL)",
	 "stateId": "12"
  },
  "12087": {
	 "stateAbbr": "FL",
	 "name": "Monroe County (FL)",
	 "stateId": "12"
  },
  "12089": {
	 "stateAbbr": "FL",
	 "name": "Nassau County (FL)",
	 "stateId": "12"
  },
  "12091": {
	 "stateAbbr": "FL",
	 "name": "Okaloosa County (FL)",
	 "stateId": "12"
  },
  "12093": {
	 "stateAbbr": "FL",
	 "name": "Okeechobee County (FL)",
	 "stateId": "12"
  },
  "12095": {
	 "stateAbbr": "FL",
	 "name": "Orange County (FL)",
	 "stateId": "12"
  },
  "12097": {
	 "stateAbbr": "FL",
	 "name": "Osceola County (FL)",
	 "stateId": "12"
  },
  "12099": {
	 "stateAbbr": "FL",
	 "name": "Palm Beach County (FL)",
	 "stateId": "12"
  },
  "12101": {
	 "stateAbbr": "FL",
	 "name": "Pasco County (FL)",
	 "stateId": "12"
  },
  "12103": {
	 "stateAbbr": "FL",
	 "name": "Pinellas County (FL)",
	 "stateId": "12"
  },
  "12105": {
	 "stateAbbr": "FL",
	 "name": "Polk County (FL)",
	 "stateId": "12"
  },
  "12107": {
	 "stateAbbr": "FL",
	 "name": "Putnam County (FL)",
	 "stateId": "12"
  },
  "12109": {
	 "stateAbbr": "FL",
	 "name": "St. Johns County (FL)",
	 "stateId": "12"
  },
  "12111": {
	 "stateAbbr": "FL",
	 "name": "St. Lucie County (FL)",
	 "stateId": "12"
  },
  "12113": {
	 "stateAbbr": "FL",
	 "name": "Santa Rosa County (FL)",
	 "stateId": "12"
  },
  "12115": {
	 "stateAbbr": "FL",
	 "name": "Sarasota County (FL)",
	 "stateId": "12"
  },
  "12117": {
	 "stateAbbr": "FL",
	 "name": "Seminole County (FL)",
	 "stateId": "12"
  },
  "12119": {
	 "stateAbbr": "FL",
	 "name": "Sumter County (FL)",
	 "stateId": "12"
  },
  "12121": {
	 "stateAbbr": "FL",
	 "name": "Suwannee County (FL)",
	 "stateId": "12"
  },
  "12123": {
	 "stateAbbr": "FL",
	 "name": "Taylor County (FL)",
	 "stateId": "12"
  },
  "12125": {
	 "stateAbbr": "FL",
	 "name": "Union County (FL)",
	 "stateId": "12"
  },
  "12127": {
	 "stateAbbr": "FL",
	 "name": "Volusia County (FL)",
	 "stateId": "12"
  },
  "12129": {
	 "stateAbbr": "FL",
	 "name": "Wakulla County (FL)",
	 "stateId": "12"
  },
  "12131": {
	 "stateAbbr": "FL",
	 "name": "Walton County (FL)",
	 "stateId": "12"
  },
  "12133": {
	 "stateAbbr": "FL",
	 "name": "Washington County (FL)",
	 "stateId": "12"
  },
  "13001": {
	 "stateAbbr": "GA",
	 "name": "Appling County (GA)",
	 "stateId": "13"
  },
  "13003": {
	 "stateAbbr": "GA",
	 "name": "Atkinson County (GA)",
	 "stateId": "13"
  },
  "13005": {
	 "stateAbbr": "GA",
	 "name": "Bacon County (GA)",
	 "stateId": "13"
  },
  "13007": {
	 "stateAbbr": "GA",
	 "name": "Baker County (GA)",
	 "stateId": "13"
  },
  "13009": {
	 "stateAbbr": "GA",
	 "name": "Baldwin County (GA)",
	 "stateId": "13"
  },
  "13011": {
	 "stateAbbr": "GA",
	 "name": "Banks County (GA)",
	 "stateId": "13"
  },
  "13013": {
	 "stateAbbr": "GA",
	 "name": "Barrow County (GA)",
	 "stateId": "13"
  },
  "13015": {
	 "stateAbbr": "GA",
	 "name": "Bartow County (GA)",
	 "stateId": "13"
  },
  "13017": {
	 "stateAbbr": "GA",
	 "name": "Ben Hill County (GA)",
	 "stateId": "13"
  },
  "13019": {
	 "stateAbbr": "GA",
	 "name": "Berrien County (GA)",
	 "stateId": "13"
  },
  "13021": {
	 "stateAbbr": "GA",
	 "name": "Bibb County (GA)",
	 "stateId": "13"
  },
  "13023": {
	 "stateAbbr": "GA",
	 "name": "Bleckley County (GA)",
	 "stateId": "13"
  },
  "13025": {
	 "stateAbbr": "GA",
	 "name": "Brantley County (GA)",
	 "stateId": "13"
  },
  "13027": {
	 "stateAbbr": "GA",
	 "name": "Brooks County (GA)",
	 "stateId": "13"
  },
  "13029": {
	 "stateAbbr": "GA",
	 "name": "Bryan County (GA)",
	 "stateId": "13"
  },
  "13031": {
	 "stateAbbr": "GA",
	 "name": "Bulloch County (GA)",
	 "stateId": "13"
  },
  "13033": {
	 "stateAbbr": "GA",
	 "name": "Burke County (GA)",
	 "stateId": "13"
  },
  "13035": {
	 "stateAbbr": "GA",
	 "name": "Butts County (GA)",
	 "stateId": "13"
  },
  "13037": {
	 "stateAbbr": "GA",
	 "name": "Calhoun County (GA)",
	 "stateId": "13"
  },
  "13039": {
	 "stateAbbr": "GA",
	 "name": "Camden County (GA)",
	 "stateId": "13"
  },
  "13043": {
	 "stateAbbr": "GA",
	 "name": "Candler County (GA)",
	 "stateId": "13"
  },
  "13045": {
	 "stateAbbr": "GA",
	 "name": "Carroll County (GA)",
	 "stateId": "13"
  },
  "13047": {
	 "stateAbbr": "GA",
	 "name": "Catoosa County (GA)",
	 "stateId": "13"
  },
  "13049": {
	 "stateAbbr": "GA",
	 "name": "Charlton County (GA)",
	 "stateId": "13"
  },
  "13051": {
	 "stateAbbr": "GA",
	 "name": "Chatham County (GA)",
	 "stateId": "13"
  },
  "13053": {
	 "stateAbbr": "GA",
	 "name": "Chattahoochee County (GA)",
	 "stateId": "13"
  },
  "13055": {
	 "stateAbbr": "GA",
	 "name": "Chattooga County (GA)",
	 "stateId": "13"
  },
  "13057": {
	 "stateAbbr": "GA",
	 "name": "Cherokee County (GA)",
	 "stateId": "13"
  },
  "13059": {
	 "stateAbbr": "GA",
	 "name": "Clarke County (GA)",
	 "stateId": "13"
  },
  "13061": {
	 "stateAbbr": "GA",
	 "name": "Clay County (GA)",
	 "stateId": "13"
  },
  "13063": {
	 "stateAbbr": "GA",
	 "name": "Clayton County (GA)",
	 "stateId": "13"
  },
  "13065": {
	 "stateAbbr": "GA",
	 "name": "Clinch County (GA)",
	 "stateId": "13"
  },
  "13067": {
	 "stateAbbr": "GA",
	 "name": "Cobb County (GA)",
	 "stateId": "13"
  },
  "13069": {
	 "stateAbbr": "GA",
	 "name": "Coffee County (GA)",
	 "stateId": "13"
  },
  "13071": {
	 "stateAbbr": "GA",
	 "name": "Colquitt County (GA)",
	 "stateId": "13"
  },
  "13073": {
	 "stateAbbr": "GA",
	 "name": "Columbia County (GA)",
	 "stateId": "13"
  },
  "13075": {
	 "stateAbbr": "GA",
	 "name": "Cook County (GA)",
	 "stateId": "13"
  },
  "13077": {
	 "stateAbbr": "GA",
	 "name": "Coweta County (GA)",
	 "stateId": "13"
  },
  "13079": {
	 "stateAbbr": "GA",
	 "name": "Crawford County (GA)",
	 "stateId": "13"
  },
  "13081": {
	 "stateAbbr": "GA",
	 "name": "Crisp County (GA)",
	 "stateId": "13"
  },
  "13083": {
	 "stateAbbr": "GA",
	 "name": "Dade County (GA)",
	 "stateId": "13"
  },
  "13085": {
	 "stateAbbr": "GA",
	 "name": "Dawson County (GA)",
	 "stateId": "13"
  },
  "13087": {
	 "stateAbbr": "GA",
	 "name": "Decatur County (GA)",
	 "stateId": "13"
  },
  "13089": {
	 "stateAbbr": "GA",
	 "name": "DeKalb County (GA)",
	 "stateId": "13"
  },
  "13091": {
	 "stateAbbr": "GA",
	 "name": "Dodge County (GA)",
	 "stateId": "13"
  },
  "13093": {
	 "stateAbbr": "GA",
	 "name": "Dooly County (GA)",
	 "stateId": "13"
  },
  "13095": {
	 "stateAbbr": "GA",
	 "name": "Dougherty County (GA)",
	 "stateId": "13"
  },
  "13097": {
	 "stateAbbr": "GA",
	 "name": "Douglas County (GA)",
	 "stateId": "13"
  },
  "13099": {
	 "stateAbbr": "GA",
	 "name": "Early County (GA)",
	 "stateId": "13"
  },
  "13101": {
	 "stateAbbr": "GA",
	 "name": "Echols County (GA)",
	 "stateId": "13"
  },
  "13103": {
	 "stateAbbr": "GA",
	 "name": "Effingham County (GA)",
	 "stateId": "13"
  },
  "13105": {
	 "stateAbbr": "GA",
	 "name": "Elbert County (GA)",
	 "stateId": "13"
  },
  "13107": {
	 "stateAbbr": "GA",
	 "name": "Emanuel County (GA)",
	 "stateId": "13"
  },
  "13109": {
	 "stateAbbr": "GA",
	 "name": "Evans County (GA)",
	 "stateId": "13"
  },
  "13111": {
	 "stateAbbr": "GA",
	 "name": "Fannin County (GA)",
	 "stateId": "13"
  },
  "13113": {
	 "stateAbbr": "GA",
	 "name": "Fayette County (GA)",
	 "stateId": "13"
  },
  "13115": {
	 "stateAbbr": "GA",
	 "name": "Floyd County (GA)",
	 "stateId": "13"
  },
  "13117": {
	 "stateAbbr": "GA",
	 "name": "Forsyth County (GA)",
	 "stateId": "13"
  },
  "13119": {
	 "stateAbbr": "GA",
	 "name": "Franklin County (GA)",
	 "stateId": "13"
  },
  "13121": {
	 "stateAbbr": "GA",
	 "name": "Fulton County (GA)",
	 "stateId": "13"
  },
  "13123": {
	 "stateAbbr": "GA",
	 "name": "Gilmer County (GA)",
	 "stateId": "13"
  },
  "13125": {
	 "stateAbbr": "GA",
	 "name": "Glascock County (GA)",
	 "stateId": "13"
  },
  "13127": {
	 "stateAbbr": "GA",
	 "name": "Glynn County (GA)",
	 "stateId": "13"
  },
  "13129": {
	 "stateAbbr": "GA",
	 "name": "Gordon County (GA)",
	 "stateId": "13"
  },
  "13131": {
	 "stateAbbr": "GA",
	 "name": "Grady County (GA)",
	 "stateId": "13"
  },
  "13133": {
	 "stateAbbr": "GA",
	 "name": "Greene County (GA)",
	 "stateId": "13"
  },
  "13135": {
	 "stateAbbr": "GA",
	 "name": "Gwinnett County (GA)",
	 "stateId": "13"
  },
  "13137": {
	 "stateAbbr": "GA",
	 "name": "Habersham County (GA)",
	 "stateId": "13"
  },
  "13139": {
	 "stateAbbr": "GA",
	 "name": "Hall County (GA)",
	 "stateId": "13"
  },
  "13141": {
	 "stateAbbr": "GA",
	 "name": "Hancock County (GA)",
	 "stateId": "13"
  },
  "13143": {
	 "stateAbbr": "GA",
	 "name": "Haralson County (GA)",
	 "stateId": "13"
  },
  "13145": {
	 "stateAbbr": "GA",
	 "name": "Harris County (GA)",
	 "stateId": "13"
  },
  "13147": {
	 "stateAbbr": "GA",
	 "name": "Hart County (GA)",
	 "stateId": "13"
  },
  "13149": {
	 "stateAbbr": "GA",
	 "name": "Heard County (GA)",
	 "stateId": "13"
  },
  "13151": {
	 "stateAbbr": "GA",
	 "name": "Henry County (GA)",
	 "stateId": "13"
  },
  "13153": {
	 "stateAbbr": "GA",
	 "name": "Houston County (GA)",
	 "stateId": "13"
  },
  "13155": {
	 "stateAbbr": "GA",
	 "name": "Irwin County (GA)",
	 "stateId": "13"
  },
  "13157": {
	 "stateAbbr": "GA",
	 "name": "Jackson County (GA)",
	 "stateId": "13"
  },
  "13159": {
	 "stateAbbr": "GA",
	 "name": "Jasper County (GA)",
	 "stateId": "13"
  },
  "13161": {
	 "stateAbbr": "GA",
	 "name": "Jeff Davis County (GA)",
	 "stateId": "13"
  },
  "13163": {
	 "stateAbbr": "GA",
	 "name": "Jefferson County (GA)",
	 "stateId": "13"
  },
  "13165": {
	 "stateAbbr": "GA",
	 "name": "Jenkins County (GA)",
	 "stateId": "13"
  },
  "13167": {
	 "stateAbbr": "GA",
	 "name": "Johnson County (GA)",
	 "stateId": "13"
  },
  "13169": {
	 "stateAbbr": "GA",
	 "name": "Jones County (GA)",
	 "stateId": "13"
  },
  "13171": {
	 "stateAbbr": "GA",
	 "name": "Lamar County (GA)",
	 "stateId": "13"
  },
  "13173": {
	 "stateAbbr": "GA",
	 "name": "Lanier County (GA)",
	 "stateId": "13"
  },
  "13175": {
	 "stateAbbr": "GA",
	 "name": "Laurens County (GA)",
	 "stateId": "13"
  },
  "13177": {
	 "stateAbbr": "GA",
	 "name": "Lee County (GA)",
	 "stateId": "13"
  },
  "13179": {
	 "stateAbbr": "GA",
	 "name": "Liberty County (GA)",
	 "stateId": "13"
  },
  "13181": {
	 "stateAbbr": "GA",
	 "name": "Lincoln County (GA)",
	 "stateId": "13"
  },
  "13183": {
	 "stateAbbr": "GA",
	 "name": "Long County (GA)",
	 "stateId": "13"
  },
  "13185": {
	 "stateAbbr": "GA",
	 "name": "Lowndes County (GA)",
	 "stateId": "13"
  },
  "13187": {
	 "stateAbbr": "GA",
	 "name": "Lumpkin County (GA)",
	 "stateId": "13"
  },
  "13189": {
	 "stateAbbr": "GA",
	 "name": "McDuffie County (GA)",
	 "stateId": "13"
  },
  "13191": {
	 "stateAbbr": "GA",
	 "name": "McIntosh County (GA)",
	 "stateId": "13"
  },
  "13193": {
	 "stateAbbr": "GA",
	 "name": "Macon County (GA)",
	 "stateId": "13"
  },
  "13195": {
	 "stateAbbr": "GA",
	 "name": "Madison County (GA)",
	 "stateId": "13"
  },
  "13197": {
	 "stateAbbr": "GA",
	 "name": "Marion County (GA)",
	 "stateId": "13"
  },
  "13199": {
	 "stateAbbr": "GA",
	 "name": "Meriwether County (GA)",
	 "stateId": "13"
  },
  "13201": {
	 "stateAbbr": "GA",
	 "name": "Miller County (GA)",
	 "stateId": "13"
  },
  "13205": {
	 "stateAbbr": "GA",
	 "name": "Mitchell County (GA)",
	 "stateId": "13"
  },
  "13207": {
	 "stateAbbr": "GA",
	 "name": "Monroe County (GA)",
	 "stateId": "13"
  },
  "13209": {
	 "stateAbbr": "GA",
	 "name": "Montgomery County (GA)",
	 "stateId": "13"
  },
  "13211": {
	 "stateAbbr": "GA",
	 "name": "Morgan County (GA)",
	 "stateId": "13"
  },
  "13213": {
	 "stateAbbr": "GA",
	 "name": "Murray County (GA)",
	 "stateId": "13"
  },
  "13215": {
	 "stateAbbr": "GA",
	 "name": "Muscogee County (GA)",
	 "stateId": "13"
  },
  "13217": {
	 "stateAbbr": "GA",
	 "name": "Newton County (GA)",
	 "stateId": "13"
  },
  "13219": {
	 "stateAbbr": "GA",
	 "name": "Oconee County (GA)",
	 "stateId": "13"
  },
  "13221": {
	 "stateAbbr": "GA",
	 "name": "Oglethorpe County (GA)",
	 "stateId": "13"
  },
  "13223": {
	 "stateAbbr": "GA",
	 "name": "Paulding County (GA)",
	 "stateId": "13"
  },
  "13225": {
	 "stateAbbr": "GA",
	 "name": "Peach County (GA)",
	 "stateId": "13"
  },
  "13227": {
	 "stateAbbr": "GA",
	 "name": "Pickens County (GA)",
	 "stateId": "13"
  },
  "13229": {
	 "stateAbbr": "GA",
	 "name": "Pierce County (GA)",
	 "stateId": "13"
  },
  "13231": {
	 "stateAbbr": "GA",
	 "name": "Pike County (GA)",
	 "stateId": "13"
  },
  "13233": {
	 "stateAbbr": "GA",
	 "name": "Polk County (GA)",
	 "stateId": "13"
  },
  "13235": {
	 "stateAbbr": "GA",
	 "name": "Pulaski County (GA)",
	 "stateId": "13"
  },
  "13237": {
	 "stateAbbr": "GA",
	 "name": "Putnam County (GA)",
	 "stateId": "13"
  },
  "13239": {
	 "stateAbbr": "GA",
	 "name": "Quitman County (GA)",
	 "stateId": "13"
  },
  "13241": {
	 "stateAbbr": "GA",
	 "name": "Rabun County (GA)",
	 "stateId": "13"
  },
  "13243": {
	 "stateAbbr": "GA",
	 "name": "Randolph County (GA)",
	 "stateId": "13"
  },
  "13245": {
	 "stateAbbr": "GA",
	 "name": "Richmond County (GA)",
	 "stateId": "13"
  },
  "13247": {
	 "stateAbbr": "GA",
	 "name": "Rockdale County (GA)",
	 "stateId": "13"
  },
  "13249": {
	 "stateAbbr": "GA",
	 "name": "Schley County (GA)",
	 "stateId": "13"
  },
  "13251": {
	 "stateAbbr": "GA",
	 "name": "Screven County (GA)",
	 "stateId": "13"
  },
  "13253": {
	 "stateAbbr": "GA",
	 "name": "Seminole County (GA)",
	 "stateId": "13"
  },
  "13255": {
	 "stateAbbr": "GA",
	 "name": "Spalding County (GA)",
	 "stateId": "13"
  },
  "13257": {
	 "stateAbbr": "GA",
	 "name": "Stephens County (GA)",
	 "stateId": "13"
  },
  "13259": {
	 "stateAbbr": "GA",
	 "name": "Stewart County (GA)",
	 "stateId": "13"
  },
  "13261": {
	 "stateAbbr": "GA",
	 "name": "Sumter County (GA)",
	 "stateId": "13"
  },
  "13263": {
	 "stateAbbr": "GA",
	 "name": "Talbot County (GA)",
	 "stateId": "13"
  },
  "13265": {
	 "stateAbbr": "GA",
	 "name": "Taliaferro County (GA)",
	 "stateId": "13"
  },
  "13267": {
	 "stateAbbr": "GA",
	 "name": "Tattnall County (GA)",
	 "stateId": "13"
  },
  "13269": {
	 "stateAbbr": "GA",
	 "name": "Taylor County (GA)",
	 "stateId": "13"
  },
  "13271": {
	 "stateAbbr": "GA",
	 "name": "Telfair County (GA)",
	 "stateId": "13"
  },
  "13273": {
	 "stateAbbr": "GA",
	 "name": "Terrell County (GA)",
	 "stateId": "13"
  },
  "13275": {
	 "stateAbbr": "GA",
	 "name": "Thomas County (GA)",
	 "stateId": "13"
  },
  "13277": {
	 "stateAbbr": "GA",
	 "name": "Tift County (GA)",
	 "stateId": "13"
  },
  "13279": {
	 "stateAbbr": "GA",
	 "name": "Toombs County (GA)",
	 "stateId": "13"
  },
  "13281": {
	 "stateAbbr": "GA",
	 "name": "Towns County (GA)",
	 "stateId": "13"
  },
  "13283": {
	 "stateAbbr": "GA",
	 "name": "Treutlen County (GA)",
	 "stateId": "13"
  },
  "13285": {
	 "stateAbbr": "GA",
	 "name": "Troup County (GA)",
	 "stateId": "13"
  },
  "13287": {
	 "stateAbbr": "GA",
	 "name": "Turner County (GA)",
	 "stateId": "13"
  },
  "13289": {
	 "stateAbbr": "GA",
	 "name": "Twiggs County (GA)",
	 "stateId": "13"
  },
  "13291": {
	 "stateAbbr": "GA",
	 "name": "Union County (GA)",
	 "stateId": "13"
  },
  "13293": {
	 "stateAbbr": "GA",
	 "name": "Upson County (GA)",
	 "stateId": "13"
  },
  "13295": {
	 "stateAbbr": "GA",
	 "name": "Walker County (GA)",
	 "stateId": "13"
  },
  "13297": {
	 "stateAbbr": "GA",
	 "name": "Walton County (GA)",
	 "stateId": "13"
  },
  "13299": {
	 "stateAbbr": "GA",
	 "name": "Ware County (GA)",
	 "stateId": "13"
  },
  "13301": {
	 "stateAbbr": "GA",
	 "name": "Warren County (GA)",
	 "stateId": "13"
  },
  "13303": {
	 "stateAbbr": "GA",
	 "name": "Washington County (GA)",
	 "stateId": "13"
  },
  "13305": {
	 "stateAbbr": "GA",
	 "name": "Wayne County (GA)",
	 "stateId": "13"
  },
  "13307": {
	 "stateAbbr": "GA",
	 "name": "Webster County (GA)",
	 "stateId": "13"
  },
  "13309": {
	 "stateAbbr": "GA",
	 "name": "Wheeler County (GA)",
	 "stateId": "13"
  },
  "13311": {
	 "stateAbbr": "GA",
	 "name": "White County (GA)",
	 "stateId": "13"
  },
  "13313": {
	 "stateAbbr": "GA",
	 "name": "Whitfield County (GA)",
	 "stateId": "13"
  },
  "13315": {
	 "stateAbbr": "GA",
	 "name": "Wilcox County (GA)",
	 "stateId": "13"
  },
  "13317": {
	 "stateAbbr": "GA",
	 "name": "Wilkes County (GA)",
	 "stateId": "13"
  },
  "13319": {
	 "stateAbbr": "GA",
	 "name": "Wilkinson County (GA)",
	 "stateId": "13"
  },
  "13321": {
	 "stateAbbr": "GA",
	 "name": "Worth County (GA)",
	 "stateId": "13"
  },
  "15001": {
	 "stateAbbr": "HI",
	 "name": "Hawaii County (HI)",
	 "stateId": "15"
  },
  "15003": {
	 "stateAbbr": "HI",
	 "name": "Honolulu County (HI)",
	 "stateId": "15"
  },
  "15005": {
	 "stateAbbr": "HI",
	 "name": "Kalawao County (HI)",
	 "stateId": "15"
  },
  "15007": {
	 "stateAbbr": "HI",
	 "name": "Kauai County (HI)",
	 "stateId": "15"
  },
  "15009": {
	 "stateAbbr": "HI",
	 "name": "Maui County (HI)",
	 "stateId": "15"
  },
  "16001": {
	 "stateAbbr": "ID",
	 "name": "Ada County (ID)",
	 "stateId": "16"
  },
  "16003": {
	 "stateAbbr": "ID",
	 "name": "Adams County (ID)",
	 "stateId": "16"
  },
  "16005": {
	 "stateAbbr": "ID",
	 "name": "Bannock County (ID)",
	 "stateId": "16"
  },
  "16007": {
	 "stateAbbr": "ID",
	 "name": "Bear Lake County (ID)",
	 "stateId": "16"
  },
  "16009": {
	 "stateAbbr": "ID",
	 "name": "Benewah County (ID)",
	 "stateId": "16"
  },
  "16011": {
	 "stateAbbr": "ID",
	 "name": "Bingham County (ID)",
	 "stateId": "16"
  },
  "16013": {
	 "stateAbbr": "ID",
	 "name": "Blaine County (ID)",
	 "stateId": "16"
  },
  "16015": {
	 "stateAbbr": "ID",
	 "name": "Boise County (ID)",
	 "stateId": "16"
  },
  "16017": {
	 "stateAbbr": "ID",
	 "name": "Bonner County (ID)",
	 "stateId": "16"
  },
  "16019": {
	 "stateAbbr": "ID",
	 "name": "Bonneville County (ID)",
	 "stateId": "16"
  },
  "16021": {
	 "stateAbbr": "ID",
	 "name": "Boundary County (ID)",
	 "stateId": "16"
  },
  "16023": {
	 "stateAbbr": "ID",
	 "name": "Butte County (ID)",
	 "stateId": "16"
  },
  "16025": {
	 "stateAbbr": "ID",
	 "name": "Camas County (ID)",
	 "stateId": "16"
  },
  "16027": {
	 "stateAbbr": "ID",
	 "name": "Canyon County (ID)",
	 "stateId": "16"
  },
  "16029": {
	 "stateAbbr": "ID",
	 "name": "Caribou County (ID)",
	 "stateId": "16"
  },
  "16031": {
	 "stateAbbr": "ID",
	 "name": "Cassia County (ID)",
	 "stateId": "16"
  },
  "16033": {
	 "stateAbbr": "ID",
	 "name": "Clark County (ID)",
	 "stateId": "16"
  },
  "16035": {
	 "stateAbbr": "ID",
	 "name": "Clearwater County (ID)",
	 "stateId": "16"
  },
  "16037": {
	 "stateAbbr": "ID",
	 "name": "Custer County (ID)",
	 "stateId": "16"
  },
  "16039": {
	 "stateAbbr": "ID",
	 "name": "Elmore County (ID)",
	 "stateId": "16"
  },
  "16041": {
	 "stateAbbr": "ID",
	 "name": "Franklin County (ID)",
	 "stateId": "16"
  },
  "16043": {
	 "stateAbbr": "ID",
	 "name": "Fremont County (ID)",
	 "stateId": "16"
  },
  "16045": {
	 "stateAbbr": "ID",
	 "name": "Gem County (ID)",
	 "stateId": "16"
  },
  "16047": {
	 "stateAbbr": "ID",
	 "name": "Gooding County (ID)",
	 "stateId": "16"
  },
  "16049": {
	 "stateAbbr": "ID",
	 "name": "Idaho County (ID)",
	 "stateId": "16"
  },
  "16051": {
	 "stateAbbr": "ID",
	 "name": "Jefferson County (ID)",
	 "stateId": "16"
  },
  "16053": {
	 "stateAbbr": "ID",
	 "name": "Jerome County (ID)",
	 "stateId": "16"
  },
  "16055": {
	 "stateAbbr": "ID",
	 "name": "Kootenai County (ID)",
	 "stateId": "16"
  },
  "16057": {
	 "stateAbbr": "ID",
	 "name": "Latah County (ID)",
	 "stateId": "16"
  },
  "16059": {
	 "stateAbbr": "ID",
	 "name": "Lemhi County (ID)",
	 "stateId": "16"
  },
  "16061": {
	 "stateAbbr": "ID",
	 "name": "Lewis County (ID)",
	 "stateId": "16"
  },
  "16063": {
	 "stateAbbr": "ID",
	 "name": "Lincoln County (ID)",
	 "stateId": "16"
  },
  "16065": {
	 "stateAbbr": "ID",
	 "name": "Madison County (ID)",
	 "stateId": "16"
  },
  "16067": {
	 "stateAbbr": "ID",
	 "name": "Minidoka County (ID)",
	 "stateId": "16"
  },
  "16069": {
	 "stateAbbr": "ID",
	 "name": "Nez Perce County (ID)",
	 "stateId": "16"
  },
  "16071": {
	 "stateAbbr": "ID",
	 "name": "Oneida County (ID)",
	 "stateId": "16"
  },
  "16073": {
	 "stateAbbr": "ID",
	 "name": "Owyhee County (ID)",
	 "stateId": "16"
  },
  "16075": {
	 "stateAbbr": "ID",
	 "name": "Payette County (ID)",
	 "stateId": "16"
  },
  "16077": {
	 "stateAbbr": "ID",
	 "name": "Power County (ID)",
	 "stateId": "16"
  },
  "16079": {
	 "stateAbbr": "ID",
	 "name": "Shoshone County (ID)",
	 "stateId": "16"
  },
  "16081": {
	 "stateAbbr": "ID",
	 "name": "Teton County (ID)",
	 "stateId": "16"
  },
  "16083": {
	 "stateAbbr": "ID",
	 "name": "Twin Falls County (ID)",
	 "stateId": "16"
  },
  "16085": {
	 "stateAbbr": "ID",
	 "name": "Valley County (ID)",
	 "stateId": "16"
  },
  "16087": {
	 "stateAbbr": "ID",
	 "name": "Washington County (ID)",
	 "stateId": "16"
  },
  "17001": {
	 "stateAbbr": "IL",
	 "name": "Adams County (IL)",
	 "stateId": "17"
  },
  "17003": {
	 "stateAbbr": "IL",
	 "name": "Alexander County (IL)",
	 "stateId": "17"
  },
  "17005": {
	 "stateAbbr": "IL",
	 "name": "Bond County (IL)",
	 "stateId": "17"
  },
  "17007": {
	 "stateAbbr": "IL",
	 "name": "Boone County (IL)",
	 "stateId": "17"
  },
  "17009": {
	 "stateAbbr": "IL",
	 "name": "Brown County (IL)",
	 "stateId": "17"
  },
  "17011": {
	 "stateAbbr": "IL",
	 "name": "Bureau County (IL)",
	 "stateId": "17"
  },
  "17013": {
	 "stateAbbr": "IL",
	 "name": "Calhoun County (IL)",
	 "stateId": "17"
  },
  "17015": {
	 "stateAbbr": "IL",
	 "name": "Carroll County (IL)",
	 "stateId": "17"
  },
  "17017": {
	 "stateAbbr": "IL",
	 "name": "Cass County (IL)",
	 "stateId": "17"
  },
  "17019": {
	 "stateAbbr": "IL",
	 "name": "Champaign County (IL)",
	 "stateId": "17"
  },
  "17021": {
	 "stateAbbr": "IL",
	 "name": "Christian County (IL)",
	 "stateId": "17"
  },
  "17023": {
	 "stateAbbr": "IL",
	 "name": "Clark County (IL)",
	 "stateId": "17"
  },
  "17025": {
	 "stateAbbr": "IL",
	 "name": "Clay County (IL)",
	 "stateId": "17"
  },
  "17027": {
	 "stateAbbr": "IL",
	 "name": "Clinton County (IL)",
	 "stateId": "17"
  },
  "17029": {
	 "stateAbbr": "IL",
	 "name": "Coles County (IL)",
	 "stateId": "17"
  },
  "17031": {
	 "stateAbbr": "IL",
	 "name": "Cook County (IL)",
	 "stateId": "17"
  },
  "17033": {
	 "stateAbbr": "IL",
	 "name": "Crawford County (IL)",
	 "stateId": "17"
  },
  "17035": {
	 "stateAbbr": "IL",
	 "name": "Cumberland County (IL)",
	 "stateId": "17"
  },
  "17037": {
	 "stateAbbr": "IL",
	 "name": "DeKalb County (IL)",
	 "stateId": "17"
  },
  "17039": {
	 "stateAbbr": "IL",
	 "name": "De Witt County (IL)",
	 "stateId": "17"
  },
  "17041": {
	 "stateAbbr": "IL",
	 "name": "Douglas County (IL)",
	 "stateId": "17"
  },
  "17043": {
	 "stateAbbr": "IL",
	 "name": "DuPage County (IL)",
	 "stateId": "17"
  },
  "17045": {
	 "stateAbbr": "IL",
	 "name": "Edgar County (IL)",
	 "stateId": "17"
  },
  "17047": {
	 "stateAbbr": "IL",
	 "name": "Edwards County (IL)",
	 "stateId": "17"
  },
  "17049": {
	 "stateAbbr": "IL",
	 "name": "Effingham County (IL)",
	 "stateId": "17"
  },
  "17051": {
	 "stateAbbr": "IL",
	 "name": "Fayette County (IL)",
	 "stateId": "17"
  },
  "17053": {
	 "stateAbbr": "IL",
	 "name": "Ford County (IL)",
	 "stateId": "17"
  },
  "17055": {
	 "stateAbbr": "IL",
	 "name": "Franklin County (IL)",
	 "stateId": "17"
  },
  "17057": {
	 "stateAbbr": "IL",
	 "name": "Fulton County (IL)",
	 "stateId": "17"
  },
  "17059": {
	 "stateAbbr": "IL",
	 "name": "Gallatin County (IL)",
	 "stateId": "17"
  },
  "17061": {
	 "stateAbbr": "IL",
	 "name": "Greene County (IL)",
	 "stateId": "17"
  },
  "17063": {
	 "stateAbbr": "IL",
	 "name": "Grundy County (IL)",
	 "stateId": "17"
  },
  "17065": {
	 "stateAbbr": "IL",
	 "name": "Hamilton County (IL)",
	 "stateId": "17"
  },
  "17067": {
	 "stateAbbr": "IL",
	 "name": "Hancock County (IL)",
	 "stateId": "17"
  },
  "17069": {
	 "stateAbbr": "IL",
	 "name": "Hardin County (IL)",
	 "stateId": "17"
  },
  "17071": {
	 "stateAbbr": "IL",
	 "name": "Henderson County (IL)",
	 "stateId": "17"
  },
  "17073": {
	 "stateAbbr": "IL",
	 "name": "Henry County (IL)",
	 "stateId": "17"
  },
  "17075": {
	 "stateAbbr": "IL",
	 "name": "Iroquois County (IL)",
	 "stateId": "17"
  },
  "17077": {
	 "stateAbbr": "IL",
	 "name": "Jackson County (IL)",
	 "stateId": "17"
  },
  "17079": {
	 "stateAbbr": "IL",
	 "name": "Jasper County (IL)",
	 "stateId": "17"
  },
  "17081": {
	 "stateAbbr": "IL",
	 "name": "Jefferson County (IL)",
	 "stateId": "17"
  },
  "17083": {
	 "stateAbbr": "IL",
	 "name": "Jersey County (IL)",
	 "stateId": "17"
  },
  "17085": {
	 "stateAbbr": "IL",
	 "name": "Jo Daviess County (IL)",
	 "stateId": "17"
  },
  "17087": {
	 "stateAbbr": "IL",
	 "name": "Johnson County (IL)",
	 "stateId": "17"
  },
  "17089": {
	 "stateAbbr": "IL",
	 "name": "Kane County (IL)",
	 "stateId": "17"
  },
  "17091": {
	 "stateAbbr": "IL",
	 "name": "Kankakee County (IL)",
	 "stateId": "17"
  },
  "17093": {
	 "stateAbbr": "IL",
	 "name": "Kendall County (IL)",
	 "stateId": "17"
  },
  "17095": {
	 "stateAbbr": "IL",
	 "name": "Knox County (IL)",
	 "stateId": "17"
  },
  "17097": {
	 "stateAbbr": "IL",
	 "name": "Lake County (IL)",
	 "stateId": "17"
  },
  "17099": {
	 "stateAbbr": "IL",
	 "name": "LaSalle County (IL)",
	 "stateId": "17"
  },
  "17101": {
	 "stateAbbr": "IL",
	 "name": "Lawrence County (IL)",
	 "stateId": "17"
  },
  "17103": {
	 "stateAbbr": "IL",
	 "name": "Lee County (IL)",
	 "stateId": "17"
  },
  "17105": {
	 "stateAbbr": "IL",
	 "name": "Livingston County (IL)",
	 "stateId": "17"
  },
  "17107": {
	 "stateAbbr": "IL",
	 "name": "Logan County (IL)",
	 "stateId": "17"
  },
  "17109": {
	 "stateAbbr": "IL",
	 "name": "McDonough County (IL)",
	 "stateId": "17"
  },
  "17111": {
	 "stateAbbr": "IL",
	 "name": "McHenry County (IL)",
	 "stateId": "17"
  },
  "17113": {
	 "stateAbbr": "IL",
	 "name": "McLean County (IL)",
	 "stateId": "17"
  },
  "17115": {
	 "stateAbbr": "IL",
	 "name": "Macon County (IL)",
	 "stateId": "17"
  },
  "17117": {
	 "stateAbbr": "IL",
	 "name": "Macoupin County (IL)",
	 "stateId": "17"
  },
  "17119": {
	 "stateAbbr": "IL",
	 "name": "Madison County (IL)",
	 "stateId": "17"
  },
  "17121": {
	 "stateAbbr": "IL",
	 "name": "Marion County (IL)",
	 "stateId": "17"
  },
  "17123": {
	 "stateAbbr": "IL",
	 "name": "Marshall County (IL)",
	 "stateId": "17"
  },
  "17125": {
	 "stateAbbr": "IL",
	 "name": "Mason County (IL)",
	 "stateId": "17"
  },
  "17127": {
	 "stateAbbr": "IL",
	 "name": "Massac County (IL)",
	 "stateId": "17"
  },
  "17129": {
	 "stateAbbr": "IL",
	 "name": "Menard County (IL)",
	 "stateId": "17"
  },
  "17131": {
	 "stateAbbr": "IL",
	 "name": "Mercer County (IL)",
	 "stateId": "17"
  },
  "17133": {
	 "stateAbbr": "IL",
	 "name": "Monroe County (IL)",
	 "stateId": "17"
  },
  "17135": {
	 "stateAbbr": "IL",
	 "name": "Montgomery County (IL)",
	 "stateId": "17"
  },
  "17137": {
	 "stateAbbr": "IL",
	 "name": "Morgan County (IL)",
	 "stateId": "17"
  },
  "17139": {
	 "stateAbbr": "IL",
	 "name": "Moultrie County (IL)",
	 "stateId": "17"
  },
  "17141": {
	 "stateAbbr": "IL",
	 "name": "Ogle County (IL)",
	 "stateId": "17"
  },
  "17143": {
	 "stateAbbr": "IL",
	 "name": "Peoria County (IL)",
	 "stateId": "17"
  },
  "17145": {
	 "stateAbbr": "IL",
	 "name": "Perry County (IL)",
	 "stateId": "17"
  },
  "17147": {
	 "stateAbbr": "IL",
	 "name": "Piatt County (IL)",
	 "stateId": "17"
  },
  "17149": {
	 "stateAbbr": "IL",
	 "name": "Pike County (IL)",
	 "stateId": "17"
  },
  "17151": {
	 "stateAbbr": "IL",
	 "name": "Pope County (IL)",
	 "stateId": "17"
  },
  "17153": {
	 "stateAbbr": "IL",
	 "name": "Pulaski County (IL)",
	 "stateId": "17"
  },
  "17155": {
	 "stateAbbr": "IL",
	 "name": "Putnam County (IL)",
	 "stateId": "17"
  },
  "17157": {
	 "stateAbbr": "IL",
	 "name": "Randolph County (IL)",
	 "stateId": "17"
  },
  "17159": {
	 "stateAbbr": "IL",
	 "name": "Richland County (IL)",
	 "stateId": "17"
  },
  "17161": {
	 "stateAbbr": "IL",
	 "name": "Rock Island County (IL)",
	 "stateId": "17"
  },
  "17163": {
	 "stateAbbr": "IL",
	 "name": "St. Clair County (IL)",
	 "stateId": "17"
  },
  "17165": {
	 "stateAbbr": "IL",
	 "name": "Saline County (IL)",
	 "stateId": "17"
  },
  "17167": {
	 "stateAbbr": "IL",
	 "name": "Sangamon County (IL)",
	 "stateId": "17"
  },
  "17169": {
	 "stateAbbr": "IL",
	 "name": "Schuyler County (IL)",
	 "stateId": "17"
  },
  "17171": {
	 "stateAbbr": "IL",
	 "name": "Scott County (IL)",
	 "stateId": "17"
  },
  "17173": {
	 "stateAbbr": "IL",
	 "name": "Shelby County (IL)",
	 "stateId": "17"
  },
  "17175": {
	 "stateAbbr": "IL",
	 "name": "Stark County (IL)",
	 "stateId": "17"
  },
  "17177": {
	 "stateAbbr": "IL",
	 "name": "Stephenson County (IL)",
	 "stateId": "17"
  },
  "17179": {
	 "stateAbbr": "IL",
	 "name": "Tazewell County (IL)",
	 "stateId": "17"
  },
  "17181": {
	 "stateAbbr": "IL",
	 "name": "Union County (IL)",
	 "stateId": "17"
  },
  "17183": {
	 "stateAbbr": "IL",
	 "name": "Vermilion County (IL)",
	 "stateId": "17"
  },
  "17185": {
	 "stateAbbr": "IL",
	 "name": "Wabash County (IL)",
	 "stateId": "17"
  },
  "17187": {
	 "stateAbbr": "IL",
	 "name": "Warren County (IL)",
	 "stateId": "17"
  },
  "17189": {
	 "stateAbbr": "IL",
	 "name": "Washington County (IL)",
	 "stateId": "17"
  },
  "17191": {
	 "stateAbbr": "IL",
	 "name": "Wayne County (IL)",
	 "stateId": "17"
  },
  "17193": {
	 "stateAbbr": "IL",
	 "name": "White County (IL)",
	 "stateId": "17"
  },
  "17195": {
	 "stateAbbr": "IL",
	 "name": "Whiteside County (IL)",
	 "stateId": "17"
  },
  "17197": {
	 "stateAbbr": "IL",
	 "name": "Will County (IL)",
	 "stateId": "17"
  },
  "17199": {
	 "stateAbbr": "IL",
	 "name": "Williamson County (IL)",
	 "stateId": "17"
  },
  "17201": {
	 "stateAbbr": "IL",
	 "name": "Winnebago County (IL)",
	 "stateId": "17"
  },
  "17203": {
	 "stateAbbr": "IL",
	 "name": "Woodford County (IL)",
	 "stateId": "17"
  },
  "18001": {
	 "stateAbbr": "IN",
	 "name": "Adams County (IN)",
	 "stateId": "18"
  },
  "18003": {
	 "stateAbbr": "IN",
	 "name": "Allen County (IN)",
	 "stateId": "18"
  },
  "18005": {
	 "stateAbbr": "IN",
	 "name": "Bartholomew County (IN)",
	 "stateId": "18"
  },
  "18007": {
	 "stateAbbr": "IN",
	 "name": "Benton County (IN)",
	 "stateId": "18"
  },
  "18009": {
	 "stateAbbr": "IN",
	 "name": "Blackford County (IN)",
	 "stateId": "18"
  },
  "18011": {
	 "stateAbbr": "IN",
	 "name": "Boone County (IN)",
	 "stateId": "18"
  },
  "18013": {
	 "stateAbbr": "IN",
	 "name": "Brown County (IN)",
	 "stateId": "18"
  },
  "18015": {
	 "stateAbbr": "IN",
	 "name": "Carroll County (IN)",
	 "stateId": "18"
  },
  "18017": {
	 "stateAbbr": "IN",
	 "name": "Cass County (IN)",
	 "stateId": "18"
  },
  "18019": {
	 "stateAbbr": "IN",
	 "name": "Clark County (IN)",
	 "stateId": "18"
  },
  "18021": {
	 "stateAbbr": "IN",
	 "name": "Clay County (IN)",
	 "stateId": "18"
  },
  "18023": {
	 "stateAbbr": "IN",
	 "name": "Clinton County (IN)",
	 "stateId": "18"
  },
  "18025": {
	 "stateAbbr": "IN",
	 "name": "Crawford County (IN)",
	 "stateId": "18"
  },
  "18027": {
	 "stateAbbr": "IN",
	 "name": "Daviess County (IN)",
	 "stateId": "18"
  },
  "18029": {
	 "stateAbbr": "IN",
	 "name": "Dearborn County (IN)",
	 "stateId": "18"
  },
  "18031": {
	 "stateAbbr": "IN",
	 "name": "Decatur County (IN)",
	 "stateId": "18"
  },
  "18033": {
	 "stateAbbr": "IN",
	 "name": "DeKalb County (IN)",
	 "stateId": "18"
  },
  "18035": {
	 "stateAbbr": "IN",
	 "name": "Delaware County (IN)",
	 "stateId": "18"
  },
  "18037": {
	 "stateAbbr": "IN",
	 "name": "Dubois County (IN)",
	 "stateId": "18"
  },
  "18039": {
	 "stateAbbr": "IN",
	 "name": "Elkhart County (IN)",
	 "stateId": "18"
  },
  "18041": {
	 "stateAbbr": "IN",
	 "name": "Fayette County (IN)",
	 "stateId": "18"
  },
  "18043": {
	 "stateAbbr": "IN",
	 "name": "Floyd County (IN)",
	 "stateId": "18"
  },
  "18045": {
	 "stateAbbr": "IN",
	 "name": "Fountain County (IN)",
	 "stateId": "18"
  },
  "18047": {
	 "stateAbbr": "IN",
	 "name": "Franklin County (IN)",
	 "stateId": "18"
  },
  "18049": {
	 "stateAbbr": "IN",
	 "name": "Fulton County (IN)",
	 "stateId": "18"
  },
  "18051": {
	 "stateAbbr": "IN",
	 "name": "Gibson County (IN)",
	 "stateId": "18"
  },
  "18053": {
	 "stateAbbr": "IN",
	 "name": "Grant County (IN)",
	 "stateId": "18"
  },
  "18055": {
	 "stateAbbr": "IN",
	 "name": "Greene County (IN)",
	 "stateId": "18"
  },
  "18057": {
	 "stateAbbr": "IN",
	 "name": "Hamilton County (IN)",
	 "stateId": "18"
  },
  "18059": {
	 "stateAbbr": "IN",
	 "name": "Hancock County (IN)",
	 "stateId": "18"
  },
  "18061": {
	 "stateAbbr": "IN",
	 "name": "Harrison County (IN)",
	 "stateId": "18"
  },
  "18063": {
	 "stateAbbr": "IN",
	 "name": "Hendricks County (IN)",
	 "stateId": "18"
  },
  "18065": {
	 "stateAbbr": "IN",
	 "name": "Henry County (IN)",
	 "stateId": "18"
  },
  "18067": {
	 "stateAbbr": "IN",
	 "name": "Howard County (IN)",
	 "stateId": "18"
  },
  "18069": {
	 "stateAbbr": "IN",
	 "name": "Huntington County (IN)",
	 "stateId": "18"
  },
  "18071": {
	 "stateAbbr": "IN",
	 "name": "Jackson County (IN)",
	 "stateId": "18"
  },
  "18073": {
	 "stateAbbr": "IN",
	 "name": "Jasper County (IN)",
	 "stateId": "18"
  },
  "18075": {
	 "stateAbbr": "IN",
	 "name": "Jay County (IN)",
	 "stateId": "18"
  },
  "18077": {
	 "stateAbbr": "IN",
	 "name": "Jefferson County (IN)",
	 "stateId": "18"
  },
  "18079": {
	 "stateAbbr": "IN",
	 "name": "Jennings County (IN)",
	 "stateId": "18"
  },
  "18081": {
	 "stateAbbr": "IN",
	 "name": "Johnson County (IN)",
	 "stateId": "18"
  },
  "18083": {
	 "stateAbbr": "IN",
	 "name": "Knox County (IN)",
	 "stateId": "18"
  },
  "18085": {
	 "stateAbbr": "IN",
	 "name": "Kosciusko County (IN)",
	 "stateId": "18"
  },
  "18087": {
	 "stateAbbr": "IN",
	 "name": "LaGrange County (IN)",
	 "stateId": "18"
  },
  "18089": {
	 "stateAbbr": "IN",
	 "name": "Lake County (IN)",
	 "stateId": "18"
  },
  "18091": {
	 "stateAbbr": "IN",
	 "name": "LaPorte County (IN)",
	 "stateId": "18"
  },
  "18093": {
	 "stateAbbr": "IN",
	 "name": "Lawrence County (IN)",
	 "stateId": "18"
  },
  "18095": {
	 "stateAbbr": "IN",
	 "name": "Madison County (IN)",
	 "stateId": "18"
  },
  "18097": {
	 "stateAbbr": "IN",
	 "name": "Marion County (IN)",
	 "stateId": "18"
  },
  "18099": {
	 "stateAbbr": "IN",
	 "name": "Marshall County (IN)",
	 "stateId": "18"
  },
  "18101": {
	 "stateAbbr": "IN",
	 "name": "Martin County (IN)",
	 "stateId": "18"
  },
  "18103": {
	 "stateAbbr": "IN",
	 "name": "Miami County (IN)",
	 "stateId": "18"
  },
  "18105": {
	 "stateAbbr": "IN",
	 "name": "Monroe County (IN)",
	 "stateId": "18"
  },
  "18107": {
	 "stateAbbr": "IN",
	 "name": "Montgomery County (IN)",
	 "stateId": "18"
  },
  "18109": {
	 "stateAbbr": "IN",
	 "name": "Morgan County (IN)",
	 "stateId": "18"
  },
  "18111": {
	 "stateAbbr": "IN",
	 "name": "Newton County (IN)",
	 "stateId": "18"
  },
  "18113": {
	 "stateAbbr": "IN",
	 "name": "Noble County (IN)",
	 "stateId": "18"
  },
  "18115": {
	 "stateAbbr": "IN",
	 "name": "Ohio County (IN)",
	 "stateId": "18"
  },
  "18117": {
	 "stateAbbr": "IN",
	 "name": "Orange County (IN)",
	 "stateId": "18"
  },
  "18119": {
	 "stateAbbr": "IN",
	 "name": "Owen County (IN)",
	 "stateId": "18"
  },
  "18121": {
	 "stateAbbr": "IN",
	 "name": "Parke County (IN)",
	 "stateId": "18"
  },
  "18123": {
	 "stateAbbr": "IN",
	 "name": "Perry County (IN)",
	 "stateId": "18"
  },
  "18125": {
	 "stateAbbr": "IN",
	 "name": "Pike County (IN)",
	 "stateId": "18"
  },
  "18127": {
	 "stateAbbr": "IN",
	 "name": "Porter County (IN)",
	 "stateId": "18"
  },
  "18129": {
	 "stateAbbr": "IN",
	 "name": "Posey County (IN)",
	 "stateId": "18"
  },
  "18131": {
	 "stateAbbr": "IN",
	 "name": "Pulaski County (IN)",
	 "stateId": "18"
  },
  "18133": {
	 "stateAbbr": "IN",
	 "name": "Putnam County (IN)",
	 "stateId": "18"
  },
  "18135": {
	 "stateAbbr": "IN",
	 "name": "Randolph County (IN)",
	 "stateId": "18"
  },
  "18137": {
	 "stateAbbr": "IN",
	 "name": "Ripley County (IN)",
	 "stateId": "18"
  },
  "18139": {
	 "stateAbbr": "IN",
	 "name": "Rush County (IN)",
	 "stateId": "18"
  },
  "18141": {
	 "stateAbbr": "IN",
	 "name": "St. Joseph County (IN)",
	 "stateId": "18"
  },
  "18143": {
	 "stateAbbr": "IN",
	 "name": "Scott County (IN)",
	 "stateId": "18"
  },
  "18145": {
	 "stateAbbr": "IN",
	 "name": "Shelby County (IN)",
	 "stateId": "18"
  },
  "18147": {
	 "stateAbbr": "IN",
	 "name": "Spencer County (IN)",
	 "stateId": "18"
  },
  "18149": {
	 "stateAbbr": "IN",
	 "name": "Starke County (IN)",
	 "stateId": "18"
  },
  "18151": {
	 "stateAbbr": "IN",
	 "name": "Steuben County (IN)",
	 "stateId": "18"
  },
  "18153": {
	 "stateAbbr": "IN",
	 "name": "Sullivan County (IN)",
	 "stateId": "18"
  },
  "18155": {
	 "stateAbbr": "IN",
	 "name": "Switzerland County (IN)",
	 "stateId": "18"
  },
  "18157": {
	 "stateAbbr": "IN",
	 "name": "Tippecanoe County (IN)",
	 "stateId": "18"
  },
  "18159": {
	 "stateAbbr": "IN",
	 "name": "Tipton County (IN)",
	 "stateId": "18"
  },
  "18161": {
	 "stateAbbr": "IN",
	 "name": "Union County (IN)",
	 "stateId": "18"
  },
  "18163": {
	 "stateAbbr": "IN",
	 "name": "Vanderburgh County (IN)",
	 "stateId": "18"
  },
  "18165": {
	 "stateAbbr": "IN",
	 "name": "Vermillion County (IN)",
	 "stateId": "18"
  },
  "18167": {
	 "stateAbbr": "IN",
	 "name": "Vigo County (IN)",
	 "stateId": "18"
  },
  "18169": {
	 "stateAbbr": "IN",
	 "name": "Wabash County (IN)",
	 "stateId": "18"
  },
  "18171": {
	 "stateAbbr": "IN",
	 "name": "Warren County (IN)",
	 "stateId": "18"
  },
  "18173": {
	 "stateAbbr": "IN",
	 "name": "Warrick County (IN)",
	 "stateId": "18"
  },
  "18175": {
	 "stateAbbr": "IN",
	 "name": "Washington County (IN)",
	 "stateId": "18"
  },
  "18177": {
	 "stateAbbr": "IN",
	 "name": "Wayne County (IN)",
	 "stateId": "18"
  },
  "18179": {
	 "stateAbbr": "IN",
	 "name": "Wells County (IN)",
	 "stateId": "18"
  },
  "18181": {
	 "stateAbbr": "IN",
	 "name": "White County (IN)",
	 "stateId": "18"
  },
  "18183": {
	 "stateAbbr": "IN",
	 "name": "Whitley County (IN)",
	 "stateId": "18"
  },
  "19001": {
	 "stateAbbr": "IA",
	 "name": "Adair County (IA)",
	 "stateId": "19"
  },
  "19003": {
	 "stateAbbr": "IA",
	 "name": "Adams County (IA)",
	 "stateId": "19"
  },
  "19005": {
	 "stateAbbr": "IA",
	 "name": "Allamakee County (IA)",
	 "stateId": "19"
  },
  "19007": {
	 "stateAbbr": "IA",
	 "name": "Appanoose County (IA)",
	 "stateId": "19"
  },
  "19009": {
	 "stateAbbr": "IA",
	 "name": "Audubon County (IA)",
	 "stateId": "19"
  },
  "19011": {
	 "stateAbbr": "IA",
	 "name": "Benton County (IA)",
	 "stateId": "19"
  },
  "19013": {
	 "stateAbbr": "IA",
	 "name": "Black Hawk County (IA)",
	 "stateId": "19"
  },
  "19015": {
	 "stateAbbr": "IA",
	 "name": "Boone County (IA)",
	 "stateId": "19"
  },
  "19017": {
	 "stateAbbr": "IA",
	 "name": "Bremer County (IA)",
	 "stateId": "19"
  },
  "19019": {
	 "stateAbbr": "IA",
	 "name": "Buchanan County (IA)",
	 "stateId": "19"
  },
  "19021": {
	 "stateAbbr": "IA",
	 "name": "Buena Vista County (IA)",
	 "stateId": "19"
  },
  "19023": {
	 "stateAbbr": "IA",
	 "name": "Butler County (IA)",
	 "stateId": "19"
  },
  "19025": {
	 "stateAbbr": "IA",
	 "name": "Calhoun County (IA)",
	 "stateId": "19"
  },
  "19027": {
	 "stateAbbr": "IA",
	 "name": "Carroll County (IA)",
	 "stateId": "19"
  },
  "19029": {
	 "stateAbbr": "IA",
	 "name": "Cass County (IA)",
	 "stateId": "19"
  },
  "19031": {
	 "stateAbbr": "IA",
	 "name": "Cedar County (IA)",
	 "stateId": "19"
  },
  "19033": {
	 "stateAbbr": "IA",
	 "name": "Cerro Gordo County (IA)",
	 "stateId": "19"
  },
  "19035": {
	 "stateAbbr": "IA",
	 "name": "Cherokee County (IA)",
	 "stateId": "19"
  },
  "19037": {
	 "stateAbbr": "IA",
	 "name": "Chickasaw County (IA)",
	 "stateId": "19"
  },
  "19039": {
	 "stateAbbr": "IA",
	 "name": "Clarke County (IA)",
	 "stateId": "19"
  },
  "19041": {
	 "stateAbbr": "IA",
	 "name": "Clay County (IA)",
	 "stateId": "19"
  },
  "19043": {
	 "stateAbbr": "IA",
	 "name": "Clayton County (IA)",
	 "stateId": "19"
  },
  "19045": {
	 "stateAbbr": "IA",
	 "name": "Clinton County (IA)",
	 "stateId": "19"
  },
  "19047": {
	 "stateAbbr": "IA",
	 "name": "Crawford County (IA)",
	 "stateId": "19"
  },
  "19049": {
	 "stateAbbr": "IA",
	 "name": "Dallas County (IA)",
	 "stateId": "19"
  },
  "19051": {
	 "stateAbbr": "IA",
	 "name": "Davis County (IA)",
	 "stateId": "19"
  },
  "19053": {
	 "stateAbbr": "IA",
	 "name": "Decatur County (IA)",
	 "stateId": "19"
  },
  "19055": {
	 "stateAbbr": "IA",
	 "name": "Delaware County (IA)",
	 "stateId": "19"
  },
  "19057": {
	 "stateAbbr": "IA",
	 "name": "Des Moines County (IA)",
	 "stateId": "19"
  },
  "19059": {
	 "stateAbbr": "IA",
	 "name": "Dickinson County (IA)",
	 "stateId": "19"
  },
  "19061": {
	 "stateAbbr": "IA",
	 "name": "Dubuque County (IA)",
	 "stateId": "19"
  },
  "19063": {
	 "stateAbbr": "IA",
	 "name": "Emmet County (IA)",
	 "stateId": "19"
  },
  "19065": {
	 "stateAbbr": "IA",
	 "name": "Fayette County (IA)",
	 "stateId": "19"
  },
  "19067": {
	 "stateAbbr": "IA",
	 "name": "Floyd County (IA)",
	 "stateId": "19"
  },
  "19069": {
	 "stateAbbr": "IA",
	 "name": "Franklin County (IA)",
	 "stateId": "19"
  },
  "19071": {
	 "stateAbbr": "IA",
	 "name": "Fremont County (IA)",
	 "stateId": "19"
  },
  "19073": {
	 "stateAbbr": "IA",
	 "name": "Greene County (IA)",
	 "stateId": "19"
  },
  "19075": {
	 "stateAbbr": "IA",
	 "name": "Grundy County (IA)",
	 "stateId": "19"
  },
  "19077": {
	 "stateAbbr": "IA",
	 "name": "Guthrie County (IA)",
	 "stateId": "19"
  },
  "19079": {
	 "stateAbbr": "IA",
	 "name": "Hamilton County (IA)",
	 "stateId": "19"
  },
  "19081": {
	 "stateAbbr": "IA",
	 "name": "Hancock County (IA)",
	 "stateId": "19"
  },
  "19083": {
	 "stateAbbr": "IA",
	 "name": "Hardin County (IA)",
	 "stateId": "19"
  },
  "19085": {
	 "stateAbbr": "IA",
	 "name": "Harrison County (IA)",
	 "stateId": "19"
  },
  "19087": {
	 "stateAbbr": "IA",
	 "name": "Henry County (IA)",
	 "stateId": "19"
  },
  "19089": {
	 "stateAbbr": "IA",
	 "name": "Howard County (IA)",
	 "stateId": "19"
  },
  "19091": {
	 "stateAbbr": "IA",
	 "name": "Humboldt County (IA)",
	 "stateId": "19"
  },
  "19093": {
	 "stateAbbr": "IA",
	 "name": "Ida County (IA)",
	 "stateId": "19"
  },
  "19095": {
	 "stateAbbr": "IA",
	 "name": "Iowa County (IA)",
	 "stateId": "19"
  },
  "19097": {
	 "stateAbbr": "IA",
	 "name": "Jackson County (IA)",
	 "stateId": "19"
  },
  "19099": {
	 "stateAbbr": "IA",
	 "name": "Jasper County (IA)",
	 "stateId": "19"
  },
  "19101": {
	 "stateAbbr": "IA",
	 "name": "Jefferson County (IA)",
	 "stateId": "19"
  },
  "19103": {
	 "stateAbbr": "IA",
	 "name": "Johnson County (IA)",
	 "stateId": "19"
  },
  "19105": {
	 "stateAbbr": "IA",
	 "name": "Jones County (IA)",
	 "stateId": "19"
  },
  "19107": {
	 "stateAbbr": "IA",
	 "name": "Keokuk County (IA)",
	 "stateId": "19"
  },
  "19109": {
	 "stateAbbr": "IA",
	 "name": "Kossuth County (IA)",
	 "stateId": "19"
  },
  "19111": {
	 "stateAbbr": "IA",
	 "name": "Lee County (IA)",
	 "stateId": "19"
  },
  "19113": {
	 "stateAbbr": "IA",
	 "name": "Linn County (IA)",
	 "stateId": "19"
  },
  "19115": {
	 "stateAbbr": "IA",
	 "name": "Louisa County (IA)",
	 "stateId": "19"
  },
  "19117": {
	 "stateAbbr": "IA",
	 "name": "Lucas County (IA)",
	 "stateId": "19"
  },
  "19119": {
	 "stateAbbr": "IA",
	 "name": "Lyon County (IA)",
	 "stateId": "19"
  },
  "19121": {
	 "stateAbbr": "IA",
	 "name": "Madison County (IA)",
	 "stateId": "19"
  },
  "19123": {
	 "stateAbbr": "IA",
	 "name": "Mahaska County (IA)",
	 "stateId": "19"
  },
  "19125": {
	 "stateAbbr": "IA",
	 "name": "Marion County (IA)",
	 "stateId": "19"
  },
  "19127": {
	 "stateAbbr": "IA",
	 "name": "Marshall County (IA)",
	 "stateId": "19"
  },
  "19129": {
	 "stateAbbr": "IA",
	 "name": "Mills County (IA)",
	 "stateId": "19"
  },
  "19131": {
	 "stateAbbr": "IA",
	 "name": "Mitchell County (IA)",
	 "stateId": "19"
  },
  "19133": {
	 "stateAbbr": "IA",
	 "name": "Monona County (IA)",
	 "stateId": "19"
  },
  "19135": {
	 "stateAbbr": "IA",
	 "name": "Monroe County (IA)",
	 "stateId": "19"
  },
  "19137": {
	 "stateAbbr": "IA",
	 "name": "Montgomery County (IA)",
	 "stateId": "19"
  },
  "19139": {
	 "stateAbbr": "IA",
	 "name": "Muscatine County (IA)",
	 "stateId": "19"
  },
  "19141": {
	 "stateAbbr": "IA",
	 "name": "O'Brien County (IA)",
	 "stateId": "19"
  },
  "19143": {
	 "stateAbbr": "IA",
	 "name": "Osceola County (IA)",
	 "stateId": "19"
  },
  "19145": {
	 "stateAbbr": "IA",
	 "name": "Page County (IA)",
	 "stateId": "19"
  },
  "19147": {
	 "stateAbbr": "IA",
	 "name": "Palo Alto County (IA)",
	 "stateId": "19"
  },
  "19149": {
	 "stateAbbr": "IA",
	 "name": "Plymouth County (IA)",
	 "stateId": "19"
  },
  "19151": {
	 "stateAbbr": "IA",
	 "name": "Pocahontas County (IA)",
	 "stateId": "19"
  },
  "19153": {
	 "stateAbbr": "IA",
	 "name": "Polk County (IA)",
	 "stateId": "19"
  },
  "19155": {
	 "stateAbbr": "IA",
	 "name": "Pottawattamie County (IA)",
	 "stateId": "19"
  },
  "19157": {
	 "stateAbbr": "IA",
	 "name": "Poweshiek County (IA)",
	 "stateId": "19"
  },
  "19159": {
	 "stateAbbr": "IA",
	 "name": "Ringgold County (IA)",
	 "stateId": "19"
  },
  "19161": {
	 "stateAbbr": "IA",
	 "name": "Sac County (IA)",
	 "stateId": "19"
  },
  "19163": {
	 "stateAbbr": "IA",
	 "name": "Scott County (IA)",
	 "stateId": "19"
  },
  "19165": {
	 "stateAbbr": "IA",
	 "name": "Shelby County (IA)",
	 "stateId": "19"
  },
  "19167": {
	 "stateAbbr": "IA",
	 "name": "Sioux County (IA)",
	 "stateId": "19"
  },
  "19169": {
	 "stateAbbr": "IA",
	 "name": "Story County (IA)",
	 "stateId": "19"
  },
  "19171": {
	 "stateAbbr": "IA",
	 "name": "Tama County (IA)",
	 "stateId": "19"
  },
  "19173": {
	 "stateAbbr": "IA",
	 "name": "Taylor County (IA)",
	 "stateId": "19"
  },
  "19175": {
	 "stateAbbr": "IA",
	 "name": "Union County (IA)",
	 "stateId": "19"
  },
  "19177": {
	 "stateAbbr": "IA",
	 "name": "Van Buren County (IA)",
	 "stateId": "19"
  },
  "19179": {
	 "stateAbbr": "IA",
	 "name": "Wapello County (IA)",
	 "stateId": "19"
  },
  "19181": {
	 "stateAbbr": "IA",
	 "name": "Warren County (IA)",
	 "stateId": "19"
  },
  "19183": {
	 "stateAbbr": "IA",
	 "name": "Washington County (IA)",
	 "stateId": "19"
  },
  "19185": {
	 "stateAbbr": "IA",
	 "name": "Wayne County (IA)",
	 "stateId": "19"
  },
  "19187": {
	 "stateAbbr": "IA",
	 "name": "Webster County (IA)",
	 "stateId": "19"
  },
  "19189": {
	 "stateAbbr": "IA",
	 "name": "Winnebago County (IA)",
	 "stateId": "19"
  },
  "19191": {
	 "stateAbbr": "IA",
	 "name": "Winneshiek County (IA)",
	 "stateId": "19"
  },
  "19193": {
	 "stateAbbr": "IA",
	 "name": "Woodbury County (IA)",
	 "stateId": "19"
  },
  "19195": {
	 "stateAbbr": "IA",
	 "name": "Worth County (IA)",
	 "stateId": "19"
  },
  "19197": {
	 "stateAbbr": "IA",
	 "name": "Wright County (IA)",
	 "stateId": "19"
  },
  "20001": {
	 "stateAbbr": "KS",
	 "name": "Allen County (KS)",
	 "stateId": "20"
  },
  "20003": {
	 "stateAbbr": "KS",
	 "name": "Anderson County (KS)",
	 "stateId": "20"
  },
  "20005": {
	 "stateAbbr": "KS",
	 "name": "Atchison County (KS)",
	 "stateId": "20"
  },
  "20007": {
	 "stateAbbr": "KS",
	 "name": "Barber County (KS)",
	 "stateId": "20"
  },
  "20009": {
	 "stateAbbr": "KS",
	 "name": "Barton County (KS)",
	 "stateId": "20"
  },
  "20011": {
	 "stateAbbr": "KS",
	 "name": "Bourbon County (KS)",
	 "stateId": "20"
  },
  "20013": {
	 "stateAbbr": "KS",
	 "name": "Brown County (KS)",
	 "stateId": "20"
  },
  "20015": {
	 "stateAbbr": "KS",
	 "name": "Butler County (KS)",
	 "stateId": "20"
  },
  "20017": {
	 "stateAbbr": "KS",
	 "name": "Chase County (KS)",
	 "stateId": "20"
  },
  "20019": {
	 "stateAbbr": "KS",
	 "name": "Chautauqua County (KS)",
	 "stateId": "20"
  },
  "20021": {
	 "stateAbbr": "KS",
	 "name": "Cherokee County (KS)",
	 "stateId": "20"
  },
  "20023": {
	 "stateAbbr": "KS",
	 "name": "Cheyenne County (KS)",
	 "stateId": "20"
  },
  "20025": {
	 "stateAbbr": "KS",
	 "name": "Clark County (KS)",
	 "stateId": "20"
  },
  "20027": {
	 "stateAbbr": "KS",
	 "name": "Clay County (KS)",
	 "stateId": "20"
  },
  "20029": {
	 "stateAbbr": "KS",
	 "name": "Cloud County (KS)",
	 "stateId": "20"
  },
  "20031": {
	 "stateAbbr": "KS",
	 "name": "Coffey County (KS)",
	 "stateId": "20"
  },
  "20033": {
	 "stateAbbr": "KS",
	 "name": "Comanche County (KS)",
	 "stateId": "20"
  },
  "20035": {
	 "stateAbbr": "KS",
	 "name": "Cowley County (KS)",
	 "stateId": "20"
  },
  "20037": {
	 "stateAbbr": "KS",
	 "name": "Crawford County (KS)",
	 "stateId": "20"
  },
  "20039": {
	 "stateAbbr": "KS",
	 "name": "Decatur County (KS)",
	 "stateId": "20"
  },
  "20041": {
	 "stateAbbr": "KS",
	 "name": "Dickinson County (KS)",
	 "stateId": "20"
  },
  "20043": {
	 "stateAbbr": "KS",
	 "name": "Doniphan County (KS)",
	 "stateId": "20"
  },
  "20045": {
	 "stateAbbr": "KS",
	 "name": "Douglas County (KS)",
	 "stateId": "20"
  },
  "20047": {
	 "stateAbbr": "KS",
	 "name": "Edwards County (KS)",
	 "stateId": "20"
  },
  "20049": {
	 "stateAbbr": "KS",
	 "name": "Elk County (KS)",
	 "stateId": "20"
  },
  "20051": {
	 "stateAbbr": "KS",
	 "name": "Ellis County (KS)",
	 "stateId": "20"
  },
  "20053": {
	 "stateAbbr": "KS",
	 "name": "Ellsworth County (KS)",
	 "stateId": "20"
  },
  "20055": {
	 "stateAbbr": "KS",
	 "name": "Finney County (KS)",
	 "stateId": "20"
  },
  "20057": {
	 "stateAbbr": "KS",
	 "name": "Ford County (KS)",
	 "stateId": "20"
  },
  "20059": {
	 "stateAbbr": "KS",
	 "name": "Franklin County (KS)",
	 "stateId": "20"
  },
  "20061": {
	 "stateAbbr": "KS",
	 "name": "Geary County (KS)",
	 "stateId": "20"
  },
  "20063": {
	 "stateAbbr": "KS",
	 "name": "Gove County (KS)",
	 "stateId": "20"
  },
  "20065": {
	 "stateAbbr": "KS",
	 "name": "Graham County (KS)",
	 "stateId": "20"
  },
  "20067": {
	 "stateAbbr": "KS",
	 "name": "Grant County (KS)",
	 "stateId": "20"
  },
  "20069": {
	 "stateAbbr": "KS",
	 "name": "Gray County (KS)",
	 "stateId": "20"
  },
  "20071": {
	 "stateAbbr": "KS",
	 "name": "Greeley County (KS)",
	 "stateId": "20"
  },
  "20073": {
	 "stateAbbr": "KS",
	 "name": "Greenwood County (KS)",
	 "stateId": "20"
  },
  "20075": {
	 "stateAbbr": "KS",
	 "name": "Hamilton County (KS)",
	 "stateId": "20"
  },
  "20077": {
	 "stateAbbr": "KS",
	 "name": "Harper County (KS)",
	 "stateId": "20"
  },
  "20079": {
	 "stateAbbr": "KS",
	 "name": "Harvey County (KS)",
	 "stateId": "20"
  },
  "20081": {
	 "stateAbbr": "KS",
	 "name": "Haskell County (KS)",
	 "stateId": "20"
  },
  "20083": {
	 "stateAbbr": "KS",
	 "name": "Hodgeman County (KS)",
	 "stateId": "20"
  },
  "20085": {
	 "stateAbbr": "KS",
	 "name": "Jackson County (KS)",
	 "stateId": "20"
  },
  "20087": {
	 "stateAbbr": "KS",
	 "name": "Jefferson County (KS)",
	 "stateId": "20"
  },
  "20089": {
	 "stateAbbr": "KS",
	 "name": "Jewell County (KS)",
	 "stateId": "20"
  },
  "20091": {
	 "stateAbbr": "KS",
	 "name": "Johnson County (KS)",
	 "stateId": "20"
  },
  "20093": {
	 "stateAbbr": "KS",
	 "name": "Kearny County (KS)",
	 "stateId": "20"
  },
  "20095": {
	 "stateAbbr": "KS",
	 "name": "Kingman County (KS)",
	 "stateId": "20"
  },
  "20097": {
	 "stateAbbr": "KS",
	 "name": "Kiowa County (KS)",
	 "stateId": "20"
  },
  "20099": {
	 "stateAbbr": "KS",
	 "name": "Labette County (KS)",
	 "stateId": "20"
  },
  "20101": {
	 "stateAbbr": "KS",
	 "name": "Lane County (KS)",
	 "stateId": "20"
  },
  "20103": {
	 "stateAbbr": "KS",
	 "name": "Leavenworth County (KS)",
	 "stateId": "20"
  },
  "20105": {
	 "stateAbbr": "KS",
	 "name": "Lincoln County (KS)",
	 "stateId": "20"
  },
  "20107": {
	 "stateAbbr": "KS",
	 "name": "Linn County (KS)",
	 "stateId": "20"
  },
  "20109": {
	 "stateAbbr": "KS",
	 "name": "Logan County (KS)",
	 "stateId": "20"
  },
  "20111": {
	 "stateAbbr": "KS",
	 "name": "Lyon County (KS)",
	 "stateId": "20"
  },
  "20113": {
	 "stateAbbr": "KS",
	 "name": "McPherson County (KS)",
	 "stateId": "20"
  },
  "20115": {
	 "stateAbbr": "KS",
	 "name": "Marion County (KS)",
	 "stateId": "20"
  },
  "20117": {
	 "stateAbbr": "KS",
	 "name": "Marshall County (KS)",
	 "stateId": "20"
  },
  "20119": {
	 "stateAbbr": "KS",
	 "name": "Meade County (KS)",
	 "stateId": "20"
  },
  "20121": {
	 "stateAbbr": "KS",
	 "name": "Miami County (KS)",
	 "stateId": "20"
  },
  "20123": {
	 "stateAbbr": "KS",
	 "name": "Mitchell County (KS)",
	 "stateId": "20"
  },
  "20125": {
	 "stateAbbr": "KS",
	 "name": "Montgomery County (KS)",
	 "stateId": "20"
  },
  "20127": {
	 "stateAbbr": "KS",
	 "name": "Morris County (KS)",
	 "stateId": "20"
  },
  "20129": {
	 "stateAbbr": "KS",
	 "name": "Morton County (KS)",
	 "stateId": "20"
  },
  "20131": {
	 "stateAbbr": "KS",
	 "name": "Nemaha County (KS)",
	 "stateId": "20"
  },
  "20133": {
	 "stateAbbr": "KS",
	 "name": "Neosho County (KS)",
	 "stateId": "20"
  },
  "20135": {
	 "stateAbbr": "KS",
	 "name": "Ness County (KS)",
	 "stateId": "20"
  },
  "20137": {
	 "stateAbbr": "KS",
	 "name": "Norton County (KS)",
	 "stateId": "20"
  },
  "20139": {
	 "stateAbbr": "KS",
	 "name": "Osage County (KS)",
	 "stateId": "20"
  },
  "20141": {
	 "stateAbbr": "KS",
	 "name": "Osborne County (KS)",
	 "stateId": "20"
  },
  "20143": {
	 "stateAbbr": "KS",
	 "name": "Ottawa County (KS)",
	 "stateId": "20"
  },
  "20145": {
	 "stateAbbr": "KS",
	 "name": "Pawnee County (KS)",
	 "stateId": "20"
  },
  "20147": {
	 "stateAbbr": "KS",
	 "name": "Phillips County (KS)",
	 "stateId": "20"
  },
  "20149": {
	 "stateAbbr": "KS",
	 "name": "Pottawatomie County (KS)",
	 "stateId": "20"
  },
  "20151": {
	 "stateAbbr": "KS",
	 "name": "Pratt County (KS)",
	 "stateId": "20"
  },
  "20153": {
	 "stateAbbr": "KS",
	 "name": "Rawlins County (KS)",
	 "stateId": "20"
  },
  "20155": {
	 "stateAbbr": "KS",
	 "name": "Reno County (KS)",
	 "stateId": "20"
  },
  "20157": {
	 "stateAbbr": "KS",
	 "name": "Republic County (KS)",
	 "stateId": "20"
  },
  "20159": {
	 "stateAbbr": "KS",
	 "name": "Rice County (KS)",
	 "stateId": "20"
  },
  "20161": {
	 "stateAbbr": "KS",
	 "name": "Riley County (KS)",
	 "stateId": "20"
  },
  "20163": {
	 "stateAbbr": "KS",
	 "name": "Rooks County (KS)",
	 "stateId": "20"
  },
  "20165": {
	 "stateAbbr": "KS",
	 "name": "Rush County (KS)",
	 "stateId": "20"
  },
  "20167": {
	 "stateAbbr": "KS",
	 "name": "Russell County (KS)",
	 "stateId": "20"
  },
  "20169": {
	 "stateAbbr": "KS",
	 "name": "Saline County (KS)",
	 "stateId": "20"
  },
  "20171": {
	 "stateAbbr": "KS",
	 "name": "Scott County (KS)",
	 "stateId": "20"
  },
  "20173": {
	 "stateAbbr": "KS",
	 "name": "Sedgwick County (KS)",
	 "stateId": "20"
  },
  "20175": {
	 "stateAbbr": "KS",
	 "name": "Seward County (KS)",
	 "stateId": "20"
  },
  "20177": {
	 "stateAbbr": "KS",
	 "name": "Shawnee County (KS)",
	 "stateId": "20"
  },
  "20179": {
	 "stateAbbr": "KS",
	 "name": "Sheridan County (KS)",
	 "stateId": "20"
  },
  "20181": {
	 "stateAbbr": "KS",
	 "name": "Sherman County (KS)",
	 "stateId": "20"
  },
  "20183": {
	 "stateAbbr": "KS",
	 "name": "Smith County (KS)",
	 "stateId": "20"
  },
  "20185": {
	 "stateAbbr": "KS",
	 "name": "Stafford County (KS)",
	 "stateId": "20"
  },
  "20187": {
	 "stateAbbr": "KS",
	 "name": "Stanton County (KS)",
	 "stateId": "20"
  },
  "20189": {
	 "stateAbbr": "KS",
	 "name": "Stevens County (KS)",
	 "stateId": "20"
  },
  "20191": {
	 "stateAbbr": "KS",
	 "name": "Sumner County (KS)",
	 "stateId": "20"
  },
  "20193": {
	 "stateAbbr": "KS",
	 "name": "Thomas County (KS)",
	 "stateId": "20"
  },
  "20195": {
	 "stateAbbr": "KS",
	 "name": "Trego County (KS)",
	 "stateId": "20"
  },
  "20197": {
	 "stateAbbr": "KS",
	 "name": "Wabaunsee County (KS)",
	 "stateId": "20"
  },
  "20199": {
	 "stateAbbr": "KS",
	 "name": "Wallace County (KS)",
	 "stateId": "20"
  },
  "20201": {
	 "stateAbbr": "KS",
	 "name": "Washington County (KS)",
	 "stateId": "20"
  },
  "20203": {
	 "stateAbbr": "KS",
	 "name": "Wichita County (KS)",
	 "stateId": "20"
  },
  "20205": {
	 "stateAbbr": "KS",
	 "name": "Wilson County (KS)",
	 "stateId": "20"
  },
  "20207": {
	 "stateAbbr": "KS",
	 "name": "Woodson County (KS)",
	 "stateId": "20"
  },
  "20209": {
	 "stateAbbr": "KS",
	 "name": "Wyandotte County (KS)",
	 "stateId": "20"
  },
  "21001": {
	 "stateAbbr": "KY",
	 "name": "Adair County (KY)",
	 "stateId": "21"
  },
  "21003": {
	 "stateAbbr": "KY",
	 "name": "Allen County (KY)",
	 "stateId": "21"
  },
  "21005": {
	 "stateAbbr": "KY",
	 "name": "Anderson County (KY)",
	 "stateId": "21"
  },
  "21007": {
	 "stateAbbr": "KY",
	 "name": "Ballard County (KY)",
	 "stateId": "21"
  },
  "21009": {
	 "stateAbbr": "KY",
	 "name": "Barren County (KY)",
	 "stateId": "21"
  },
  "21011": {
	 "stateAbbr": "KY",
	 "name": "Bath County (KY)",
	 "stateId": "21"
  },
  "21013": {
	 "stateAbbr": "KY",
	 "name": "Bell County (KY)",
	 "stateId": "21"
  },
  "21015": {
	 "stateAbbr": "KY",
	 "name": "Boone County (KY)",
	 "stateId": "21"
  },
  "21017": {
	 "stateAbbr": "KY",
	 "name": "Bourbon County (KY)",
	 "stateId": "21"
  },
  "21019": {
	 "stateAbbr": "KY",
	 "name": "Boyd County (KY)",
	 "stateId": "21"
  },
  "21021": {
	 "stateAbbr": "KY",
	 "name": "Boyle County (KY)",
	 "stateId": "21"
  },
  "21023": {
	 "stateAbbr": "KY",
	 "name": "Bracken County (KY)",
	 "stateId": "21"
  },
  "21025": {
	 "stateAbbr": "KY",
	 "name": "Breathitt County (KY)",
	 "stateId": "21"
  },
  "21027": {
	 "stateAbbr": "KY",
	 "name": "Breckinridge County (KY)",
	 "stateId": "21"
  },
  "21029": {
	 "stateAbbr": "KY",
	 "name": "Bullitt County (KY)",
	 "stateId": "21"
  },
  "21031": {
	 "stateAbbr": "KY",
	 "name": "Butler County (KY)",
	 "stateId": "21"
  },
  "21033": {
	 "stateAbbr": "KY",
	 "name": "Caldwell County (KY)",
	 "stateId": "21"
  },
  "21035": {
	 "stateAbbr": "KY",
	 "name": "Calloway County (KY)",
	 "stateId": "21"
  },
  "21037": {
	 "stateAbbr": "KY",
	 "name": "Campbell County (KY)",
	 "stateId": "21"
  },
  "21039": {
	 "stateAbbr": "KY",
	 "name": "Carlisle County (KY)",
	 "stateId": "21"
  },
  "21041": {
	 "stateAbbr": "KY",
	 "name": "Carroll County (KY)",
	 "stateId": "21"
  },
  "21043": {
	 "stateAbbr": "KY",
	 "name": "Carter County (KY)",
	 "stateId": "21"
  },
  "21045": {
	 "stateAbbr": "KY",
	 "name": "Casey County (KY)",
	 "stateId": "21"
  },
  "21047": {
	 "stateAbbr": "KY",
	 "name": "Christian County (KY)",
	 "stateId": "21"
  },
  "21049": {
	 "stateAbbr": "KY",
	 "name": "Clark County (KY)",
	 "stateId": "21"
  },
  "21051": {
	 "stateAbbr": "KY",
	 "name": "Clay County (KY)",
	 "stateId": "21"
  },
  "21053": {
	 "stateAbbr": "KY",
	 "name": "Clinton County (KY)",
	 "stateId": "21"
  },
  "21055": {
	 "stateAbbr": "KY",
	 "name": "Crittenden County (KY)",
	 "stateId": "21"
  },
  "21057": {
	 "stateAbbr": "KY",
	 "name": "Cumberland County (KY)",
	 "stateId": "21"
  },
  "21059": {
	 "stateAbbr": "KY",
	 "name": "Daviess County (KY)",
	 "stateId": "21"
  },
  "21061": {
	 "stateAbbr": "KY",
	 "name": "Edmonson County (KY)",
	 "stateId": "21"
  },
  "21063": {
	 "stateAbbr": "KY",
	 "name": "Elliott County (KY)",
	 "stateId": "21"
  },
  "21065": {
	 "stateAbbr": "KY",
	 "name": "Estill County (KY)",
	 "stateId": "21"
  },
  "21067": {
	 "stateAbbr": "KY",
	 "name": "Fayette County (KY)",
	 "stateId": "21"
  },
  "21069": {
	 "stateAbbr": "KY",
	 "name": "Fleming County (KY)",
	 "stateId": "21"
  },
  "21071": {
	 "stateAbbr": "KY",
	 "name": "Floyd County (KY)",
	 "stateId": "21"
  },
  "21073": {
	 "stateAbbr": "KY",
	 "name": "Franklin County (KY)",
	 "stateId": "21"
  },
  "21075": {
	 "stateAbbr": "KY",
	 "name": "Fulton County (KY)",
	 "stateId": "21"
  },
  "21077": {
	 "stateAbbr": "KY",
	 "name": "Gallatin County (KY)",
	 "stateId": "21"
  },
  "21079": {
	 "stateAbbr": "KY",
	 "name": "Garrard County (KY)",
	 "stateId": "21"
  },
  "21081": {
	 "stateAbbr": "KY",
	 "name": "Grant County (KY)",
	 "stateId": "21"
  },
  "21083": {
	 "stateAbbr": "KY",
	 "name": "Graves County (KY)",
	 "stateId": "21"
  },
  "21085": {
	 "stateAbbr": "KY",
	 "name": "Grayson County (KY)",
	 "stateId": "21"
  },
  "21087": {
	 "stateAbbr": "KY",
	 "name": "Green County (KY)",
	 "stateId": "21"
  },
  "21089": {
	 "stateAbbr": "KY",
	 "name": "Greenup County (KY)",
	 "stateId": "21"
  },
  "21091": {
	 "stateAbbr": "KY",
	 "name": "Hancock County (KY)",
	 "stateId": "21"
  },
  "21093": {
	 "stateAbbr": "KY",
	 "name": "Hardin County (KY)",
	 "stateId": "21"
  },
  "21095": {
	 "stateAbbr": "KY",
	 "name": "Harlan County (KY)",
	 "stateId": "21"
  },
  "21097": {
	 "stateAbbr": "KY",
	 "name": "Harrison County (KY)",
	 "stateId": "21"
  },
  "21099": {
	 "stateAbbr": "KY",
	 "name": "Hart County (KY)",
	 "stateId": "21"
  },
  "21101": {
	 "stateAbbr": "KY",
	 "name": "Henderson County (KY)",
	 "stateId": "21"
  },
  "21103": {
	 "stateAbbr": "KY",
	 "name": "Henry County (KY)",
	 "stateId": "21"
  },
  "21105": {
	 "stateAbbr": "KY",
	 "name": "Hickman County (KY)",
	 "stateId": "21"
  },
  "21107": {
	 "stateAbbr": "KY",
	 "name": "Hopkins County (KY)",
	 "stateId": "21"
  },
  "21109": {
	 "stateAbbr": "KY",
	 "name": "Jackson County (KY)",
	 "stateId": "21"
  },
  "21111": {
	 "stateAbbr": "KY",
	 "name": "Jefferson County (KY)",
	 "stateId": "21"
  },
  "21113": {
	 "stateAbbr": "KY",
	 "name": "Jessamine County (KY)",
	 "stateId": "21"
  },
  "21115": {
	 "stateAbbr": "KY",
	 "name": "Johnson County (KY)",
	 "stateId": "21"
  },
  "21117": {
	 "stateAbbr": "KY",
	 "name": "Kenton County (KY)",
	 "stateId": "21"
  },
  "21119": {
	 "stateAbbr": "KY",
	 "name": "Knott County (KY)",
	 "stateId": "21"
  },
  "21121": {
	 "stateAbbr": "KY",
	 "name": "Knox County (KY)",
	 "stateId": "21"
  },
  "21123": {
	 "stateAbbr": "KY",
	 "name": "Larue County (KY)",
	 "stateId": "21"
  },
  "21125": {
	 "stateAbbr": "KY",
	 "name": "Laurel County (KY)",
	 "stateId": "21"
  },
  "21127": {
	 "stateAbbr": "KY",
	 "name": "Lawrence County (KY)",
	 "stateId": "21"
  },
  "21129": {
	 "stateAbbr": "KY",
	 "name": "Lee County (KY)",
	 "stateId": "21"
  },
  "21131": {
	 "stateAbbr": "KY",
	 "name": "Leslie County (KY)",
	 "stateId": "21"
  },
  "21133": {
	 "stateAbbr": "KY",
	 "name": "Letcher County (KY)",
	 "stateId": "21"
  },
  "21135": {
	 "stateAbbr": "KY",
	 "name": "Lewis County (KY)",
	 "stateId": "21"
  },
  "21137": {
	 "stateAbbr": "KY",
	 "name": "Lincoln County (KY)",
	 "stateId": "21"
  },
  "21139": {
	 "stateAbbr": "KY",
	 "name": "Livingston County (KY)",
	 "stateId": "21"
  },
  "21141": {
	 "stateAbbr": "KY",
	 "name": "Logan County (KY)",
	 "stateId": "21"
  },
  "21143": {
	 "stateAbbr": "KY",
	 "name": "Lyon County (KY)",
	 "stateId": "21"
  },
  "21145": {
	 "stateAbbr": "KY",
	 "name": "McCracken County (KY)",
	 "stateId": "21"
  },
  "21147": {
	 "stateAbbr": "KY",
	 "name": "McCreary County (KY)",
	 "stateId": "21"
  },
  "21149": {
	 "stateAbbr": "KY",
	 "name": "McLean County (KY)",
	 "stateId": "21"
  },
  "21151": {
	 "stateAbbr": "KY",
	 "name": "Madison County (KY)",
	 "stateId": "21"
  },
  "21153": {
	 "stateAbbr": "KY",
	 "name": "Magoffin County (KY)",
	 "stateId": "21"
  },
  "21155": {
	 "stateAbbr": "KY",
	 "name": "Marion County (KY)",
	 "stateId": "21"
  },
  "21157": {
	 "stateAbbr": "KY",
	 "name": "Marshall County (KY)",
	 "stateId": "21"
  },
  "21159": {
	 "stateAbbr": "KY",
	 "name": "Martin County (KY)",
	 "stateId": "21"
  },
  "21161": {
	 "stateAbbr": "KY",
	 "name": "Mason County (KY)",
	 "stateId": "21"
  },
  "21163": {
	 "stateAbbr": "KY",
	 "name": "Meade County (KY)",
	 "stateId": "21"
  },
  "21165": {
	 "stateAbbr": "KY",
	 "name": "Menifee County (KY)",
	 "stateId": "21"
  },
  "21167": {
	 "stateAbbr": "KY",
	 "name": "Mercer County (KY)",
	 "stateId": "21"
  },
  "21169": {
	 "stateAbbr": "KY",
	 "name": "Metcalfe County (KY)",
	 "stateId": "21"
  },
  "21171": {
	 "stateAbbr": "KY",
	 "name": "Monroe County (KY)",
	 "stateId": "21"
  },
  "21173": {
	 "stateAbbr": "KY",
	 "name": "Montgomery County (KY)",
	 "stateId": "21"
  },
  "21175": {
	 "stateAbbr": "KY",
	 "name": "Morgan County (KY)",
	 "stateId": "21"
  },
  "21177": {
	 "stateAbbr": "KY",
	 "name": "Muhlenberg County (KY)",
	 "stateId": "21"
  },
  "21179": {
	 "stateAbbr": "KY",
	 "name": "Nelson County (KY)",
	 "stateId": "21"
  },
  "21181": {
	 "stateAbbr": "KY",
	 "name": "Nicholas County (KY)",
	 "stateId": "21"
  },
  "21183": {
	 "stateAbbr": "KY",
	 "name": "Ohio County (KY)",
	 "stateId": "21"
  },
  "21185": {
	 "stateAbbr": "KY",
	 "name": "Oldham County (KY)",
	 "stateId": "21"
  },
  "21187": {
	 "stateAbbr": "KY",
	 "name": "Owen County (KY)",
	 "stateId": "21"
  },
  "21189": {
	 "stateAbbr": "KY",
	 "name": "Owsley County (KY)",
	 "stateId": "21"
  },
  "21191": {
	 "stateAbbr": "KY",
	 "name": "Pendleton County (KY)",
	 "stateId": "21"
  },
  "21193": {
	 "stateAbbr": "KY",
	 "name": "Perry County (KY)",
	 "stateId": "21"
  },
  "21195": {
	 "stateAbbr": "KY",
	 "name": "Pike County (KY)",
	 "stateId": "21"
  },
  "21197": {
	 "stateAbbr": "KY",
	 "name": "Powell County (KY)",
	 "stateId": "21"
  },
  "21199": {
	 "stateAbbr": "KY",
	 "name": "Pulaski County (KY)",
	 "stateId": "21"
  },
  "21201": {
	 "stateAbbr": "KY",
	 "name": "Robertson County (KY)",
	 "stateId": "21"
  },
  "21203": {
	 "stateAbbr": "KY",
	 "name": "Rockcastle County (KY)",
	 "stateId": "21"
  },
  "21205": {
	 "stateAbbr": "KY",
	 "name": "Rowan County (KY)",
	 "stateId": "21"
  },
  "21207": {
	 "stateAbbr": "KY",
	 "name": "Russell County (KY)",
	 "stateId": "21"
  },
  "21209": {
	 "stateAbbr": "KY",
	 "name": "Scott County (KY)",
	 "stateId": "21"
  },
  "21211": {
	 "stateAbbr": "KY",
	 "name": "Shelby County (KY)",
	 "stateId": "21"
  },
  "21213": {
	 "stateAbbr": "KY",
	 "name": "Simpson County (KY)",
	 "stateId": "21"
  },
  "21215": {
	 "stateAbbr": "KY",
	 "name": "Spencer County (KY)",
	 "stateId": "21"
  },
  "21217": {
	 "stateAbbr": "KY",
	 "name": "Taylor County (KY)",
	 "stateId": "21"
  },
  "21219": {
	 "stateAbbr": "KY",
	 "name": "Todd County (KY)",
	 "stateId": "21"
  },
  "21221": {
	 "stateAbbr": "KY",
	 "name": "Trigg County (KY)",
	 "stateId": "21"
  },
  "21223": {
	 "stateAbbr": "KY",
	 "name": "Trimble County (KY)",
	 "stateId": "21"
  },
  "21225": {
	 "stateAbbr": "KY",
	 "name": "Union County (KY)",
	 "stateId": "21"
  },
  "21227": {
	 "stateAbbr": "KY",
	 "name": "Warren County (KY)",
	 "stateId": "21"
  },
  "21229": {
	 "stateAbbr": "KY",
	 "name": "Washington County (KY)",
	 "stateId": "21"
  },
  "21231": {
	 "stateAbbr": "KY",
	 "name": "Wayne County (KY)",
	 "stateId": "21"
  },
  "21233": {
	 "stateAbbr": "KY",
	 "name": "Webster County (KY)",
	 "stateId": "21"
  },
  "21235": {
	 "stateAbbr": "KY",
	 "name": "Whitley County (KY)",
	 "stateId": "21"
  },
  "21237": {
	 "stateAbbr": "KY",
	 "name": "Wolfe County (KY)",
	 "stateId": "21"
  },
  "21239": {
	 "stateAbbr": "KY",
	 "name": "Woodford County (KY)",
	 "stateId": "21"
  },
  "22001": {
	 "stateAbbr": "LA",
	 "name": "Acadia Parish (LA)",
	 "stateId": "22"
  },
  "22003": {
	 "stateAbbr": "LA",
	 "name": "Allen Parish (LA)",
	 "stateId": "22"
  },
  "22005": {
	 "stateAbbr": "LA",
	 "name": "Ascension Parish (LA)",
	 "stateId": "22"
  },
  "22007": {
	 "stateAbbr": "LA",
	 "name": "Assumption Parish (LA)",
	 "stateId": "22"
  },
  "22009": {
	 "stateAbbr": "LA",
	 "name": "Avoyelles Parish (LA)",
	 "stateId": "22"
  },
  "22011": {
	 "stateAbbr": "LA",
	 "name": "Beauregard Parish (LA)",
	 "stateId": "22"
  },
  "22013": {
	 "stateAbbr": "LA",
	 "name": "Bienville Parish (LA)",
	 "stateId": "22"
  },
  "22015": {
	 "stateAbbr": "LA",
	 "name": "Bossier Parish (LA)",
	 "stateId": "22"
  },
  "22017": {
	 "stateAbbr": "LA",
	 "name": "Caddo Parish (LA)",
	 "stateId": "22"
  },
  "22019": {
	 "stateAbbr": "LA",
	 "name": "Calcasieu Parish (LA)",
	 "stateId": "22"
  },
  "22021": {
	 "stateAbbr": "LA",
	 "name": "Caldwell Parish (LA)",
	 "stateId": "22"
  },
  "22023": {
	 "stateAbbr": "LA",
	 "name": "Cameron Parish (LA)",
	 "stateId": "22"
  },
  "22025": {
	 "stateAbbr": "LA",
	 "name": "Catahoula Parish (LA)",
	 "stateId": "22"
  },
  "22027": {
	 "stateAbbr": "LA",
	 "name": "Claiborne Parish (LA)",
	 "stateId": "22"
  },
  "22029": {
	 "stateAbbr": "LA",
	 "name": "Concordia Parish (LA)",
	 "stateId": "22"
  },
  "22031": {
	 "stateAbbr": "LA",
	 "name": "De Soto Parish (LA)",
	 "stateId": "22"
  },
  "22033": {
	 "stateAbbr": "LA",
	 "name": "East Baton Rouge Parish (LA)",
	 "stateId": "22"
  },
  "22035": {
	 "stateAbbr": "LA",
	 "name": "East Carroll Parish (LA)",
	 "stateId": "22"
  },
  "22037": {
	 "stateAbbr": "LA",
	 "name": "East Feliciana Parish (LA)",
	 "stateId": "22"
  },
  "22039": {
	 "stateAbbr": "LA",
	 "name": "Evangeline Parish (LA)",
	 "stateId": "22"
  },
  "22041": {
	 "stateAbbr": "LA",
	 "name": "Franklin Parish (LA)",
	 "stateId": "22"
  },
  "22043": {
	 "stateAbbr": "LA",
	 "name": "Grant Parish (LA)",
	 "stateId": "22"
  },
  "22045": {
	 "stateAbbr": "LA",
	 "name": "Iberia Parish (LA)",
	 "stateId": "22"
  },
  "22047": {
	 "stateAbbr": "LA",
	 "name": "Iberville Parish (LA)",
	 "stateId": "22"
  },
  "22049": {
	 "stateAbbr": "LA",
	 "name": "Jackson Parish (LA)",
	 "stateId": "22"
  },
  "22051": {
	 "stateAbbr": "LA",
	 "name": "Jefferson Parish (LA)",
	 "stateId": "22"
  },
  "22053": {
	 "stateAbbr": "LA",
	 "name": "Jefferson Davis Parish (LA)",
	 "stateId": "22"
  },
  "22055": {
	 "stateAbbr": "LA",
	 "name": "Lafayette Parish (LA)",
	 "stateId": "22"
  },
  "22057": {
	 "stateAbbr": "LA",
	 "name": "Lafourche Parish (LA)",
	 "stateId": "22"
  },
  "22059": {
	 "stateAbbr": "LA",
	 "name": "La Salle Parish (LA)",
	 "stateId": "22"
  },
  "22061": {
	 "stateAbbr": "LA",
	 "name": "Lincoln Parish (LA)",
	 "stateId": "22"
  },
  "22063": {
	 "stateAbbr": "LA",
	 "name": "Livingston Parish (LA)",
	 "stateId": "22"
  },
  "22065": {
	 "stateAbbr": "LA",
	 "name": "Madison Parish (LA)",
	 "stateId": "22"
  },
  "22067": {
	 "stateAbbr": "LA",
	 "name": "Morehouse Parish (LA)",
	 "stateId": "22"
  },
  "22069": {
	 "stateAbbr": "LA",
	 "name": "Natchitoches Parish (LA)",
	 "stateId": "22"
  },
  "22071": {
	 "stateAbbr": "LA",
	 "name": "Orleans Parish (LA)",
	 "stateId": "22"
  },
  "22073": {
	 "stateAbbr": "LA",
	 "name": "Ouachita Parish (LA)",
	 "stateId": "22"
  },
  "22075": {
	 "stateAbbr": "LA",
	 "name": "Plaquemines Parish (LA)",
	 "stateId": "22"
  },
  "22077": {
	 "stateAbbr": "LA",
	 "name": "Pointe Coupee Parish (LA)",
	 "stateId": "22"
  },
  "22079": {
	 "stateAbbr": "LA",
	 "name": "Rapides Parish (LA)",
	 "stateId": "22"
  },
  "22081": {
	 "stateAbbr": "LA",
	 "name": "Red River Parish (LA)",
	 "stateId": "22"
  },
  "22083": {
	 "stateAbbr": "LA",
	 "name": "Richland Parish (LA)",
	 "stateId": "22"
  },
  "22085": {
	 "stateAbbr": "LA",
	 "name": "Sabine Parish (LA)",
	 "stateId": "22"
  },
  "22087": {
	 "stateAbbr": "LA",
	 "name": "St. Bernard Parish (LA)",
	 "stateId": "22"
  },
  "22089": {
	 "stateAbbr": "LA",
	 "name": "St. Charles Parish (LA)",
	 "stateId": "22"
  },
  "22091": {
	 "stateAbbr": "LA",
	 "name": "St. Helena Parish (LA)",
	 "stateId": "22"
  },
  "22093": {
	 "stateAbbr": "LA",
	 "name": "St. James Parish (LA)",
	 "stateId": "22"
  },
  "22095": {
	 "stateAbbr": "LA",
	 "name": "St. John the Baptist Parish (LA)",
	 "stateId": "22"
  },
  "22097": {
	 "stateAbbr": "LA",
	 "name": "St. Landry Parish (LA)",
	 "stateId": "22"
  },
  "22099": {
	 "stateAbbr": "LA",
	 "name": "St. Martin Parish (LA)",
	 "stateId": "22"
  },
  "22101": {
	 "stateAbbr": "LA",
	 "name": "St. Mary Parish (LA)",
	 "stateId": "22"
  },
  "22103": {
	 "stateAbbr": "LA",
	 "name": "St. Tammany Parish (LA)",
	 "stateId": "22"
  },
  "22105": {
	 "stateAbbr": "LA",
	 "name": "Tangipahoa Parish (LA)",
	 "stateId": "22"
  },
  "22107": {
	 "stateAbbr": "LA",
	 "name": "Tensas Parish (LA)",
	 "stateId": "22"
  },
  "22109": {
	 "stateAbbr": "LA",
	 "name": "Terrebonne Parish (LA)",
	 "stateId": "22"
  },
  "22111": {
	 "stateAbbr": "LA",
	 "name": "Union Parish (LA)",
	 "stateId": "22"
  },
  "22113": {
	 "stateAbbr": "LA",
	 "name": "Vermilion Parish (LA)",
	 "stateId": "22"
  },
  "22115": {
	 "stateAbbr": "LA",
	 "name": "Vernon Parish (LA)",
	 "stateId": "22"
  },
  "22117": {
	 "stateAbbr": "LA",
	 "name": "Washington Parish (LA)",
	 "stateId": "22"
  },
  "22119": {
	 "stateAbbr": "LA",
	 "name": "Webster Parish (LA)",
	 "stateId": "22"
  },
  "22121": {
	 "stateAbbr": "LA",
	 "name": "West Baton Rouge Parish (LA)",
	 "stateId": "22"
  },
  "22123": {
	 "stateAbbr": "LA",
	 "name": "West Carroll Parish (LA)",
	 "stateId": "22"
  },
  "22125": {
	 "stateAbbr": "LA",
	 "name": "West Feliciana Parish (LA)",
	 "stateId": "22"
  },
  "22127": {
	 "stateAbbr": "LA",
	 "name": "Winn Parish (LA)",
	 "stateId": "22"
  },
  "23001": {
	 "stateAbbr": "ME",
	 "name": "Androscoggin County (ME)",
	 "stateId": "23"
  },
  "23003": {
	 "stateAbbr": "ME",
	 "name": "Aroostook County (ME)",
	 "stateId": "23"
  },
  "23005": {
	 "stateAbbr": "ME",
	 "name": "Cumberland County (ME)",
	 "stateId": "23"
  },
  "23007": {
	 "stateAbbr": "ME",
	 "name": "Franklin County (ME)",
	 "stateId": "23"
  },
  "23009": {
	 "stateAbbr": "ME",
	 "name": "Hancock County (ME)",
	 "stateId": "23"
  },
  "23011": {
	 "stateAbbr": "ME",
	 "name": "Kennebec County (ME)",
	 "stateId": "23"
  },
  "23013": {
	 "stateAbbr": "ME",
	 "name": "Knox County (ME)",
	 "stateId": "23"
  },
  "23015": {
	 "stateAbbr": "ME",
	 "name": "Lincoln County (ME)",
	 "stateId": "23"
  },
  "23017": {
	 "stateAbbr": "ME",
	 "name": "Oxford County (ME)",
	 "stateId": "23"
  },
  "23019": {
	 "stateAbbr": "ME",
	 "name": "Penobscot County (ME)",
	 "stateId": "23"
  },
  "23021": {
	 "stateAbbr": "ME",
	 "name": "Piscataquis County (ME)",
	 "stateId": "23"
  },
  "23023": {
	 "stateAbbr": "ME",
	 "name": "Sagadahoc County (ME)",
	 "stateId": "23"
  },
  "23025": {
	 "stateAbbr": "ME",
	 "name": "Somerset County (ME)",
	 "stateId": "23"
  },
  "23027": {
	 "stateAbbr": "ME",
	 "name": "Waldo County (ME)",
	 "stateId": "23"
  },
  "23029": {
	 "stateAbbr": "ME",
	 "name": "Washington County (ME)",
	 "stateId": "23"
  },
  "23031": {
	 "stateAbbr": "ME",
	 "name": "York County (ME)",
	 "stateId": "23"
  },
  "24001": {
	 "stateAbbr": "MD",
	 "name": "Allegany County (MD)",
	 "stateId": "24"
  },
  "24003": {
	 "stateAbbr": "MD",
	 "name": "Anne Arundel County (MD)",
	 "stateId": "24"
  },
  "24005": {
	 "stateAbbr": "MD",
	 "name": "Baltimore County (MD)",
	 "stateId": "24"
  },
  "24009": {
	 "stateAbbr": "MD",
	 "name": "Calvert County (MD)",
	 "stateId": "24"
  },
  "24011": {
	 "stateAbbr": "MD",
	 "name": "Caroline County (MD)",
	 "stateId": "24"
  },
  "24013": {
	 "stateAbbr": "MD",
	 "name": "Carroll County (MD)",
	 "stateId": "24"
  },
  "24015": {
	 "stateAbbr": "MD",
	 "name": "Cecil County (MD)",
	 "stateId": "24"
  },
  "24017": {
	 "stateAbbr": "MD",
	 "name": "Charles County (MD)",
	 "stateId": "24"
  },
  "24019": {
	 "stateAbbr": "MD",
	 "name": "Dorchester County (MD)",
	 "stateId": "24"
  },
  "24021": {
	 "stateAbbr": "MD",
	 "name": "Frederick County (MD)",
	 "stateId": "24"
  },
  "24023": {
	 "stateAbbr": "MD",
	 "name": "Garrett County (MD)",
	 "stateId": "24"
  },
  "24025": {
	 "stateAbbr": "MD",
	 "name": "Harford County (MD)",
	 "stateId": "24"
  },
  "24027": {
	 "stateAbbr": "MD",
	 "name": "Howard County (MD)",
	 "stateId": "24"
  },
  "24029": {
	 "stateAbbr": "MD",
	 "name": "Kent County (MD)",
	 "stateId": "24"
  },
  "24031": {
	 "stateAbbr": "MD",
	 "name": "Montgomery County (MD)",
	 "stateId": "24"
  },
  "24033": {
	 "stateAbbr": "MD",
	 "name": "Prince George's County (MD)",
	 "stateId": "24"
  },
  "24035": {
	 "stateAbbr": "MD",
	 "name": "Queen Anne's County (MD)",
	 "stateId": "24"
  },
  "24037": {
	 "stateAbbr": "MD",
	 "name": "St. Mary's County (MD)",
	 "stateId": "24"
  },
  "24039": {
	 "stateAbbr": "MD",
	 "name": "Somerset County (MD)",
	 "stateId": "24"
  },
  "24041": {
	 "stateAbbr": "MD",
	 "name": "Talbot County (MD)",
	 "stateId": "24"
  },
  "24043": {
	 "stateAbbr": "MD",
	 "name": "Washington County (MD)",
	 "stateId": "24"
  },
  "24045": {
	 "stateAbbr": "MD",
	 "name": "Wicomico County (MD)",
	 "stateId": "24"
  },
  "24047": {
	 "stateAbbr": "MD",
	 "name": "Worcester County (MD)",
	 "stateId": "24"
  },
  "24510": {
	 "stateAbbr": "MD",
	 "name": "Baltimore city (MD)",
	 "stateId": "24"
  },
  "25001": {
	 "stateAbbr": "MA",
	 "name": "Barnstable County (MA)",
	 "stateId": "25"
  },
  "25003": {
	 "stateAbbr": "MA",
	 "name": "Berkshire County (MA)",
	 "stateId": "25"
  },
  "25005": {
	 "stateAbbr": "MA",
	 "name": "Bristol County (MA)",
	 "stateId": "25"
  },
  "25007": {
	 "stateAbbr": "MA",
	 "name": "Dukes County (MA)",
	 "stateId": "25"
  },
  "25009": {
	 "stateAbbr": "MA",
	 "name": "Essex County (MA)",
	 "stateId": "25"
  },
  "25011": {
	 "stateAbbr": "MA",
	 "name": "Franklin County (MA)",
	 "stateId": "25"
  },
  "25013": {
	 "stateAbbr": "MA",
	 "name": "Hampden County (MA)",
	 "stateId": "25"
  },
  "25015": {
	 "stateAbbr": "MA",
	 "name": "Hampshire County (MA)",
	 "stateId": "25"
  },
  "25017": {
	 "stateAbbr": "MA",
	 "name": "Middlesex County (MA)",
	 "stateId": "25"
  },
  "25019": {
	 "stateAbbr": "MA",
	 "name": "Nantucket County (MA)",
	 "stateId": "25"
  },
  "25021": {
	 "stateAbbr": "MA",
	 "name": "Norfolk County (MA)",
	 "stateId": "25"
  },
  "25023": {
	 "stateAbbr": "MA",
	 "name": "Plymouth County (MA)",
	 "stateId": "25"
  },
  "25025": {
	 "stateAbbr": "MA",
	 "name": "Suffolk County (MA)",
	 "stateId": "25"
  },
  "25027": {
	 "stateAbbr": "MA",
	 "name": "Worcester County (MA)",
	 "stateId": "25"
  },
  "26001": {
	 "stateAbbr": "MI",
	 "name": "Alcona County (MI)",
	 "stateId": "26"
  },
  "26003": {
	 "stateAbbr": "MI",
	 "name": "Alger County (MI)",
	 "stateId": "26"
  },
  "26005": {
	 "stateAbbr": "MI",
	 "name": "Allegan County (MI)",
	 "stateId": "26"
  },
  "26007": {
	 "stateAbbr": "MI",
	 "name": "Alpena County (MI)",
	 "stateId": "26"
  },
  "26009": {
	 "stateAbbr": "MI",
	 "name": "Antrim County (MI)",
	 "stateId": "26"
  },
  "26011": {
	 "stateAbbr": "MI",
	 "name": "Arenac County (MI)",
	 "stateId": "26"
  },
  "26013": {
	 "stateAbbr": "MI",
	 "name": "Baraga County (MI)",
	 "stateId": "26"
  },
  "26015": {
	 "stateAbbr": "MI",
	 "name": "Barry County (MI)",
	 "stateId": "26"
  },
  "26017": {
	 "stateAbbr": "MI",
	 "name": "Bay County (MI)",
	 "stateId": "26"
  },
  "26019": {
	 "stateAbbr": "MI",
	 "name": "Benzie County (MI)",
	 "stateId": "26"
  },
  "26021": {
	 "stateAbbr": "MI",
	 "name": "Berrien County (MI)",
	 "stateId": "26"
  },
  "26023": {
	 "stateAbbr": "MI",
	 "name": "Branch County (MI)",
	 "stateId": "26"
  },
  "26025": {
	 "stateAbbr": "MI",
	 "name": "Calhoun County (MI)",
	 "stateId": "26"
  },
  "26027": {
	 "stateAbbr": "MI",
	 "name": "Cass County (MI)",
	 "stateId": "26"
  },
  "26029": {
	 "stateAbbr": "MI",
	 "name": "Charlevoix County (MI)",
	 "stateId": "26"
  },
  "26031": {
	 "stateAbbr": "MI",
	 "name": "Cheboygan County (MI)",
	 "stateId": "26"
  },
  "26033": {
	 "stateAbbr": "MI",
	 "name": "Chippewa County (MI)",
	 "stateId": "26"
  },
  "26035": {
	 "stateAbbr": "MI",
	 "name": "Clare County (MI)",
	 "stateId": "26"
  },
  "26037": {
	 "stateAbbr": "MI",
	 "name": "Clinton County (MI)",
	 "stateId": "26"
  },
  "26039": {
	 "stateAbbr": "MI",
	 "name": "Crawford County (MI)",
	 "stateId": "26"
  },
  "26041": {
	 "stateAbbr": "MI",
	 "name": "Delta County (MI)",
	 "stateId": "26"
  },
  "26043": {
	 "stateAbbr": "MI",
	 "name": "Dickinson County (MI)",
	 "stateId": "26"
  },
  "26045": {
	 "stateAbbr": "MI",
	 "name": "Eaton County (MI)",
	 "stateId": "26"
  },
  "26047": {
	 "stateAbbr": "MI",
	 "name": "Emmet County (MI)",
	 "stateId": "26"
  },
  "26049": {
	 "stateAbbr": "MI",
	 "name": "Genesee County (MI)",
	 "stateId": "26"
  },
  "26051": {
	 "stateAbbr": "MI",
	 "name": "Gladwin County (MI)",
	 "stateId": "26"
  },
  "26053": {
	 "stateAbbr": "MI",
	 "name": "Gogebic County (MI)",
	 "stateId": "26"
  },
  "26055": {
	 "stateAbbr": "MI",
	 "name": "Grand Traverse County (MI)",
	 "stateId": "26"
  },
  "26057": {
	 "stateAbbr": "MI",
	 "name": "Gratiot County (MI)",
	 "stateId": "26"
  },
  "26059": {
	 "stateAbbr": "MI",
	 "name": "Hillsdale County (MI)",
	 "stateId": "26"
  },
  "26061": {
	 "stateAbbr": "MI",
	 "name": "Houghton County (MI)",
	 "stateId": "26"
  },
  "26063": {
	 "stateAbbr": "MI",
	 "name": "Huron County (MI)",
	 "stateId": "26"
  },
  "26065": {
	 "stateAbbr": "MI",
	 "name": "Ingham County (MI)",
	 "stateId": "26"
  },
  "26067": {
	 "stateAbbr": "MI",
	 "name": "Ionia County (MI)",
	 "stateId": "26"
  },
  "26069": {
	 "stateAbbr": "MI",
	 "name": "Iosco County (MI)",
	 "stateId": "26"
  },
  "26071": {
	 "stateAbbr": "MI",
	 "name": "Iron County (MI)",
	 "stateId": "26"
  },
  "26073": {
	 "stateAbbr": "MI",
	 "name": "Isabella County (MI)",
	 "stateId": "26"
  },
  "26075": {
	 "stateAbbr": "MI",
	 "name": "Jackson County (MI)",
	 "stateId": "26"
  },
  "26077": {
	 "stateAbbr": "MI",
	 "name": "Kalamazoo County (MI)",
	 "stateId": "26"
  },
  "26079": {
	 "stateAbbr": "MI",
	 "name": "Kalkaska County (MI)",
	 "stateId": "26"
  },
  "26081": {
	 "stateAbbr": "MI",
	 "name": "Kent County (MI)",
	 "stateId": "26"
  },
  "26083": {
	 "stateAbbr": "MI",
	 "name": "Keweenaw County (MI)",
	 "stateId": "26"
  },
  "26085": {
	 "stateAbbr": "MI",
	 "name": "Lake County (MI)",
	 "stateId": "26"
  },
  "26087": {
	 "stateAbbr": "MI",
	 "name": "Lapeer County (MI)",
	 "stateId": "26"
  },
  "26089": {
	 "stateAbbr": "MI",
	 "name": "Leelanau County (MI)",
	 "stateId": "26"
  },
  "26091": {
	 "stateAbbr": "MI",
	 "name": "Lenawee County (MI)",
	 "stateId": "26"
  },
  "26093": {
	 "stateAbbr": "MI",
	 "name": "Livingston County (MI)",
	 "stateId": "26"
  },
  "26095": {
	 "stateAbbr": "MI",
	 "name": "Luce County (MI)",
	 "stateId": "26"
  },
  "26097": {
	 "stateAbbr": "MI",
	 "name": "Mackinac County (MI)",
	 "stateId": "26"
  },
  "26099": {
	 "stateAbbr": "MI",
	 "name": "Macomb County (MI)",
	 "stateId": "26"
  },
  "26101": {
	 "stateAbbr": "MI",
	 "name": "Manistee County (MI)",
	 "stateId": "26"
  },
  "26103": {
	 "stateAbbr": "MI",
	 "name": "Marquette County (MI)",
	 "stateId": "26"
  },
  "26105": {
	 "stateAbbr": "MI",
	 "name": "Mason County (MI)",
	 "stateId": "26"
  },
  "26107": {
	 "stateAbbr": "MI",
	 "name": "Mecosta County (MI)",
	 "stateId": "26"
  },
  "26109": {
	 "stateAbbr": "MI",
	 "name": "Menominee County (MI)",
	 "stateId": "26"
  },
  "26111": {
	 "stateAbbr": "MI",
	 "name": "Midland County (MI)",
	 "stateId": "26"
  },
  "26113": {
	 "stateAbbr": "MI",
	 "name": "Missaukee County (MI)",
	 "stateId": "26"
  },
  "26115": {
	 "stateAbbr": "MI",
	 "name": "Monroe County (MI)",
	 "stateId": "26"
  },
  "26117": {
	 "stateAbbr": "MI",
	 "name": "Montcalm County (MI)",
	 "stateId": "26"
  },
  "26119": {
	 "stateAbbr": "MI",
	 "name": "Montmorency County (MI)",
	 "stateId": "26"
  },
  "26121": {
	 "stateAbbr": "MI",
	 "name": "Muskegon County (MI)",
	 "stateId": "26"
  },
  "26123": {
	 "stateAbbr": "MI",
	 "name": "Newaygo County (MI)",
	 "stateId": "26"
  },
  "26125": {
	 "stateAbbr": "MI",
	 "name": "Oakland County (MI)",
	 "stateId": "26"
  },
  "26127": {
	 "stateAbbr": "MI",
	 "name": "Oceana County (MI)",
	 "stateId": "26"
  },
  "26129": {
	 "stateAbbr": "MI",
	 "name": "Ogemaw County (MI)",
	 "stateId": "26"
  },
  "26131": {
	 "stateAbbr": "MI",
	 "name": "Ontonagon County (MI)",
	 "stateId": "26"
  },
  "26133": {
	 "stateAbbr": "MI",
	 "name": "Osceola County (MI)",
	 "stateId": "26"
  },
  "26135": {
	 "stateAbbr": "MI",
	 "name": "Oscoda County (MI)",
	 "stateId": "26"
  },
  "26137": {
	 "stateAbbr": "MI",
	 "name": "Otsego County (MI)",
	 "stateId": "26"
  },
  "26139": {
	 "stateAbbr": "MI",
	 "name": "Ottawa County (MI)",
	 "stateId": "26"
  },
  "26141": {
	 "stateAbbr": "MI",
	 "name": "Presque Isle County (MI)",
	 "stateId": "26"
  },
  "26143": {
	 "stateAbbr": "MI",
	 "name": "Roscommon County (MI)",
	 "stateId": "26"
  },
  "26145": {
	 "stateAbbr": "MI",
	 "name": "Saginaw County (MI)",
	 "stateId": "26"
  },
  "26147": {
	 "stateAbbr": "MI",
	 "name": "St. Clair County (MI)",
	 "stateId": "26"
  },
  "26149": {
	 "stateAbbr": "MI",
	 "name": "St. Joseph County (MI)",
	 "stateId": "26"
  },
  "26151": {
	 "stateAbbr": "MI",
	 "name": "Sanilac County (MI)",
	 "stateId": "26"
  },
  "26153": {
	 "stateAbbr": "MI",
	 "name": "Schoolcraft County (MI)",
	 "stateId": "26"
  },
  "26155": {
	 "stateAbbr": "MI",
	 "name": "Shiawassee County (MI)",
	 "stateId": "26"
  },
  "26157": {
	 "stateAbbr": "MI",
	 "name": "Tuscola County (MI)",
	 "stateId": "26"
  },
  "26159": {
	 "stateAbbr": "MI",
	 "name": "Van Buren County (MI)",
	 "stateId": "26"
  },
  "26161": {
	 "stateAbbr": "MI",
	 "name": "Washtenaw County (MI)",
	 "stateId": "26"
  },
  "26163": {
	 "stateAbbr": "MI",
	 "name": "Wayne County (MI)",
	 "stateId": "26"
  },
  "26165": {
	 "stateAbbr": "MI",
	 "name": "Wexford County (MI)",
	 "stateId": "26"
  },
  "27001": {
	 "stateAbbr": "MN",
	 "name": "Aitkin County (MN)",
	 "stateId": "27"
  },
  "27003": {
	 "stateAbbr": "MN",
	 "name": "Anoka County (MN)",
	 "stateId": "27"
  },
  "27005": {
	 "stateAbbr": "MN",
	 "name": "Becker County (MN)",
	 "stateId": "27"
  },
  "27007": {
	 "stateAbbr": "MN",
	 "name": "Beltrami County (MN)",
	 "stateId": "27"
  },
  "27009": {
	 "stateAbbr": "MN",
	 "name": "Benton County (MN)",
	 "stateId": "27"
  },
  "27011": {
	 "stateAbbr": "MN",
	 "name": "Big Stone County (MN)",
	 "stateId": "27"
  },
  "27013": {
	 "stateAbbr": "MN",
	 "name": "Blue Earth County (MN)",
	 "stateId": "27"
  },
  "27015": {
	 "stateAbbr": "MN",
	 "name": "Brown County (MN)",
	 "stateId": "27"
  },
  "27017": {
	 "stateAbbr": "MN",
	 "name": "Carlton County (MN)",
	 "stateId": "27"
  },
  "27019": {
	 "stateAbbr": "MN",
	 "name": "Carver County (MN)",
	 "stateId": "27"
  },
  "27021": {
	 "stateAbbr": "MN",
	 "name": "Cass County (MN)",
	 "stateId": "27"
  },
  "27023": {
	 "stateAbbr": "MN",
	 "name": "Chippewa County (MN)",
	 "stateId": "27"
  },
  "27025": {
	 "stateAbbr": "MN",
	 "name": "Chisago County (MN)",
	 "stateId": "27"
  },
  "27027": {
	 "stateAbbr": "MN",
	 "name": "Clay County (MN)",
	 "stateId": "27"
  },
  "27029": {
	 "stateAbbr": "MN",
	 "name": "Clearwater County (MN)",
	 "stateId": "27"
  },
  "27031": {
	 "stateAbbr": "MN",
	 "name": "Cook County (MN)",
	 "stateId": "27"
  },
  "27033": {
	 "stateAbbr": "MN",
	 "name": "Cottonwood County (MN)",
	 "stateId": "27"
  },
  "27035": {
	 "stateAbbr": "MN",
	 "name": "Crow Wing County (MN)",
	 "stateId": "27"
  },
  "27037": {
	 "stateAbbr": "MN",
	 "name": "Dakota County (MN)",
	 "stateId": "27"
  },
  "27039": {
	 "stateAbbr": "MN",
	 "name": "Dodge County (MN)",
	 "stateId": "27"
  },
  "27041": {
	 "stateAbbr": "MN",
	 "name": "Douglas County (MN)",
	 "stateId": "27"
  },
  "27043": {
	 "stateAbbr": "MN",
	 "name": "Faribault County (MN)",
	 "stateId": "27"
  },
  "27045": {
	 "stateAbbr": "MN",
	 "name": "Fillmore County (MN)",
	 "stateId": "27"
  },
  "27047": {
	 "stateAbbr": "MN",
	 "name": "Freeborn County (MN)",
	 "stateId": "27"
  },
  "27049": {
	 "stateAbbr": "MN",
	 "name": "Goodhue County (MN)",
	 "stateId": "27"
  },
  "27051": {
	 "stateAbbr": "MN",
	 "name": "Grant County (MN)",
	 "stateId": "27"
  },
  "27053": {
	 "stateAbbr": "MN",
	 "name": "Hennepin County (MN)",
	 "stateId": "27"
  },
  "27055": {
	 "stateAbbr": "MN",
	 "name": "Houston County (MN)",
	 "stateId": "27"
  },
  "27057": {
	 "stateAbbr": "MN",
	 "name": "Hubbard County (MN)",
	 "stateId": "27"
  },
  "27059": {
	 "stateAbbr": "MN",
	 "name": "Isanti County (MN)",
	 "stateId": "27"
  },
  "27061": {
	 "stateAbbr": "MN",
	 "name": "Itasca County (MN)",
	 "stateId": "27"
  },
  "27063": {
	 "stateAbbr": "MN",
	 "name": "Jackson County (MN)",
	 "stateId": "27"
  },
  "27065": {
	 "stateAbbr": "MN",
	 "name": "Kanabec County (MN)",
	 "stateId": "27"
  },
  "27067": {
	 "stateAbbr": "MN",
	 "name": "Kandiyohi County (MN)",
	 "stateId": "27"
  },
  "27069": {
	 "stateAbbr": "MN",
	 "name": "Kittson County (MN)",
	 "stateId": "27"
  },
  "27071": {
	 "stateAbbr": "MN",
	 "name": "Koochiching County (MN)",
	 "stateId": "27"
  },
  "27073": {
	 "stateAbbr": "MN",
	 "name": "Lac qui Parle County (MN)",
	 "stateId": "27"
  },
  "27075": {
	 "stateAbbr": "MN",
	 "name": "Lake County (MN)",
	 "stateId": "27"
  },
  "27077": {
	 "stateAbbr": "MN",
	 "name": "Lake of the Woods County (MN)",
	 "stateId": "27"
  },
  "27079": {
	 "stateAbbr": "MN",
	 "name": "Le Sueur County (MN)",
	 "stateId": "27"
  },
  "27081": {
	 "stateAbbr": "MN",
	 "name": "Lincoln County (MN)",
	 "stateId": "27"
  },
  "27083": {
	 "stateAbbr": "MN",
	 "name": "Lyon County (MN)",
	 "stateId": "27"
  },
  "27085": {
	 "stateAbbr": "MN",
	 "name": "McLeod County (MN)",
	 "stateId": "27"
  },
  "27087": {
	 "stateAbbr": "MN",
	 "name": "Mahnomen County (MN)",
	 "stateId": "27"
  },
  "27089": {
	 "stateAbbr": "MN",
	 "name": "Marshall County (MN)",
	 "stateId": "27"
  },
  "27091": {
	 "stateAbbr": "MN",
	 "name": "Martin County (MN)",
	 "stateId": "27"
  },
  "27093": {
	 "stateAbbr": "MN",
	 "name": "Meeker County (MN)",
	 "stateId": "27"
  },
  "27095": {
	 "stateAbbr": "MN",
	 "name": "Mille Lacs County (MN)",
	 "stateId": "27"
  },
  "27097": {
	 "stateAbbr": "MN",
	 "name": "Morrison County (MN)",
	 "stateId": "27"
  },
  "27099": {
	 "stateAbbr": "MN",
	 "name": "Mower County (MN)",
	 "stateId": "27"
  },
  "27101": {
	 "stateAbbr": "MN",
	 "name": "Murray County (MN)",
	 "stateId": "27"
  },
  "27103": {
	 "stateAbbr": "MN",
	 "name": "Nicollet County (MN)",
	 "stateId": "27"
  },
  "27105": {
	 "stateAbbr": "MN",
	 "name": "Nobles County (MN)",
	 "stateId": "27"
  },
  "27107": {
	 "stateAbbr": "MN",
	 "name": "Norman County (MN)",
	 "stateId": "27"
  },
  "27109": {
	 "stateAbbr": "MN",
	 "name": "Olmsted County (MN)",
	 "stateId": "27"
  },
  "27111": {
	 "stateAbbr": "MN",
	 "name": "Otter Tail County (MN)",
	 "stateId": "27"
  },
  "27113": {
	 "stateAbbr": "MN",
	 "name": "Pennington County (MN)",
	 "stateId": "27"
  },
  "27115": {
	 "stateAbbr": "MN",
	 "name": "Pine County (MN)",
	 "stateId": "27"
  },
  "27117": {
	 "stateAbbr": "MN",
	 "name": "Pipestone County (MN)",
	 "stateId": "27"
  },
  "27119": {
	 "stateAbbr": "MN",
	 "name": "Polk County (MN)",
	 "stateId": "27"
  },
  "27121": {
	 "stateAbbr": "MN",
	 "name": "Pope County (MN)",
	 "stateId": "27"
  },
  "27123": {
	 "stateAbbr": "MN",
	 "name": "Ramsey County (MN)",
	 "stateId": "27"
  },
  "27125": {
	 "stateAbbr": "MN",
	 "name": "Red Lake County (MN)",
	 "stateId": "27"
  },
  "27127": {
	 "stateAbbr": "MN",
	 "name": "Redwood County (MN)",
	 "stateId": "27"
  },
  "27129": {
	 "stateAbbr": "MN",
	 "name": "Renville County (MN)",
	 "stateId": "27"
  },
  "27131": {
	 "stateAbbr": "MN",
	 "name": "Rice County (MN)",
	 "stateId": "27"
  },
  "27133": {
	 "stateAbbr": "MN",
	 "name": "Rock County (MN)",
	 "stateId": "27"
  },
  "27135": {
	 "stateAbbr": "MN",
	 "name": "Roseau County (MN)",
	 "stateId": "27"
  },
  "27137": {
	 "stateAbbr": "MN",
	 "name": "St. Louis County (MN)",
	 "stateId": "27"
  },
  "27139": {
	 "stateAbbr": "MN",
	 "name": "Scott County (MN)",
	 "stateId": "27"
  },
  "27141": {
	 "stateAbbr": "MN",
	 "name": "Sherburne County (MN)",
	 "stateId": "27"
  },
  "27143": {
	 "stateAbbr": "MN",
	 "name": "Sibley County (MN)",
	 "stateId": "27"
  },
  "27145": {
	 "stateAbbr": "MN",
	 "name": "Stearns County (MN)",
	 "stateId": "27"
  },
  "27147": {
	 "stateAbbr": "MN",
	 "name": "Steele County (MN)",
	 "stateId": "27"
  },
  "27149": {
	 "stateAbbr": "MN",
	 "name": "Stevens County (MN)",
	 "stateId": "27"
  },
  "27151": {
	 "stateAbbr": "MN",
	 "name": "Swift County (MN)",
	 "stateId": "27"
  },
  "27153": {
	 "stateAbbr": "MN",
	 "name": "Todd County (MN)",
	 "stateId": "27"
  },
  "27155": {
	 "stateAbbr": "MN",
	 "name": "Traverse County (MN)",
	 "stateId": "27"
  },
  "27157": {
	 "stateAbbr": "MN",
	 "name": "Wabasha County (MN)",
	 "stateId": "27"
  },
  "27159": {
	 "stateAbbr": "MN",
	 "name": "Wadena County (MN)",
	 "stateId": "27"
  },
  "27161": {
	 "stateAbbr": "MN",
	 "name": "Waseca County (MN)",
	 "stateId": "27"
  },
  "27163": {
	 "stateAbbr": "MN",
	 "name": "Washington County (MN)",
	 "stateId": "27"
  },
  "27165": {
	 "stateAbbr": "MN",
	 "name": "Watonwan County (MN)",
	 "stateId": "27"
  },
  "27167": {
	 "stateAbbr": "MN",
	 "name": "Wilkin County (MN)",
	 "stateId": "27"
  },
  "27169": {
	 "stateAbbr": "MN",
	 "name": "Winona County (MN)",
	 "stateId": "27"
  },
  "27171": {
	 "stateAbbr": "MN",
	 "name": "Wright County (MN)",
	 "stateId": "27"
  },
  "27173": {
	 "stateAbbr": "MN",
	 "name": "Yellow Medicine County (MN)",
	 "stateId": "27"
  },
  "28001": {
	 "stateAbbr": "MS",
	 "name": "Adams County (MS)",
	 "stateId": "28"
  },
  "28003": {
	 "stateAbbr": "MS",
	 "name": "Alcorn County (MS)",
	 "stateId": "28"
  },
  "28005": {
	 "stateAbbr": "MS",
	 "name": "Amite County (MS)",
	 "stateId": "28"
  },
  "28007": {
	 "stateAbbr": "MS",
	 "name": "Attala County (MS)",
	 "stateId": "28"
  },
  "28009": {
	 "stateAbbr": "MS",
	 "name": "Benton County (MS)",
	 "stateId": "28"
  },
  "28011": {
	 "stateAbbr": "MS",
	 "name": "Bolivar County (MS)",
	 "stateId": "28"
  },
  "28013": {
	 "stateAbbr": "MS",
	 "name": "Calhoun County (MS)",
	 "stateId": "28"
  },
  "28015": {
	 "stateAbbr": "MS",
	 "name": "Carroll County (MS)",
	 "stateId": "28"
  },
  "28017": {
	 "stateAbbr": "MS",
	 "name": "Chickasaw County (MS)",
	 "stateId": "28"
  },
  "28019": {
	 "stateAbbr": "MS",
	 "name": "Choctaw County (MS)",
	 "stateId": "28"
  },
  "28021": {
	 "stateAbbr": "MS",
	 "name": "Claiborne County (MS)",
	 "stateId": "28"
  },
  "28023": {
	 "stateAbbr": "MS",
	 "name": "Clarke County (MS)",
	 "stateId": "28"
  },
  "28025": {
	 "stateAbbr": "MS",
	 "name": "Clay County (MS)",
	 "stateId": "28"
  },
  "28027": {
	 "stateAbbr": "MS",
	 "name": "Coahoma County (MS)",
	 "stateId": "28"
  },
  "28029": {
	 "stateAbbr": "MS",
	 "name": "Copiah County (MS)",
	 "stateId": "28"
  },
  "28031": {
	 "stateAbbr": "MS",
	 "name": "Covington County (MS)",
	 "stateId": "28"
  },
  "28033": {
	 "stateAbbr": "MS",
	 "name": "DeSoto County (MS)",
	 "stateId": "28"
  },
  "28035": {
	 "stateAbbr": "MS",
	 "name": "Forrest County (MS)",
	 "stateId": "28"
  },
  "28037": {
	 "stateAbbr": "MS",
	 "name": "Franklin County (MS)",
	 "stateId": "28"
  },
  "28039": {
	 "stateAbbr": "MS",
	 "name": "George County (MS)",
	 "stateId": "28"
  },
  "28041": {
	 "stateAbbr": "MS",
	 "name": "Greene County (MS)",
	 "stateId": "28"
  },
  "28043": {
	 "stateAbbr": "MS",
	 "name": "Grenada County (MS)",
	 "stateId": "28"
  },
  "28045": {
	 "stateAbbr": "MS",
	 "name": "Hancock County (MS)",
	 "stateId": "28"
  },
  "28047": {
	 "stateAbbr": "MS",
	 "name": "Harrison County (MS)",
	 "stateId": "28"
  },
  "28049": {
	 "stateAbbr": "MS",
	 "name": "Hinds County (MS)",
	 "stateId": "28"
  },
  "28051": {
	 "stateAbbr": "MS",
	 "name": "Holmes County (MS)",
	 "stateId": "28"
  },
  "28053": {
	 "stateAbbr": "MS",
	 "name": "Humphreys County (MS)",
	 "stateId": "28"
  },
  "28055": {
	 "stateAbbr": "MS",
	 "name": "Issaquena County (MS)",
	 "stateId": "28"
  },
  "28057": {
	 "stateAbbr": "MS",
	 "name": "Itawamba County (MS)",
	 "stateId": "28"
  },
  "28059": {
	 "stateAbbr": "MS",
	 "name": "Jackson County (MS)",
	 "stateId": "28"
  },
  "28061": {
	 "stateAbbr": "MS",
	 "name": "Jasper County (MS)",
	 "stateId": "28"
  },
  "28063": {
	 "stateAbbr": "MS",
	 "name": "Jefferson County (MS)",
	 "stateId": "28"
  },
  "28065": {
	 "stateAbbr": "MS",
	 "name": "Jefferson Davis County (MS)",
	 "stateId": "28"
  },
  "28067": {
	 "stateAbbr": "MS",
	 "name": "Jones County (MS)",
	 "stateId": "28"
  },
  "28069": {
	 "stateAbbr": "MS",
	 "name": "Kemper County (MS)",
	 "stateId": "28"
  },
  "28071": {
	 "stateAbbr": "MS",
	 "name": "Lafayette County (MS)",
	 "stateId": "28"
  },
  "28073": {
	 "stateAbbr": "MS",
	 "name": "Lamar County (MS)",
	 "stateId": "28"
  },
  "28075": {
	 "stateAbbr": "MS",
	 "name": "Lauderdale County (MS)",
	 "stateId": "28"
  },
  "28077": {
	 "stateAbbr": "MS",
	 "name": "Lawrence County (MS)",
	 "stateId": "28"
  },
  "28079": {
	 "stateAbbr": "MS",
	 "name": "Leake County (MS)",
	 "stateId": "28"
  },
  "28081": {
	 "stateAbbr": "MS",
	 "name": "Lee County (MS)",
	 "stateId": "28"
  },
  "28083": {
	 "stateAbbr": "MS",
	 "name": "Leflore County (MS)",
	 "stateId": "28"
  },
  "28085": {
	 "stateAbbr": "MS",
	 "name": "Lincoln County (MS)",
	 "stateId": "28"
  },
  "28087": {
	 "stateAbbr": "MS",
	 "name": "Lowndes County (MS)",
	 "stateId": "28"
  },
  "28089": {
	 "stateAbbr": "MS",
	 "name": "Madison County (MS)",
	 "stateId": "28"
  },
  "28091": {
	 "stateAbbr": "MS",
	 "name": "Marion County (MS)",
	 "stateId": "28"
  },
  "28093": {
	 "stateAbbr": "MS",
	 "name": "Marshall County (MS)",
	 "stateId": "28"
  },
  "28095": {
	 "stateAbbr": "MS",
	 "name": "Monroe County (MS)",
	 "stateId": "28"
  },
  "28097": {
	 "stateAbbr": "MS",
	 "name": "Montgomery County (MS)",
	 "stateId": "28"
  },
  "28099": {
	 "stateAbbr": "MS",
	 "name": "Neshoba County (MS)",
	 "stateId": "28"
  },
  "28101": {
	 "stateAbbr": "MS",
	 "name": "Newton County (MS)",
	 "stateId": "28"
  },
  "28103": {
	 "stateAbbr": "MS",
	 "name": "Noxubee County (MS)",
	 "stateId": "28"
  },
  "28105": {
	 "stateAbbr": "MS",
	 "name": "Oktibbeha County (MS)",
	 "stateId": "28"
  },
  "28107": {
	 "stateAbbr": "MS",
	 "name": "Panola County (MS)",
	 "stateId": "28"
  },
  "28109": {
	 "stateAbbr": "MS",
	 "name": "Pearl River County (MS)",
	 "stateId": "28"
  },
  "28111": {
	 "stateAbbr": "MS",
	 "name": "Perry County (MS)",
	 "stateId": "28"
  },
  "28113": {
	 "stateAbbr": "MS",
	 "name": "Pike County (MS)",
	 "stateId": "28"
  },
  "28115": {
	 "stateAbbr": "MS",
	 "name": "Pontotoc County (MS)",
	 "stateId": "28"
  },
  "28117": {
	 "stateAbbr": "MS",
	 "name": "Prentiss County (MS)",
	 "stateId": "28"
  },
  "28119": {
	 "stateAbbr": "MS",
	 "name": "Quitman County (MS)",
	 "stateId": "28"
  },
  "28121": {
	 "stateAbbr": "MS",
	 "name": "Rankin County (MS)",
	 "stateId": "28"
  },
  "28123": {
	 "stateAbbr": "MS",
	 "name": "Scott County (MS)",
	 "stateId": "28"
  },
  "28125": {
	 "stateAbbr": "MS",
	 "name": "Sharkey County (MS)",
	 "stateId": "28"
  },
  "28127": {
	 "stateAbbr": "MS",
	 "name": "Simpson County (MS)",
	 "stateId": "28"
  },
  "28129": {
	 "stateAbbr": "MS",
	 "name": "Smith County (MS)",
	 "stateId": "28"
  },
  "28131": {
	 "stateAbbr": "MS",
	 "name": "Stone County (MS)",
	 "stateId": "28"
  },
  "28133": {
	 "stateAbbr": "MS",
	 "name": "Sunflower County (MS)",
	 "stateId": "28"
  },
  "28135": {
	 "stateAbbr": "MS",
	 "name": "Tallahatchie County (MS)",
	 "stateId": "28"
  },
  "28137": {
	 "stateAbbr": "MS",
	 "name": "Tate County (MS)",
	 "stateId": "28"
  },
  "28139": {
	 "stateAbbr": "MS",
	 "name": "Tippah County (MS)",
	 "stateId": "28"
  },
  "28141": {
	 "stateAbbr": "MS",
	 "name": "Tishomingo County (MS)",
	 "stateId": "28"
  },
  "28143": {
	 "stateAbbr": "MS",
	 "name": "Tunica County (MS)",
	 "stateId": "28"
  },
  "28145": {
	 "stateAbbr": "MS",
	 "name": "Union County (MS)",
	 "stateId": "28"
  },
  "28147": {
	 "stateAbbr": "MS",
	 "name": "Walthall County (MS)",
	 "stateId": "28"
  },
  "28149": {
	 "stateAbbr": "MS",
	 "name": "Warren County (MS)",
	 "stateId": "28"
  },
  "28151": {
	 "stateAbbr": "MS",
	 "name": "Washington County (MS)",
	 "stateId": "28"
  },
  "28153": {
	 "stateAbbr": "MS",
	 "name": "Wayne County (MS)",
	 "stateId": "28"
  },
  "28155": {
	 "stateAbbr": "MS",
	 "name": "Webster County (MS)",
	 "stateId": "28"
  },
  "28157": {
	 "stateAbbr": "MS",
	 "name": "Wilkinson County (MS)",
	 "stateId": "28"
  },
  "28159": {
	 "stateAbbr": "MS",
	 "name": "Winston County (MS)",
	 "stateId": "28"
  },
  "28161": {
	 "stateAbbr": "MS",
	 "name": "Yalobusha County (MS)",
	 "stateId": "28"
  },
  "28163": {
	 "stateAbbr": "MS",
	 "name": "Yazoo County (MS)",
	 "stateId": "28"
  },
  "29001": {
	 "stateAbbr": "MO",
	 "name": "Adair County (MO)",
	 "stateId": "29"
  },
  "29003": {
	 "stateAbbr": "MO",
	 "name": "Andrew County (MO)",
	 "stateId": "29"
  },
  "29005": {
	 "stateAbbr": "MO",
	 "name": "Atchison County (MO)",
	 "stateId": "29"
  },
  "29007": {
	 "stateAbbr": "MO",
	 "name": "Audrain County (MO)",
	 "stateId": "29"
  },
  "29009": {
	 "stateAbbr": "MO",
	 "name": "Barry County (MO)",
	 "stateId": "29"
  },
  "29011": {
	 "stateAbbr": "MO",
	 "name": "Barton County (MO)",
	 "stateId": "29"
  },
  "29013": {
	 "stateAbbr": "MO",
	 "name": "Bates County (MO)",
	 "stateId": "29"
  },
  "29015": {
	 "stateAbbr": "MO",
	 "name": "Benton County (MO)",
	 "stateId": "29"
  },
  "29017": {
	 "stateAbbr": "MO",
	 "name": "Bollinger County (MO)",
	 "stateId": "29"
  },
  "29019": {
	 "stateAbbr": "MO",
	 "name": "Boone County (MO)",
	 "stateId": "29"
  },
  "29021": {
	 "stateAbbr": "MO",
	 "name": "Buchanan County (MO)",
	 "stateId": "29"
  },
  "29023": {
	 "stateAbbr": "MO",
	 "name": "Butler County (MO)",
	 "stateId": "29"
  },
  "29025": {
	 "stateAbbr": "MO",
	 "name": "Caldwell County (MO)",
	 "stateId": "29"
  },
  "29027": {
	 "stateAbbr": "MO",
	 "name": "Callaway County (MO)",
	 "stateId": "29"
  },
  "29029": {
	 "stateAbbr": "MO",
	 "name": "Camden County (MO)",
	 "stateId": "29"
  },
  "29031": {
	 "stateAbbr": "MO",
	 "name": "Cape Girardeau County (MO)",
	 "stateId": "29"
  },
  "29033": {
	 "stateAbbr": "MO",
	 "name": "Carroll County (MO)",
	 "stateId": "29"
  },
  "29035": {
	 "stateAbbr": "MO",
	 "name": "Carter County (MO)",
	 "stateId": "29"
  },
  "29037": {
	 "stateAbbr": "MO",
	 "name": "Cass County (MO)",
	 "stateId": "29"
  },
  "29039": {
	 "stateAbbr": "MO",
	 "name": "Cedar County (MO)",
	 "stateId": "29"
  },
  "29041": {
	 "stateAbbr": "MO",
	 "name": "Chariton County (MO)",
	 "stateId": "29"
  },
  "29043": {
	 "stateAbbr": "MO",
	 "name": "Christian County (MO)",
	 "stateId": "29"
  },
  "29045": {
	 "stateAbbr": "MO",
	 "name": "Clark County (MO)",
	 "stateId": "29"
  },
  "29047": {
	 "stateAbbr": "MO",
	 "name": "Clay County (MO)",
	 "stateId": "29"
  },
  "29049": {
	 "stateAbbr": "MO",
	 "name": "Clinton County (MO)",
	 "stateId": "29"
  },
  "29051": {
	 "stateAbbr": "MO",
	 "name": "Cole County (MO)",
	 "stateId": "29"
  },
  "29053": {
	 "stateAbbr": "MO",
	 "name": "Cooper County (MO)",
	 "stateId": "29"
  },
  "29055": {
	 "stateAbbr": "MO",
	 "name": "Crawford County (MO)",
	 "stateId": "29"
  },
  "29057": {
	 "stateAbbr": "MO",
	 "name": "Dade County (MO)",
	 "stateId": "29"
  },
  "29059": {
	 "stateAbbr": "MO",
	 "name": "Dallas County (MO)",
	 "stateId": "29"
  },
  "29061": {
	 "stateAbbr": "MO",
	 "name": "Daviess County (MO)",
	 "stateId": "29"
  },
  "29063": {
	 "stateAbbr": "MO",
	 "name": "DeKalb County (MO)",
	 "stateId": "29"
  },
  "29065": {
	 "stateAbbr": "MO",
	 "name": "Dent County (MO)",
	 "stateId": "29"
  },
  "29067": {
	 "stateAbbr": "MO",
	 "name": "Douglas County (MO)",
	 "stateId": "29"
  },
  "29069": {
	 "stateAbbr": "MO",
	 "name": "Dunklin County (MO)",
	 "stateId": "29"
  },
  "29071": {
	 "stateAbbr": "MO",
	 "name": "Franklin County (MO)",
	 "stateId": "29"
  },
  "29073": {
	 "stateAbbr": "MO",
	 "name": "Gasconade County (MO)",
	 "stateId": "29"
  },
  "29075": {
	 "stateAbbr": "MO",
	 "name": "Gentry County (MO)",
	 "stateId": "29"
  },
  "29077": {
	 "stateAbbr": "MO",
	 "name": "Greene County (MO)",
	 "stateId": "29"
  },
  "29079": {
	 "stateAbbr": "MO",
	 "name": "Grundy County (MO)",
	 "stateId": "29"
  },
  "29081": {
	 "stateAbbr": "MO",
	 "name": "Harrison County (MO)",
	 "stateId": "29"
  },
  "29083": {
	 "stateAbbr": "MO",
	 "name": "Henry County (MO)",
	 "stateId": "29"
  },
  "29085": {
	 "stateAbbr": "MO",
	 "name": "Hickory County (MO)",
	 "stateId": "29"
  },
  "29087": {
	 "stateAbbr": "MO",
	 "name": "Holt County (MO)",
	 "stateId": "29"
  },
  "29089": {
	 "stateAbbr": "MO",
	 "name": "Howard County (MO)",
	 "stateId": "29"
  },
  "29091": {
	 "stateAbbr": "MO",
	 "name": "Howell County (MO)",
	 "stateId": "29"
  },
  "29093": {
	 "stateAbbr": "MO",
	 "name": "Iron County (MO)",
	 "stateId": "29"
  },
  "29095": {
	 "stateAbbr": "MO",
	 "name": "Jackson County (MO)",
	 "stateId": "29"
  },
  "29097": {
	 "stateAbbr": "MO",
	 "name": "Jasper County (MO)",
	 "stateId": "29"
  },
  "29099": {
	 "stateAbbr": "MO",
	 "name": "Jefferson County (MO)",
	 "stateId": "29"
  },
  "29101": {
	 "stateAbbr": "MO",
	 "name": "Johnson County (MO)",
	 "stateId": "29"
  },
  "29103": {
	 "stateAbbr": "MO",
	 "name": "Knox County (MO)",
	 "stateId": "29"
  },
  "29105": {
	 "stateAbbr": "MO",
	 "name": "Laclede County (MO)",
	 "stateId": "29"
  },
  "29107": {
	 "stateAbbr": "MO",
	 "name": "Lafayette County (MO)",
	 "stateId": "29"
  },
  "29109": {
	 "stateAbbr": "MO",
	 "name": "Lawrence County (MO)",
	 "stateId": "29"
  },
  "29111": {
	 "stateAbbr": "MO",
	 "name": "Lewis County (MO)",
	 "stateId": "29"
  },
  "29113": {
	 "stateAbbr": "MO",
	 "name": "Lincoln County (MO)",
	 "stateId": "29"
  },
  "29115": {
	 "stateAbbr": "MO",
	 "name": "Linn County (MO)",
	 "stateId": "29"
  },
  "29117": {
	 "stateAbbr": "MO",
	 "name": "Livingston County (MO)",
	 "stateId": "29"
  },
  "29119": {
	 "stateAbbr": "MO",
	 "name": "McDonald County (MO)",
	 "stateId": "29"
  },
  "29121": {
	 "stateAbbr": "MO",
	 "name": "Macon County (MO)",
	 "stateId": "29"
  },
  "29123": {
	 "stateAbbr": "MO",
	 "name": "Madison County (MO)",
	 "stateId": "29"
  },
  "29125": {
	 "stateAbbr": "MO",
	 "name": "Maries County (MO)",
	 "stateId": "29"
  },
  "29127": {
	 "stateAbbr": "MO",
	 "name": "Marion County (MO)",
	 "stateId": "29"
  },
  "29129": {
	 "stateAbbr": "MO",
	 "name": "Mercer County (MO)",
	 "stateId": "29"
  },
  "29131": {
	 "stateAbbr": "MO",
	 "name": "Miller County (MO)",
	 "stateId": "29"
  },
  "29133": {
	 "stateAbbr": "MO",
	 "name": "Mississippi County (MO)",
	 "stateId": "29"
  },
  "29135": {
	 "stateAbbr": "MO",
	 "name": "Moniteau County (MO)",
	 "stateId": "29"
  },
  "29137": {
	 "stateAbbr": "MO",
	 "name": "Monroe County (MO)",
	 "stateId": "29"
  },
  "29139": {
	 "stateAbbr": "MO",
	 "name": "Montgomery County (MO)",
	 "stateId": "29"
  },
  "29141": {
	 "stateAbbr": "MO",
	 "name": "Morgan County (MO)",
	 "stateId": "29"
  },
  "29143": {
	 "stateAbbr": "MO",
	 "name": "New Madrid County (MO)",
	 "stateId": "29"
  },
  "29145": {
	 "stateAbbr": "MO",
	 "name": "Newton County (MO)",
	 "stateId": "29"
  },
  "29147": {
	 "stateAbbr": "MO",
	 "name": "Nodaway County (MO)",
	 "stateId": "29"
  },
  "29149": {
	 "stateAbbr": "MO",
	 "name": "Oregon County (MO)",
	 "stateId": "29"
  },
  "29151": {
	 "stateAbbr": "MO",
	 "name": "Osage County (MO)",
	 "stateId": "29"
  },
  "29153": {
	 "stateAbbr": "MO",
	 "name": "Ozark County (MO)",
	 "stateId": "29"
  },
  "29155": {
	 "stateAbbr": "MO",
	 "name": "Pemiscot County (MO)",
	 "stateId": "29"
  },
  "29157": {
	 "stateAbbr": "MO",
	 "name": "Perry County (MO)",
	 "stateId": "29"
  },
  "29159": {
	 "stateAbbr": "MO",
	 "name": "Pettis County (MO)",
	 "stateId": "29"
  },
  "29161": {
	 "stateAbbr": "MO",
	 "name": "Phelps County (MO)",
	 "stateId": "29"
  },
  "29163": {
	 "stateAbbr": "MO",
	 "name": "Pike County (MO)",
	 "stateId": "29"
  },
  "29165": {
	 "stateAbbr": "MO",
	 "name": "Platte County (MO)",
	 "stateId": "29"
  },
  "29167": {
	 "stateAbbr": "MO",
	 "name": "Polk County (MO)",
	 "stateId": "29"
  },
  "29169": {
	 "stateAbbr": "MO",
	 "name": "Pulaski County (MO)",
	 "stateId": "29"
  },
  "29171": {
	 "stateAbbr": "MO",
	 "name": "Putnam County (MO)",
	 "stateId": "29"
  },
  "29173": {
	 "stateAbbr": "MO",
	 "name": "Ralls County (MO)",
	 "stateId": "29"
  },
  "29175": {
	 "stateAbbr": "MO",
	 "name": "Randolph County (MO)",
	 "stateId": "29"
  },
  "29177": {
	 "stateAbbr": "MO",
	 "name": "Ray County (MO)",
	 "stateId": "29"
  },
  "29179": {
	 "stateAbbr": "MO",
	 "name": "Reynolds County (MO)",
	 "stateId": "29"
  },
  "29181": {
	 "stateAbbr": "MO",
	 "name": "Ripley County (MO)",
	 "stateId": "29"
  },
  "29183": {
	 "stateAbbr": "MO",
	 "name": "St. Charles County (MO)",
	 "stateId": "29"
  },
  "29185": {
	 "stateAbbr": "MO",
	 "name": "St. Clair County (MO)",
	 "stateId": "29"
  },
  "29186": {
	 "stateAbbr": "MO",
	 "name": "Ste. Genevieve County (MO)",
	 "stateId": "29"
  },
  "29187": {
	 "stateAbbr": "MO",
	 "name": "St. Francois County (MO)",
	 "stateId": "29"
  },
  "29189": {
	 "stateAbbr": "MO",
	 "name": "St. Louis County (MO)",
	 "stateId": "29"
  },
  "29195": {
	 "stateAbbr": "MO",
	 "name": "Saline County (MO)",
	 "stateId": "29"
  },
  "29197": {
	 "stateAbbr": "MO",
	 "name": "Schuyler County (MO)",
	 "stateId": "29"
  },
  "29199": {
	 "stateAbbr": "MO",
	 "name": "Scotland County (MO)",
	 "stateId": "29"
  },
  "29201": {
	 "stateAbbr": "MO",
	 "name": "Scott County (MO)",
	 "stateId": "29"
  },
  "29203": {
	 "stateAbbr": "MO",
	 "name": "Shannon County (MO)",
	 "stateId": "29"
  },
  "29205": {
	 "stateAbbr": "MO",
	 "name": "Shelby County (MO)",
	 "stateId": "29"
  },
  "29207": {
	 "stateAbbr": "MO",
	 "name": "Stoddard County (MO)",
	 "stateId": "29"
  },
  "29209": {
	 "stateAbbr": "MO",
	 "name": "Stone County (MO)",
	 "stateId": "29"
  },
  "29211": {
	 "stateAbbr": "MO",
	 "name": "Sullivan County (MO)",
	 "stateId": "29"
  },
  "29213": {
	 "stateAbbr": "MO",
	 "name": "Taney County (MO)",
	 "stateId": "29"
  },
  "29215": {
	 "stateAbbr": "MO",
	 "name": "Texas County (MO)",
	 "stateId": "29"
  },
  "29217": {
	 "stateAbbr": "MO",
	 "name": "Vernon County (MO)",
	 "stateId": "29"
  },
  "29219": {
	 "stateAbbr": "MO",
	 "name": "Warren County (MO)",
	 "stateId": "29"
  },
  "29221": {
	 "stateAbbr": "MO",
	 "name": "Washington County (MO)",
	 "stateId": "29"
  },
  "29223": {
	 "stateAbbr": "MO",
	 "name": "Wayne County (MO)",
	 "stateId": "29"
  },
  "29225": {
	 "stateAbbr": "MO",
	 "name": "Webster County (MO)",
	 "stateId": "29"
  },
  "29227": {
	 "stateAbbr": "MO",
	 "name": "Worth County (MO)",
	 "stateId": "29"
  },
  "29229": {
	 "stateAbbr": "MO",
	 "name": "Wright County (MO)",
	 "stateId": "29"
  },
  "29510": {
	 "stateAbbr": "MO",
	 "name": "St. Louis city (MO)",
	 "stateId": "29"
  },
  "30001": {
	 "stateAbbr": "MT",
	 "name": "Beaverhead County (MT)",
	 "stateId": "30"
  },
  "30003": {
	 "stateAbbr": "MT",
	 "name": "Big Horn County (MT)",
	 "stateId": "30"
  },
  "30005": {
	 "stateAbbr": "MT",
	 "name": "Blaine County (MT)",
	 "stateId": "30"
  },
  "30007": {
	 "stateAbbr": "MT",
	 "name": "Broadwater County (MT)",
	 "stateId": "30"
  },
  "30009": {
	 "stateAbbr": "MT",
	 "name": "Carbon County (MT)",
	 "stateId": "30"
  },
  "30011": {
	 "stateAbbr": "MT",
	 "name": "Carter County (MT)",
	 "stateId": "30"
  },
  "30013": {
	 "stateAbbr": "MT",
	 "name": "Cascade County (MT)",
	 "stateId": "30"
  },
  "30015": {
	 "stateAbbr": "MT",
	 "name": "Chouteau County (MT)",
	 "stateId": "30"
  },
  "30017": {
	 "stateAbbr": "MT",
	 "name": "Custer County (MT)",
	 "stateId": "30"
  },
  "30019": {
	 "stateAbbr": "MT",
	 "name": "Daniels County (MT)",
	 "stateId": "30"
  },
  "30021": {
	 "stateAbbr": "MT",
	 "name": "Dawson County (MT)",
	 "stateId": "30"
  },
  "30023": {
	 "stateAbbr": "MT",
	 "name": "Deer Lodge County (MT)",
	 "stateId": "30"
  },
  "30025": {
	 "stateAbbr": "MT",
	 "name": "Fallon County (MT)",
	 "stateId": "30"
  },
  "30027": {
	 "stateAbbr": "MT",
	 "name": "Fergus County (MT)",
	 "stateId": "30"
  },
  "30029": {
	 "stateAbbr": "MT",
	 "name": "Flathead County (MT)",
	 "stateId": "30"
  },
  "30031": {
	 "stateAbbr": "MT",
	 "name": "Gallatin County (MT)",
	 "stateId": "30"
  },
  "30033": {
	 "stateAbbr": "MT",
	 "name": "Garfield County (MT)",
	 "stateId": "30"
  },
  "30035": {
	 "stateAbbr": "MT",
	 "name": "Glacier County (MT)",
	 "stateId": "30"
  },
  "30037": {
	 "stateAbbr": "MT",
	 "name": "Golden Valley County (MT)",
	 "stateId": "30"
  },
  "30039": {
	 "stateAbbr": "MT",
	 "name": "Granite County (MT)",
	 "stateId": "30"
  },
  "30041": {
	 "stateAbbr": "MT",
	 "name": "Hill County (MT)",
	 "stateId": "30"
  },
  "30043": {
	 "stateAbbr": "MT",
	 "name": "Jefferson County (MT)",
	 "stateId": "30"
  },
  "30045": {
	 "stateAbbr": "MT",
	 "name": "Judith Basin County (MT)",
	 "stateId": "30"
  },
  "30047": {
	 "stateAbbr": "MT",
	 "name": "Lake County (MT)",
	 "stateId": "30"
  },
  "30049": {
	 "stateAbbr": "MT",
	 "name": "Lewis and Clark County (MT)",
	 "stateId": "30"
  },
  "30051": {
	 "stateAbbr": "MT",
	 "name": "Liberty County (MT)",
	 "stateId": "30"
  },
  "30053": {
	 "stateAbbr": "MT",
	 "name": "Lincoln County (MT)",
	 "stateId": "30"
  },
  "30055": {
	 "stateAbbr": "MT",
	 "name": "McCone County (MT)",
	 "stateId": "30"
  },
  "30057": {
	 "stateAbbr": "MT",
	 "name": "Madison County (MT)",
	 "stateId": "30"
  },
  "30059": {
	 "stateAbbr": "MT",
	 "name": "Meagher County (MT)",
	 "stateId": "30"
  },
  "30061": {
	 "stateAbbr": "MT",
	 "name": "Mineral County (MT)",
	 "stateId": "30"
  },
  "30063": {
	 "stateAbbr": "MT",
	 "name": "Missoula County (MT)",
	 "stateId": "30"
  },
  "30065": {
	 "stateAbbr": "MT",
	 "name": "Musselshell County (MT)",
	 "stateId": "30"
  },
  "30067": {
	 "stateAbbr": "MT",
	 "name": "Park County (MT)",
	 "stateId": "30"
  },
  "30069": {
	 "stateAbbr": "MT",
	 "name": "Petroleum County (MT)",
	 "stateId": "30"
  },
  "30071": {
	 "stateAbbr": "MT",
	 "name": "Phillips County (MT)",
	 "stateId": "30"
  },
  "30073": {
	 "stateAbbr": "MT",
	 "name": "Pondera County (MT)",
	 "stateId": "30"
  },
  "30075": {
	 "stateAbbr": "MT",
	 "name": "Powder River County (MT)",
	 "stateId": "30"
  },
  "30077": {
	 "stateAbbr": "MT",
	 "name": "Powell County (MT)",
	 "stateId": "30"
  },
  "30079": {
	 "stateAbbr": "MT",
	 "name": "Prairie County (MT)",
	 "stateId": "30"
  },
  "30081": {
	 "stateAbbr": "MT",
	 "name": "Ravalli County (MT)",
	 "stateId": "30"
  },
  "30083": {
	 "stateAbbr": "MT",
	 "name": "Richland County (MT)",
	 "stateId": "30"
  },
  "30085": {
	 "stateAbbr": "MT",
	 "name": "Roosevelt County (MT)",
	 "stateId": "30"
  },
  "30087": {
	 "stateAbbr": "MT",
	 "name": "Rosebud County (MT)",
	 "stateId": "30"
  },
  "30089": {
	 "stateAbbr": "MT",
	 "name": "Sanders County (MT)",
	 "stateId": "30"
  },
  "30091": {
	 "stateAbbr": "MT",
	 "name": "Sheridan County (MT)",
	 "stateId": "30"
  },
  "30093": {
	 "stateAbbr": "MT",
	 "name": "Silver Bow County (MT)",
	 "stateId": "30"
  },
  "30095": {
	 "stateAbbr": "MT",
	 "name": "Stillwater County (MT)",
	 "stateId": "30"
  },
  "30097": {
	 "stateAbbr": "MT",
	 "name": "Sweet Grass County (MT)",
	 "stateId": "30"
  },
  "30099": {
	 "stateAbbr": "MT",
	 "name": "Teton County (MT)",
	 "stateId": "30"
  },
  "30101": {
	 "stateAbbr": "MT",
	 "name": "Toole County (MT)",
	 "stateId": "30"
  },
  "30103": {
	 "stateAbbr": "MT",
	 "name": "Treasure County (MT)",
	 "stateId": "30"
  },
  "30105": {
	 "stateAbbr": "MT",
	 "name": "Valley County (MT)",
	 "stateId": "30"
  },
  "30107": {
	 "stateAbbr": "MT",
	 "name": "Wheatland County (MT)",
	 "stateId": "30"
  },
  "30109": {
	 "stateAbbr": "MT",
	 "name": "Wibaux County (MT)",
	 "stateId": "30"
  },
  "30111": {
	 "stateAbbr": "MT",
	 "name": "Yellowstone County (MT)",
	 "stateId": "30"
  },
  "31001": {
	 "stateAbbr": "NE",
	 "name": "Adams County (NE)",
	 "stateId": "31"
  },
  "31003": {
	 "stateAbbr": "NE",
	 "name": "Antelope County (NE)",
	 "stateId": "31"
  },
  "31005": {
	 "stateAbbr": "NE",
	 "name": "Arthur County (NE)",
	 "stateId": "31"
  },
  "31007": {
	 "stateAbbr": "NE",
	 "name": "Banner County (NE)",
	 "stateId": "31"
  },
  "31009": {
	 "stateAbbr": "NE",
	 "name": "Blaine County (NE)",
	 "stateId": "31"
  },
  "31011": {
	 "stateAbbr": "NE",
	 "name": "Boone County (NE)",
	 "stateId": "31"
  },
  "31013": {
	 "stateAbbr": "NE",
	 "name": "Box Butte County (NE)",
	 "stateId": "31"
  },
  "31015": {
	 "stateAbbr": "NE",
	 "name": "Boyd County (NE)",
	 "stateId": "31"
  },
  "31017": {
	 "stateAbbr": "NE",
	 "name": "Brown County (NE)",
	 "stateId": "31"
  },
  "31019": {
	 "stateAbbr": "NE",
	 "name": "Buffalo County (NE)",
	 "stateId": "31"
  },
  "31021": {
	 "stateAbbr": "NE",
	 "name": "Burt County (NE)",
	 "stateId": "31"
  },
  "31023": {
	 "stateAbbr": "NE",
	 "name": "Butler County (NE)",
	 "stateId": "31"
  },
  "31025": {
	 "stateAbbr": "NE",
	 "name": "Cass County (NE)",
	 "stateId": "31"
  },
  "31027": {
	 "stateAbbr": "NE",
	 "name": "Cedar County (NE)",
	 "stateId": "31"
  },
  "31029": {
	 "stateAbbr": "NE",
	 "name": "Chase County (NE)",
	 "stateId": "31"
  },
  "31031": {
	 "stateAbbr": "NE",
	 "name": "Cherry County (NE)",
	 "stateId": "31"
  },
  "31033": {
	 "stateAbbr": "NE",
	 "name": "Cheyenne County (NE)",
	 "stateId": "31"
  },
  "31035": {
	 "stateAbbr": "NE",
	 "name": "Clay County (NE)",
	 "stateId": "31"
  },
  "31037": {
	 "stateAbbr": "NE",
	 "name": "Colfax County (NE)",
	 "stateId": "31"
  },
  "31039": {
	 "stateAbbr": "NE",
	 "name": "Cuming County (NE)",
	 "stateId": "31"
  },
  "31041": {
	 "stateAbbr": "NE",
	 "name": "Custer County (NE)",
	 "stateId": "31"
  },
  "31043": {
	 "stateAbbr": "NE",
	 "name": "Dakota County (NE)",
	 "stateId": "31"
  },
  "31045": {
	 "stateAbbr": "NE",
	 "name": "Dawes County (NE)",
	 "stateId": "31"
  },
  "31047": {
	 "stateAbbr": "NE",
	 "name": "Dawson County (NE)",
	 "stateId": "31"
  },
  "31049": {
	 "stateAbbr": "NE",
	 "name": "Deuel County (NE)",
	 "stateId": "31"
  },
  "31051": {
	 "stateAbbr": "NE",
	 "name": "Dixon County (NE)",
	 "stateId": "31"
  },
  "31053": {
	 "stateAbbr": "NE",
	 "name": "Dodge County (NE)",
	 "stateId": "31"
  },
  "31055": {
	 "stateAbbr": "NE",
	 "name": "Douglas County (NE)",
	 "stateId": "31"
  },
  "31057": {
	 "stateAbbr": "NE",
	 "name": "Dundy County (NE)",
	 "stateId": "31"
  },
  "31059": {
	 "stateAbbr": "NE",
	 "name": "Fillmore County (NE)",
	 "stateId": "31"
  },
  "31061": {
	 "stateAbbr": "NE",
	 "name": "Franklin County (NE)",
	 "stateId": "31"
  },
  "31063": {
	 "stateAbbr": "NE",
	 "name": "Frontier County (NE)",
	 "stateId": "31"
  },
  "31065": {
	 "stateAbbr": "NE",
	 "name": "Furnas County (NE)",
	 "stateId": "31"
  },
  "31067": {
	 "stateAbbr": "NE",
	 "name": "Gage County (NE)",
	 "stateId": "31"
  },
  "31069": {
	 "stateAbbr": "NE",
	 "name": "Garden County (NE)",
	 "stateId": "31"
  },
  "31071": {
	 "stateAbbr": "NE",
	 "name": "Garfield County (NE)",
	 "stateId": "31"
  },
  "31073": {
	 "stateAbbr": "NE",
	 "name": "Gosper County (NE)",
	 "stateId": "31"
  },
  "31075": {
	 "stateAbbr": "NE",
	 "name": "Grant County (NE)",
	 "stateId": "31"
  },
  "31077": {
	 "stateAbbr": "NE",
	 "name": "Greeley County (NE)",
	 "stateId": "31"
  },
  "31079": {
	 "stateAbbr": "NE",
	 "name": "Hall County (NE)",
	 "stateId": "31"
  },
  "31081": {
	 "stateAbbr": "NE",
	 "name": "Hamilton County (NE)",
	 "stateId": "31"
  },
  "31083": {
	 "stateAbbr": "NE",
	 "name": "Harlan County (NE)",
	 "stateId": "31"
  },
  "31085": {
	 "stateAbbr": "NE",
	 "name": "Hayes County (NE)",
	 "stateId": "31"
  },
  "31087": {
	 "stateAbbr": "NE",
	 "name": "Hitchcock County (NE)",
	 "stateId": "31"
  },
  "31089": {
	 "stateAbbr": "NE",
	 "name": "Holt County (NE)",
	 "stateId": "31"
  },
  "31091": {
	 "stateAbbr": "NE",
	 "name": "Hooker County (NE)",
	 "stateId": "31"
  },
  "31093": {
	 "stateAbbr": "NE",
	 "name": "Howard County (NE)",
	 "stateId": "31"
  },
  "31095": {
	 "stateAbbr": "NE",
	 "name": "Jefferson County (NE)",
	 "stateId": "31"
  },
  "31097": {
	 "stateAbbr": "NE",
	 "name": "Johnson County (NE)",
	 "stateId": "31"
  },
  "31099": {
	 "stateAbbr": "NE",
	 "name": "Kearney County (NE)",
	 "stateId": "31"
  },
  "31101": {
	 "stateAbbr": "NE",
	 "name": "Keith County (NE)",
	 "stateId": "31"
  },
  "31103": {
	 "stateAbbr": "NE",
	 "name": "Keya Paha County (NE)",
	 "stateId": "31"
  },
  "31105": {
	 "stateAbbr": "NE",
	 "name": "Kimball County (NE)",
	 "stateId": "31"
  },
  "31107": {
	 "stateAbbr": "NE",
	 "name": "Knox County (NE)",
	 "stateId": "31"
  },
  "31109": {
	 "stateAbbr": "NE",
	 "name": "Lancaster County (NE)",
	 "stateId": "31"
  },
  "31111": {
	 "stateAbbr": "NE",
	 "name": "Lincoln County (NE)",
	 "stateId": "31"
  },
  "31113": {
	 "stateAbbr": "NE",
	 "name": "Logan County (NE)",
	 "stateId": "31"
  },
  "31115": {
	 "stateAbbr": "NE",
	 "name": "Loup County (NE)",
	 "stateId": "31"
  },
  "31117": {
	 "stateAbbr": "NE",
	 "name": "McPherson County (NE)",
	 "stateId": "31"
  },
  "31119": {
	 "stateAbbr": "NE",
	 "name": "Madison County (NE)",
	 "stateId": "31"
  },
  "31121": {
	 "stateAbbr": "NE",
	 "name": "Merrick County (NE)",
	 "stateId": "31"
  },
  "31123": {
	 "stateAbbr": "NE",
	 "name": "Morrill County (NE)",
	 "stateId": "31"
  },
  "31125": {
	 "stateAbbr": "NE",
	 "name": "Nance County (NE)",
	 "stateId": "31"
  },
  "31127": {
	 "stateAbbr": "NE",
	 "name": "Nemaha County (NE)",
	 "stateId": "31"
  },
  "31129": {
	 "stateAbbr": "NE",
	 "name": "Nuckolls County (NE)",
	 "stateId": "31"
  },
  "31131": {
	 "stateAbbr": "NE",
	 "name": "Otoe County (NE)",
	 "stateId": "31"
  },
  "31133": {
	 "stateAbbr": "NE",
	 "name": "Pawnee County (NE)",
	 "stateId": "31"
  },
  "31135": {
	 "stateAbbr": "NE",
	 "name": "Perkins County (NE)",
	 "stateId": "31"
  },
  "31137": {
	 "stateAbbr": "NE",
	 "name": "Phelps County (NE)",
	 "stateId": "31"
  },
  "31139": {
	 "stateAbbr": "NE",
	 "name": "Pierce County (NE)",
	 "stateId": "31"
  },
  "31141": {
	 "stateAbbr": "NE",
	 "name": "Platte County (NE)",
	 "stateId": "31"
  },
  "31143": {
	 "stateAbbr": "NE",
	 "name": "Polk County (NE)",
	 "stateId": "31"
  },
  "31145": {
	 "stateAbbr": "NE",
	 "name": "Red Willow County (NE)",
	 "stateId": "31"
  },
  "31147": {
	 "stateAbbr": "NE",
	 "name": "Richardson County (NE)",
	 "stateId": "31"
  },
  "31149": {
	 "stateAbbr": "NE",
	 "name": "Rock County (NE)",
	 "stateId": "31"
  },
  "31151": {
	 "stateAbbr": "NE",
	 "name": "Saline County (NE)",
	 "stateId": "31"
  },
  "31153": {
	 "stateAbbr": "NE",
	 "name": "Sarpy County (NE)",
	 "stateId": "31"
  },
  "31155": {
	 "stateAbbr": "NE",
	 "name": "Saunders County (NE)",
	 "stateId": "31"
  },
  "31157": {
	 "stateAbbr": "NE",
	 "name": "Scotts Bluff County (NE)",
	 "stateId": "31"
  },
  "31159": {
	 "stateAbbr": "NE",
	 "name": "Seward County (NE)",
	 "stateId": "31"
  },
  "31161": {
	 "stateAbbr": "NE",
	 "name": "Sheridan County (NE)",
	 "stateId": "31"
  },
  "31163": {
	 "stateAbbr": "NE",
	 "name": "Sherman County (NE)",
	 "stateId": "31"
  },
  "31165": {
	 "stateAbbr": "NE",
	 "name": "Sioux County (NE)",
	 "stateId": "31"
  },
  "31167": {
	 "stateAbbr": "NE",
	 "name": "Stanton County (NE)",
	 "stateId": "31"
  },
  "31169": {
	 "stateAbbr": "NE",
	 "name": "Thayer County (NE)",
	 "stateId": "31"
  },
  "31171": {
	 "stateAbbr": "NE",
	 "name": "Thomas County (NE)",
	 "stateId": "31"
  },
  "31173": {
	 "stateAbbr": "NE",
	 "name": "Thurston County (NE)",
	 "stateId": "31"
  },
  "31175": {
	 "stateAbbr": "NE",
	 "name": "Valley County (NE)",
	 "stateId": "31"
  },
  "31177": {
	 "stateAbbr": "NE",
	 "name": "Washington County (NE)",
	 "stateId": "31"
  },
  "31179": {
	 "stateAbbr": "NE",
	 "name": "Wayne County (NE)",
	 "stateId": "31"
  },
  "31181": {
	 "stateAbbr": "NE",
	 "name": "Webster County (NE)",
	 "stateId": "31"
  },
  "31183": {
	 "stateAbbr": "NE",
	 "name": "Wheeler County (NE)",
	 "stateId": "31"
  },
  "31185": {
	 "stateAbbr": "NE",
	 "name": "York County (NE)",
	 "stateId": "31"
  },
  "32001": {
	 "stateAbbr": "NV",
	 "name": "Churchill County (NV)",
	 "stateId": "32"
  },
  "32003": {
	 "stateAbbr": "NV",
	 "name": "Clark County (NV)",
	 "stateId": "32"
  },
  "32005": {
	 "stateAbbr": "NV",
	 "name": "Douglas County (NV)",
	 "stateId": "32"
  },
  "32007": {
	 "stateAbbr": "NV",
	 "name": "Elko County (NV)",
	 "stateId": "32"
  },
  "32009": {
	 "stateAbbr": "NV",
	 "name": "Esmeralda County (NV)",
	 "stateId": "32"
  },
  "32011": {
	 "stateAbbr": "NV",
	 "name": "Eureka County (NV)",
	 "stateId": "32"
  },
  "32013": {
	 "stateAbbr": "NV",
	 "name": "Humboldt County (NV)",
	 "stateId": "32"
  },
  "32015": {
	 "stateAbbr": "NV",
	 "name": "Lander County (NV)",
	 "stateId": "32"
  },
  "32017": {
	 "stateAbbr": "NV",
	 "name": "Lincoln County (NV)",
	 "stateId": "32"
  },
  "32019": {
	 "stateAbbr": "NV",
	 "name": "Lyon County (NV)",
	 "stateId": "32"
  },
  "32021": {
	 "stateAbbr": "NV",
	 "name": "Mineral County (NV)",
	 "stateId": "32"
  },
  "32023": {
	 "stateAbbr": "NV",
	 "name": "Nye County (NV)",
	 "stateId": "32"
  },
  "32027": {
	 "stateAbbr": "NV",
	 "name": "Pershing County (NV)",
	 "stateId": "32"
  },
  "32029": {
	 "stateAbbr": "NV",
	 "name": "Storey County (NV)",
	 "stateId": "32"
  },
  "32031": {
	 "stateAbbr": "NV",
	 "name": "Washoe County (NV)",
	 "stateId": "32"
  },
  "32033": {
	 "stateAbbr": "NV",
	 "name": "White Pine County (NV)",
	 "stateId": "32"
  },
  "32510": {
	 "stateAbbr": "NV",
	 "name": "Carson City (NV)",
	 "stateId": "32"
  },
  "33001": {
	 "stateAbbr": "NH",
	 "name": "Belknap County (NH)",
	 "stateId": "33"
  },
  "33003": {
	 "stateAbbr": "NH",
	 "name": "Carroll County (NH)",
	 "stateId": "33"
  },
  "33005": {
	 "stateAbbr": "NH",
	 "name": "Cheshire County (NH)",
	 "stateId": "33"
  },
  "33007": {
	 "stateAbbr": "NH",
	 "name": "Coos County (NH)",
	 "stateId": "33"
  },
  "33009": {
	 "stateAbbr": "NH",
	 "name": "Grafton County (NH)",
	 "stateId": "33"
  },
  "33011": {
	 "stateAbbr": "NH",
	 "name": "Hillsborough County (NH)",
	 "stateId": "33"
  },
  "33013": {
	 "stateAbbr": "NH",
	 "name": "Merrimack County (NH)",
	 "stateId": "33"
  },
  "33015": {
	 "stateAbbr": "NH",
	 "name": "Rockingham County (NH)",
	 "stateId": "33"
  },
  "33017": {
	 "stateAbbr": "NH",
	 "name": "Strafford County (NH)",
	 "stateId": "33"
  },
  "33019": {
	 "stateAbbr": "NH",
	 "name": "Sullivan County (NH)",
	 "stateId": "33"
  },
  "34001": {
	 "stateAbbr": "NJ",
	 "name": "Atlantic County (NJ)",
	 "stateId": "34"
  },
  "34003": {
	 "stateAbbr": "NJ",
	 "name": "Bergen County (NJ)",
	 "stateId": "34"
  },
  "34005": {
	 "stateAbbr": "NJ",
	 "name": "Burlington County (NJ)",
	 "stateId": "34"
  },
  "34007": {
	 "stateAbbr": "NJ",
	 "name": "Camden County (NJ)",
	 "stateId": "34"
  },
  "34009": {
	 "stateAbbr": "NJ",
	 "name": "Cape May County (NJ)",
	 "stateId": "34"
  },
  "34011": {
	 "stateAbbr": "NJ",
	 "name": "Cumberland County (NJ)",
	 "stateId": "34"
  },
  "34013": {
	 "stateAbbr": "NJ",
	 "name": "Essex County (NJ)",
	 "stateId": "34"
  },
  "34015": {
	 "stateAbbr": "NJ",
	 "name": "Gloucester County (NJ)",
	 "stateId": "34"
  },
  "34017": {
	 "stateAbbr": "NJ",
	 "name": "Hudson County (NJ)",
	 "stateId": "34"
  },
  "34019": {
	 "stateAbbr": "NJ",
	 "name": "Hunterdon County (NJ)",
	 "stateId": "34"
  },
  "34021": {
	 "stateAbbr": "NJ",
	 "name": "Mercer County (NJ)",
	 "stateId": "34"
  },
  "34023": {
	 "stateAbbr": "NJ",
	 "name": "Middlesex County (NJ)",
	 "stateId": "34"
  },
  "34025": {
	 "stateAbbr": "NJ",
	 "name": "Monmouth County (NJ)",
	 "stateId": "34"
  },
  "34027": {
	 "stateAbbr": "NJ",
	 "name": "Morris County (NJ)",
	 "stateId": "34"
  },
  "34029": {
	 "stateAbbr": "NJ",
	 "name": "Ocean County (NJ)",
	 "stateId": "34"
  },
  "34031": {
	 "stateAbbr": "NJ",
	 "name": "Passaic County (NJ)",
	 "stateId": "34"
  },
  "34033": {
	 "stateAbbr": "NJ",
	 "name": "Salem County (NJ)",
	 "stateId": "34"
  },
  "34035": {
	 "stateAbbr": "NJ",
	 "name": "Somerset County (NJ)",
	 "stateId": "34"
  },
  "34037": {
	 "stateAbbr": "NJ",
	 "name": "Sussex County (NJ)",
	 "stateId": "34"
  },
  "34039": {
	 "stateAbbr": "NJ",
	 "name": "Union County (NJ)",
	 "stateId": "34"
  },
  "34041": {
	 "stateAbbr": "NJ",
	 "name": "Warren County (NJ)",
	 "stateId": "34"
  },
  "35001": {
	 "stateAbbr": "NM",
	 "name": "Bernalillo County (NM)",
	 "stateId": "35"
  },
  "35003": {
	 "stateAbbr": "NM",
	 "name": "Catron County (NM)",
	 "stateId": "35"
  },
  "35005": {
	 "stateAbbr": "NM",
	 "name": "Chaves County (NM)",
	 "stateId": "35"
  },
  "35006": {
	 "stateAbbr": "NM",
	 "name": "Cibola County (NM)",
	 "stateId": "35"
  },
  "35007": {
	 "stateAbbr": "NM",
	 "name": "Colfax County (NM)",
	 "stateId": "35"
  },
  "35009": {
	 "stateAbbr": "NM",
	 "name": "Curry County (NM)",
	 "stateId": "35"
  },
  "35011": {
	 "stateAbbr": "NM",
	 "name": "De Baca County (NM)",
	 "stateId": "35"
  },
  "35013": {
	 "stateAbbr": "NM",
	 "name": "Dona Ana County (NM)",
	 "stateId": "35"
  },
  "35015": {
	 "stateAbbr": "NM",
	 "name": "Eddy County (NM)",
	 "stateId": "35"
  },
  "35017": {
	 "stateAbbr": "NM",
	 "name": "Grant County (NM)",
	 "stateId": "35"
  },
  "35019": {
	 "stateAbbr": "NM",
	 "name": "Guadalupe County (NM)",
	 "stateId": "35"
  },
  "35021": {
	 "stateAbbr": "NM",
	 "name": "Harding County (NM)",
	 "stateId": "35"
  },
  "35023": {
	 "stateAbbr": "NM",
	 "name": "Hidalgo County (NM)",
	 "stateId": "35"
  },
  "35025": {
	 "stateAbbr": "NM",
	 "name": "Lea County (NM)",
	 "stateId": "35"
  },
  "35027": {
	 "stateAbbr": "NM",
	 "name": "Lincoln County (NM)",
	 "stateId": "35"
  },
  "35028": {
	 "stateAbbr": "NM",
	 "name": "Los Alamos County (NM)",
	 "stateId": "35"
  },
  "35029": {
	 "stateAbbr": "NM",
	 "name": "Luna County (NM)",
	 "stateId": "35"
  },
  "35031": {
	 "stateAbbr": "NM",
	 "name": "McKinley County (NM)",
	 "stateId": "35"
  },
  "35033": {
	 "stateAbbr": "NM",
	 "name": "Mora County (NM)",
	 "stateId": "35"
  },
  "35035": {
	 "stateAbbr": "NM",
	 "name": "Otero County (NM)",
	 "stateId": "35"
  },
  "35037": {
	 "stateAbbr": "NM",
	 "name": "Quay County (NM)",
	 "stateId": "35"
  },
  "35039": {
	 "stateAbbr": "NM",
	 "name": "Rio Arriba County (NM)",
	 "stateId": "35"
  },
  "35041": {
	 "stateAbbr": "NM",
	 "name": "Roosevelt County (NM)",
	 "stateId": "35"
  },
  "35043": {
	 "stateAbbr": "NM",
	 "name": "Sandoval County (NM)",
	 "stateId": "35"
  },
  "35045": {
	 "stateAbbr": "NM",
	 "name": "San Juan County (NM)",
	 "stateId": "35"
  },
  "35047": {
	 "stateAbbr": "NM",
	 "name": "San Miguel County (NM)",
	 "stateId": "35"
  },
  "35049": {
	 "stateAbbr": "NM",
	 "name": "Santa Fe County (NM)",
	 "stateId": "35"
  },
  "35051": {
	 "stateAbbr": "NM",
	 "name": "Sierra County (NM)",
	 "stateId": "35"
  },
  "35053": {
	 "stateAbbr": "NM",
	 "name": "Socorro County (NM)",
	 "stateId": "35"
  },
  "35055": {
	 "stateAbbr": "NM",
	 "name": "Taos County (NM)",
	 "stateId": "35"
  },
  "35057": {
	 "stateAbbr": "NM",
	 "name": "Torrance County (NM)",
	 "stateId": "35"
  },
  "35059": {
	 "stateAbbr": "NM",
	 "name": "Union County (NM)",
	 "stateId": "35"
  },
  "35061": {
	 "stateAbbr": "NM",
	 "name": "Valencia County (NM)",
	 "stateId": "35"
  },
  "36001": {
	 "stateAbbr": "NY",
	 "name": "Albany County (NY)",
	 "stateId": "36"
  },
  "36003": {
	 "stateAbbr": "NY",
	 "name": "Allegany County (NY)",
	 "stateId": "36"
  },
  "36005": {
	 "stateAbbr": "NY",
	 "name": "Bronx County (NY)",
	 "stateId": "36"
  },
  "36007": {
	 "stateAbbr": "NY",
	 "name": "Broome County (NY)",
	 "stateId": "36"
  },
  "36009": {
	 "stateAbbr": "NY",
	 "name": "Cattaraugus County (NY)",
	 "stateId": "36"
  },
  "36011": {
	 "stateAbbr": "NY",
	 "name": "Cayuga County (NY)",
	 "stateId": "36"
  },
  "36013": {
	 "stateAbbr": "NY",
	 "name": "Chautauqua County (NY)",
	 "stateId": "36"
  },
  "36015": {
	 "stateAbbr": "NY",
	 "name": "Chemung County (NY)",
	 "stateId": "36"
  },
  "36017": {
	 "stateAbbr": "NY",
	 "name": "Chenango County (NY)",
	 "stateId": "36"
  },
  "36019": {
	 "stateAbbr": "NY",
	 "name": "Clinton County (NY)",
	 "stateId": "36"
  },
  "36021": {
	 "stateAbbr": "NY",
	 "name": "Columbia County (NY)",
	 "stateId": "36"
  },
  "36023": {
	 "stateAbbr": "NY",
	 "name": "Cortland County (NY)",
	 "stateId": "36"
  },
  "36025": {
	 "stateAbbr": "NY",
	 "name": "Delaware County (NY)",
	 "stateId": "36"
  },
  "36027": {
	 "stateAbbr": "NY",
	 "name": "Dutchess County (NY)",
	 "stateId": "36"
  },
  "36029": {
	 "stateAbbr": "NY",
	 "name": "Erie County (NY)",
	 "stateId": "36"
  },
  "36031": {
	 "stateAbbr": "NY",
	 "name": "Essex County (NY)",
	 "stateId": "36"
  },
  "36033": {
	 "stateAbbr": "NY",
	 "name": "Franklin County (NY)",
	 "stateId": "36"
  },
  "36035": {
	 "stateAbbr": "NY",
	 "name": "Fulton County (NY)",
	 "stateId": "36"
  },
  "36037": {
	 "stateAbbr": "NY",
	 "name": "Genesee County (NY)",
	 "stateId": "36"
  },
  "36039": {
	 "stateAbbr": "NY",
	 "name": "Greene County (NY)",
	 "stateId": "36"
  },
  "36041": {
	 "stateAbbr": "NY",
	 "name": "Hamilton County (NY)",
	 "stateId": "36"
  },
  "36043": {
	 "stateAbbr": "NY",
	 "name": "Herkimer County (NY)",
	 "stateId": "36"
  },
  "36045": {
	 "stateAbbr": "NY",
	 "name": "Jefferson County (NY)",
	 "stateId": "36"
  },
  "36047": {
	 "stateAbbr": "NY",
	 "name": "Kings County (NY)",
	 "stateId": "36"
  },
  "36049": {
	 "stateAbbr": "NY",
	 "name": "Lewis County (NY)",
	 "stateId": "36"
  },
  "36051": {
	 "stateAbbr": "NY",
	 "name": "Livingston County (NY)",
	 "stateId": "36"
  },
  "36053": {
	 "stateAbbr": "NY",
	 "name": "Madison County (NY)",
	 "stateId": "36"
  },
  "36055": {
	 "stateAbbr": "NY",
	 "name": "Monroe County (NY)",
	 "stateId": "36"
  },
  "36057": {
	 "stateAbbr": "NY",
	 "name": "Montgomery County (NY)",
	 "stateId": "36"
  },
  "36059": {
	 "stateAbbr": "NY",
	 "name": "Nassau County (NY)",
	 "stateId": "36"
  },
  "36061": {
	 "stateAbbr": "NY",
	 "name": "New York County (NY)",
	 "stateId": "36"
  },
  "36063": {
	 "stateAbbr": "NY",
	 "name": "Niagara County (NY)",
	 "stateId": "36"
  },
  "36065": {
	 "stateAbbr": "NY",
	 "name": "Oneida County (NY)",
	 "stateId": "36"
  },
  "36067": {
	 "stateAbbr": "NY",
	 "name": "Onondaga County (NY)",
	 "stateId": "36"
  },
  "36069": {
	 "stateAbbr": "NY",
	 "name": "Ontario County (NY)",
	 "stateId": "36"
  },
  "36071": {
	 "stateAbbr": "NY",
	 "name": "Orange County (NY)",
	 "stateId": "36"
  },
  "36073": {
	 "stateAbbr": "NY",
	 "name": "Orleans County (NY)",
	 "stateId": "36"
  },
  "36075": {
	 "stateAbbr": "NY",
	 "name": "Oswego County (NY)",
	 "stateId": "36"
  },
  "36077": {
	 "stateAbbr": "NY",
	 "name": "Otsego County (NY)",
	 "stateId": "36"
  },
  "36079": {
	 "stateAbbr": "NY",
	 "name": "Putnam County (NY)",
	 "stateId": "36"
  },
  "36081": {
	 "stateAbbr": "NY",
	 "name": "Queens County (NY)",
	 "stateId": "36"
  },
  "36083": {
	 "stateAbbr": "NY",
	 "name": "Rensselaer County (NY)",
	 "stateId": "36"
  },
  "36085": {
	 "stateAbbr": "NY",
	 "name": "Richmond County (NY)",
	 "stateId": "36"
  },
  "36087": {
	 "stateAbbr": "NY",
	 "name": "Rockland County (NY)",
	 "stateId": "36"
  },
  "36089": {
	 "stateAbbr": "NY",
	 "name": "St. Lawrence County (NY)",
	 "stateId": "36"
  },
  "36091": {
	 "stateAbbr": "NY",
	 "name": "Saratoga County (NY)",
	 "stateId": "36"
  },
  "36093": {
	 "stateAbbr": "NY",
	 "name": "Schenectady County (NY)",
	 "stateId": "36"
  },
  "36095": {
	 "stateAbbr": "NY",
	 "name": "Schoharie County (NY)",
	 "stateId": "36"
  },
  "36097": {
	 "stateAbbr": "NY",
	 "name": "Schuyler County (NY)",
	 "stateId": "36"
  },
  "36099": {
	 "stateAbbr": "NY",
	 "name": "Seneca County (NY)",
	 "stateId": "36"
  },
  "36101": {
	 "stateAbbr": "NY",
	 "name": "Steuben County (NY)",
	 "stateId": "36"
  },
  "36103": {
	 "stateAbbr": "NY",
	 "name": "Suffolk County (NY)",
	 "stateId": "36"
  },
  "36105": {
	 "stateAbbr": "NY",
	 "name": "Sullivan County (NY)",
	 "stateId": "36"
  },
  "36107": {
	 "stateAbbr": "NY",
	 "name": "Tioga County (NY)",
	 "stateId": "36"
  },
  "36109": {
	 "stateAbbr": "NY",
	 "name": "Tompkins County (NY)",
	 "stateId": "36"
  },
  "36111": {
	 "stateAbbr": "NY",
	 "name": "Ulster County (NY)",
	 "stateId": "36"
  },
  "36113": {
	 "stateAbbr": "NY",
	 "name": "Warren County (NY)",
	 "stateId": "36"
  },
  "36115": {
	 "stateAbbr": "NY",
	 "name": "Washington County (NY)",
	 "stateId": "36"
  },
  "36117": {
	 "stateAbbr": "NY",
	 "name": "Wayne County (NY)",
	 "stateId": "36"
  },
  "36119": {
	 "stateAbbr": "NY",
	 "name": "Westchester County (NY)",
	 "stateId": "36"
  },
  "36121": {
	 "stateAbbr": "NY",
	 "name": "Wyoming County (NY)",
	 "stateId": "36"
  },
  "36123": {
	 "stateAbbr": "NY",
	 "name": "Yates County (NY)",
	 "stateId": "36"
  },
  "37001": {
	 "stateAbbr": "NC",
	 "name": "Alamance County (NC)",
	 "stateId": "37"
  },
  "37003": {
	 "stateAbbr": "NC",
	 "name": "Alexander County (NC)",
	 "stateId": "37"
  },
  "37005": {
	 "stateAbbr": "NC",
	 "name": "Alleghany County (NC)",
	 "stateId": "37"
  },
  "37007": {
	 "stateAbbr": "NC",
	 "name": "Anson County (NC)",
	 "stateId": "37"
  },
  "37009": {
	 "stateAbbr": "NC",
	 "name": "Ashe County (NC)",
	 "stateId": "37"
  },
  "37011": {
	 "stateAbbr": "NC",
	 "name": "Avery County (NC)",
	 "stateId": "37"
  },
  "37013": {
	 "stateAbbr": "NC",
	 "name": "Beaufort County (NC)",
	 "stateId": "37"
  },
  "37015": {
	 "stateAbbr": "NC",
	 "name": "Bertie County (NC)",
	 "stateId": "37"
  },
  "37017": {
	 "stateAbbr": "NC",
	 "name": "Bladen County (NC)",
	 "stateId": "37"
  },
  "37019": {
	 "stateAbbr": "NC",
	 "name": "Brunswick County (NC)",
	 "stateId": "37"
  },
  "37021": {
	 "stateAbbr": "NC",
	 "name": "Buncombe County (NC)",
	 "stateId": "37"
  },
  "37023": {
	 "stateAbbr": "NC",
	 "name": "Burke County (NC)",
	 "stateId": "37"
  },
  "37025": {
	 "stateAbbr": "NC",
	 "name": "Cabarrus County (NC)",
	 "stateId": "37"
  },
  "37027": {
	 "stateAbbr": "NC",
	 "name": "Caldwell County (NC)",
	 "stateId": "37"
  },
  "37029": {
	 "stateAbbr": "NC",
	 "name": "Camden County (NC)",
	 "stateId": "37"
  },
  "37031": {
	 "stateAbbr": "NC",
	 "name": "Carteret County (NC)",
	 "stateId": "37"
  },
  "37033": {
	 "stateAbbr": "NC",
	 "name": "Caswell County (NC)",
	 "stateId": "37"
  },
  "37035": {
	 "stateAbbr": "NC",
	 "name": "Catawba County (NC)",
	 "stateId": "37"
  },
  "37037": {
	 "stateAbbr": "NC",
	 "name": "Chatham County (NC)",
	 "stateId": "37"
  },
  "37039": {
	 "stateAbbr": "NC",
	 "name": "Cherokee County (NC)",
	 "stateId": "37"
  },
  "37041": {
	 "stateAbbr": "NC",
	 "name": "Chowan County (NC)",
	 "stateId": "37"
  },
  "37043": {
	 "stateAbbr": "NC",
	 "name": "Clay County (NC)",
	 "stateId": "37"
  },
  "37045": {
	 "stateAbbr": "NC",
	 "name": "Cleveland County (NC)",
	 "stateId": "37"
  },
  "37047": {
	 "stateAbbr": "NC",
	 "name": "Columbus County (NC)",
	 "stateId": "37"
  },
  "37049": {
	 "stateAbbr": "NC",
	 "name": "Craven County (NC)",
	 "stateId": "37"
  },
  "37051": {
	 "stateAbbr": "NC",
	 "name": "Cumberland County (NC)",
	 "stateId": "37"
  },
  "37053": {
	 "stateAbbr": "NC",
	 "name": "Currituck County (NC)",
	 "stateId": "37"
  },
  "37055": {
	 "stateAbbr": "NC",
	 "name": "Dare County (NC)",
	 "stateId": "37"
  },
  "37057": {
	 "stateAbbr": "NC",
	 "name": "Davidson County (NC)",
	 "stateId": "37"
  },
  "37059": {
	 "stateAbbr": "NC",
	 "name": "Davie County (NC)",
	 "stateId": "37"
  },
  "37061": {
	 "stateAbbr": "NC",
	 "name": "Duplin County (NC)",
	 "stateId": "37"
  },
  "37063": {
	 "stateAbbr": "NC",
	 "name": "Durham County (NC)",
	 "stateId": "37"
  },
  "37065": {
	 "stateAbbr": "NC",
	 "name": "Edgecombe County (NC)",
	 "stateId": "37"
  },
  "37067": {
	 "stateAbbr": "NC",
	 "name": "Forsyth County (NC)",
	 "stateId": "37"
  },
  "37069": {
	 "stateAbbr": "NC",
	 "name": "Franklin County (NC)",
	 "stateId": "37"
  },
  "37071": {
	 "stateAbbr": "NC",
	 "name": "Gaston County (NC)",
	 "stateId": "37"
  },
  "37073": {
	 "stateAbbr": "NC",
	 "name": "Gates County (NC)",
	 "stateId": "37"
  },
  "37075": {
	 "stateAbbr": "NC",
	 "name": "Graham County (NC)",
	 "stateId": "37"
  },
  "37077": {
	 "stateAbbr": "NC",
	 "name": "Granville County (NC)",
	 "stateId": "37"
  },
  "37079": {
	 "stateAbbr": "NC",
	 "name": "Greene County (NC)",
	 "stateId": "37"
  },
  "37081": {
	 "stateAbbr": "NC",
	 "name": "Guilford County (NC)",
	 "stateId": "37"
  },
  "37083": {
	 "stateAbbr": "NC",
	 "name": "Halifax County (NC)",
	 "stateId": "37"
  },
  "37085": {
	 "stateAbbr": "NC",
	 "name": "Harnett County (NC)",
	 "stateId": "37"
  },
  "37087": {
	 "stateAbbr": "NC",
	 "name": "Haywood County (NC)",
	 "stateId": "37"
  },
  "37089": {
	 "stateAbbr": "NC",
	 "name": "Henderson County (NC)",
	 "stateId": "37"
  },
  "37091": {
	 "stateAbbr": "NC",
	 "name": "Hertford County (NC)",
	 "stateId": "37"
  },
  "37093": {
	 "stateAbbr": "NC",
	 "name": "Hoke County (NC)",
	 "stateId": "37"
  },
  "37095": {
	 "stateAbbr": "NC",
	 "name": "Hyde County (NC)",
	 "stateId": "37"
  },
  "37097": {
	 "stateAbbr": "NC",
	 "name": "Iredell County (NC)",
	 "stateId": "37"
  },
  "37099": {
	 "stateAbbr": "NC",
	 "name": "Jackson County (NC)",
	 "stateId": "37"
  },
  "37101": {
	 "stateAbbr": "NC",
	 "name": "Johnston County (NC)",
	 "stateId": "37"
  },
  "37103": {
	 "stateAbbr": "NC",
	 "name": "Jones County (NC)",
	 "stateId": "37"
  },
  "37105": {
	 "stateAbbr": "NC",
	 "name": "Lee County (NC)",
	 "stateId": "37"
  },
  "37107": {
	 "stateAbbr": "NC",
	 "name": "Lenoir County (NC)",
	 "stateId": "37"
  },
  "37109": {
	 "stateAbbr": "NC",
	 "name": "Lincoln County (NC)",
	 "stateId": "37"
  },
  "37111": {
	 "stateAbbr": "NC",
	 "name": "McDowell County (NC)",
	 "stateId": "37"
  },
  "37113": {
	 "stateAbbr": "NC",
	 "name": "Macon County (NC)",
	 "stateId": "37"
  },
  "37115": {
	 "stateAbbr": "NC",
	 "name": "Madison County (NC)",
	 "stateId": "37"
  },
  "37117": {
	 "stateAbbr": "NC",
	 "name": "Martin County (NC)",
	 "stateId": "37"
  },
  "37119": {
	 "stateAbbr": "NC",
	 "name": "Mecklenburg County (NC)",
	 "stateId": "37"
  },
  "37121": {
	 "stateAbbr": "NC",
	 "name": "Mitchell County (NC)",
	 "stateId": "37"
  },
  "37123": {
	 "stateAbbr": "NC",
	 "name": "Montgomery County (NC)",
	 "stateId": "37"
  },
  "37125": {
	 "stateAbbr": "NC",
	 "name": "Moore County (NC)",
	 "stateId": "37"
  },
  "37127": {
	 "stateAbbr": "NC",
	 "name": "Nash County (NC)",
	 "stateId": "37"
  },
  "37129": {
	 "stateAbbr": "NC",
	 "name": "New Hanover County (NC)",
	 "stateId": "37"
  },
  "37131": {
	 "stateAbbr": "NC",
	 "name": "Northampton County (NC)",
	 "stateId": "37"
  },
  "37133": {
	 "stateAbbr": "NC",
	 "name": "Onslow County (NC)",
	 "stateId": "37"
  },
  "37135": {
	 "stateAbbr": "NC",
	 "name": "Orange County (NC)",
	 "stateId": "37"
  },
  "37137": {
	 "stateAbbr": "NC",
	 "name": "Pamlico County (NC)",
	 "stateId": "37"
  },
  "37139": {
	 "stateAbbr": "NC",
	 "name": "Pasquotank County (NC)",
	 "stateId": "37"
  },
  "37141": {
	 "stateAbbr": "NC",
	 "name": "Pender County (NC)",
	 "stateId": "37"
  },
  "37143": {
	 "stateAbbr": "NC",
	 "name": "Perquimans County (NC)",
	 "stateId": "37"
  },
  "37145": {
	 "stateAbbr": "NC",
	 "name": "Person County (NC)",
	 "stateId": "37"
  },
  "37147": {
	 "stateAbbr": "NC",
	 "name": "Pitt County (NC)",
	 "stateId": "37"
  },
  "37149": {
	 "stateAbbr": "NC",
	 "name": "Polk County (NC)",
	 "stateId": "37"
  },
  "37151": {
	 "stateAbbr": "NC",
	 "name": "Randolph County (NC)",
	 "stateId": "37"
  },
  "37153": {
	 "stateAbbr": "NC",
	 "name": "Richmond County (NC)",
	 "stateId": "37"
  },
  "37155": {
	 "stateAbbr": "NC",
	 "name": "Robeson County (NC)",
	 "stateId": "37"
  },
  "37157": {
	 "stateAbbr": "NC",
	 "name": "Rockingham County (NC)",
	 "stateId": "37"
  },
  "37159": {
	 "stateAbbr": "NC",
	 "name": "Rowan County (NC)",
	 "stateId": "37"
  },
  "37161": {
	 "stateAbbr": "NC",
	 "name": "Rutherford County (NC)",
	 "stateId": "37"
  },
  "37163": {
	 "stateAbbr": "NC",
	 "name": "Sampson County (NC)",
	 "stateId": "37"
  },
  "37165": {
	 "stateAbbr": "NC",
	 "name": "Scotland County (NC)",
	 "stateId": "37"
  },
  "37167": {
	 "stateAbbr": "NC",
	 "name": "Stanly County (NC)",
	 "stateId": "37"
  },
  "37169": {
	 "stateAbbr": "NC",
	 "name": "Stokes County (NC)",
	 "stateId": "37"
  },
  "37171": {
	 "stateAbbr": "NC",
	 "name": "Surry County (NC)",
	 "stateId": "37"
  },
  "37173": {
	 "stateAbbr": "NC",
	 "name": "Swain County (NC)",
	 "stateId": "37"
  },
  "37175": {
	 "stateAbbr": "NC",
	 "name": "Transylvania County (NC)",
	 "stateId": "37"
  },
  "37177": {
	 "stateAbbr": "NC",
	 "name": "Tyrrell County (NC)",
	 "stateId": "37"
  },
  "37179": {
	 "stateAbbr": "NC",
	 "name": "Union County (NC)",
	 "stateId": "37"
  },
  "37181": {
	 "stateAbbr": "NC",
	 "name": "Vance County (NC)",
	 "stateId": "37"
  },
  "37183": {
	 "stateAbbr": "NC",
	 "name": "Wake County (NC)",
	 "stateId": "37"
  },
  "37185": {
	 "stateAbbr": "NC",
	 "name": "Warren County (NC)",
	 "stateId": "37"
  },
  "37187": {
	 "stateAbbr": "NC",
	 "name": "Washington County (NC)",
	 "stateId": "37"
  },
  "37189": {
	 "stateAbbr": "NC",
	 "name": "Watauga County (NC)",
	 "stateId": "37"
  },
  "37191": {
	 "stateAbbr": "NC",
	 "name": "Wayne County (NC)",
	 "stateId": "37"
  },
  "37193": {
	 "stateAbbr": "NC",
	 "name": "Wilkes County (NC)",
	 "stateId": "37"
  },
  "37195": {
	 "stateAbbr": "NC",
	 "name": "Wilson County (NC)",
	 "stateId": "37"
  },
  "37197": {
	 "stateAbbr": "NC",
	 "name": "Yadkin County (NC)",
	 "stateId": "37"
  },
  "37199": {
	 "stateAbbr": "NC",
	 "name": "Yancey County (NC)",
	 "stateId": "37"
  },
  "38001": {
	 "stateAbbr": "ND",
	 "name": "Adams County (ND)",
	 "stateId": "38"
  },
  "38003": {
	 "stateAbbr": "ND",
	 "name": "Barnes County (ND)",
	 "stateId": "38"
  },
  "38005": {
	 "stateAbbr": "ND",
	 "name": "Benson County (ND)",
	 "stateId": "38"
  },
  "38007": {
	 "stateAbbr": "ND",
	 "name": "Billings County (ND)",
	 "stateId": "38"
  },
  "38009": {
	 "stateAbbr": "ND",
	 "name": "Bottineau County (ND)",
	 "stateId": "38"
  },
  "38011": {
	 "stateAbbr": "ND",
	 "name": "Bowman County (ND)",
	 "stateId": "38"
  },
  "38013": {
	 "stateAbbr": "ND",
	 "name": "Burke County (ND)",
	 "stateId": "38"
  },
  "38015": {
	 "stateAbbr": "ND",
	 "name": "Burleigh County (ND)",
	 "stateId": "38"
  },
  "38017": {
	 "stateAbbr": "ND",
	 "name": "Cass County (ND)",
	 "stateId": "38"
  },
  "38019": {
	 "stateAbbr": "ND",
	 "name": "Cavalier County (ND)",
	 "stateId": "38"
  },
  "38021": {
	 "stateAbbr": "ND",
	 "name": "Dickey County (ND)",
	 "stateId": "38"
  },
  "38023": {
	 "stateAbbr": "ND",
	 "name": "Divide County (ND)",
	 "stateId": "38"
  },
  "38025": {
	 "stateAbbr": "ND",
	 "name": "Dunn County (ND)",
	 "stateId": "38"
  },
  "38027": {
	 "stateAbbr": "ND",
	 "name": "Eddy County (ND)",
	 "stateId": "38"
  },
  "38029": {
	 "stateAbbr": "ND",
	 "name": "Emmons County (ND)",
	 "stateId": "38"
  },
  "38031": {
	 "stateAbbr": "ND",
	 "name": "Foster County (ND)",
	 "stateId": "38"
  },
  "38033": {
	 "stateAbbr": "ND",
	 "name": "Golden Valley County (ND)",
	 "stateId": "38"
  },
  "38035": {
	 "stateAbbr": "ND",
	 "name": "Grand Forks County (ND)",
	 "stateId": "38"
  },
  "38037": {
	 "stateAbbr": "ND",
	 "name": "Grant County (ND)",
	 "stateId": "38"
  },
  "38039": {
	 "stateAbbr": "ND",
	 "name": "Griggs County (ND)",
	 "stateId": "38"
  },
  "38041": {
	 "stateAbbr": "ND",
	 "name": "Hettinger County (ND)",
	 "stateId": "38"
  },
  "38043": {
	 "stateAbbr": "ND",
	 "name": "Kidder County (ND)",
	 "stateId": "38"
  },
  "38045": {
	 "stateAbbr": "ND",
	 "name": "LaMoure County (ND)",
	 "stateId": "38"
  },
  "38047": {
	 "stateAbbr": "ND",
	 "name": "Logan County (ND)",
	 "stateId": "38"
  },
  "38049": {
	 "stateAbbr": "ND",
	 "name": "McHenry County (ND)",
	 "stateId": "38"
  },
  "38051": {
	 "stateAbbr": "ND",
	 "name": "McIntosh County (ND)",
	 "stateId": "38"
  },
  "38053": {
	 "stateAbbr": "ND",
	 "name": "McKenzie County (ND)",
	 "stateId": "38"
  },
  "38055": {
	 "stateAbbr": "ND",
	 "name": "McLean County (ND)",
	 "stateId": "38"
  },
  "38057": {
	 "stateAbbr": "ND",
	 "name": "Mercer County (ND)",
	 "stateId": "38"
  },
  "38059": {
	 "stateAbbr": "ND",
	 "name": "Morton County (ND)",
	 "stateId": "38"
  },
  "38061": {
	 "stateAbbr": "ND",
	 "name": "Mountrail County (ND)",
	 "stateId": "38"
  },
  "38063": {
	 "stateAbbr": "ND",
	 "name": "Nelson County (ND)",
	 "stateId": "38"
  },
  "38065": {
	 "stateAbbr": "ND",
	 "name": "Oliver County (ND)",
	 "stateId": "38"
  },
  "38067": {
	 "stateAbbr": "ND",
	 "name": "Pembina County (ND)",
	 "stateId": "38"
  },
  "38069": {
	 "stateAbbr": "ND",
	 "name": "Pierce County (ND)",
	 "stateId": "38"
  },
  "38071": {
	 "stateAbbr": "ND",
	 "name": "Ramsey County (ND)",
	 "stateId": "38"
  },
  "38073": {
	 "stateAbbr": "ND",
	 "name": "Ransom County (ND)",
	 "stateId": "38"
  },
  "38075": {
	 "stateAbbr": "ND",
	 "name": "Renville County (ND)",
	 "stateId": "38"
  },
  "38077": {
	 "stateAbbr": "ND",
	 "name": "Richland County (ND)",
	 "stateId": "38"
  },
  "38079": {
	 "stateAbbr": "ND",
	 "name": "Rolette County (ND)",
	 "stateId": "38"
  },
  "38081": {
	 "stateAbbr": "ND",
	 "name": "Sargent County (ND)",
	 "stateId": "38"
  },
  "38083": {
	 "stateAbbr": "ND",
	 "name": "Sheridan County (ND)",
	 "stateId": "38"
  },
  "38085": {
	 "stateAbbr": "ND",
	 "name": "Sioux County (ND)",
	 "stateId": "38"
  },
  "38087": {
	 "stateAbbr": "ND",
	 "name": "Slope County (ND)",
	 "stateId": "38"
  },
  "38089": {
	 "stateAbbr": "ND",
	 "name": "Stark County (ND)",
	 "stateId": "38"
  },
  "38091": {
	 "stateAbbr": "ND",
	 "name": "Steele County (ND)",
	 "stateId": "38"
  },
  "38093": {
	 "stateAbbr": "ND",
	 "name": "Stutsman County (ND)",
	 "stateId": "38"
  },
  "38095": {
	 "stateAbbr": "ND",
	 "name": "Towner County (ND)",
	 "stateId": "38"
  },
  "38097": {
	 "stateAbbr": "ND",
	 "name": "Traill County (ND)",
	 "stateId": "38"
  },
  "38099": {
	 "stateAbbr": "ND",
	 "name": "Walsh County (ND)",
	 "stateId": "38"
  },
  "38101": {
	 "stateAbbr": "ND",
	 "name": "Ward County (ND)",
	 "stateId": "38"
  },
  "38103": {
	 "stateAbbr": "ND",
	 "name": "Wells County (ND)",
	 "stateId": "38"
  },
  "38105": {
	 "stateAbbr": "ND",
	 "name": "Williams County (ND)",
	 "stateId": "38"
  },
  "39001": {
	 "stateAbbr": "OH",
	 "name": "Adams County (OH)",
	 "stateId": "39"
  },
  "39003": {
	 "stateAbbr": "OH",
	 "name": "Allen County (OH)",
	 "stateId": "39"
  },
  "39005": {
	 "stateAbbr": "OH",
	 "name": "Ashland County (OH)",
	 "stateId": "39"
  },
  "39007": {
	 "stateAbbr": "OH",
	 "name": "Ashtabula County (OH)",
	 "stateId": "39"
  },
  "39009": {
	 "stateAbbr": "OH",
	 "name": "Athens County (OH)",
	 "stateId": "39"
  },
  "39011": {
	 "stateAbbr": "OH",
	 "name": "Auglaize County (OH)",
	 "stateId": "39"
  },
  "39013": {
	 "stateAbbr": "OH",
	 "name": "Belmont County (OH)",
	 "stateId": "39"
  },
  "39015": {
	 "stateAbbr": "OH",
	 "name": "Brown County (OH)",
	 "stateId": "39"
  },
  "39017": {
	 "stateAbbr": "OH",
	 "name": "Butler County (OH)",
	 "stateId": "39"
  },
  "39019": {
	 "stateAbbr": "OH",
	 "name": "Carroll County (OH)",
	 "stateId": "39"
  },
  "39021": {
	 "stateAbbr": "OH",
	 "name": "Champaign County (OH)",
	 "stateId": "39"
  },
  "39023": {
	 "stateAbbr": "OH",
	 "name": "Clark County (OH)",
	 "stateId": "39"
  },
  "39025": {
	 "stateAbbr": "OH",
	 "name": "Clermont County (OH)",
	 "stateId": "39"
  },
  "39027": {
	 "stateAbbr": "OH",
	 "name": "Clinton County (OH)",
	 "stateId": "39"
  },
  "39029": {
	 "stateAbbr": "OH",
	 "name": "Columbiana County (OH)",
	 "stateId": "39"
  },
  "39031": {
	 "stateAbbr": "OH",
	 "name": "Coshocton County (OH)",
	 "stateId": "39"
  },
  "39033": {
	 "stateAbbr": "OH",
	 "name": "Crawford County (OH)",
	 "stateId": "39"
  },
  "39035": {
	 "stateAbbr": "OH",
	 "name": "Cuyahoga County (OH)",
	 "stateId": "39"
  },
  "39037": {
	 "stateAbbr": "OH",
	 "name": "Darke County (OH)",
	 "stateId": "39"
  },
  "39039": {
	 "stateAbbr": "OH",
	 "name": "Defiance County (OH)",
	 "stateId": "39"
  },
  "39041": {
	 "stateAbbr": "OH",
	 "name": "Delaware County (OH)",
	 "stateId": "39"
  },
  "39043": {
	 "stateAbbr": "OH",
	 "name": "Erie County (OH)",
	 "stateId": "39"
  },
  "39045": {
	 "stateAbbr": "OH",
	 "name": "Fairfield County (OH)",
	 "stateId": "39"
  },
  "39047": {
	 "stateAbbr": "OH",
	 "name": "Fayette County (OH)",
	 "stateId": "39"
  },
  "39049": {
	 "stateAbbr": "OH",
	 "name": "Franklin County (OH)",
	 "stateId": "39"
  },
  "39051": {
	 "stateAbbr": "OH",
	 "name": "Fulton County (OH)",
	 "stateId": "39"
  },
  "39053": {
	 "stateAbbr": "OH",
	 "name": "Gallia County (OH)",
	 "stateId": "39"
  },
  "39055": {
	 "stateAbbr": "OH",
	 "name": "Geauga County (OH)",
	 "stateId": "39"
  },
  "39057": {
	 "stateAbbr": "OH",
	 "name": "Greene County (OH)",
	 "stateId": "39"
  },
  "39059": {
	 "stateAbbr": "OH",
	 "name": "Guernsey County (OH)",
	 "stateId": "39"
  },
  "39061": {
	 "stateAbbr": "OH",
	 "name": "Hamilton County (OH)",
	 "stateId": "39"
  },
  "39063": {
	 "stateAbbr": "OH",
	 "name": "Hancock County (OH)",
	 "stateId": "39"
  },
  "39065": {
	 "stateAbbr": "OH",
	 "name": "Hardin County (OH)",
	 "stateId": "39"
  },
  "39067": {
	 "stateAbbr": "OH",
	 "name": "Harrison County (OH)",
	 "stateId": "39"
  },
  "39069": {
	 "stateAbbr": "OH",
	 "name": "Henry County (OH)",
	 "stateId": "39"
  },
  "39071": {
	 "stateAbbr": "OH",
	 "name": "Highland County (OH)",
	 "stateId": "39"
  },
  "39073": {
	 "stateAbbr": "OH",
	 "name": "Hocking County (OH)",
	 "stateId": "39"
  },
  "39075": {
	 "stateAbbr": "OH",
	 "name": "Holmes County (OH)",
	 "stateId": "39"
  },
  "39077": {
	 "stateAbbr": "OH",
	 "name": "Huron County (OH)",
	 "stateId": "39"
  },
  "39079": {
	 "stateAbbr": "OH",
	 "name": "Jackson County (OH)",
	 "stateId": "39"
  },
  "39081": {
	 "stateAbbr": "OH",
	 "name": "Jefferson County (OH)",
	 "stateId": "39"
  },
  "39083": {
	 "stateAbbr": "OH",
	 "name": "Knox County (OH)",
	 "stateId": "39"
  },
  "39085": {
	 "stateAbbr": "OH",
	 "name": "Lake County (OH)",
	 "stateId": "39"
  },
  "39087": {
	 "stateAbbr": "OH",
	 "name": "Lawrence County (OH)",
	 "stateId": "39"
  },
  "39089": {
	 "stateAbbr": "OH",
	 "name": "Licking County (OH)",
	 "stateId": "39"
  },
  "39091": {
	 "stateAbbr": "OH",
	 "name": "Logan County (OH)",
	 "stateId": "39"
  },
  "39093": {
	 "stateAbbr": "OH",
	 "name": "Lorain County (OH)",
	 "stateId": "39"
  },
  "39095": {
	 "stateAbbr": "OH",
	 "name": "Lucas County (OH)",
	 "stateId": "39"
  },
  "39097": {
	 "stateAbbr": "OH",
	 "name": "Madison County (OH)",
	 "stateId": "39"
  },
  "39099": {
	 "stateAbbr": "OH",
	 "name": "Mahoning County (OH)",
	 "stateId": "39"
  },
  "39101": {
	 "stateAbbr": "OH",
	 "name": "Marion County (OH)",
	 "stateId": "39"
  },
  "39103": {
	 "stateAbbr": "OH",
	 "name": "Medina County (OH)",
	 "stateId": "39"
  },
  "39105": {
	 "stateAbbr": "OH",
	 "name": "Meigs County (OH)",
	 "stateId": "39"
  },
  "39107": {
	 "stateAbbr": "OH",
	 "name": "Mercer County (OH)",
	 "stateId": "39"
  },
  "39109": {
	 "stateAbbr": "OH",
	 "name": "Miami County (OH)",
	 "stateId": "39"
  },
  "39111": {
	 "stateAbbr": "OH",
	 "name": "Monroe County (OH)",
	 "stateId": "39"
  },
  "39113": {
	 "stateAbbr": "OH",
	 "name": "Montgomery County (OH)",
	 "stateId": "39"
  },
  "39115": {
	 "stateAbbr": "OH",
	 "name": "Morgan County (OH)",
	 "stateId": "39"
  },
  "39117": {
	 "stateAbbr": "OH",
	 "name": "Morrow County (OH)",
	 "stateId": "39"
  },
  "39119": {
	 "stateAbbr": "OH",
	 "name": "Muskingum County (OH)",
	 "stateId": "39"
  },
  "39121": {
	 "stateAbbr": "OH",
	 "name": "Noble County (OH)",
	 "stateId": "39"
  },
  "39123": {
	 "stateAbbr": "OH",
	 "name": "Ottawa County (OH)",
	 "stateId": "39"
  },
  "39125": {
	 "stateAbbr": "OH",
	 "name": "Paulding County (OH)",
	 "stateId": "39"
  },
  "39127": {
	 "stateAbbr": "OH",
	 "name": "Perry County (OH)",
	 "stateId": "39"
  },
  "39129": {
	 "stateAbbr": "OH",
	 "name": "Pickaway County (OH)",
	 "stateId": "39"
  },
  "39131": {
	 "stateAbbr": "OH",
	 "name": "Pike County (OH)",
	 "stateId": "39"
  },
  "39133": {
	 "stateAbbr": "OH",
	 "name": "Portage County (OH)",
	 "stateId": "39"
  },
  "39135": {
	 "stateAbbr": "OH",
	 "name": "Preble County (OH)",
	 "stateId": "39"
  },
  "39137": {
	 "stateAbbr": "OH",
	 "name": "Putnam County (OH)",
	 "stateId": "39"
  },
  "39139": {
	 "stateAbbr": "OH",
	 "name": "Richland County (OH)",
	 "stateId": "39"
  },
  "39141": {
	 "stateAbbr": "OH",
	 "name": "Ross County (OH)",
	 "stateId": "39"
  },
  "39143": {
	 "stateAbbr": "OH",
	 "name": "Sandusky County (OH)",
	 "stateId": "39"
  },
  "39145": {
	 "stateAbbr": "OH",
	 "name": "Scioto County (OH)",
	 "stateId": "39"
  },
  "39147": {
	 "stateAbbr": "OH",
	 "name": "Seneca County (OH)",
	 "stateId": "39"
  },
  "39149": {
	 "stateAbbr": "OH",
	 "name": "Shelby County (OH)",
	 "stateId": "39"
  },
  "39151": {
	 "stateAbbr": "OH",
	 "name": "Stark County (OH)",
	 "stateId": "39"
  },
  "39153": {
	 "stateAbbr": "OH",
	 "name": "Summit County (OH)",
	 "stateId": "39"
  },
  "39155": {
	 "stateAbbr": "OH",
	 "name": "Trumbull County (OH)",
	 "stateId": "39"
  },
  "39157": {
	 "stateAbbr": "OH",
	 "name": "Tuscarawas County (OH)",
	 "stateId": "39"
  },
  "39159": {
	 "stateAbbr": "OH",
	 "name": "Union County (OH)",
	 "stateId": "39"
  },
  "39161": {
	 "stateAbbr": "OH",
	 "name": "Van Wert County (OH)",
	 "stateId": "39"
  },
  "39163": {
	 "stateAbbr": "OH",
	 "name": "Vinton County (OH)",
	 "stateId": "39"
  },
  "39165": {
	 "stateAbbr": "OH",
	 "name": "Warren County (OH)",
	 "stateId": "39"
  },
  "39167": {
	 "stateAbbr": "OH",
	 "name": "Washington County (OH)",
	 "stateId": "39"
  },
  "39169": {
	 "stateAbbr": "OH",
	 "name": "Wayne County (OH)",
	 "stateId": "39"
  },
  "39171": {
	 "stateAbbr": "OH",
	 "name": "Williams County (OH)",
	 "stateId": "39"
  },
  "39173": {
	 "stateAbbr": "OH",
	 "name": "Wood County (OH)",
	 "stateId": "39"
  },
  "39175": {
	 "stateAbbr": "OH",
	 "name": "Wyandot County (OH)",
	 "stateId": "39"
  },
  "40001": {
	 "stateAbbr": "OK",
	 "name": "Adair County (OK)",
	 "stateId": "40"
  },
  "40003": {
	 "stateAbbr": "OK",
	 "name": "Alfalfa County (OK)",
	 "stateId": "40"
  },
  "40005": {
	 "stateAbbr": "OK",
	 "name": "Atoka County (OK)",
	 "stateId": "40"
  },
  "40007": {
	 "stateAbbr": "OK",
	 "name": "Beaver County (OK)",
	 "stateId": "40"
  },
  "40009": {
	 "stateAbbr": "OK",
	 "name": "Beckham County (OK)",
	 "stateId": "40"
  },
  "40011": {
	 "stateAbbr": "OK",
	 "name": "Blaine County (OK)",
	 "stateId": "40"
  },
  "40013": {
	 "stateAbbr": "OK",
	 "name": "Bryan County (OK)",
	 "stateId": "40"
  },
  "40015": {
	 "stateAbbr": "OK",
	 "name": "Caddo County (OK)",
	 "stateId": "40"
  },
  "40017": {
	 "stateAbbr": "OK",
	 "name": "Canadian County (OK)",
	 "stateId": "40"
  },
  "40019": {
	 "stateAbbr": "OK",
	 "name": "Carter County (OK)",
	 "stateId": "40"
  },
  "40021": {
	 "stateAbbr": "OK",
	 "name": "Cherokee County (OK)",
	 "stateId": "40"
  },
  "40023": {
	 "stateAbbr": "OK",
	 "name": "Choctaw County (OK)",
	 "stateId": "40"
  },
  "40025": {
	 "stateAbbr": "OK",
	 "name": "Cimarron County (OK)",
	 "stateId": "40"
  },
  "40027": {
	 "stateAbbr": "OK",
	 "name": "Cleveland County (OK)",
	 "stateId": "40"
  },
  "40029": {
	 "stateAbbr": "OK",
	 "name": "Coal County (OK)",
	 "stateId": "40"
  },
  "40031": {
	 "stateAbbr": "OK",
	 "name": "Comanche County (OK)",
	 "stateId": "40"
  },
  "40033": {
	 "stateAbbr": "OK",
	 "name": "Cotton County (OK)",
	 "stateId": "40"
  },
  "40035": {
	 "stateAbbr": "OK",
	 "name": "Craig County (OK)",
	 "stateId": "40"
  },
  "40037": {
	 "stateAbbr": "OK",
	 "name": "Creek County (OK)",
	 "stateId": "40"
  },
  "40039": {
	 "stateAbbr": "OK",
	 "name": "Custer County (OK)",
	 "stateId": "40"
  },
  "40041": {
	 "stateAbbr": "OK",
	 "name": "Delaware County (OK)",
	 "stateId": "40"
  },
  "40043": {
	 "stateAbbr": "OK",
	 "name": "Dewey County (OK)",
	 "stateId": "40"
  },
  "40045": {
	 "stateAbbr": "OK",
	 "name": "Ellis County (OK)",
	 "stateId": "40"
  },
  "40047": {
	 "stateAbbr": "OK",
	 "name": "Garfield County (OK)",
	 "stateId": "40"
  },
  "40049": {
	 "stateAbbr": "OK",
	 "name": "Garvin County (OK)",
	 "stateId": "40"
  },
  "40051": {
	 "stateAbbr": "OK",
	 "name": "Grady County (OK)",
	 "stateId": "40"
  },
  "40053": {
	 "stateAbbr": "OK",
	 "name": "Grant County (OK)",
	 "stateId": "40"
  },
  "40055": {
	 "stateAbbr": "OK",
	 "name": "Greer County (OK)",
	 "stateId": "40"
  },
  "40057": {
	 "stateAbbr": "OK",
	 "name": "Harmon County (OK)",
	 "stateId": "40"
  },
  "40059": {
	 "stateAbbr": "OK",
	 "name": "Harper County (OK)",
	 "stateId": "40"
  },
  "40061": {
	 "stateAbbr": "OK",
	 "name": "Haskell County (OK)",
	 "stateId": "40"
  },
  "40063": {
	 "stateAbbr": "OK",
	 "name": "Hughes County (OK)",
	 "stateId": "40"
  },
  "40065": {
	 "stateAbbr": "OK",
	 "name": "Jackson County (OK)",
	 "stateId": "40"
  },
  "40067": {
	 "stateAbbr": "OK",
	 "name": "Jefferson County (OK)",
	 "stateId": "40"
  },
  "40069": {
	 "stateAbbr": "OK",
	 "name": "Johnston County (OK)",
	 "stateId": "40"
  },
  "40071": {
	 "stateAbbr": "OK",
	 "name": "Kay County (OK)",
	 "stateId": "40"
  },
  "40073": {
	 "stateAbbr": "OK",
	 "name": "Kingfisher County (OK)",
	 "stateId": "40"
  },
  "40075": {
	 "stateAbbr": "OK",
	 "name": "Kiowa County (OK)",
	 "stateId": "40"
  },
  "40077": {
	 "stateAbbr": "OK",
	 "name": "Latimer County (OK)",
	 "stateId": "40"
  },
  "40079": {
	 "stateAbbr": "OK",
	 "name": "Le Flore County (OK)",
	 "stateId": "40"
  },
  "40081": {
	 "stateAbbr": "OK",
	 "name": "Lincoln County (OK)",
	 "stateId": "40"
  },
  "40083": {
	 "stateAbbr": "OK",
	 "name": "Logan County (OK)",
	 "stateId": "40"
  },
  "40085": {
	 "stateAbbr": "OK",
	 "name": "Love County (OK)",
	 "stateId": "40"
  },
  "40087": {
	 "stateAbbr": "OK",
	 "name": "McClain County (OK)",
	 "stateId": "40"
  },
  "40089": {
	 "stateAbbr": "OK",
	 "name": "McCurtain County (OK)",
	 "stateId": "40"
  },
  "40091": {
	 "stateAbbr": "OK",
	 "name": "McIntosh County (OK)",
	 "stateId": "40"
  },
  "40093": {
	 "stateAbbr": "OK",
	 "name": "Major County (OK)",
	 "stateId": "40"
  },
  "40095": {
	 "stateAbbr": "OK",
	 "name": "Marshall County (OK)",
	 "stateId": "40"
  },
  "40097": {
	 "stateAbbr": "OK",
	 "name": "Mayes County (OK)",
	 "stateId": "40"
  },
  "40099": {
	 "stateAbbr": "OK",
	 "name": "Murray County (OK)",
	 "stateId": "40"
  },
  "40101": {
	 "stateAbbr": "OK",
	 "name": "Muskogee County (OK)",
	 "stateId": "40"
  },
  "40103": {
	 "stateAbbr": "OK",
	 "name": "Noble County (OK)",
	 "stateId": "40"
  },
  "40105": {
	 "stateAbbr": "OK",
	 "name": "Nowata County (OK)",
	 "stateId": "40"
  },
  "40107": {
	 "stateAbbr": "OK",
	 "name": "Okfuskee County (OK)",
	 "stateId": "40"
  },
  "40109": {
	 "stateAbbr": "OK",
	 "name": "Oklahoma County (OK)",
	 "stateId": "40"
  },
  "40111": {
	 "stateAbbr": "OK",
	 "name": "Okmulgee County (OK)",
	 "stateId": "40"
  },
  "40113": {
	 "stateAbbr": "OK",
	 "name": "Osage County (OK)",
	 "stateId": "40"
  },
  "40115": {
	 "stateAbbr": "OK",
	 "name": "Ottawa County (OK)",
	 "stateId": "40"
  },
  "40117": {
	 "stateAbbr": "OK",
	 "name": "Pawnee County (OK)",
	 "stateId": "40"
  },
  "40119": {
	 "stateAbbr": "OK",
	 "name": "Payne County (OK)",
	 "stateId": "40"
  },
  "40121": {
	 "stateAbbr": "OK",
	 "name": "Pittsburg County (OK)",
	 "stateId": "40"
  },
  "40123": {
	 "stateAbbr": "OK",
	 "name": "Pontotoc County (OK)",
	 "stateId": "40"
  },
  "40125": {
	 "stateAbbr": "OK",
	 "name": "Pottawatomie County (OK)",
	 "stateId": "40"
  },
  "40127": {
	 "stateAbbr": "OK",
	 "name": "Pushmataha County (OK)",
	 "stateId": "40"
  },
  "40129": {
	 "stateAbbr": "OK",
	 "name": "Roger Mills County (OK)",
	 "stateId": "40"
  },
  "40131": {
	 "stateAbbr": "OK",
	 "name": "Rogers County (OK)",
	 "stateId": "40"
  },
  "40133": {
	 "stateAbbr": "OK",
	 "name": "Seminole County (OK)",
	 "stateId": "40"
  },
  "40135": {
	 "stateAbbr": "OK",
	 "name": "Sequoyah County (OK)",
	 "stateId": "40"
  },
  "40137": {
	 "stateAbbr": "OK",
	 "name": "Stephens County (OK)",
	 "stateId": "40"
  },
  "40139": {
	 "stateAbbr": "OK",
	 "name": "Texas County (OK)",
	 "stateId": "40"
  },
  "40141": {
	 "stateAbbr": "OK",
	 "name": "Tillman County (OK)",
	 "stateId": "40"
  },
  "40143": {
	 "stateAbbr": "OK",
	 "name": "Tulsa County (OK)",
	 "stateId": "40"
  },
  "40145": {
	 "stateAbbr": "OK",
	 "name": "Wagoner County (OK)",
	 "stateId": "40"
  },
  "40147": {
	 "stateAbbr": "OK",
	 "name": "Washington County (OK)",
	 "stateId": "40"
  },
  "40149": {
	 "stateAbbr": "OK",
	 "name": "Washita County (OK)",
	 "stateId": "40"
  },
  "40151": {
	 "stateAbbr": "OK",
	 "name": "Woods County (OK)",
	 "stateId": "40"
  },
  "40153": {
	 "stateAbbr": "OK",
	 "name": "Woodward County (OK)",
	 "stateId": "40"
  },
  "41001": {
	 "stateAbbr": "OR",
	 "name": "Baker County (OR)",
	 "stateId": "41"
  },
  "41003": {
	 "stateAbbr": "OR",
	 "name": "Benton County (OR)",
	 "stateId": "41"
  },
  "41005": {
	 "stateAbbr": "OR",
	 "name": "Clackamas County (OR)",
	 "stateId": "41"
  },
  "41007": {
	 "stateAbbr": "OR",
	 "name": "Clatsop County (OR)",
	 "stateId": "41"
  },
  "41009": {
	 "stateAbbr": "OR",
	 "name": "Columbia County (OR)",
	 "stateId": "41"
  },
  "41011": {
	 "stateAbbr": "OR",
	 "name": "Coos County (OR)",
	 "stateId": "41"
  },
  "41013": {
	 "stateAbbr": "OR",
	 "name": "Crook County (OR)",
	 "stateId": "41"
  },
  "41015": {
	 "stateAbbr": "OR",
	 "name": "Curry County (OR)",
	 "stateId": "41"
  },
  "41017": {
	 "stateAbbr": "OR",
	 "name": "Deschutes County (OR)",
	 "stateId": "41"
  },
  "41019": {
	 "stateAbbr": "OR",
	 "name": "Douglas County (OR)",
	 "stateId": "41"
  },
  "41021": {
	 "stateAbbr": "OR",
	 "name": "Gilliam County (OR)",
	 "stateId": "41"
  },
  "41023": {
	 "stateAbbr": "OR",
	 "name": "Grant County (OR)",
	 "stateId": "41"
  },
  "41025": {
	 "stateAbbr": "OR",
	 "name": "Harney County (OR)",
	 "stateId": "41"
  },
  "41027": {
	 "stateAbbr": "OR",
	 "name": "Hood River County (OR)",
	 "stateId": "41"
  },
  "41029": {
	 "stateAbbr": "OR",
	 "name": "Jackson County (OR)",
	 "stateId": "41"
  },
  "41031": {
	 "stateAbbr": "OR",
	 "name": "Jefferson County (OR)",
	 "stateId": "41"
  },
  "41033": {
	 "stateAbbr": "OR",
	 "name": "Josephine County (OR)",
	 "stateId": "41"
  },
  "41035": {
	 "stateAbbr": "OR",
	 "name": "Klamath County (OR)",
	 "stateId": "41"
  },
  "41037": {
	 "stateAbbr": "OR",
	 "name": "Lake County (OR)",
	 "stateId": "41"
  },
  "41039": {
	 "stateAbbr": "OR",
	 "name": "Lane County (OR)",
	 "stateId": "41"
  },
  "41041": {
	 "stateAbbr": "OR",
	 "name": "Lincoln County (OR)",
	 "stateId": "41"
  },
  "41043": {
	 "stateAbbr": "OR",
	 "name": "Linn County (OR)",
	 "stateId": "41"
  },
  "41045": {
	 "stateAbbr": "OR",
	 "name": "Malheur County (OR)",
	 "stateId": "41"
  },
  "41047": {
	 "stateAbbr": "OR",
	 "name": "Marion County (OR)",
	 "stateId": "41"
  },
  "41049": {
	 "stateAbbr": "OR",
	 "name": "Morrow County (OR)",
	 "stateId": "41"
  },
  "41051": {
	 "stateAbbr": "OR",
	 "name": "Multnomah County (OR)",
	 "stateId": "41"
  },
  "41053": {
	 "stateAbbr": "OR",
	 "name": "Polk County (OR)",
	 "stateId": "41"
  },
  "41055": {
	 "stateAbbr": "OR",
	 "name": "Sherman County (OR)",
	 "stateId": "41"
  },
  "41057": {
	 "stateAbbr": "OR",
	 "name": "Tillamook County (OR)",
	 "stateId": "41"
  },
  "41059": {
	 "stateAbbr": "OR",
	 "name": "Umatilla County (OR)",
	 "stateId": "41"
  },
  "41061": {
	 "stateAbbr": "OR",
	 "name": "Union County (OR)",
	 "stateId": "41"
  },
  "41063": {
	 "stateAbbr": "OR",
	 "name": "Wallowa County (OR)",
	 "stateId": "41"
  },
  "41065": {
	 "stateAbbr": "OR",
	 "name": "Wasco County (OR)",
	 "stateId": "41"
  },
  "41067": {
	 "stateAbbr": "OR",
	 "name": "Washington County (OR)",
	 "stateId": "41"
  },
  "41069": {
	 "stateAbbr": "OR",
	 "name": "Wheeler County (OR)",
	 "stateId": "41"
  },
  "41071": {
	 "stateAbbr": "OR",
	 "name": "Yamhill County (OR)",
	 "stateId": "41"
  },
  "42001": {
	 "stateAbbr": "PA",
	 "name": "Adams County (PA)",
	 "stateId": "42"
  },
  "42003": {
	 "stateAbbr": "PA",
	 "name": "Allegheny County (PA)",
	 "stateId": "42"
  },
  "42005": {
	 "stateAbbr": "PA",
	 "name": "Armstrong County (PA)",
	 "stateId": "42"
  },
  "42007": {
	 "stateAbbr": "PA",
	 "name": "Beaver County (PA)",
	 "stateId": "42"
  },
  "42009": {
	 "stateAbbr": "PA",
	 "name": "Bedford County (PA)",
	 "stateId": "42"
  },
  "42011": {
	 "stateAbbr": "PA",
	 "name": "Berks County (PA)",
	 "stateId": "42"
  },
  "42013": {
	 "stateAbbr": "PA",
	 "name": "Blair County (PA)",
	 "stateId": "42"
  },
  "42015": {
	 "stateAbbr": "PA",
	 "name": "Bradford County (PA)",
	 "stateId": "42"
  },
  "42017": {
	 "stateAbbr": "PA",
	 "name": "Bucks County (PA)",
	 "stateId": "42"
  },
  "42019": {
	 "stateAbbr": "PA",
	 "name": "Butler County (PA)",
	 "stateId": "42"
  },
  "42021": {
	 "stateAbbr": "PA",
	 "name": "Cambria County (PA)",
	 "stateId": "42"
  },
  "42023": {
	 "stateAbbr": "PA",
	 "name": "Cameron County (PA)",
	 "stateId": "42"
  },
  "42025": {
	 "stateAbbr": "PA",
	 "name": "Carbon County (PA)",
	 "stateId": "42"
  },
  "42027": {
	 "stateAbbr": "PA",
	 "name": "Centre County (PA)",
	 "stateId": "42"
  },
  "42029": {
	 "stateAbbr": "PA",
	 "name": "Chester County (PA)",
	 "stateId": "42"
  },
  "42031": {
	 "stateAbbr": "PA",
	 "name": "Clarion County (PA)",
	 "stateId": "42"
  },
  "42033": {
	 "stateAbbr": "PA",
	 "name": "Clearfield County (PA)",
	 "stateId": "42"
  },
  "42035": {
	 "stateAbbr": "PA",
	 "name": "Clinton County (PA)",
	 "stateId": "42"
  },
  "42037": {
	 "stateAbbr": "PA",
	 "name": "Columbia County (PA)",
	 "stateId": "42"
  },
  "42039": {
	 "stateAbbr": "PA",
	 "name": "Crawford County (PA)",
	 "stateId": "42"
  },
  "42041": {
	 "stateAbbr": "PA",
	 "name": "Cumberland County (PA)",
	 "stateId": "42"
  },
  "42043": {
	 "stateAbbr": "PA",
	 "name": "Dauphin County (PA)",
	 "stateId": "42"
  },
  "42045": {
	 "stateAbbr": "PA",
	 "name": "Delaware County (PA)",
	 "stateId": "42"
  },
  "42047": {
	 "stateAbbr": "PA",
	 "name": "Elk County (PA)",
	 "stateId": "42"
  },
  "42049": {
	 "stateAbbr": "PA",
	 "name": "Erie County (PA)",
	 "stateId": "42"
  },
  "42051": {
	 "stateAbbr": "PA",
	 "name": "Fayette County (PA)",
	 "stateId": "42"
  },
  "42053": {
	 "stateAbbr": "PA",
	 "name": "Forest County (PA)",
	 "stateId": "42"
  },
  "42055": {
	 "stateAbbr": "PA",
	 "name": "Franklin County (PA)",
	 "stateId": "42"
  },
  "42057": {
	 "stateAbbr": "PA",
	 "name": "Fulton County (PA)",
	 "stateId": "42"
  },
  "42059": {
	 "stateAbbr": "PA",
	 "name": "Greene County (PA)",
	 "stateId": "42"
  },
  "42061": {
	 "stateAbbr": "PA",
	 "name": "Huntingdon County (PA)",
	 "stateId": "42"
  },
  "42063": {
	 "stateAbbr": "PA",
	 "name": "Indiana County (PA)",
	 "stateId": "42"
  },
  "42065": {
	 "stateAbbr": "PA",
	 "name": "Jefferson County (PA)",
	 "stateId": "42"
  },
  "42067": {
	 "stateAbbr": "PA",
	 "name": "Juniata County (PA)",
	 "stateId": "42"
  },
  "42069": {
	 "stateAbbr": "PA",
	 "name": "Lackawanna County (PA)",
	 "stateId": "42"
  },
  "42071": {
	 "stateAbbr": "PA",
	 "name": "Lancaster County (PA)",
	 "stateId": "42"
  },
  "42073": {
	 "stateAbbr": "PA",
	 "name": "Lawrence County (PA)",
	 "stateId": "42"
  },
  "42075": {
	 "stateAbbr": "PA",
	 "name": "Lebanon County (PA)",
	 "stateId": "42"
  },
  "42077": {
	 "stateAbbr": "PA",
	 "name": "Lehigh County (PA)",
	 "stateId": "42"
  },
  "42079": {
	 "stateAbbr": "PA",
	 "name": "Luzerne County (PA)",
	 "stateId": "42"
  },
  "42081": {
	 "stateAbbr": "PA",
	 "name": "Lycoming County (PA)",
	 "stateId": "42"
  },
  "42083": {
	 "stateAbbr": "PA",
	 "name": "McKean County (PA)",
	 "stateId": "42"
  },
  "42085": {
	 "stateAbbr": "PA",
	 "name": "Mercer County (PA)",
	 "stateId": "42"
  },
  "42087": {
	 "stateAbbr": "PA",
	 "name": "Mifflin County (PA)",
	 "stateId": "42"
  },
  "42089": {
	 "stateAbbr": "PA",
	 "name": "Monroe County (PA)",
	 "stateId": "42"
  },
  "42091": {
	 "stateAbbr": "PA",
	 "name": "Montgomery County (PA)",
	 "stateId": "42"
  },
  "42093": {
	 "stateAbbr": "PA",
	 "name": "Montour County (PA)",
	 "stateId": "42"
  },
  "42095": {
	 "stateAbbr": "PA",
	 "name": "Northampton County (PA)",
	 "stateId": "42"
  },
  "42097": {
	 "stateAbbr": "PA",
	 "name": "Northumberland County (PA)",
	 "stateId": "42"
  },
  "42099": {
	 "stateAbbr": "PA",
	 "name": "Perry County (PA)",
	 "stateId": "42"
  },
  "42101": {
	 "stateAbbr": "PA",
	 "name": "Philadelphia County (PA)",
	 "stateId": "42"
  },
  "42103": {
	 "stateAbbr": "PA",
	 "name": "Pike County (PA)",
	 "stateId": "42"
  },
  "42105": {
	 "stateAbbr": "PA",
	 "name": "Potter County (PA)",
	 "stateId": "42"
  },
  "42107": {
	 "stateAbbr": "PA",
	 "name": "Schuylkill County (PA)",
	 "stateId": "42"
  },
  "42109": {
	 "stateAbbr": "PA",
	 "name": "Snyder County (PA)",
	 "stateId": "42"
  },
  "42111": {
	 "stateAbbr": "PA",
	 "name": "Somerset County (PA)",
	 "stateId": "42"
  },
  "42113": {
	 "stateAbbr": "PA",
	 "name": "Sullivan County (PA)",
	 "stateId": "42"
  },
  "42115": {
	 "stateAbbr": "PA",
	 "name": "Susquehanna County (PA)",
	 "stateId": "42"
  },
  "42117": {
	 "stateAbbr": "PA",
	 "name": "Tioga County (PA)",
	 "stateId": "42"
  },
  "42119": {
	 "stateAbbr": "PA",
	 "name": "Union County (PA)",
	 "stateId": "42"
  },
  "42121": {
	 "stateAbbr": "PA",
	 "name": "Venango County (PA)",
	 "stateId": "42"
  },
  "42123": {
	 "stateAbbr": "PA",
	 "name": "Warren County (PA)",
	 "stateId": "42"
  },
  "42125": {
	 "stateAbbr": "PA",
	 "name": "Washington County (PA)",
	 "stateId": "42"
  },
  "42127": {
	 "stateAbbr": "PA",
	 "name": "Wayne County (PA)",
	 "stateId": "42"
  },
  "42129": {
	 "stateAbbr": "PA",
	 "name": "Westmoreland County (PA)",
	 "stateId": "42"
  },
  "42131": {
	 "stateAbbr": "PA",
	 "name": "Wyoming County (PA)",
	 "stateId": "42"
  },
  "42133": {
	 "stateAbbr": "PA",
	 "name": "York County (PA)",
	 "stateId": "42"
  },
  "44001": {
	 "stateAbbr": "RI",
	 "name": "Bristol County (RI)",
	 "stateId": "44"
  },
  "44003": {
	 "stateAbbr": "RI",
	 "name": "Kent County (RI)",
	 "stateId": "44"
  },
  "44005": {
	 "stateAbbr": "RI",
	 "name": "Newport County (RI)",
	 "stateId": "44"
  },
  "44007": {
	 "stateAbbr": "RI",
	 "name": "Providence County (RI)",
	 "stateId": "44"
  },
  "44009": {
	 "stateAbbr": "RI",
	 "name": "Washington County (RI)",
	 "stateId": "44"
  },
  "45001": {
	 "stateAbbr": "SC",
	 "name": "Abbeville County (SC)",
	 "stateId": "45"
  },
  "45003": {
	 "stateAbbr": "SC",
	 "name": "Aiken County (SC)",
	 "stateId": "45"
  },
  "45005": {
	 "stateAbbr": "SC",
	 "name": "Allendale County (SC)",
	 "stateId": "45"
  },
  "45007": {
	 "stateAbbr": "SC",
	 "name": "Anderson County (SC)",
	 "stateId": "45"
  },
  "45009": {
	 "stateAbbr": "SC",
	 "name": "Bamberg County (SC)",
	 "stateId": "45"
  },
  "45011": {
	 "stateAbbr": "SC",
	 "name": "Barnwell County (SC)",
	 "stateId": "45"
  },
  "45013": {
	 "stateAbbr": "SC",
	 "name": "Beaufort County (SC)",
	 "stateId": "45"
  },
  "45015": {
	 "stateAbbr": "SC",
	 "name": "Berkeley County (SC)",
	 "stateId": "45"
  },
  "45017": {
	 "stateAbbr": "SC",
	 "name": "Calhoun County (SC)",
	 "stateId": "45"
  },
  "45019": {
	 "stateAbbr": "SC",
	 "name": "Charleston County (SC)",
	 "stateId": "45"
  },
  "45021": {
	 "stateAbbr": "SC",
	 "name": "Cherokee County (SC)",
	 "stateId": "45"
  },
  "45023": {
	 "stateAbbr": "SC",
	 "name": "Chester County (SC)",
	 "stateId": "45"
  },
  "45025": {
	 "stateAbbr": "SC",
	 "name": "Chesterfield County (SC)",
	 "stateId": "45"
  },
  "45027": {
	 "stateAbbr": "SC",
	 "name": "Clarendon County (SC)",
	 "stateId": "45"
  },
  "45029": {
	 "stateAbbr": "SC",
	 "name": "Colleton County (SC)",
	 "stateId": "45"
  },
  "45031": {
	 "stateAbbr": "SC",
	 "name": "Darlington County (SC)",
	 "stateId": "45"
  },
  "45033": {
	 "stateAbbr": "SC",
	 "name": "Dillon County (SC)",
	 "stateId": "45"
  },
  "45035": {
	 "stateAbbr": "SC",
	 "name": "Dorchester County (SC)",
	 "stateId": "45"
  },
  "45037": {
	 "stateAbbr": "SC",
	 "name": "Edgefield County (SC)",
	 "stateId": "45"
  },
  "45039": {
	 "stateAbbr": "SC",
	 "name": "Fairfield County (SC)",
	 "stateId": "45"
  },
  "45041": {
	 "stateAbbr": "SC",
	 "name": "Florence County (SC)",
	 "stateId": "45"
  },
  "45043": {
	 "stateAbbr": "SC",
	 "name": "Georgetown County (SC)",
	 "stateId": "45"
  },
  "45045": {
	 "stateAbbr": "SC",
	 "name": "Greenville County (SC)",
	 "stateId": "45"
  },
  "45047": {
	 "stateAbbr": "SC",
	 "name": "Greenwood County (SC)",
	 "stateId": "45"
  },
  "45049": {
	 "stateAbbr": "SC",
	 "name": "Hampton County (SC)",
	 "stateId": "45"
  },
  "45051": {
	 "stateAbbr": "SC",
	 "name": "Horry County (SC)",
	 "stateId": "45"
  },
  "45053": {
	 "stateAbbr": "SC",
	 "name": "Jasper County (SC)",
	 "stateId": "45"
  },
  "45055": {
	 "stateAbbr": "SC",
	 "name": "Kershaw County (SC)",
	 "stateId": "45"
  },
  "45057": {
	 "stateAbbr": "SC",
	 "name": "Lancaster County (SC)",
	 "stateId": "45"
  },
  "45059": {
	 "stateAbbr": "SC",
	 "name": "Laurens County (SC)",
	 "stateId": "45"
  },
  "45061": {
	 "stateAbbr": "SC",
	 "name": "Lee County (SC)",
	 "stateId": "45"
  },
  "45063": {
	 "stateAbbr": "SC",
	 "name": "Lexington County (SC)",
	 "stateId": "45"
  },
  "45065": {
	 "stateAbbr": "SC",
	 "name": "McCormick County (SC)",
	 "stateId": "45"
  },
  "45067": {
	 "stateAbbr": "SC",
	 "name": "Marion County (SC)",
	 "stateId": "45"
  },
  "45069": {
	 "stateAbbr": "SC",
	 "name": "Marlboro County (SC)",
	 "stateId": "45"
  },
  "45071": {
	 "stateAbbr": "SC",
	 "name": "Newberry County (SC)",
	 "stateId": "45"
  },
  "45073": {
	 "stateAbbr": "SC",
	 "name": "Oconee County (SC)",
	 "stateId": "45"
  },
  "45075": {
	 "stateAbbr": "SC",
	 "name": "Orangeburg County (SC)",
	 "stateId": "45"
  },
  "45077": {
	 "stateAbbr": "SC",
	 "name": "Pickens County (SC)",
	 "stateId": "45"
  },
  "45079": {
	 "stateAbbr": "SC",
	 "name": "Richland County (SC)",
	 "stateId": "45"
  },
  "45081": {
	 "stateAbbr": "SC",
	 "name": "Saluda County (SC)",
	 "stateId": "45"
  },
  "45083": {
	 "stateAbbr": "SC",
	 "name": "Spartanburg County (SC)",
	 "stateId": "45"
  },
  "45085": {
	 "stateAbbr": "SC",
	 "name": "Sumter County (SC)",
	 "stateId": "45"
  },
  "45087": {
	 "stateAbbr": "SC",
	 "name": "Union County (SC)",
	 "stateId": "45"
  },
  "45089": {
	 "stateAbbr": "SC",
	 "name": "Williamsburg County (SC)",
	 "stateId": "45"
  },
  "45091": {
	 "stateAbbr": "SC",
	 "name": "York County (SC)",
	 "stateId": "45"
  },
  "46003": {
	 "stateAbbr": "SD",
	 "name": "Aurora County (SD)",
	 "stateId": "46"
  },
  "46005": {
	 "stateAbbr": "SD",
	 "name": "Beadle County (SD)",
	 "stateId": "46"
  },
  "46007": {
	 "stateAbbr": "SD",
	 "name": "Bennett County (SD)",
	 "stateId": "46"
  },
  "46009": {
	 "stateAbbr": "SD",
	 "name": "Bon Homme County (SD)",
	 "stateId": "46"
  },
  "46011": {
	 "stateAbbr": "SD",
	 "name": "Brookings County (SD)",
	 "stateId": "46"
  },
  "46013": {
	 "stateAbbr": "SD",
	 "name": "Brown County (SD)",
	 "stateId": "46"
  },
  "46015": {
	 "stateAbbr": "SD",
	 "name": "Brule County (SD)",
	 "stateId": "46"
  },
  "46017": {
	 "stateAbbr": "SD",
	 "name": "Buffalo County (SD)",
	 "stateId": "46"
  },
  "46019": {
	 "stateAbbr": "SD",
	 "name": "Butte County (SD)",
	 "stateId": "46"
  },
  "46021": {
	 "stateAbbr": "SD",
	 "name": "Campbell County (SD)",
	 "stateId": "46"
  },
  "46023": {
	 "stateAbbr": "SD",
	 "name": "Charles Mix County (SD)",
	 "stateId": "46"
  },
  "46025": {
	 "stateAbbr": "SD",
	 "name": "Clark County (SD)",
	 "stateId": "46"
  },
  "46027": {
	 "stateAbbr": "SD",
	 "name": "Clay County (SD)",
	 "stateId": "46"
  },
  "46029": {
	 "stateAbbr": "SD",
	 "name": "Codington County (SD)",
	 "stateId": "46"
  },
  "46031": {
	 "stateAbbr": "SD",
	 "name": "Corson County (SD)",
	 "stateId": "46"
  },
  "46033": {
	 "stateAbbr": "SD",
	 "name": "Custer County (SD)",
	 "stateId": "46"
  },
  "46035": {
	 "stateAbbr": "SD",
	 "name": "Davison County (SD)",
	 "stateId": "46"
  },
  "46037": {
	 "stateAbbr": "SD",
	 "name": "Day County (SD)",
	 "stateId": "46"
  },
  "46039": {
	 "stateAbbr": "SD",
	 "name": "Deuel County (SD)",
	 "stateId": "46"
  },
  "46041": {
	 "stateAbbr": "SD",
	 "name": "Dewey County (SD)",
	 "stateId": "46"
  },
  "46043": {
	 "stateAbbr": "SD",
	 "name": "Douglas County (SD)",
	 "stateId": "46"
  },
  "46045": {
	 "stateAbbr": "SD",
	 "name": "Edmunds County (SD)",
	 "stateId": "46"
  },
  "46047": {
	 "stateAbbr": "SD",
	 "name": "Fall River County (SD)",
	 "stateId": "46"
  },
  "46049": {
	 "stateAbbr": "SD",
	 "name": "Faulk County (SD)",
	 "stateId": "46"
  },
  "46051": {
	 "stateAbbr": "SD",
	 "name": "Grant County (SD)",
	 "stateId": "46"
  },
  "46053": {
	 "stateAbbr": "SD",
	 "name": "Gregory County (SD)",
	 "stateId": "46"
  },
  "46055": {
	 "stateAbbr": "SD",
	 "name": "Haakon County (SD)",
	 "stateId": "46"
  },
  "46057": {
	 "stateAbbr": "SD",
	 "name": "Hamlin County (SD)",
	 "stateId": "46"
  },
  "46059": {
	 "stateAbbr": "SD",
	 "name": "Hand County (SD)",
	 "stateId": "46"
  },
  "46061": {
	 "stateAbbr": "SD",
	 "name": "Hanson County (SD)",
	 "stateId": "46"
  },
  "46063": {
	 "stateAbbr": "SD",
	 "name": "Harding County (SD)",
	 "stateId": "46"
  },
  "46065": {
	 "stateAbbr": "SD",
	 "name": "Hughes County (SD)",
	 "stateId": "46"
  },
  "46067": {
	 "stateAbbr": "SD",
	 "name": "Hutchinson County (SD)",
	 "stateId": "46"
  },
  "46069": {
	 "stateAbbr": "SD",
	 "name": "Hyde County (SD)",
	 "stateId": "46"
  },
  "46071": {
	 "stateAbbr": "SD",
	 "name": "Jackson County (SD)",
	 "stateId": "46"
  },
  "46073": {
	 "stateAbbr": "SD",
	 "name": "Jerauld County (SD)",
	 "stateId": "46"
  },
  "46075": {
	 "stateAbbr": "SD",
	 "name": "Jones County (SD)",
	 "stateId": "46"
  },
  "46077": {
	 "stateAbbr": "SD",
	 "name": "Kingsbury County (SD)",
	 "stateId": "46"
  },
  "46079": {
	 "stateAbbr": "SD",
	 "name": "Lake County (SD)",
	 "stateId": "46"
  },
  "46081": {
	 "stateAbbr": "SD",
	 "name": "Lawrence County (SD)",
	 "stateId": "46"
  },
  "46083": {
	 "stateAbbr": "SD",
	 "name": "Lincoln County (SD)",
	 "stateId": "46"
  },
  "46085": {
	 "stateAbbr": "SD",
	 "name": "Lyman County (SD)",
	 "stateId": "46"
  },
  "46087": {
	 "stateAbbr": "SD",
	 "name": "McCook County (SD)",
	 "stateId": "46"
  },
  "46089": {
	 "stateAbbr": "SD",
	 "name": "McPherson County (SD)",
	 "stateId": "46"
  },
  "46091": {
	 "stateAbbr": "SD",
	 "name": "Marshall County (SD)",
	 "stateId": "46"
  },
  "46093": {
	 "stateAbbr": "SD",
	 "name": "Meade County (SD)",
	 "stateId": "46"
  },
  "46095": {
	 "stateAbbr": "SD",
	 "name": "Mellette County (SD)",
	 "stateId": "46"
  },
  "46097": {
	 "stateAbbr": "SD",
	 "name": "Miner County (SD)",
	 "stateId": "46"
  },
  "46099": {
	 "stateAbbr": "SD",
	 "name": "Minnehaha County (SD)",
	 "stateId": "46"
  },
  "46101": {
	 "stateAbbr": "SD",
	 "name": "Moody County (SD)",
	 "stateId": "46"
  },
  "46103": {
	 "stateAbbr": "SD",
	 "name": "Pennington County (SD)",
	 "stateId": "46"
  },
  "46105": {
	 "stateAbbr": "SD",
	 "name": "Perkins County (SD)",
	 "stateId": "46"
  },
  "46107": {
	 "stateAbbr": "SD",
	 "name": "Potter County (SD)",
	 "stateId": "46"
  },
  "46109": {
	 "stateAbbr": "SD",
	 "name": "Roberts County (SD)",
	 "stateId": "46"
  },
  "46111": {
	 "stateAbbr": "SD",
	 "name": "Sanborn County (SD)",
	 "stateId": "46"
  },
  "46113": {
	 "stateAbbr": "SD",
	 "name": "Shannon County (SD)",
	 "stateId": "46"
  },
  "46115": {
	 "stateAbbr": "SD",
	 "name": "Spink County (SD)",
	 "stateId": "46"
  },
  "46117": {
	 "stateAbbr": "SD",
	 "name": "Stanley County (SD)",
	 "stateId": "46"
  },
  "46119": {
	 "stateAbbr": "SD",
	 "name": "Sully County (SD)",
	 "stateId": "46"
  },
  "46121": {
	 "stateAbbr": "SD",
	 "name": "Todd County (SD)",
	 "stateId": "46"
  },
  "46123": {
	 "stateAbbr": "SD",
	 "name": "Tripp County (SD)",
	 "stateId": "46"
  },
  "46125": {
	 "stateAbbr": "SD",
	 "name": "Turner County (SD)",
	 "stateId": "46"
  },
  "46127": {
	 "stateAbbr": "SD",
	 "name": "Union County (SD)",
	 "stateId": "46"
  },
  "46129": {
	 "stateAbbr": "SD",
	 "name": "Walworth County (SD)",
	 "stateId": "46"
  },
  "46135": {
	 "stateAbbr": "SD",
	 "name": "Yankton County (SD)",
	 "stateId": "46"
  },
  "46137": {
	 "stateAbbr": "SD",
	 "name": "Ziebach County (SD)",
	 "stateId": "46"
  },
  "47001": {
	 "stateAbbr": "TN",
	 "name": "Anderson County (TN)",
	 "stateId": "47"
  },
  "47003": {
	 "stateAbbr": "TN",
	 "name": "Bedford County (TN)",
	 "stateId": "47"
  },
  "47005": {
	 "stateAbbr": "TN",
	 "name": "Benton County (TN)",
	 "stateId": "47"
  },
  "47007": {
	 "stateAbbr": "TN",
	 "name": "Bledsoe County (TN)",
	 "stateId": "47"
  },
  "47009": {
	 "stateAbbr": "TN",
	 "name": "Blount County (TN)",
	 "stateId": "47"
  },
  "47011": {
	 "stateAbbr": "TN",
	 "name": "Bradley County (TN)",
	 "stateId": "47"
  },
  "47013": {
	 "stateAbbr": "TN",
	 "name": "Campbell County (TN)",
	 "stateId": "47"
  },
  "47015": {
	 "stateAbbr": "TN",
	 "name": "Cannon County (TN)",
	 "stateId": "47"
  },
  "47017": {
	 "stateAbbr": "TN",
	 "name": "Carroll County (TN)",
	 "stateId": "47"
  },
  "47019": {
	 "stateAbbr": "TN",
	 "name": "Carter County (TN)",
	 "stateId": "47"
  },
  "47021": {
	 "stateAbbr": "TN",
	 "name": "Cheatham County (TN)",
	 "stateId": "47"
  },
  "47023": {
	 "stateAbbr": "TN",
	 "name": "Chester County (TN)",
	 "stateId": "47"
  },
  "47025": {
	 "stateAbbr": "TN",
	 "name": "Claiborne County (TN)",
	 "stateId": "47"
  },
  "47027": {
	 "stateAbbr": "TN",
	 "name": "Clay County (TN)",
	 "stateId": "47"
  },
  "47029": {
	 "stateAbbr": "TN",
	 "name": "Cocke County (TN)",
	 "stateId": "47"
  },
  "47031": {
	 "stateAbbr": "TN",
	 "name": "Coffee County (TN)",
	 "stateId": "47"
  },
  "47033": {
	 "stateAbbr": "TN",
	 "name": "Crockett County (TN)",
	 "stateId": "47"
  },
  "47035": {
	 "stateAbbr": "TN",
	 "name": "Cumberland County (TN)",
	 "stateId": "47"
  },
  "47037": {
	 "stateAbbr": "TN",
	 "name": "Davidson County (TN)",
	 "stateId": "47"
  },
  "47039": {
	 "stateAbbr": "TN",
	 "name": "Decatur County (TN)",
	 "stateId": "47"
  },
  "47041": {
	 "stateAbbr": "TN",
	 "name": "DeKalb County (TN)",
	 "stateId": "47"
  },
  "47043": {
	 "stateAbbr": "TN",
	 "name": "Dickson County (TN)",
	 "stateId": "47"
  },
  "47045": {
	 "stateAbbr": "TN",
	 "name": "Dyer County (TN)",
	 "stateId": "47"
  },
  "47047": {
	 "stateAbbr": "TN",
	 "name": "Fayette County (TN)",
	 "stateId": "47"
  },
  "47049": {
	 "stateAbbr": "TN",
	 "name": "Fentress County (TN)",
	 "stateId": "47"
  },
  "47051": {
	 "stateAbbr": "TN",
	 "name": "Franklin County (TN)",
	 "stateId": "47"
  },
  "47053": {
	 "stateAbbr": "TN",
	 "name": "Gibson County (TN)",
	 "stateId": "47"
  },
  "47055": {
	 "stateAbbr": "TN",
	 "name": "Giles County (TN)",
	 "stateId": "47"
  },
  "47057": {
	 "stateAbbr": "TN",
	 "name": "Grainger County (TN)",
	 "stateId": "47"
  },
  "47059": {
	 "stateAbbr": "TN",
	 "name": "Greene County (TN)",
	 "stateId": "47"
  },
  "47061": {
	 "stateAbbr": "TN",
	 "name": "Grundy County (TN)",
	 "stateId": "47"
  },
  "47063": {
	 "stateAbbr": "TN",
	 "name": "Hamblen County (TN)",
	 "stateId": "47"
  },
  "47065": {
	 "stateAbbr": "TN",
	 "name": "Hamilton County (TN)",
	 "stateId": "47"
  },
  "47067": {
	 "stateAbbr": "TN",
	 "name": "Hancock County (TN)",
	 "stateId": "47"
  },
  "47069": {
	 "stateAbbr": "TN",
	 "name": "Hardeman County (TN)",
	 "stateId": "47"
  },
  "47071": {
	 "stateAbbr": "TN",
	 "name": "Hardin County (TN)",
	 "stateId": "47"
  },
  "47073": {
	 "stateAbbr": "TN",
	 "name": "Hawkins County (TN)",
	 "stateId": "47"
  },
  "47075": {
	 "stateAbbr": "TN",
	 "name": "Haywood County (TN)",
	 "stateId": "47"
  },
  "47077": {
	 "stateAbbr": "TN",
	 "name": "Henderson County (TN)",
	 "stateId": "47"
  },
  "47079": {
	 "stateAbbr": "TN",
	 "name": "Henry County (TN)",
	 "stateId": "47"
  },
  "47081": {
	 "stateAbbr": "TN",
	 "name": "Hickman County (TN)",
	 "stateId": "47"
  },
  "47083": {
	 "stateAbbr": "TN",
	 "name": "Houston County (TN)",
	 "stateId": "47"
  },
  "47085": {
	 "stateAbbr": "TN",
	 "name": "Humphreys County (TN)",
	 "stateId": "47"
  },
  "47087": {
	 "stateAbbr": "TN",
	 "name": "Jackson County (TN)",
	 "stateId": "47"
  },
  "47089": {
	 "stateAbbr": "TN",
	 "name": "Jefferson County (TN)",
	 "stateId": "47"
  },
  "47091": {
	 "stateAbbr": "TN",
	 "name": "Johnson County (TN)",
	 "stateId": "47"
  },
  "47093": {
	 "stateAbbr": "TN",
	 "name": "Knox County (TN)",
	 "stateId": "47"
  },
  "47095": {
	 "stateAbbr": "TN",
	 "name": "Lake County (TN)",
	 "stateId": "47"
  },
  "47097": {
	 "stateAbbr": "TN",
	 "name": "Lauderdale County (TN)",
	 "stateId": "47"
  },
  "47099": {
	 "stateAbbr": "TN",
	 "name": "Lawrence County (TN)",
	 "stateId": "47"
  },
  "47101": {
	 "stateAbbr": "TN",
	 "name": "Lewis County (TN)",
	 "stateId": "47"
  },
  "47103": {
	 "stateAbbr": "TN",
	 "name": "Lincoln County (TN)",
	 "stateId": "47"
  },
  "47105": {
	 "stateAbbr": "TN",
	 "name": "Loudon County (TN)",
	 "stateId": "47"
  },
  "47107": {
	 "stateAbbr": "TN",
	 "name": "McMinn County (TN)",
	 "stateId": "47"
  },
  "47109": {
	 "stateAbbr": "TN",
	 "name": "McNairy County (TN)",
	 "stateId": "47"
  },
  "47111": {
	 "stateAbbr": "TN",
	 "name": "Macon County (TN)",
	 "stateId": "47"
  },
  "47113": {
	 "stateAbbr": "TN",
	 "name": "Madison County (TN)",
	 "stateId": "47"
  },
  "47115": {
	 "stateAbbr": "TN",
	 "name": "Marion County (TN)",
	 "stateId": "47"
  },
  "47117": {
	 "stateAbbr": "TN",
	 "name": "Marshall County (TN)",
	 "stateId": "47"
  },
  "47119": {
	 "stateAbbr": "TN",
	 "name": "Maury County (TN)",
	 "stateId": "47"
  },
  "47121": {
	 "stateAbbr": "TN",
	 "name": "Meigs County (TN)",
	 "stateId": "47"
  },
  "47123": {
	 "stateAbbr": "TN",
	 "name": "Monroe County (TN)",
	 "stateId": "47"
  },
  "47125": {
	 "stateAbbr": "TN",
	 "name": "Montgomery County (TN)",
	 "stateId": "47"
  },
  "47127": {
	 "stateAbbr": "TN",
	 "name": "Moore County (TN)",
	 "stateId": "47"
  },
  "47129": {
	 "stateAbbr": "TN",
	 "name": "Morgan County (TN)",
	 "stateId": "47"
  },
  "47131": {
	 "stateAbbr": "TN",
	 "name": "Obion County (TN)",
	 "stateId": "47"
  },
  "47133": {
	 "stateAbbr": "TN",
	 "name": "Overton County (TN)",
	 "stateId": "47"
  },
  "47135": {
	 "stateAbbr": "TN",
	 "name": "Perry County (TN)",
	 "stateId": "47"
  },
  "47137": {
	 "stateAbbr": "TN",
	 "name": "Pickett County (TN)",
	 "stateId": "47"
  },
  "47139": {
	 "stateAbbr": "TN",
	 "name": "Polk County (TN)",
	 "stateId": "47"
  },
  "47141": {
	 "stateAbbr": "TN",
	 "name": "Putnam County (TN)",
	 "stateId": "47"
  },
  "47143": {
	 "stateAbbr": "TN",
	 "name": "Rhea County (TN)",
	 "stateId": "47"
  },
  "47145": {
	 "stateAbbr": "TN",
	 "name": "Roane County (TN)",
	 "stateId": "47"
  },
  "47147": {
	 "stateAbbr": "TN",
	 "name": "Robertson County (TN)",
	 "stateId": "47"
  },
  "47149": {
	 "stateAbbr": "TN",
	 "name": "Rutherford County (TN)",
	 "stateId": "47"
  },
  "47151": {
	 "stateAbbr": "TN",
	 "name": "Scott County (TN)",
	 "stateId": "47"
  },
  "47153": {
	 "stateAbbr": "TN",
	 "name": "Sequatchie County (TN)",
	 "stateId": "47"
  },
  "47155": {
	 "stateAbbr": "TN",
	 "name": "Sevier County (TN)",
	 "stateId": "47"
  },
  "47157": {
	 "stateAbbr": "TN",
	 "name": "Shelby County (TN)",
	 "stateId": "47"
  },
  "47159": {
	 "stateAbbr": "TN",
	 "name": "Smith County (TN)",
	 "stateId": "47"
  },
  "47161": {
	 "stateAbbr": "TN",
	 "name": "Stewart County (TN)",
	 "stateId": "47"
  },
  "47163": {
	 "stateAbbr": "TN",
	 "name": "Sullivan County (TN)",
	 "stateId": "47"
  },
  "47165": {
	 "stateAbbr": "TN",
	 "name": "Sumner County (TN)",
	 "stateId": "47"
  },
  "47167": {
	 "stateAbbr": "TN",
	 "name": "Tipton County (TN)",
	 "stateId": "47"
  },
  "47169": {
	 "stateAbbr": "TN",
	 "name": "Trousdale County (TN)",
	 "stateId": "47"
  },
  "47171": {
	 "stateAbbr": "TN",
	 "name": "Unicoi County (TN)",
	 "stateId": "47"
  },
  "47173": {
	 "stateAbbr": "TN",
	 "name": "Union County (TN)",
	 "stateId": "47"
  },
  "47175": {
	 "stateAbbr": "TN",
	 "name": "Van Buren County (TN)",
	 "stateId": "47"
  },
  "47177": {
	 "stateAbbr": "TN",
	 "name": "Warren County (TN)",
	 "stateId": "47"
  },
  "47179": {
	 "stateAbbr": "TN",
	 "name": "Washington County (TN)",
	 "stateId": "47"
  },
  "47181": {
	 "stateAbbr": "TN",
	 "name": "Wayne County (TN)",
	 "stateId": "47"
  },
  "47183": {
	 "stateAbbr": "TN",
	 "name": "Weakley County (TN)",
	 "stateId": "47"
  },
  "47185": {
	 "stateAbbr": "TN",
	 "name": "White County (TN)",
	 "stateId": "47"
  },
  "47187": {
	 "stateAbbr": "TN",
	 "name": "Williamson County (TN)",
	 "stateId": "47"
  },
  "47189": {
	 "stateAbbr": "TN",
	 "name": "Wilson County (TN)",
	 "stateId": "47"
  },
  "48001": {
	 "stateAbbr": "TX",
	 "name": "Anderson County (TX)",
	 "stateId": "48"
  },
  "48003": {
	 "stateAbbr": "TX",
	 "name": "Andrews County (TX)",
	 "stateId": "48"
  },
  "48005": {
	 "stateAbbr": "TX",
	 "name": "Angelina County (TX)",
	 "stateId": "48"
  },
  "48007": {
	 "stateAbbr": "TX",
	 "name": "Aransas County (TX)",
	 "stateId": "48"
  },
  "48009": {
	 "stateAbbr": "TX",
	 "name": "Archer County (TX)",
	 "stateId": "48"
  },
  "48011": {
	 "stateAbbr": "TX",
	 "name": "Armstrong County (TX)",
	 "stateId": "48"
  },
  "48013": {
	 "stateAbbr": "TX",
	 "name": "Atascosa County (TX)",
	 "stateId": "48"
  },
  "48015": {
	 "stateAbbr": "TX",
	 "name": "Austin County (TX)",
	 "stateId": "48"
  },
  "48017": {
	 "stateAbbr": "TX",
	 "name": "Bailey County (TX)",
	 "stateId": "48"
  },
  "48019": {
	 "stateAbbr": "TX",
	 "name": "Bandera County (TX)",
	 "stateId": "48"
  },
  "48021": {
	 "stateAbbr": "TX",
	 "name": "Bastrop County (TX)",
	 "stateId": "48"
  },
  "48023": {
	 "stateAbbr": "TX",
	 "name": "Baylor County (TX)",
	 "stateId": "48"
  },
  "48025": {
	 "stateAbbr": "TX",
	 "name": "Bee County (TX)",
	 "stateId": "48"
  },
  "48027": {
	 "stateAbbr": "TX",
	 "name": "Bell County (TX)",
	 "stateId": "48"
  },
  "48029": {
	 "stateAbbr": "TX",
	 "name": "Bexar County (TX)",
	 "stateId": "48"
  },
  "48031": {
	 "stateAbbr": "TX",
	 "name": "Blanco County (TX)",
	 "stateId": "48"
  },
  "48033": {
	 "stateAbbr": "TX",
	 "name": "Borden County (TX)",
	 "stateId": "48"
  },
  "48035": {
	 "stateAbbr": "TX",
	 "name": "Bosque County (TX)",
	 "stateId": "48"
  },
  "48037": {
	 "stateAbbr": "TX",
	 "name": "Bowie County (TX)",
	 "stateId": "48"
  },
  "48039": {
	 "stateAbbr": "TX",
	 "name": "Brazoria County (TX)",
	 "stateId": "48"
  },
  "48041": {
	 "stateAbbr": "TX",
	 "name": "Brazos County (TX)",
	 "stateId": "48"
  },
  "48043": {
	 "stateAbbr": "TX",
	 "name": "Brewster County (TX)",
	 "stateId": "48"
  },
  "48045": {
	 "stateAbbr": "TX",
	 "name": "Briscoe County (TX)",
	 "stateId": "48"
  },
  "48047": {
	 "stateAbbr": "TX",
	 "name": "Brooks County (TX)",
	 "stateId": "48"
  },
  "48049": {
	 "stateAbbr": "TX",
	 "name": "Brown County (TX)",
	 "stateId": "48"
  },
  "48051": {
	 "stateAbbr": "TX",
	 "name": "Burleson County (TX)",
	 "stateId": "48"
  },
  "48053": {
	 "stateAbbr": "TX",
	 "name": "Burnet County (TX)",
	 "stateId": "48"
  },
  "48055": {
	 "stateAbbr": "TX",
	 "name": "Caldwell County (TX)",
	 "stateId": "48"
  },
  "48057": {
	 "stateAbbr": "TX",
	 "name": "Calhoun County (TX)",
	 "stateId": "48"
  },
  "48059": {
	 "stateAbbr": "TX",
	 "name": "Callahan County (TX)",
	 "stateId": "48"
  },
  "48061": {
	 "stateAbbr": "TX",
	 "name": "Cameron County (TX)",
	 "stateId": "48"
  },
  "48063": {
	 "stateAbbr": "TX",
	 "name": "Camp County (TX)",
	 "stateId": "48"
  },
  "48065": {
	 "stateAbbr": "TX",
	 "name": "Carson County (TX)",
	 "stateId": "48"
  },
  "48067": {
	 "stateAbbr": "TX",
	 "name": "Cass County (TX)",
	 "stateId": "48"
  },
  "48069": {
	 "stateAbbr": "TX",
	 "name": "Castro County (TX)",
	 "stateId": "48"
  },
  "48071": {
	 "stateAbbr": "TX",
	 "name": "Chambers County (TX)",
	 "stateId": "48"
  },
  "48073": {
	 "stateAbbr": "TX",
	 "name": "Cherokee County (TX)",
	 "stateId": "48"
  },
  "48075": {
	 "stateAbbr": "TX",
	 "name": "Childress County (TX)",
	 "stateId": "48"
  },
  "48077": {
	 "stateAbbr": "TX",
	 "name": "Clay County (TX)",
	 "stateId": "48"
  },
  "48079": {
	 "stateAbbr": "TX",
	 "name": "Cochran County (TX)",
	 "stateId": "48"
  },
  "48081": {
	 "stateAbbr": "TX",
	 "name": "Coke County (TX)",
	 "stateId": "48"
  },
  "48083": {
	 "stateAbbr": "TX",
	 "name": "Coleman County (TX)",
	 "stateId": "48"
  },
  "48085": {
	 "stateAbbr": "TX",
	 "name": "Collin County (TX)",
	 "stateId": "48"
  },
  "48087": {
	 "stateAbbr": "TX",
	 "name": "Collingsworth County (TX)",
	 "stateId": "48"
  },
  "48089": {
	 "stateAbbr": "TX",
	 "name": "Colorado County (TX)",
	 "stateId": "48"
  },
  "48091": {
	 "stateAbbr": "TX",
	 "name": "Comal County (TX)",
	 "stateId": "48"
  },
  "48093": {
	 "stateAbbr": "TX",
	 "name": "Comanche County (TX)",
	 "stateId": "48"
  },
  "48095": {
	 "stateAbbr": "TX",
	 "name": "Concho County (TX)",
	 "stateId": "48"
  },
  "48097": {
	 "stateAbbr": "TX",
	 "name": "Cooke County (TX)",
	 "stateId": "48"
  },
  "48099": {
	 "stateAbbr": "TX",
	 "name": "Coryell County (TX)",
	 "stateId": "48"
  },
  "48101": {
	 "stateAbbr": "TX",
	 "name": "Cottle County (TX)",
	 "stateId": "48"
  },
  "48103": {
	 "stateAbbr": "TX",
	 "name": "Crane County (TX)",
	 "stateId": "48"
  },
  "48105": {
	 "stateAbbr": "TX",
	 "name": "Crockett County (TX)",
	 "stateId": "48"
  },
  "48107": {
	 "stateAbbr": "TX",
	 "name": "Crosby County (TX)",
	 "stateId": "48"
  },
  "48109": {
	 "stateAbbr": "TX",
	 "name": "Culberson County (TX)",
	 "stateId": "48"
  },
  "48111": {
	 "stateAbbr": "TX",
	 "name": "Dallam County (TX)",
	 "stateId": "48"
  },
  "48113": {
	 "stateAbbr": "TX",
	 "name": "Dallas County (TX)",
	 "stateId": "48"
  },
  "48115": {
	 "stateAbbr": "TX",
	 "name": "Dawson County (TX)",
	 "stateId": "48"
  },
  "48117": {
	 "stateAbbr": "TX",
	 "name": "Deaf Smith County (TX)",
	 "stateId": "48"
  },
  "48119": {
	 "stateAbbr": "TX",
	 "name": "Delta County (TX)",
	 "stateId": "48"
  },
  "48121": {
	 "stateAbbr": "TX",
	 "name": "Denton County (TX)",
	 "stateId": "48"
  },
  "48123": {
	 "stateAbbr": "TX",
	 "name": "DeWitt County (TX)",
	 "stateId": "48"
  },
  "48125": {
	 "stateAbbr": "TX",
	 "name": "Dickens County (TX)",
	 "stateId": "48"
  },
  "48127": {
	 "stateAbbr": "TX",
	 "name": "Dimmit County (TX)",
	 "stateId": "48"
  },
  "48129": {
	 "stateAbbr": "TX",
	 "name": "Donley County (TX)",
	 "stateId": "48"
  },
  "48131": {
	 "stateAbbr": "TX",
	 "name": "Duval County (TX)",
	 "stateId": "48"
  },
  "48133": {
	 "stateAbbr": "TX",
	 "name": "Eastland County (TX)",
	 "stateId": "48"
  },
  "48135": {
	 "stateAbbr": "TX",
	 "name": "Ector County (TX)",
	 "stateId": "48"
  },
  "48137": {
	 "stateAbbr": "TX",
	 "name": "Edwards County (TX)",
	 "stateId": "48"
  },
  "48139": {
	 "stateAbbr": "TX",
	 "name": "Ellis County (TX)",
	 "stateId": "48"
  },
  "48141": {
	 "stateAbbr": "TX",
	 "name": "El Paso County (TX)",
	 "stateId": "48"
  },
  "48143": {
	 "stateAbbr": "TX",
	 "name": "Erath County (TX)",
	 "stateId": "48"
  },
  "48145": {
	 "stateAbbr": "TX",
	 "name": "Falls County (TX)",
	 "stateId": "48"
  },
  "48147": {
	 "stateAbbr": "TX",
	 "name": "Fannin County (TX)",
	 "stateId": "48"
  },
  "48149": {
	 "stateAbbr": "TX",
	 "name": "Fayette County (TX)",
	 "stateId": "48"
  },
  "48151": {
	 "stateAbbr": "TX",
	 "name": "Fisher County (TX)",
	 "stateId": "48"
  },
  "48153": {
	 "stateAbbr": "TX",
	 "name": "Floyd County (TX)",
	 "stateId": "48"
  },
  "48155": {
	 "stateAbbr": "TX",
	 "name": "Foard County (TX)",
	 "stateId": "48"
  },
  "48157": {
	 "stateAbbr": "TX",
	 "name": "Fort Bend County (TX)",
	 "stateId": "48"
  },
  "48159": {
	 "stateAbbr": "TX",
	 "name": "Franklin County (TX)",
	 "stateId": "48"
  },
  "48161": {
	 "stateAbbr": "TX",
	 "name": "Freestone County (TX)",
	 "stateId": "48"
  },
  "48163": {
	 "stateAbbr": "TX",
	 "name": "Frio County (TX)",
	 "stateId": "48"
  },
  "48165": {
	 "stateAbbr": "TX",
	 "name": "Gaines County (TX)",
	 "stateId": "48"
  },
  "48167": {
	 "stateAbbr": "TX",
	 "name": "Galveston County (TX)",
	 "stateId": "48"
  },
  "48169": {
	 "stateAbbr": "TX",
	 "name": "Garza County (TX)",
	 "stateId": "48"
  },
  "48171": {
	 "stateAbbr": "TX",
	 "name": "Gillespie County (TX)",
	 "stateId": "48"
  },
  "48173": {
	 "stateAbbr": "TX",
	 "name": "Glasscock County (TX)",
	 "stateId": "48"
  },
  "48175": {
	 "stateAbbr": "TX",
	 "name": "Goliad County (TX)",
	 "stateId": "48"
  },
  "48177": {
	 "stateAbbr": "TX",
	 "name": "Gonzales County (TX)",
	 "stateId": "48"
  },
  "48179": {
	 "stateAbbr": "TX",
	 "name": "Gray County (TX)",
	 "stateId": "48"
  },
  "48181": {
	 "stateAbbr": "TX",
	 "name": "Grayson County (TX)",
	 "stateId": "48"
  },
  "48183": {
	 "stateAbbr": "TX",
	 "name": "Gregg County (TX)",
	 "stateId": "48"
  },
  "48185": {
	 "stateAbbr": "TX",
	 "name": "Grimes County (TX)",
	 "stateId": "48"
  },
  "48187": {
	 "stateAbbr": "TX",
	 "name": "Guadalupe County (TX)",
	 "stateId": "48"
  },
  "48189": {
	 "stateAbbr": "TX",
	 "name": "Hale County (TX)",
	 "stateId": "48"
  },
  "48191": {
	 "stateAbbr": "TX",
	 "name": "Hall County (TX)",
	 "stateId": "48"
  },
  "48193": {
	 "stateAbbr": "TX",
	 "name": "Hamilton County (TX)",
	 "stateId": "48"
  },
  "48195": {
	 "stateAbbr": "TX",
	 "name": "Hansford County (TX)",
	 "stateId": "48"
  },
  "48197": {
	 "stateAbbr": "TX",
	 "name": "Hardeman County (TX)",
	 "stateId": "48"
  },
  "48199": {
	 "stateAbbr": "TX",
	 "name": "Hardin County (TX)",
	 "stateId": "48"
  },
  "48201": {
	 "stateAbbr": "TX",
	 "name": "Harris County (TX)",
	 "stateId": "48"
  },
  "48203": {
	 "stateAbbr": "TX",
	 "name": "Harrison County (TX)",
	 "stateId": "48"
  },
  "48205": {
	 "stateAbbr": "TX",
	 "name": "Hartley County (TX)",
	 "stateId": "48"
  },
  "48207": {
	 "stateAbbr": "TX",
	 "name": "Haskell County (TX)",
	 "stateId": "48"
  },
  "48209": {
	 "stateAbbr": "TX",
	 "name": "Hays County (TX)",
	 "stateId": "48"
  },
  "48211": {
	 "stateAbbr": "TX",
	 "name": "Hemphill County (TX)",
	 "stateId": "48"
  },
  "48213": {
	 "stateAbbr": "TX",
	 "name": "Henderson County (TX)",
	 "stateId": "48"
  },
  "48215": {
	 "stateAbbr": "TX",
	 "name": "Hidalgo County (TX)",
	 "stateId": "48"
  },
  "48217": {
	 "stateAbbr": "TX",
	 "name": "Hill County (TX)",
	 "stateId": "48"
  },
  "48219": {
	 "stateAbbr": "TX",
	 "name": "Hockley County (TX)",
	 "stateId": "48"
  },
  "48221": {
	 "stateAbbr": "TX",
	 "name": "Hood County (TX)",
	 "stateId": "48"
  },
  "48223": {
	 "stateAbbr": "TX",
	 "name": "Hopkins County (TX)",
	 "stateId": "48"
  },
  "48225": {
	 "stateAbbr": "TX",
	 "name": "Houston County (TX)",
	 "stateId": "48"
  },
  "48227": {
	 "stateAbbr": "TX",
	 "name": "Howard County (TX)",
	 "stateId": "48"
  },
  "48229": {
	 "stateAbbr": "TX",
	 "name": "Hudspeth County (TX)",
	 "stateId": "48"
  },
  "48231": {
	 "stateAbbr": "TX",
	 "name": "Hunt County (TX)",
	 "stateId": "48"
  },
  "48233": {
	 "stateAbbr": "TX",
	 "name": "Hutchinson County (TX)",
	 "stateId": "48"
  },
  "48235": {
	 "stateAbbr": "TX",
	 "name": "Irion County (TX)",
	 "stateId": "48"
  },
  "48237": {
	 "stateAbbr": "TX",
	 "name": "Jack County (TX)",
	 "stateId": "48"
  },
  "48239": {
	 "stateAbbr": "TX",
	 "name": "Jackson County (TX)",
	 "stateId": "48"
  },
  "48241": {
	 "stateAbbr": "TX",
	 "name": "Jasper County (TX)",
	 "stateId": "48"
  },
  "48243": {
	 "stateAbbr": "TX",
	 "name": "Jeff Davis County (TX)",
	 "stateId": "48"
  },
  "48245": {
	 "stateAbbr": "TX",
	 "name": "Jefferson County (TX)",
	 "stateId": "48"
  },
  "48247": {
	 "stateAbbr": "TX",
	 "name": "Jim Hogg County (TX)",
	 "stateId": "48"
  },
  "48249": {
	 "stateAbbr": "TX",
	 "name": "Jim Wells County (TX)",
	 "stateId": "48"
  },
  "48251": {
	 "stateAbbr": "TX",
	 "name": "Johnson County (TX)",
	 "stateId": "48"
  },
  "48253": {
	 "stateAbbr": "TX",
	 "name": "Jones County (TX)",
	 "stateId": "48"
  },
  "48255": {
	 "stateAbbr": "TX",
	 "name": "Karnes County (TX)",
	 "stateId": "48"
  },
  "48257": {
	 "stateAbbr": "TX",
	 "name": "Kaufman County (TX)",
	 "stateId": "48"
  },
  "48259": {
	 "stateAbbr": "TX",
	 "name": "Kendall County (TX)",
	 "stateId": "48"
  },
  "48261": {
	 "stateAbbr": "TX",
	 "name": "Kenedy County (TX)",
	 "stateId": "48"
  },
  "48263": {
	 "stateAbbr": "TX",
	 "name": "Kent County (TX)",
	 "stateId": "48"
  },
  "48265": {
	 "stateAbbr": "TX",
	 "name": "Kerr County (TX)",
	 "stateId": "48"
  },
  "48267": {
	 "stateAbbr": "TX",
	 "name": "Kimble County (TX)",
	 "stateId": "48"
  },
  "48269": {
	 "stateAbbr": "TX",
	 "name": "King County (TX)",
	 "stateId": "48"
  },
  "48271": {
	 "stateAbbr": "TX",
	 "name": "Kinney County (TX)",
	 "stateId": "48"
  },
  "48273": {
	 "stateAbbr": "TX",
	 "name": "Kleberg County (TX)",
	 "stateId": "48"
  },
  "48275": {
	 "stateAbbr": "TX",
	 "name": "Knox County (TX)",
	 "stateId": "48"
  },
  "48277": {
	 "stateAbbr": "TX",
	 "name": "Lamar County (TX)",
	 "stateId": "48"
  },
  "48279": {
	 "stateAbbr": "TX",
	 "name": "Lamb County (TX)",
	 "stateId": "48"
  },
  "48281": {
	 "stateAbbr": "TX",
	 "name": "Lampasas County (TX)",
	 "stateId": "48"
  },
  "48283": {
	 "stateAbbr": "TX",
	 "name": "La Salle County (TX)",
	 "stateId": "48"
  },
  "48285": {
	 "stateAbbr": "TX",
	 "name": "Lavaca County (TX)",
	 "stateId": "48"
  },
  "48287": {
	 "stateAbbr": "TX",
	 "name": "Lee County (TX)",
	 "stateId": "48"
  },
  "48289": {
	 "stateAbbr": "TX",
	 "name": "Leon County (TX)",
	 "stateId": "48"
  },
  "48291": {
	 "stateAbbr": "TX",
	 "name": "Liberty County (TX)",
	 "stateId": "48"
  },
  "48293": {
	 "stateAbbr": "TX",
	 "name": "Limestone County (TX)",
	 "stateId": "48"
  },
  "48295": {
	 "stateAbbr": "TX",
	 "name": "Lipscomb County (TX)",
	 "stateId": "48"
  },
  "48297": {
	 "stateAbbr": "TX",
	 "name": "Live Oak County (TX)",
	 "stateId": "48"
  },
  "48299": {
	 "stateAbbr": "TX",
	 "name": "Llano County (TX)",
	 "stateId": "48"
  },
  "48301": {
	 "stateAbbr": "TX",
	 "name": "Loving County (TX)",
	 "stateId": "48"
  },
  "48303": {
	 "stateAbbr": "TX",
	 "name": "Lubbock County (TX)",
	 "stateId": "48"
  },
  "48305": {
	 "stateAbbr": "TX",
	 "name": "Lynn County (TX)",
	 "stateId": "48"
  },
  "48307": {
	 "stateAbbr": "TX",
	 "name": "McCulloch County (TX)",
	 "stateId": "48"
  },
  "48309": {
	 "stateAbbr": "TX",
	 "name": "McLennan County (TX)",
	 "stateId": "48"
  },
  "48311": {
	 "stateAbbr": "TX",
	 "name": "McMullen County (TX)",
	 "stateId": "48"
  },
  "48313": {
	 "stateAbbr": "TX",
	 "name": "Madison County (TX)",
	 "stateId": "48"
  },
  "48315": {
	 "stateAbbr": "TX",
	 "name": "Marion County (TX)",
	 "stateId": "48"
  },
  "48317": {
	 "stateAbbr": "TX",
	 "name": "Martin County (TX)",
	 "stateId": "48"
  },
  "48319": {
	 "stateAbbr": "TX",
	 "name": "Mason County (TX)",
	 "stateId": "48"
  },
  "48321": {
	 "stateAbbr": "TX",
	 "name": "Matagorda County (TX)",
	 "stateId": "48"
  },
  "48323": {
	 "stateAbbr": "TX",
	 "name": "Maverick County (TX)",
	 "stateId": "48"
  },
  "48325": {
	 "stateAbbr": "TX",
	 "name": "Medina County (TX)",
	 "stateId": "48"
  },
  "48327": {
	 "stateAbbr": "TX",
	 "name": "Menard County (TX)",
	 "stateId": "48"
  },
  "48329": {
	 "stateAbbr": "TX",
	 "name": "Midland County (TX)",
	 "stateId": "48"
  },
  "48331": {
	 "stateAbbr": "TX",
	 "name": "Milam County (TX)",
	 "stateId": "48"
  },
  "48333": {
	 "stateAbbr": "TX",
	 "name": "Mills County (TX)",
	 "stateId": "48"
  },
  "48335": {
	 "stateAbbr": "TX",
	 "name": "Mitchell County (TX)",
	 "stateId": "48"
  },
  "48337": {
	 "stateAbbr": "TX",
	 "name": "Montague County (TX)",
	 "stateId": "48"
  },
  "48339": {
	 "stateAbbr": "TX",
	 "name": "Montgomery County (TX)",
	 "stateId": "48"
  },
  "48341": {
	 "stateAbbr": "TX",
	 "name": "Moore County (TX)",
	 "stateId": "48"
  },
  "48343": {
	 "stateAbbr": "TX",
	 "name": "Morris County (TX)",
	 "stateId": "48"
  },
  "48345": {
	 "stateAbbr": "TX",
	 "name": "Motley County (TX)",
	 "stateId": "48"
  },
  "48347": {
	 "stateAbbr": "TX",
	 "name": "Nacogdoches County (TX)",
	 "stateId": "48"
  },
  "48349": {
	 "stateAbbr": "TX",
	 "name": "Navarro County (TX)",
	 "stateId": "48"
  },
  "48351": {
	 "stateAbbr": "TX",
	 "name": "Newton County (TX)",
	 "stateId": "48"
  },
  "48353": {
	 "stateAbbr": "TX",
	 "name": "Nolan County (TX)",
	 "stateId": "48"
  },
  "48355": {
	 "stateAbbr": "TX",
	 "name": "Nueces County (TX)",
	 "stateId": "48"
  },
  "48357": {
	 "stateAbbr": "TX",
	 "name": "Ochiltree County (TX)",
	 "stateId": "48"
  },
  "48359": {
	 "stateAbbr": "TX",
	 "name": "Oldham County (TX)",
	 "stateId": "48"
  },
  "48361": {
	 "stateAbbr": "TX",
	 "name": "Orange County (TX)",
	 "stateId": "48"
  },
  "48363": {
	 "stateAbbr": "TX",
	 "name": "Palo Pinto County (TX)",
	 "stateId": "48"
  },
  "48365": {
	 "stateAbbr": "TX",
	 "name": "Panola County (TX)",
	 "stateId": "48"
  },
  "48367": {
	 "stateAbbr": "TX",
	 "name": "Parker County (TX)",
	 "stateId": "48"
  },
  "48369": {
	 "stateAbbr": "TX",
	 "name": "Parmer County (TX)",
	 "stateId": "48"
  },
  "48371": {
	 "stateAbbr": "TX",
	 "name": "Pecos County (TX)",
	 "stateId": "48"
  },
  "48373": {
	 "stateAbbr": "TX",
	 "name": "Polk County (TX)",
	 "stateId": "48"
  },
  "48375": {
	 "stateAbbr": "TX",
	 "name": "Potter County (TX)",
	 "stateId": "48"
  },
  "48377": {
	 "stateAbbr": "TX",
	 "name": "Presidio County (TX)",
	 "stateId": "48"
  },
  "48379": {
	 "stateAbbr": "TX",
	 "name": "Rains County (TX)",
	 "stateId": "48"
  },
  "48381": {
	 "stateAbbr": "TX",
	 "name": "Randall County (TX)",
	 "stateId": "48"
  },
  "48383": {
	 "stateAbbr": "TX",
	 "name": "Reagan County (TX)",
	 "stateId": "48"
  },
  "48385": {
	 "stateAbbr": "TX",
	 "name": "Real County (TX)",
	 "stateId": "48"
  },
  "48387": {
	 "stateAbbr": "TX",
	 "name": "Red River County (TX)",
	 "stateId": "48"
  },
  "48389": {
	 "stateAbbr": "TX",
	 "name": "Reeves County (TX)",
	 "stateId": "48"
  },
  "48391": {
	 "stateAbbr": "TX",
	 "name": "Refugio County (TX)",
	 "stateId": "48"
  },
  "48393": {
	 "stateAbbr": "TX",
	 "name": "Roberts County (TX)",
	 "stateId": "48"
  },
  "48395": {
	 "stateAbbr": "TX",
	 "name": "Robertson County (TX)",
	 "stateId": "48"
  },
  "48397": {
	 "stateAbbr": "TX",
	 "name": "Rockwall County (TX)",
	 "stateId": "48"
  },
  "48399": {
	 "stateAbbr": "TX",
	 "name": "Runnels County (TX)",
	 "stateId": "48"
  },
  "48401": {
	 "stateAbbr": "TX",
	 "name": "Rusk County (TX)",
	 "stateId": "48"
  },
  "48403": {
	 "stateAbbr": "TX",
	 "name": "Sabine County (TX)",
	 "stateId": "48"
  },
  "48405": {
	 "stateAbbr": "TX",
	 "name": "San Augustine County (TX)",
	 "stateId": "48"
  },
  "48407": {
	 "stateAbbr": "TX",
	 "name": "San Jacinto County (TX)",
	 "stateId": "48"
  },
  "48409": {
	 "stateAbbr": "TX",
	 "name": "San Patricio County (TX)",
	 "stateId": "48"
  },
  "48411": {
	 "stateAbbr": "TX",
	 "name": "San Saba County (TX)",
	 "stateId": "48"
  },
  "48413": {
	 "stateAbbr": "TX",
	 "name": "Schleicher County (TX)",
	 "stateId": "48"
  },
  "48415": {
	 "stateAbbr": "TX",
	 "name": "Scurry County (TX)",
	 "stateId": "48"
  },
  "48417": {
	 "stateAbbr": "TX",
	 "name": "Shackelford County (TX)",
	 "stateId": "48"
  },
  "48419": {
	 "stateAbbr": "TX",
	 "name": "Shelby County (TX)",
	 "stateId": "48"
  },
  "48421": {
	 "stateAbbr": "TX",
	 "name": "Sherman County (TX)",
	 "stateId": "48"
  },
  "48423": {
	 "stateAbbr": "TX",
	 "name": "Smith County (TX)",
	 "stateId": "48"
  },
  "48425": {
	 "stateAbbr": "TX",
	 "name": "Somervell County (TX)",
	 "stateId": "48"
  },
  "48427": {
	 "stateAbbr": "TX",
	 "name": "Starr County (TX)",
	 "stateId": "48"
  },
  "48429": {
	 "stateAbbr": "TX",
	 "name": "Stephens County (TX)",
	 "stateId": "48"
  },
  "48431": {
	 "stateAbbr": "TX",
	 "name": "Sterling County (TX)",
	 "stateId": "48"
  },
  "48433": {
	 "stateAbbr": "TX",
	 "name": "Stonewall County (TX)",
	 "stateId": "48"
  },
  "48435": {
	 "stateAbbr": "TX",
	 "name": "Sutton County (TX)",
	 "stateId": "48"
  },
  "48437": {
	 "stateAbbr": "TX",
	 "name": "Swisher County (TX)",
	 "stateId": "48"
  },
  "48439": {
	 "stateAbbr": "TX",
	 "name": "Tarrant County (TX)",
	 "stateId": "48"
  },
  "48441": {
	 "stateAbbr": "TX",
	 "name": "Taylor County (TX)",
	 "stateId": "48"
  },
  "48443": {
	 "stateAbbr": "TX",
	 "name": "Terrell County (TX)",
	 "stateId": "48"
  },
  "48445": {
	 "stateAbbr": "TX",
	 "name": "Terry County (TX)",
	 "stateId": "48"
  },
  "48447": {
	 "stateAbbr": "TX",
	 "name": "Throckmorton County (TX)",
	 "stateId": "48"
  },
  "48449": {
	 "stateAbbr": "TX",
	 "name": "Titus County (TX)",
	 "stateId": "48"
  },
  "48451": {
	 "stateAbbr": "TX",
	 "name": "Tom Green County (TX)",
	 "stateId": "48"
  },
  "48453": {
	 "stateAbbr": "TX",
	 "name": "Travis County (TX)",
	 "stateId": "48"
  },
  "48455": {
	 "stateAbbr": "TX",
	 "name": "Trinity County (TX)",
	 "stateId": "48"
  },
  "48457": {
	 "stateAbbr": "TX",
	 "name": "Tyler County (TX)",
	 "stateId": "48"
  },
  "48459": {
	 "stateAbbr": "TX",
	 "name": "Upshur County (TX)",
	 "stateId": "48"
  },
  "48461": {
	 "stateAbbr": "TX",
	 "name": "Upton County (TX)",
	 "stateId": "48"
  },
  "48463": {
	 "stateAbbr": "TX",
	 "name": "Uvalde County (TX)",
	 "stateId": "48"
  },
  "48465": {
	 "stateAbbr": "TX",
	 "name": "Val Verde County (TX)",
	 "stateId": "48"
  },
  "48467": {
	 "stateAbbr": "TX",
	 "name": "Van Zandt County (TX)",
	 "stateId": "48"
  },
  "48469": {
	 "stateAbbr": "TX",
	 "name": "Victoria County (TX)",
	 "stateId": "48"
  },
  "48471": {
	 "stateAbbr": "TX",
	 "name": "Walker County (TX)",
	 "stateId": "48"
  },
  "48473": {
	 "stateAbbr": "TX",
	 "name": "Waller County (TX)",
	 "stateId": "48"
  },
  "48475": {
	 "stateAbbr": "TX",
	 "name": "Ward County (TX)",
	 "stateId": "48"
  },
  "48477": {
	 "stateAbbr": "TX",
	 "name": "Washington County (TX)",
	 "stateId": "48"
  },
  "48479": {
	 "stateAbbr": "TX",
	 "name": "Webb County (TX)",
	 "stateId": "48"
  },
  "48481": {
	 "stateAbbr": "TX",
	 "name": "Wharton County (TX)",
	 "stateId": "48"
  },
  "48483": {
	 "stateAbbr": "TX",
	 "name": "Wheeler County (TX)",
	 "stateId": "48"
  },
  "48485": {
	 "stateAbbr": "TX",
	 "name": "Wichita County (TX)",
	 "stateId": "48"
  },
  "48487": {
	 "stateAbbr": "TX",
	 "name": "Wilbarger County (TX)",
	 "stateId": "48"
  },
  "48489": {
	 "stateAbbr": "TX",
	 "name": "Willacy County (TX)",
	 "stateId": "48"
  },
  "48491": {
	 "stateAbbr": "TX",
	 "name": "Williamson County (TX)",
	 "stateId": "48"
  },
  "48493": {
	 "stateAbbr": "TX",
	 "name": "Wilson County (TX)",
	 "stateId": "48"
  },
  "48495": {
	 "stateAbbr": "TX",
	 "name": "Winkler County (TX)",
	 "stateId": "48"
  },
  "48497": {
	 "stateAbbr": "TX",
	 "name": "Wise County (TX)",
	 "stateId": "48"
  },
  "48499": {
	 "stateAbbr": "TX",
	 "name": "Wood County (TX)",
	 "stateId": "48"
  },
  "48501": {
	 "stateAbbr": "TX",
	 "name": "Yoakum County (TX)",
	 "stateId": "48"
  },
  "48503": {
	 "stateAbbr": "TX",
	 "name": "Young County (TX)",
	 "stateId": "48"
  },
  "48505": {
	 "stateAbbr": "TX",
	 "name": "Zapata County (TX)",
	 "stateId": "48"
  },
  "48507": {
	 "stateAbbr": "TX",
	 "name": "Zavala County (TX)",
	 "stateId": "48"
  },
  "49001": {
	 "stateAbbr": "UT",
	 "name": "Beaver County (UT)",
	 "stateId": "49"
  },
  "49003": {
	 "stateAbbr": "UT",
	 "name": "Box Elder County (UT)",
	 "stateId": "49"
  },
  "49005": {
	 "stateAbbr": "UT",
	 "name": "Cache County (UT)",
	 "stateId": "49"
  },
  "49007": {
	 "stateAbbr": "UT",
	 "name": "Carbon County (UT)",
	 "stateId": "49"
  },
  "49009": {
	 "stateAbbr": "UT",
	 "name": "Daggett County (UT)",
	 "stateId": "49"
  },
  "49011": {
	 "stateAbbr": "UT",
	 "name": "Davis County (UT)",
	 "stateId": "49"
  },
  "49013": {
	 "stateAbbr": "UT",
	 "name": "Duchesne County (UT)",
	 "stateId": "49"
  },
  "49015": {
	 "stateAbbr": "UT",
	 "name": "Emery County (UT)",
	 "stateId": "49"
  },
  "49017": {
	 "stateAbbr": "UT",
	 "name": "Garfield County (UT)",
	 "stateId": "49"
  },
  "49019": {
	 "stateAbbr": "UT",
	 "name": "Grand County (UT)",
	 "stateId": "49"
  },
  "49021": {
	 "stateAbbr": "UT",
	 "name": "Iron County (UT)",
	 "stateId": "49"
  },
  "49023": {
	 "stateAbbr": "UT",
	 "name": "Juab County (UT)",
	 "stateId": "49"
  },
  "49025": {
	 "stateAbbr": "UT",
	 "name": "Kane County (UT)",
	 "stateId": "49"
  },
  "49027": {
	 "stateAbbr": "UT",
	 "name": "Millard County (UT)",
	 "stateId": "49"
  },
  "49029": {
	 "stateAbbr": "UT",
	 "name": "Morgan County (UT)",
	 "stateId": "49"
  },
  "49031": {
	 "stateAbbr": "UT",
	 "name": "Piute County (UT)",
	 "stateId": "49"
  },
  "49033": {
	 "stateAbbr": "UT",
	 "name": "Rich County (UT)",
	 "stateId": "49"
  },
  "49035": {
	 "stateAbbr": "UT",
	 "name": "Salt Lake County (UT)",
	 "stateId": "49"
  },
  "49037": {
	 "stateAbbr": "UT",
	 "name": "San Juan County (UT)",
	 "stateId": "49"
  },
  "49039": {
	 "stateAbbr": "UT",
	 "name": "Sanpete County (UT)",
	 "stateId": "49"
  },
  "49041": {
	 "stateAbbr": "UT",
	 "name": "Sevier County (UT)",
	 "stateId": "49"
  },
  "49043": {
	 "stateAbbr": "UT",
	 "name": "Summit County (UT)",
	 "stateId": "49"
  },
  "49045": {
	 "stateAbbr": "UT",
	 "name": "Tooele County (UT)",
	 "stateId": "49"
  },
  "49047": {
	 "stateAbbr": "UT",
	 "name": "Uintah County (UT)",
	 "stateId": "49"
  },
  "49049": {
	 "stateAbbr": "UT",
	 "name": "Utah County (UT)",
	 "stateId": "49"
  },
  "49051": {
	 "stateAbbr": "UT",
	 "name": "Wasatch County (UT)",
	 "stateId": "49"
  },
  "49053": {
	 "stateAbbr": "UT",
	 "name": "Washington County (UT)",
	 "stateId": "49"
  },
  "49055": {
	 "stateAbbr": "UT",
	 "name": "Wayne County (UT)",
	 "stateId": "49"
  },
  "49057": {
	 "stateAbbr": "UT",
	 "name": "Weber County (UT)",
	 "stateId": "49"
  },
  "50001": {
	 "stateAbbr": "VT",
	 "name": "Addison County (VT)",
	 "stateId": "50"
  },
  "50003": {
	 "stateAbbr": "VT",
	 "name": "Bennington County (VT)",
	 "stateId": "50"
  },
  "50005": {
	 "stateAbbr": "VT",
	 "name": "Caledonia County (VT)",
	 "stateId": "50"
  },
  "50007": {
	 "stateAbbr": "VT",
	 "name": "Chittenden County (VT)",
	 "stateId": "50"
  },
  "50009": {
	 "stateAbbr": "VT",
	 "name": "Essex County (VT)",
	 "stateId": "50"
  },
  "50011": {
	 "stateAbbr": "VT",
	 "name": "Franklin County (VT)",
	 "stateId": "50"
  },
  "50013": {
	 "stateAbbr": "VT",
	 "name": "Grand Isle County (VT)",
	 "stateId": "50"
  },
  "50015": {
	 "stateAbbr": "VT",
	 "name": "Lamoille County (VT)",
	 "stateId": "50"
  },
  "50017": {
	 "stateAbbr": "VT",
	 "name": "Orange County (VT)",
	 "stateId": "50"
  },
  "50019": {
	 "stateAbbr": "VT",
	 "name": "Orleans County (VT)",
	 "stateId": "50"
  },
  "50021": {
	 "stateAbbr": "VT",
	 "name": "Rutland County (VT)",
	 "stateId": "50"
  },
  "50023": {
	 "stateAbbr": "VT",
	 "name": "Washington County (VT)",
	 "stateId": "50"
  },
  "50025": {
	 "stateAbbr": "VT",
	 "name": "Windham County (VT)",
	 "stateId": "50"
  },
  "50027": {
	 "stateAbbr": "VT",
	 "name": "Windsor County (VT)",
	 "stateId": "50"
  },
  "51001": {
	 "stateAbbr": "VA",
	 "name": "Accomack County (VA)",
	 "stateId": "51"
  },
  "51003": {
	 "stateAbbr": "VA",
	 "name": "Albemarle County (VA)",
	 "stateId": "51"
  },
  "51005": {
	 "stateAbbr": "VA",
	 "name": "Alleghany County (VA)",
	 "stateId": "51"
  },
  "51007": {
	 "stateAbbr": "VA",
	 "name": "Amelia County (VA)",
	 "stateId": "51"
  },
  "51009": {
	 "stateAbbr": "VA",
	 "name": "Amherst County (VA)",
	 "stateId": "51"
  },
  "51011": {
	 "stateAbbr": "VA",
	 "name": "Appomattox County (VA)",
	 "stateId": "51"
  },
  "51013": {
	 "stateAbbr": "VA",
	 "name": "Arlington County (VA)",
	 "stateId": "51"
  },
  "51015": {
	 "stateAbbr": "VA",
	 "name": "Augusta County (VA)",
	 "stateId": "51"
  },
  "51017": {
	 "stateAbbr": "VA",
	 "name": "Bath County (VA)",
	 "stateId": "51"
  },
  "51019": {
	 "stateAbbr": "VA",
	 "name": "Bedford County (VA)",
	 "stateId": "51"
  },
  "51021": {
	 "stateAbbr": "VA",
	 "name": "Bland County (VA)",
	 "stateId": "51"
  },
  "51023": {
	 "stateAbbr": "VA",
	 "name": "Botetourt County (VA)",
	 "stateId": "51"
  },
  "51025": {
	 "stateAbbr": "VA",
	 "name": "Brunswick County (VA)",
	 "stateId": "51"
  },
  "51027": {
	 "stateAbbr": "VA",
	 "name": "Buchanan County (VA)",
	 "stateId": "51"
  },
  "51029": {
	 "stateAbbr": "VA",
	 "name": "Buckingham County (VA)",
	 "stateId": "51"
  },
  "51031": {
	 "stateAbbr": "VA",
	 "name": "Campbell County (VA)",
	 "stateId": "51"
  },
  "51033": {
	 "stateAbbr": "VA",
	 "name": "Caroline County (VA)",
	 "stateId": "51"
  },
  "51035": {
	 "stateAbbr": "VA",
	 "name": "Carroll County (VA)",
	 "stateId": "51"
  },
  "51036": {
	 "stateAbbr": "VA",
	 "name": "Charles City County (VA)",
	 "stateId": "51"
  },
  "51037": {
	 "stateAbbr": "VA",
	 "name": "Charlotte County (VA)",
	 "stateId": "51"
  },
  "51041": {
	 "stateAbbr": "VA",
	 "name": "Chesterfield County (VA)",
	 "stateId": "51"
  },
  "51043": {
	 "stateAbbr": "VA",
	 "name": "Clarke County (VA)",
	 "stateId": "51"
  },
  "51045": {
	 "stateAbbr": "VA",
	 "name": "Craig County (VA)",
	 "stateId": "51"
  },
  "51047": {
	 "stateAbbr": "VA",
	 "name": "Culpeper County (VA)",
	 "stateId": "51"
  },
  "51049": {
	 "stateAbbr": "VA",
	 "name": "Cumberland County (VA)",
	 "stateId": "51"
  },
  "51051": {
	 "stateAbbr": "VA",
	 "name": "Dickenson County (VA)",
	 "stateId": "51"
  },
  "51053": {
	 "stateAbbr": "VA",
	 "name": "Dinwiddie County (VA)",
	 "stateId": "51"
  },
  "51057": {
	 "stateAbbr": "VA",
	 "name": "Essex County (VA)",
	 "stateId": "51"
  },
  "51059": {
	 "stateAbbr": "VA",
	 "name": "Fairfax County (VA)",
	 "stateId": "51"
  },
  "51061": {
	 "stateAbbr": "VA",
	 "name": "Fauquier County (VA)",
	 "stateId": "51"
  },
  "51063": {
	 "stateAbbr": "VA",
	 "name": "Floyd County (VA)",
	 "stateId": "51"
  },
  "51065": {
	 "stateAbbr": "VA",
	 "name": "Fluvanna County (VA)",
	 "stateId": "51"
  },
  "51067": {
	 "stateAbbr": "VA",
	 "name": "Franklin County (VA)",
	 "stateId": "51"
  },
  "51069": {
	 "stateAbbr": "VA",
	 "name": "Frederick County (VA)",
	 "stateId": "51"
  },
  "51071": {
	 "stateAbbr": "VA",
	 "name": "Giles County (VA)",
	 "stateId": "51"
  },
  "51073": {
	 "stateAbbr": "VA",
	 "name": "Gloucester County (VA)",
	 "stateId": "51"
  },
  "51075": {
	 "stateAbbr": "VA",
	 "name": "Goochland County (VA)",
	 "stateId": "51"
  },
  "51077": {
	 "stateAbbr": "VA",
	 "name": "Grayson County (VA)",
	 "stateId": "51"
  },
  "51079": {
	 "stateAbbr": "VA",
	 "name": "Greene County (VA)",
	 "stateId": "51"
  },
  "51081": {
	 "stateAbbr": "VA",
	 "name": "Greensville County (VA)",
	 "stateId": "51"
  },
  "51083": {
	 "stateAbbr": "VA",
	 "name": "Halifax County (VA)",
	 "stateId": "51"
  },
  "51085": {
	 "stateAbbr": "VA",
	 "name": "Hanover County (VA)",
	 "stateId": "51"
  },
  "51087": {
	 "stateAbbr": "VA",
	 "name": "Henrico County (VA)",
	 "stateId": "51"
  },
  "51089": {
	 "stateAbbr": "VA",
	 "name": "Henry County (VA)",
	 "stateId": "51"
  },
  "51091": {
	 "stateAbbr": "VA",
	 "name": "Highland County (VA)",
	 "stateId": "51"
  },
  "51093": {
	 "stateAbbr": "VA",
	 "name": "Isle of Wight County (VA)",
	 "stateId": "51"
  },
  "51095": {
	 "stateAbbr": "VA",
	 "name": "James City County (VA)",
	 "stateId": "51"
  },
  "51097": {
	 "stateAbbr": "VA",
	 "name": "King and Queen County (VA)",
	 "stateId": "51"
  },
  "51099": {
	 "stateAbbr": "VA",
	 "name": "King George County (VA)",
	 "stateId": "51"
  },
  "51101": {
	 "stateAbbr": "VA",
	 "name": "King William County (VA)",
	 "stateId": "51"
  },
  "51103": {
	 "stateAbbr": "VA",
	 "name": "Lancaster County (VA)",
	 "stateId": "51"
  },
  "51105": {
	 "stateAbbr": "VA",
	 "name": "Lee County (VA)",
	 "stateId": "51"
  },
  "51107": {
	 "stateAbbr": "VA",
	 "name": "Loudoun County (VA)",
	 "stateId": "51"
  },
  "51109": {
	 "stateAbbr": "VA",
	 "name": "Louisa County (VA)",
	 "stateId": "51"
  },
  "51111": {
	 "stateAbbr": "VA",
	 "name": "Lunenburg County (VA)",
	 "stateId": "51"
  },
  "51113": {
	 "stateAbbr": "VA",
	 "name": "Madison County (VA)",
	 "stateId": "51"
  },
  "51115": {
	 "stateAbbr": "VA",
	 "name": "Mathews County (VA)",
	 "stateId": "51"
  },
  "51117": {
	 "stateAbbr": "VA",
	 "name": "Mecklenburg County (VA)",
	 "stateId": "51"
  },
  "51119": {
	 "stateAbbr": "VA",
	 "name": "Middlesex County (VA)",
	 "stateId": "51"
  },
  "51121": {
	 "stateAbbr": "VA",
	 "name": "Montgomery County (VA)",
	 "stateId": "51"
  },
  "51125": {
	 "stateAbbr": "VA",
	 "name": "Nelson County (VA)",
	 "stateId": "51"
  },
  "51127": {
	 "stateAbbr": "VA",
	 "name": "New Kent County (VA)",
	 "stateId": "51"
  },
  "51131": {
	 "stateAbbr": "VA",
	 "name": "Northampton County (VA)",
	 "stateId": "51"
  },
  "51133": {
	 "stateAbbr": "VA",
	 "name": "Northumberland County (VA)",
	 "stateId": "51"
  },
  "51135": {
	 "stateAbbr": "VA",
	 "name": "Nottoway County (VA)",
	 "stateId": "51"
  },
  "51137": {
	 "stateAbbr": "VA",
	 "name": "Orange County (VA)",
	 "stateId": "51"
  },
  "51139": {
	 "stateAbbr": "VA",
	 "name": "Page County (VA)",
	 "stateId": "51"
  },
  "51141": {
	 "stateAbbr": "VA",
	 "name": "Patrick County (VA)",
	 "stateId": "51"
  },
  "51143": {
	 "stateAbbr": "VA",
	 "name": "Pittsylvania County (VA)",
	 "stateId": "51"
  },
  "51145": {
	 "stateAbbr": "VA",
	 "name": "Powhatan County (VA)",
	 "stateId": "51"
  },
  "51147": {
	 "stateAbbr": "VA",
	 "name": "Prince Edward County (VA)",
	 "stateId": "51"
  },
  "51149": {
	 "stateAbbr": "VA",
	 "name": "Prince George County (VA)",
	 "stateId": "51"
  },
  "51153": {
	 "stateAbbr": "VA",
	 "name": "Prince William County (VA)",
	 "stateId": "51"
  },
  "51155": {
	 "stateAbbr": "VA",
	 "name": "Pulaski County (VA)",
	 "stateId": "51"
  },
  "51157": {
	 "stateAbbr": "VA",
	 "name": "Rappahannock County (VA)",
	 "stateId": "51"
  },
  "51159": {
	 "stateAbbr": "VA",
	 "name": "Richmond County (VA)",
	 "stateId": "51"
  },
  "51161": {
	 "stateAbbr": "VA",
	 "name": "Roanoke County (VA)",
	 "stateId": "51"
  },
  "51163": {
	 "stateAbbr": "VA",
	 "name": "Rockbridge County (VA)",
	 "stateId": "51"
  },
  "51165": {
	 "stateAbbr": "VA",
	 "name": "Rockingham County (VA)",
	 "stateId": "51"
  },
  "51167": {
	 "stateAbbr": "VA",
	 "name": "Russell County (VA)",
	 "stateId": "51"
  },
  "51169": {
	 "stateAbbr": "VA",
	 "name": "Scott County (VA)",
	 "stateId": "51"
  },
  "51171": {
	 "stateAbbr": "VA",
	 "name": "Shenandoah County (VA)",
	 "stateId": "51"
  },
  "51173": {
	 "stateAbbr": "VA",
	 "name": "Smyth County (VA)",
	 "stateId": "51"
  },
  "51175": {
	 "stateAbbr": "VA",
	 "name": "Southampton County (VA)",
	 "stateId": "51"
  },
  "51177": {
	 "stateAbbr": "VA",
	 "name": "Spotsylvania County (VA)",
	 "stateId": "51"
  },
  "51179": {
	 "stateAbbr": "VA",
	 "name": "Stafford County (VA)",
	 "stateId": "51"
  },
  "51181": {
	 "stateAbbr": "VA",
	 "name": "Surry County (VA)",
	 "stateId": "51"
  },
  "51183": {
	 "stateAbbr": "VA",
	 "name": "Sussex County (VA)",
	 "stateId": "51"
  },
  "51185": {
	 "stateAbbr": "VA",
	 "name": "Tazewell County (VA)",
	 "stateId": "51"
  },
  "51187": {
	 "stateAbbr": "VA",
	 "name": "Warren County (VA)",
	 "stateId": "51"
  },
  "51191": {
	 "stateAbbr": "VA",
	 "name": "Washington County (VA)",
	 "stateId": "51"
  },
  "51193": {
	 "stateAbbr": "VA",
	 "name": "Westmoreland County (VA)",
	 "stateId": "51"
  },
  "51195": {
	 "stateAbbr": "VA",
	 "name": "Wise County (VA)",
	 "stateId": "51"
  },
  "51197": {
	 "stateAbbr": "VA",
	 "name": "Wythe County (VA)",
	 "stateId": "51"
  },
  "51199": {
	 "stateAbbr": "VA",
	 "name": "York County (VA)",
	 "stateId": "51"
  },
  "51510": {
	 "stateAbbr": "VA",
	 "name": "Alexandria city (VA)",
	 "stateId": "51"
  },
  "51515": {
	 "stateAbbr": "VA",
	 "name": "Bedford city (VA)",
	 "stateId": "51"
  },
  "51520": {
	 "stateAbbr": "VA",
	 "name": "Bristol city (VA)",
	 "stateId": "51"
  },
  "51530": {
	 "stateAbbr": "VA",
	 "name": "Buena Vista city (VA)",
	 "stateId": "51"
  },
  "51540": {
	 "stateAbbr": "VA",
	 "name": "Charlottesville city (VA)",
	 "stateId": "51"
  },
  "51550": {
	 "stateAbbr": "VA",
	 "name": "Chesapeake city (VA)",
	 "stateId": "51"
  },
  "51570": {
	 "stateAbbr": "VA",
	 "name": "Colonial Heights city (VA)",
	 "stateId": "51"
  },
  "51580": {
	 "stateAbbr": "VA",
	 "name": "Covington city (VA)",
	 "stateId": "51"
  },
  "51590": {
	 "stateAbbr": "VA",
	 "name": "Danville city (VA)",
	 "stateId": "51"
  },
  "51595": {
	 "stateAbbr": "VA",
	 "name": "Emporia city (VA)",
	 "stateId": "51"
  },
  "51600": {
	 "stateAbbr": "VA",
	 "name": "Fairfax city (VA)",
	 "stateId": "51"
  },
  "51610": {
	 "stateAbbr": "VA",
	 "name": "Falls Church city (VA)",
	 "stateId": "51"
  },
  "51620": {
	 "stateAbbr": "VA",
	 "name": "Franklin city (VA)",
	 "stateId": "51"
  },
  "51630": {
	 "stateAbbr": "VA",
	 "name": "Fredericksburg city (VA)",
	 "stateId": "51"
  },
  "51640": {
	 "stateAbbr": "VA",
	 "name": "Galax city (VA)",
	 "stateId": "51"
  },
  "51650": {
	 "stateAbbr": "VA",
	 "name": "Hampton city (VA)",
	 "stateId": "51"
  },
  "51660": {
	 "stateAbbr": "VA",
	 "name": "Harrisonburg city (VA)",
	 "stateId": "51"
  },
  "51670": {
	 "stateAbbr": "VA",
	 "name": "Hopewell city (VA)",
	 "stateId": "51"
  },
  "51678": {
	 "stateAbbr": "VA",
	 "name": "Lexington city (VA)",
	 "stateId": "51"
  },
  "51680": {
	 "stateAbbr": "VA",
	 "name": "Lynchburg city (VA)",
	 "stateId": "51"
  },
  "51683": {
	 "stateAbbr": "VA",
	 "name": "Manassas city (VA)",
	 "stateId": "51"
  },
  "51685": {
	 "stateAbbr": "VA",
	 "name": "Manassas Park city (VA)",
	 "stateId": "51"
  },
  "51690": {
	 "stateAbbr": "VA",
	 "name": "Martinsville city (VA)",
	 "stateId": "51"
  },
  "51700": {
	 "stateAbbr": "VA",
	 "name": "Newport News city (VA)",
	 "stateId": "51"
  },
  "51710": {
	 "stateAbbr": "VA",
	 "name": "Norfolk city (VA)",
	 "stateId": "51"
  },
  "51720": {
	 "stateAbbr": "VA",
	 "name": "Norton city (VA)",
	 "stateId": "51"
  },
  "51730": {
	 "stateAbbr": "VA",
	 "name": "Petersburg city (VA)",
	 "stateId": "51"
  },
  "51735": {
	 "stateAbbr": "VA",
	 "name": "Poquoson city (VA)",
	 "stateId": "51"
  },
  "51740": {
	 "stateAbbr": "VA",
	 "name": "Portsmouth city (VA)",
	 "stateId": "51"
  },
  "51750": {
	 "stateAbbr": "VA",
	 "name": "Radford city (VA)",
	 "stateId": "51"
  },
  "51760": {
	 "stateAbbr": "VA",
	 "name": "Richmond city (VA)",
	 "stateId": "51"
  },
  "51770": {
	 "stateAbbr": "VA",
	 "name": "Roanoke city (VA)",
	 "stateId": "51"
  },
  "51775": {
	 "stateAbbr": "VA",
	 "name": "Salem city (VA)",
	 "stateId": "51"
  },
  "51790": {
	 "stateAbbr": "VA",
	 "name": "Staunton city (VA)",
	 "stateId": "51"
  },
  "51800": {
	 "stateAbbr": "VA",
	 "name": "Suffolk city (VA)",
	 "stateId": "51"
  },
  "51810": {
	 "stateAbbr": "VA",
	 "name": "Virginia Beach city (VA)",
	 "stateId": "51"
  },
  "51820": {
	 "stateAbbr": "VA",
	 "name": "Waynesboro city (VA)",
	 "stateId": "51"
  },
  "51830": {
	 "stateAbbr": "VA",
	 "name": "Williamsburg city (VA)",
	 "stateId": "51"
  },
  "51840": {
	 "stateAbbr": "VA",
	 "name": "Winchester city (VA)",
	 "stateId": "51"
  },
  "53001": {
	 "stateAbbr": "WA",
	 "name": "Adams County (WA)",
	 "stateId": "53"
  },
  "53003": {
	 "stateAbbr": "WA",
	 "name": "Asotin County (WA)",
	 "stateId": "53"
  },
  "53005": {
	 "stateAbbr": "WA",
	 "name": "Benton County (WA)",
	 "stateId": "53"
  },
  "53007": {
	 "stateAbbr": "WA",
	 "name": "Chelan County (WA)",
	 "stateId": "53"
  },
  "53009": {
	 "stateAbbr": "WA",
	 "name": "Clallam County (WA)",
	 "stateId": "53"
  },
  "53011": {
	 "stateAbbr": "WA",
	 "name": "Clark County (WA)",
	 "stateId": "53"
  },
  "53013": {
	 "stateAbbr": "WA",
	 "name": "Columbia County (WA)",
	 "stateId": "53"
  },
  "53015": {
	 "stateAbbr": "WA",
	 "name": "Cowlitz County (WA)",
	 "stateId": "53"
  },
  "53017": {
	 "stateAbbr": "WA",
	 "name": "Douglas County (WA)",
	 "stateId": "53"
  },
  "53019": {
	 "stateAbbr": "WA",
	 "name": "Ferry County (WA)",
	 "stateId": "53"
  },
  "53021": {
	 "stateAbbr": "WA",
	 "name": "Franklin County (WA)",
	 "stateId": "53"
  },
  "53023": {
	 "stateAbbr": "WA",
	 "name": "Garfield County (WA)",
	 "stateId": "53"
  },
  "53025": {
	 "stateAbbr": "WA",
	 "name": "Grant County (WA)",
	 "stateId": "53"
  },
  "53027": {
	 "stateAbbr": "WA",
	 "name": "Grays Harbor County (WA)",
	 "stateId": "53"
  },
  "53029": {
	 "stateAbbr": "WA",
	 "name": "Island County (WA)",
	 "stateId": "53"
  },
  "53031": {
	 "stateAbbr": "WA",
	 "name": "Jefferson County (WA)",
	 "stateId": "53"
  },
  "53033": {
	 "stateAbbr": "WA",
	 "name": "King County (WA)",
	 "stateId": "53"
  },
  "53035": {
	 "stateAbbr": "WA",
	 "name": "Kitsap County (WA)",
	 "stateId": "53"
  },
  "53037": {
	 "stateAbbr": "WA",
	 "name": "Kittitas County (WA)",
	 "stateId": "53"
  },
  "53039": {
	 "stateAbbr": "WA",
	 "name": "Klickitat County (WA)",
	 "stateId": "53"
  },
  "53041": {
	 "stateAbbr": "WA",
	 "name": "Lewis County (WA)",
	 "stateId": "53"
  },
  "53043": {
	 "stateAbbr": "WA",
	 "name": "Lincoln County (WA)",
	 "stateId": "53"
  },
  "53045": {
	 "stateAbbr": "WA",
	 "name": "Mason County (WA)",
	 "stateId": "53"
  },
  "53047": {
	 "stateAbbr": "WA",
	 "name": "Okanogan County (WA)",
	 "stateId": "53"
  },
  "53049": {
	 "stateAbbr": "WA",
	 "name": "Pacific County (WA)",
	 "stateId": "53"
  },
  "53051": {
	 "stateAbbr": "WA",
	 "name": "Pend Oreille County (WA)",
	 "stateId": "53"
  },
  "53053": {
	 "stateAbbr": "WA",
	 "name": "Pierce County (WA)",
	 "stateId": "53"
  },
  "53055": {
	 "stateAbbr": "WA",
	 "name": "San Juan County (WA)",
	 "stateId": "53"
  },
  "53057": {
	 "stateAbbr": "WA",
	 "name": "Skagit County (WA)",
	 "stateId": "53"
  },
  "53059": {
	 "stateAbbr": "WA",
	 "name": "Skamania County (WA)",
	 "stateId": "53"
  },
  "53061": {
	 "stateAbbr": "WA",
	 "name": "Snohomish County (WA)",
	 "stateId": "53"
  },
  "53063": {
	 "stateAbbr": "WA",
	 "name": "Spokane County (WA)",
	 "stateId": "53"
  },
  "53065": {
	 "stateAbbr": "WA",
	 "name": "Stevens County (WA)",
	 "stateId": "53"
  },
  "53067": {
	 "stateAbbr": "WA",
	 "name": "Thurston County (WA)",
	 "stateId": "53"
  },
  "53069": {
	 "stateAbbr": "WA",
	 "name": "Wahkiakum County (WA)",
	 "stateId": "53"
  },
  "53071": {
	 "stateAbbr": "WA",
	 "name": "Walla Walla County (WA)",
	 "stateId": "53"
  },
  "53073": {
	 "stateAbbr": "WA",
	 "name": "Whatcom County (WA)",
	 "stateId": "53"
  },
  "53075": {
	 "stateAbbr": "WA",
	 "name": "Whitman County (WA)",
	 "stateId": "53"
  },
  "53077": {
	 "stateAbbr": "WA",
	 "name": "Yakima County (WA)",
	 "stateId": "53"
  },
  "54001": {
	 "stateAbbr": "WV",
	 "name": "Barbour County (WV)",
	 "stateId": "54"
  },
  "54003": {
	 "stateAbbr": "WV",
	 "name": "Berkeley County (WV)",
	 "stateId": "54"
  },
  "54005": {
	 "stateAbbr": "WV",
	 "name": "Boone County (WV)",
	 "stateId": "54"
  },
  "54007": {
	 "stateAbbr": "WV",
	 "name": "Braxton County (WV)",
	 "stateId": "54"
  },
  "54009": {
	 "stateAbbr": "WV",
	 "name": "Brooke County (WV)",
	 "stateId": "54"
  },
  "54011": {
	 "stateAbbr": "WV",
	 "name": "Cabell County (WV)",
	 "stateId": "54"
  },
  "54013": {
	 "stateAbbr": "WV",
	 "name": "Calhoun County (WV)",
	 "stateId": "54"
  },
  "54015": {
	 "stateAbbr": "WV",
	 "name": "Clay County (WV)",
	 "stateId": "54"
  },
  "54017": {
	 "stateAbbr": "WV",
	 "name": "Doddridge County (WV)",
	 "stateId": "54"
  },
  "54019": {
	 "stateAbbr": "WV",
	 "name": "Fayette County (WV)",
	 "stateId": "54"
  },
  "54021": {
	 "stateAbbr": "WV",
	 "name": "Gilmer County (WV)",
	 "stateId": "54"
  },
  "54023": {
	 "stateAbbr": "WV",
	 "name": "Grant County (WV)",
	 "stateId": "54"
  },
  "54025": {
	 "stateAbbr": "WV",
	 "name": "Greenbrier County (WV)",
	 "stateId": "54"
  },
  "54027": {
	 "stateAbbr": "WV",
	 "name": "Hampshire County (WV)",
	 "stateId": "54"
  },
  "54029": {
	 "stateAbbr": "WV",
	 "name": "Hancock County (WV)",
	 "stateId": "54"
  },
  "54031": {
	 "stateAbbr": "WV",
	 "name": "Hardy County (WV)",
	 "stateId": "54"
  },
  "54033": {
	 "stateAbbr": "WV",
	 "name": "Harrison County (WV)",
	 "stateId": "54"
  },
  "54035": {
	 "stateAbbr": "WV",
	 "name": "Jackson County (WV)",
	 "stateId": "54"
  },
  "54037": {
	 "stateAbbr": "WV",
	 "name": "Jefferson County (WV)",
	 "stateId": "54"
  },
  "54039": {
	 "stateAbbr": "WV",
	 "name": "Kanawha County (WV)",
	 "stateId": "54"
  },
  "54041": {
	 "stateAbbr": "WV",
	 "name": "Lewis County (WV)",
	 "stateId": "54"
  },
  "54043": {
	 "stateAbbr": "WV",
	 "name": "Lincoln County (WV)",
	 "stateId": "54"
  },
  "54045": {
	 "stateAbbr": "WV",
	 "name": "Logan County (WV)",
	 "stateId": "54"
  },
  "54047": {
	 "stateAbbr": "WV",
	 "name": "McDowell County (WV)",
	 "stateId": "54"
  },
  "54049": {
	 "stateAbbr": "WV",
	 "name": "Marion County (WV)",
	 "stateId": "54"
  },
  "54051": {
	 "stateAbbr": "WV",
	 "name": "Marshall County (WV)",
	 "stateId": "54"
  },
  "54053": {
	 "stateAbbr": "WV",
	 "name": "Mason County (WV)",
	 "stateId": "54"
  },
  "54055": {
	 "stateAbbr": "WV",
	 "name": "Mercer County (WV)",
	 "stateId": "54"
  },
  "54057": {
	 "stateAbbr": "WV",
	 "name": "Mineral County (WV)",
	 "stateId": "54"
  },
  "54059": {
	 "stateAbbr": "WV",
	 "name": "Mingo County (WV)",
	 "stateId": "54"
  },
  "54061": {
	 "stateAbbr": "WV",
	 "name": "Monongalia County (WV)",
	 "stateId": "54"
  },
  "54063": {
	 "stateAbbr": "WV",
	 "name": "Monroe County (WV)",
	 "stateId": "54"
  },
  "54065": {
	 "stateAbbr": "WV",
	 "name": "Morgan County (WV)",
	 "stateId": "54"
  },
  "54067": {
	 "stateAbbr": "WV",
	 "name": "Nicholas County (WV)",
	 "stateId": "54"
  },
  "54069": {
	 "stateAbbr": "WV",
	 "name": "Ohio County (WV)",
	 "stateId": "54"
  },
  "54071": {
	 "stateAbbr": "WV",
	 "name": "Pendleton County (WV)",
	 "stateId": "54"
  },
  "54073": {
	 "stateAbbr": "WV",
	 "name": "Pleasants County (WV)",
	 "stateId": "54"
  },
  "54075": {
	 "stateAbbr": "WV",
	 "name": "Pocahontas County (WV)",
	 "stateId": "54"
  },
  "54077": {
	 "stateAbbr": "WV",
	 "name": "Preston County (WV)",
	 "stateId": "54"
  },
  "54079": {
	 "stateAbbr": "WV",
	 "name": "Putnam County (WV)",
	 "stateId": "54"
  },
  "54081": {
	 "stateAbbr": "WV",
	 "name": "Raleigh County (WV)",
	 "stateId": "54"
  },
  "54083": {
	 "stateAbbr": "WV",
	 "name": "Randolph County (WV)",
	 "stateId": "54"
  },
  "54085": {
	 "stateAbbr": "WV",
	 "name": "Ritchie County (WV)",
	 "stateId": "54"
  },
  "54087": {
	 "stateAbbr": "WV",
	 "name": "Roane County (WV)",
	 "stateId": "54"
  },
  "54089": {
	 "stateAbbr": "WV",
	 "name": "Summers County (WV)",
	 "stateId": "54"
  },
  "54091": {
	 "stateAbbr": "WV",
	 "name": "Taylor County (WV)",
	 "stateId": "54"
  },
  "54093": {
	 "stateAbbr": "WV",
	 "name": "Tucker County (WV)",
	 "stateId": "54"
  },
  "54095": {
	 "stateAbbr": "WV",
	 "name": "Tyler County (WV)",
	 "stateId": "54"
  },
  "54097": {
	 "stateAbbr": "WV",
	 "name": "Upshur County (WV)",
	 "stateId": "54"
  },
  "54099": {
	 "stateAbbr": "WV",
	 "name": "Wayne County (WV)",
	 "stateId": "54"
  },
  "54101": {
	 "stateAbbr": "WV",
	 "name": "Webster County (WV)",
	 "stateId": "54"
  },
  "54103": {
	 "stateAbbr": "WV",
	 "name": "Wetzel County (WV)",
	 "stateId": "54"
  },
  "54105": {
	 "stateAbbr": "WV",
	 "name": "Wirt County (WV)",
	 "stateId": "54"
  },
  "54107": {
	 "stateAbbr": "WV",
	 "name": "Wood County (WV)",
	 "stateId": "54"
  },
  "54109": {
	 "stateAbbr": "WV",
	 "name": "Wyoming County (WV)",
	 "stateId": "54"
  },
  "55001": {
	 "stateAbbr": "WI",
	 "name": "Adams County (WI)",
	 "stateId": "55"
  },
  "55003": {
	 "stateAbbr": "WI",
	 "name": "Ashland County (WI)",
	 "stateId": "55"
  },
  "55005": {
	 "stateAbbr": "WI",
	 "name": "Barron County (WI)",
	 "stateId": "55"
  },
  "55007": {
	 "stateAbbr": "WI",
	 "name": "Bayfield County (WI)",
	 "stateId": "55"
  },
  "55009": {
	 "stateAbbr": "WI",
	 "name": "Brown County (WI)",
	 "stateId": "55"
  },
  "55011": {
	 "stateAbbr": "WI",
	 "name": "Buffalo County (WI)",
	 "stateId": "55"
  },
  "55013": {
	 "stateAbbr": "WI",
	 "name": "Burnett County (WI)",
	 "stateId": "55"
  },
  "55015": {
	 "stateAbbr": "WI",
	 "name": "Calumet County (WI)",
	 "stateId": "55"
  },
  "55017": {
	 "stateAbbr": "WI",
	 "name": "Chippewa County (WI)",
	 "stateId": "55"
  },
  "55019": {
	 "stateAbbr": "WI",
	 "name": "Clark County (WI)",
	 "stateId": "55"
  },
  "55021": {
	 "stateAbbr": "WI",
	 "name": "Columbia County (WI)",
	 "stateId": "55"
  },
  "55023": {
	 "stateAbbr": "WI",
	 "name": "Crawford County (WI)",
	 "stateId": "55"
  },
  "55025": {
	 "stateAbbr": "WI",
	 "name": "Dane County (WI)",
	 "stateId": "55"
  },
  "55027": {
	 "stateAbbr": "WI",
	 "name": "Dodge County (WI)",
	 "stateId": "55"
  },
  "55029": {
	 "stateAbbr": "WI",
	 "name": "Door County (WI)",
	 "stateId": "55"
  },
  "55031": {
	 "stateAbbr": "WI",
	 "name": "Douglas County (WI)",
	 "stateId": "55"
  },
  "55033": {
	 "stateAbbr": "WI",
	 "name": "Dunn County (WI)",
	 "stateId": "55"
  },
  "55035": {
	 "stateAbbr": "WI",
	 "name": "Eau Claire County (WI)",
	 "stateId": "55"
  },
  "55037": {
	 "stateAbbr": "WI",
	 "name": "Florence County (WI)",
	 "stateId": "55"
  },
  "55039": {
	 "stateAbbr": "WI",
	 "name": "Fond du Lac County (WI)",
	 "stateId": "55"
  },
  "55041": {
	 "stateAbbr": "WI",
	 "name": "Forest County (WI)",
	 "stateId": "55"
  },
  "55043": {
	 "stateAbbr": "WI",
	 "name": "Grant County (WI)",
	 "stateId": "55"
  },
  "55045": {
	 "stateAbbr": "WI",
	 "name": "Green County (WI)",
	 "stateId": "55"
  },
  "55047": {
	 "stateAbbr": "WI",
	 "name": "Green Lake County (WI)",
	 "stateId": "55"
  },
  "55049": {
	 "stateAbbr": "WI",
	 "name": "Iowa County (WI)",
	 "stateId": "55"
  },
  "55051": {
	 "stateAbbr": "WI",
	 "name": "Iron County (WI)",
	 "stateId": "55"
  },
  "55053": {
	 "stateAbbr": "WI",
	 "name": "Jackson County (WI)",
	 "stateId": "55"
  },
  "55055": {
	 "stateAbbr": "WI",
	 "name": "Jefferson County (WI)",
	 "stateId": "55"
  },
  "55057": {
	 "stateAbbr": "WI",
	 "name": "Juneau County (WI)",
	 "stateId": "55"
  },
  "55059": {
	 "stateAbbr": "WI",
	 "name": "Kenosha County (WI)",
	 "stateId": "55"
  },
  "55061": {
	 "stateAbbr": "WI",
	 "name": "Kewaunee County (WI)",
	 "stateId": "55"
  },
  "55063": {
	 "stateAbbr": "WI",
	 "name": "La Crosse County (WI)",
	 "stateId": "55"
  },
  "55065": {
	 "stateAbbr": "WI",
	 "name": "Lafayette County (WI)",
	 "stateId": "55"
  },
  "55067": {
	 "stateAbbr": "WI",
	 "name": "Langlade County (WI)",
	 "stateId": "55"
  },
  "55069": {
	 "stateAbbr": "WI",
	 "name": "Lincoln County (WI)",
	 "stateId": "55"
  },
  "55071": {
	 "stateAbbr": "WI",
	 "name": "Manitowoc County (WI)",
	 "stateId": "55"
  },
  "55073": {
	 "stateAbbr": "WI",
	 "name": "Marathon County (WI)",
	 "stateId": "55"
  },
  "55075": {
	 "stateAbbr": "WI",
	 "name": "Marinette County (WI)",
	 "stateId": "55"
  },
  "55077": {
	 "stateAbbr": "WI",
	 "name": "Marquette County (WI)",
	 "stateId": "55"
  },
  "55078": {
	 "stateAbbr": "WI",
	 "name": "Menominee County (WI)",
	 "stateId": "55"
  },
  "55079": {
	 "stateAbbr": "WI",
	 "name": "Milwaukee County (WI)",
	 "stateId": "55"
  },
  "55081": {
	 "stateAbbr": "WI",
	 "name": "Monroe County (WI)",
	 "stateId": "55"
  },
  "55083": {
	 "stateAbbr": "WI",
	 "name": "Oconto County (WI)",
	 "stateId": "55"
  },
  "55085": {
	 "stateAbbr": "WI",
	 "name": "Oneida County (WI)",
	 "stateId": "55"
  },
  "55087": {
	 "stateAbbr": "WI",
	 "name": "Outagamie County (WI)",
	 "stateId": "55"
  },
  "55089": {
	 "stateAbbr": "WI",
	 "name": "Ozaukee County (WI)",
	 "stateId": "55"
  },
  "55091": {
	 "stateAbbr": "WI",
	 "name": "Pepin County (WI)",
	 "stateId": "55"
  },
  "55093": {
	 "stateAbbr": "WI",
	 "name": "Pierce County (WI)",
	 "stateId": "55"
  },
  "55095": {
	 "stateAbbr": "WI",
	 "name": "Polk County (WI)",
	 "stateId": "55"
  },
  "55097": {
	 "stateAbbr": "WI",
	 "name": "Portage County (WI)",
	 "stateId": "55"
  },
  "55099": {
	 "stateAbbr": "WI",
	 "name": "Price County (WI)",
	 "stateId": "55"
  },
  "55101": {
	 "stateAbbr": "WI",
	 "name": "Racine County (WI)",
	 "stateId": "55"
  },
  "55103": {
	 "stateAbbr": "WI",
	 "name": "Richland County (WI)",
	 "stateId": "55"
  },
  "55105": {
	 "stateAbbr": "WI",
	 "name": "Rock County (WI)",
	 "stateId": "55"
  },
  "55107": {
	 "stateAbbr": "WI",
	 "name": "Rusk County (WI)",
	 "stateId": "55"
  },
  "55109": {
	 "stateAbbr": "WI",
	 "name": "St. Croix County (WI)",
	 "stateId": "55"
  },
  "55111": {
	 "stateAbbr": "WI",
	 "name": "Sauk County (WI)",
	 "stateId": "55"
  },
  "55113": {
	 "stateAbbr": "WI",
	 "name": "Sawyer County (WI)",
	 "stateId": "55"
  },
  "55115": {
	 "stateAbbr": "WI",
	 "name": "Shawano County (WI)",
	 "stateId": "55"
  },
  "55117": {
	 "stateAbbr": "WI",
	 "name": "Sheboygan County (WI)",
	 "stateId": "55"
  },
  "55119": {
	 "stateAbbr": "WI",
	 "name": "Taylor County (WI)",
	 "stateId": "55"
  },
  "55121": {
	 "stateAbbr": "WI",
	 "name": "Trempealeau County (WI)",
	 "stateId": "55"
  },
  "55123": {
	 "stateAbbr": "WI",
	 "name": "Vernon County (WI)",
	 "stateId": "55"
  },
  "55125": {
	 "stateAbbr": "WI",
	 "name": "Vilas County (WI)",
	 "stateId": "55"
  },
  "55127": {
	 "stateAbbr": "WI",
	 "name": "Walworth County (WI)",
	 "stateId": "55"
  },
  "55129": {
	 "stateAbbr": "WI",
	 "name": "Washburn County (WI)",
	 "stateId": "55"
  },
  "55131": {
	 "stateAbbr": "WI",
	 "name": "Washington County (WI)",
	 "stateId": "55"
  },
  "55133": {
	 "stateAbbr": "WI",
	 "name": "Waukesha County (WI)",
	 "stateId": "55"
  },
  "55135": {
	 "stateAbbr": "WI",
	 "name": "Waupaca County (WI)",
	 "stateId": "55"
  },
  "55137": {
	 "stateAbbr": "WI",
	 "name": "Waushara County (WI)",
	 "stateId": "55"
  },
  "55139": {
	 "stateAbbr": "WI",
	 "name": "Winnebago County (WI)",
	 "stateId": "55"
  },
  "55141": {
	 "stateAbbr": "WI",
	 "name": "Wood County (WI)",
	 "stateId": "55"
  },
  "56001": {
	 "stateAbbr": "WY",
	 "name": "Albany County (WY)",
	 "stateId": "56"
  },
  "56003": {
	 "stateAbbr": "WY",
	 "name": "Big Horn County (WY)",
	 "stateId": "56"
  },
  "56005": {
	 "stateAbbr": "WY",
	 "name": "Campbell County (WY)",
	 "stateId": "56"
  },
  "56007": {
	 "stateAbbr": "WY",
	 "name": "Carbon County (WY)",
	 "stateId": "56"
  },
  "56009": {
	 "stateAbbr": "WY",
	 "name": "Converse County (WY)",
	 "stateId": "56"
  },
  "56011": {
	 "stateAbbr": "WY",
	 "name": "Crook County (WY)",
	 "stateId": "56"
  },
  "56013": {
	 "stateAbbr": "WY",
	 "name": "Fremont County (WY)",
	 "stateId": "56"
  },
  "56015": {
	 "stateAbbr": "WY",
	 "name": "Goshen County (WY)",
	 "stateId": "56"
  },
  "56017": {
	 "stateAbbr": "WY",
	 "name": "Hot Springs County (WY)",
	 "stateId": "56"
  },
  "56019": {
	 "stateAbbr": "WY",
	 "name": "Johnson County (WY)",
	 "stateId": "56"
  },
  "56021": {
	 "stateAbbr": "WY",
	 "name": "Laramie County (WY)",
	 "stateId": "56"
  },
  "56023": {
	 "stateAbbr": "WY",
	 "name": "Lincoln County (WY)",
	 "stateId": "56"
  },
  "56025": {
	 "stateAbbr": "WY",
	 "name": "Natrona County (WY)",
	 "stateId": "56"
  },
  "56027": {
	 "stateAbbr": "WY",
	 "name": "Niobrara County (WY)",
	 "stateId": "56"
  },
  "56029": {
	 "stateAbbr": "WY",
	 "name": "Park County (WY)",
	 "stateId": "56"
  },
  "56031": {
	 "stateAbbr": "WY",
	 "name": "Platte County (WY)",
	 "stateId": "56"
  },
  "56033": {
	 "stateAbbr": "WY",
	 "name": "Sheridan County (WY)",
	 "stateId": "56"
  },
  "56035": {
	 "stateAbbr": "WY",
	 "name": "Sublette County (WY)",
	 "stateId": "56"
  },
  "56037": {
	 "stateAbbr": "WY",
	 "name": "Sweetwater County (WY)",
	 "stateId": "56"
  },
  "56039": {
	 "stateAbbr": "WY",
	 "name": "Teton County (WY)",
	 "stateId": "56"
  },
  "56041": {
	 "stateAbbr": "WY",
	 "name": "Uinta County (WY)",
	 "stateId": "56"
  },
  "56043": {
	 "stateAbbr": "WY",
	 "name": "Washakie County (WY)",
	 "stateId": "56"
  },
  "56045": {
	 "stateAbbr": "WY",
	 "name": "Weston County (WY)",
	 "stateId": "56"
  },
  "60010": {
	 "stateAbbr": "AS",
	 "name": "Eastern District (AS)",
	 "stateId": "60"
  },
  "60020": {
	 "stateAbbr": "AS",
	 "name": "Manu'a District (AS)",
	 "stateId": "60"
  },
  "60030": {
	 "stateAbbr": "AS",
	 "name": "Rose Island (AS)",
	 "stateId": "60"
  },
  "60040": {
	 "stateAbbr": "AS",
	 "name": "Swains Island (AS)",
	 "stateId": "60"
  },
  "60050": {
	 "stateAbbr": "AS",
	 "name": "Western District (AS)",
	 "stateId": "60"
  },
  "66010": {
	 "stateAbbr": "GU",
	 "name": "Guam (GU)",
	 "stateId": "66"
  },
  "69085": {
	 "stateAbbr": "MP",
	 "name": "Northern Islands Municipality (MP)",
	 "stateId": "69"
  },
  "69100": {
	 "stateAbbr": "MP",
	 "name": "Rota Municipality (MP)",
	 "stateId": "69"
  },
  "69110": {
	 "stateAbbr": "MP",
	 "name": "Saipan Municipality (MP)",
	 "stateId": "69"
  },
  "69120": {
	 "stateAbbr": "MP",
	 "name": "Tinian Municipality (MP)",
	 "stateId": "69"
  },
  "72001": {
	 "stateAbbr": "PR",
	 "name": "Adjuntas Municipio (PR)",
	 "stateId": "72"
  },
  "72003": {
	 "stateAbbr": "PR",
	 "name": "Aguada Municipio (PR)",
	 "stateId": "72"
  },
  "72005": {
	 "stateAbbr": "PR",
	 "name": "Aguadilla Municipio (PR)",
	 "stateId": "72"
  },
  "72007": {
	 "stateAbbr": "PR",
	 "name": "Aguas Buenas Municipio (PR)",
	 "stateId": "72"
  },
  "72009": {
	 "stateAbbr": "PR",
	 "name": "Aibonito Municipio (PR)",
	 "stateId": "72"
  },
  "72011": {
	 "stateAbbr": "PR",
	 "name": "Anasco Municipio (PR)",
	 "stateId": "72"
  },
  "72013": {
	 "stateAbbr": "PR",
	 "name": "Arecibo Municipio (PR)",
	 "stateId": "72"
  },
  "72015": {
	 "stateAbbr": "PR",
	 "name": "Arroyo Municipio (PR)",
	 "stateId": "72"
  },
  "72017": {
	 "stateAbbr": "PR",
	 "name": "Barceloneta Municipio (PR)",
	 "stateId": "72"
  },
  "72019": {
	 "stateAbbr": "PR",
	 "name": "Barranquitas Municipio (PR)",
	 "stateId": "72"
  },
  "72021": {
	 "stateAbbr": "PR",
	 "name": "Bayamon Municipio (PR)",
	 "stateId": "72"
  },
  "72023": {
	 "stateAbbr": "PR",
	 "name": "Cabo Rojo Municipio (PR)",
	 "stateId": "72"
  },
  "72025": {
	 "stateAbbr": "PR",
	 "name": "Caguas Municipio (PR)",
	 "stateId": "72"
  },
  "72027": {
	 "stateAbbr": "PR",
	 "name": "Camuy Municipio (PR)",
	 "stateId": "72"
  },
  "72029": {
	 "stateAbbr": "PR",
	 "name": "Canovanas Municipio (PR)",
	 "stateId": "72"
  },
  "72031": {
	 "stateAbbr": "PR",
	 "name": "Carolina Municipio (PR)",
	 "stateId": "72"
  },
  "72033": {
	 "stateAbbr": "PR",
	 "name": "Catano Municipio (PR)",
	 "stateId": "72"
  },
  "72035": {
	 "stateAbbr": "PR",
	 "name": "Cayey Municipio (PR)",
	 "stateId": "72"
  },
  "72037": {
	 "stateAbbr": "PR",
	 "name": "Ceiba Municipio (PR)",
	 "stateId": "72"
  },
  "72039": {
	 "stateAbbr": "PR",
	 "name": "Ciales Municipio (PR)",
	 "stateId": "72"
  },
  "72041": {
	 "stateAbbr": "PR",
	 "name": "Cidra Municipio (PR)",
	 "stateId": "72"
  },
  "72043": {
	 "stateAbbr": "PR",
	 "name": "Coamo Municipio (PR)",
	 "stateId": "72"
  },
  "72045": {
	 "stateAbbr": "PR",
	 "name": "Comerio Municipio (PR)",
	 "stateId": "72"
  },
  "72047": {
	 "stateAbbr": "PR",
	 "name": "Corozal Municipio (PR)",
	 "stateId": "72"
  },
  "72049": {
	 "stateAbbr": "PR",
	 "name": "Culebra Municipio (PR)",
	 "stateId": "72"
  },
  "72051": {
	 "stateAbbr": "PR",
	 "name": "Dorado Municipio (PR)",
	 "stateId": "72"
  },
  "72053": {
	 "stateAbbr": "PR",
	 "name": "Fajardo Municipio (PR)",
	 "stateId": "72"
  },
  "72054": {
	 "stateAbbr": "PR",
	 "name": "Florida Municipio (PR)",
	 "stateId": "72"
  },
  "72055": {
	 "stateAbbr": "PR",
	 "name": "Guanica Municipio (PR)",
	 "stateId": "72"
  },
  "72057": {
	 "stateAbbr": "PR",
	 "name": "Guayama Municipio (PR)",
	 "stateId": "72"
  },
  "72059": {
	 "stateAbbr": "PR",
	 "name": "Guayanilla Municipio (PR)",
	 "stateId": "72"
  },
  "72061": {
	 "stateAbbr": "PR",
	 "name": "Guaynabo Municipio (PR)",
	 "stateId": "72"
  },
  "72063": {
	 "stateAbbr": "PR",
	 "name": "Gurabo Municipio (PR)",
	 "stateId": "72"
  },
  "72065": {
	 "stateAbbr": "PR",
	 "name": "Hatillo Municipio (PR)",
	 "stateId": "72"
  },
  "72067": {
	 "stateAbbr": "PR",
	 "name": "Hormigueros Municipio (PR)",
	 "stateId": "72"
  },
  "72069": {
	 "stateAbbr": "PR",
	 "name": "Humacao Municipio (PR)",
	 "stateId": "72"
  },
  "72071": {
	 "stateAbbr": "PR",
	 "name": "Isabela Municipio (PR)",
	 "stateId": "72"
  },
  "72073": {
	 "stateAbbr": "PR",
	 "name": "Jayuya Municipio (PR)",
	 "stateId": "72"
  },
  "72075": {
	 "stateAbbr": "PR",
	 "name": "Juana Diaz Municipio (PR)",
	 "stateId": "72"
  },
  "72077": {
	 "stateAbbr": "PR",
	 "name": "Juncos Municipio (PR)",
	 "stateId": "72"
  },
  "72079": {
	 "stateAbbr": "PR",
	 "name": "Lajas Municipio (PR)",
	 "stateId": "72"
  },
  "72081": {
	 "stateAbbr": "PR",
	 "name": "Lares Municipio (PR)",
	 "stateId": "72"
  },
  "72083": {
	 "stateAbbr": "PR",
	 "name": "Las Marias Municipio (PR)",
	 "stateId": "72"
  },
  "72085": {
	 "stateAbbr": "PR",
	 "name": "Las Piedras Municipio (PR)",
	 "stateId": "72"
  },
  "72087": {
	 "stateAbbr": "PR",
	 "name": "Loiza Municipio (PR)",
	 "stateId": "72"
  },
  "72089": {
	 "stateAbbr": "PR",
	 "name": "Luquillo Municipio (PR)",
	 "stateId": "72"
  },
  "72091": {
	 "stateAbbr": "PR",
	 "name": "Manati Municipio (PR)",
	 "stateId": "72"
  },
  "72093": {
	 "stateAbbr": "PR",
	 "name": "Maricao Municipio (PR)",
	 "stateId": "72"
  },
  "72095": {
	 "stateAbbr": "PR",
	 "name": "Maunabo Municipio (PR)",
	 "stateId": "72"
  },
  "72097": {
	 "stateAbbr": "PR",
	 "name": "Mayaguez Municipio (PR)",
	 "stateId": "72"
  },
  "72099": {
	 "stateAbbr": "PR",
	 "name": "Moca Municipio (PR)",
	 "stateId": "72"
  },
  "72101": {
	 "stateAbbr": "PR",
	 "name": "Morovis Municipio (PR)",
	 "stateId": "72"
  },
  "72103": {
	 "stateAbbr": "PR",
	 "name": "Naguabo Municipio (PR)",
	 "stateId": "72"
  },
  "72105": {
	 "stateAbbr": "PR",
	 "name": "Naranjito Municipio (PR)",
	 "stateId": "72"
  },
  "72107": {
	 "stateAbbr": "PR",
	 "name": "Orocovis Municipio (PR)",
	 "stateId": "72"
  },
  "72109": {
	 "stateAbbr": "PR",
	 "name": "Patillas Municipio (PR)",
	 "stateId": "72"
  },
  "72111": {
	 "stateAbbr": "PR",
	 "name": "Penuelas Municipio (PR)",
	 "stateId": "72"
  },
  "72113": {
	 "stateAbbr": "PR",
	 "name": "Ponce Municipio (PR)",
	 "stateId": "72"
  },
  "72115": {
	 "stateAbbr": "PR",
	 "name": "Quebradillas Municipio (PR)",
	 "stateId": "72"
  },
  "72117": {
	 "stateAbbr": "PR",
	 "name": "Rincon Municipio (PR)",
	 "stateId": "72"
  },
  "72119": {
	 "stateAbbr": "PR",
	 "name": "Rio Grande Municipio (PR)",
	 "stateId": "72"
  },
  "72121": {
	 "stateAbbr": "PR",
	 "name": "Sabana Grande Municipio (PR)",
	 "stateId": "72"
  },
  "72123": {
	 "stateAbbr": "PR",
	 "name": "Salinas Municipio (PR)",
	 "stateId": "72"
  },
  "72125": {
	 "stateAbbr": "PR",
	 "name": "San German Municipio (PR)",
	 "stateId": "72"
  },
  "72127": {
	 "stateAbbr": "PR",
	 "name": "San Juan Municipio (PR)",
	 "stateId": "72"
  },
  "72129": {
	 "stateAbbr": "PR",
	 "name": "San Lorenzo Municipio (PR)",
	 "stateId": "72"
  },
  "72131": {
	 "stateAbbr": "PR",
	 "name": "San Sebastian Municipio (PR)",
	 "stateId": "72"
  },
  "72133": {
	 "stateAbbr": "PR",
	 "name": "Santa Isabel Municipio (PR)",
	 "stateId": "72"
  },
  "72135": {
	 "stateAbbr": "PR",
	 "name": "Toa Alta Municipio (PR)",
	 "stateId": "72"
  },
  "72137": {
	 "stateAbbr": "PR",
	 "name": "Toa Baja Municipio (PR)",
	 "stateId": "72"
  },
  "72139": {
	 "stateAbbr": "PR",
	 "name": "Trujillo Alto Municipio (PR)",
	 "stateId": "72"
  },
  "72141": {
	 "stateAbbr": "PR",
	 "name": "Utuado Municipio (PR)",
	 "stateId": "72"
  },
  "72143": {
	 "stateAbbr": "PR",
	 "name": "Vega Alta Municipio (PR)",
	 "stateId": "72"
  },
  "72145": {
	 "stateAbbr": "PR",
	 "name": "Vega Baja Municipio (PR)",
	 "stateId": "72"
  },
  "72147": {
	 "stateAbbr": "PR",
	 "name": "Vieques Municipio (PR)",
	 "stateId": "72"
  },
  "72149": {
	 "stateAbbr": "PR",
	 "name": "Villalba Municipio (PR)",
	 "stateId": "72"
  },
  "72151": {
	 "stateAbbr": "PR",
	 "name": "Yabucoa Municipio (PR)",
	 "stateId": "72"
  },
  "72153": {
	 "stateAbbr": "PR",
	 "name": "Yauco Municipio (PR)",
	 "stateId": "72"
  },
  "74300": {
	 "stateAbbr": "UM",
	 "name": "Midway Islands (UM)",
	 "stateId": "74"
  },
  "78010": {
	 "stateAbbr": "VI",
	 "name": "St. Croix Island (VI)",
	 "stateId": "78"
  },
  "78020": {
	 "stateAbbr": "VI",
	 "name": "St. John Island (VI)",
	 "stateId": "78"
  },
  "78030": {
	 "stateAbbr": "VI",
	 "name": "St. Thomas Island (VI)",
	 "stateId": "78"
  },
  "06115": {
	 "stateAbbr": "CA",
	 "name": "Yuba County (CA)",
	 "stateId": "06"
  },
  "06111": {
	 "stateAbbr": "CA",
	 "name": "Ventura County (CA)",
	 "stateId": "06"
  },
  "06113": {
	 "stateAbbr": "CA",
	 "name": "Yolo County (CA)",
	 "stateId": "06"
  },
  "01129": {
	 "stateAbbr": "AL",
	 "name": "Washington County (AL)",
	 "stateId": "01"
  },
  "02100": {
	 "stateAbbr": "AK",
	 "name": "Haines Borough (AK)",
	 "stateId": "02"
  },
  "02105": {
	 "stateAbbr": "AK",
	 "name": "Hoonah-Angoon Census Area (AK)",
	 "stateId": "02"
  },
  "06029": {
	 "stateAbbr": "CA",
	 "name": "Kern County (CA)",
	 "stateId": "06"
  },
  "06021": {
	 "stateAbbr": "CA",
	 "name": "Glenn County (CA)",
	 "stateId": "06"
  },
  "06023": {
	 "stateAbbr": "CA",
	 "name": "Humboldt County (CA)",
	 "stateId": "06"
  },
  "06025": {
	 "stateAbbr": "CA",
	 "name": "Imperial County (CA)",
	 "stateId": "06"
  },
  "06027": {
	 "stateAbbr": "CA",
	 "name": "Inyo County (CA)",
	 "stateId": "06"
  },
  "05139": {
	 "stateAbbr": "AR",
	 "name": "Union County (AR)",
	 "stateId": "05"
  },
  "05137": {
	 "stateAbbr": "AR",
	 "name": "Stone County (AR)",
	 "stateId": "05"
  },
  "05135": {
	 "stateAbbr": "AR",
	 "name": "Sharp County (AR)",
	 "stateId": "05"
  },
  "05133": {
	 "stateAbbr": "AR",
	 "name": "Sevier County (AR)",
	 "stateId": "05"
  },
  "05131": {
	 "stateAbbr": "AR",
	 "name": "Sebastian County (AR)",
	 "stateId": "05"
  },
  "05003": {
	 "stateAbbr": "AR",
	 "name": "Ashley County (AR)",
	 "stateId": "05"
  },
  "05001": {
	 "stateAbbr": "AR",
	 "name": "Arkansas County (AR)",
	 "stateId": "05"
  },
  "05007": {
	 "stateAbbr": "AR",
	 "name": "Benton County (AR)",
	 "stateId": "05"
  },
  "05005": {
	 "stateAbbr": "AR",
	 "name": "Baxter County (AR)",
	 "stateId": "05"
  },
  "05009": {
	 "stateAbbr": "AR",
	 "name": "Boone County (AR)",
	 "stateId": "05"
  },
  "01025": {
	 "stateAbbr": "AL",
	 "name": "Clarke County (AL)",
	 "stateId": "01"
  },
  "01027": {
	 "stateAbbr": "AL",
	 "name": "Clay County (AL)",
	 "stateId": "01"
  },
  "01021": {
	 "stateAbbr": "AL",
	 "name": "Chilton County (AL)",
	 "stateId": "01"
  },
  "01023": {
	 "stateAbbr": "AL",
	 "name": "Choctaw County (AL)",
	 "stateId": "01"
  },
  "01029": {
	 "stateAbbr": "AL",
	 "name": "Cleburne County (AL)",
	 "stateId": "01"
  },
  "01111": {
	 "stateAbbr": "AL",
	 "name": "Randolph County (AL)",
	 "stateId": "01"
  },
  "01113": {
	 "stateAbbr": "AL",
	 "name": "Russell County (AL)",
	 "stateId": "01"
  },
  "01115": {
	 "stateAbbr": "AL",
	 "name": "St. Clair County (AL)",
	 "stateId": "01"
  },
  "01117": {
	 "stateAbbr": "AL",
	 "name": "Shelby County (AL)",
	 "stateId": "01"
  },
  "01119": {
	 "stateAbbr": "AL",
	 "name": "Sumter County (AL)",
	 "stateId": "01"
  },
  "01045": {
	 "stateAbbr": "AL",
	 "name": "Dale County (AL)",
	 "stateId": "01"
  },
  "08053": {
	 "stateAbbr": "CO",
	 "name": "Hinsdale County (CO)",
	 "stateId": "08"
  },
  "08051": {
	 "stateAbbr": "CO",
	 "name": "Gunnison County (CO)",
	 "stateId": "08"
  },
  "08057": {
	 "stateAbbr": "CO",
	 "name": "Jackson County (CO)",
	 "stateId": "08"
  },
  "08055": {
	 "stateAbbr": "CO",
	 "name": "Huerfano County (CO)",
	 "stateId": "08"
  },
  "08059": {
	 "stateAbbr": "CO",
	 "name": "Jefferson County (CO)",
	 "stateId": "08"
  },
  "05093": {
	 "stateAbbr": "AR",
	 "name": "Mississippi County (AR)",
	 "stateId": "05"
  },
  "06109": {
	 "stateAbbr": "CA",
	 "name": "Tuolumne County (CA)",
	 "stateId": "06"
  },
  "06107": {
	 "stateAbbr": "CA",
	 "name": "Tulare County (CA)",
	 "stateId": "06"
  },
  "06105": {
	 "stateAbbr": "CA",
	 "name": "Trinity County (CA)",
	 "stateId": "06"
  },
  "06103": {
	 "stateAbbr": "CA",
	 "name": "Tehama County (CA)",
	 "stateId": "06"
  },
  "06101": {
	 "stateAbbr": "CA",
	 "name": "Sutter County (CA)",
	 "stateId": "06"
  },
  "06039": {
	 "stateAbbr": "CA",
	 "name": "Madera County (CA)",
	 "stateId": "06"
  },
  "06033": {
	 "stateAbbr": "CA",
	 "name": "Lake County (CA)",
	 "stateId": "06"
  },
  "06031": {
	 "stateAbbr": "CA",
	 "name": "Kings County (CA)",
	 "stateId": "06"
  },
  "06037": {
	 "stateAbbr": "CA",
	 "name": "Los Angeles County (CA)",
	 "stateId": "06"
  },
  "06035": {
	 "stateAbbr": "CA",
	 "name": "Lassen County (CA)",
	 "stateId": "06"
  },
  "05109": {
	 "stateAbbr": "AR",
	 "name": "Pike County (AR)",
	 "stateId": "05"
  },
  "05103": {
	 "stateAbbr": "AR",
	 "name": "Ouachita County (AR)",
	 "stateId": "05"
  },
  "05101": {
	 "stateAbbr": "AR",
	 "name": "Newton County (AR)",
	 "stateId": "05"
  },
  "05107": {
	 "stateAbbr": "AR",
	 "name": "Phillips County (AR)",
	 "stateId": "05"
  },
  "05105": {
	 "stateAbbr": "AR",
	 "name": "Perry County (AR)",
	 "stateId": "05"
  },
  "05039": {
	 "stateAbbr": "AR",
	 "name": "Dallas County (AR)",
	 "stateId": "05"
  },
  "05037": {
	 "stateAbbr": "AR",
	 "name": "Cross County (AR)",
	 "stateId": "05"
  },
  "05035": {
	 "stateAbbr": "AR",
	 "name": "Crittenden County (AR)",
	 "stateId": "05"
  },
  "05033": {
	 "stateAbbr": "AR",
	 "name": "Crawford County (AR)",
	 "stateId": "05"
  },
  "05031": {
	 "stateAbbr": "AR",
	 "name": "Craighead County (AR)",
	 "stateId": "05"
  },
  "01051": {
	 "stateAbbr": "AL",
	 "name": "Elmore County (AL)",
	 "stateId": "01"
  },
  "01053": {
	 "stateAbbr": "AL",
	 "name": "Escambia County (AL)",
	 "stateId": "01"
  },
  "01055": {
	 "stateAbbr": "AL",
	 "name": "Etowah County (AL)",
	 "stateId": "01"
  },
  "01057": {
	 "stateAbbr": "AL",
	 "name": "Fayette County (AL)",
	 "stateId": "01"
  },
  "01059": {
	 "stateAbbr": "AL",
	 "name": "Franklin County (AL)",
	 "stateId": "01"
  },
  "08069": {
	 "stateAbbr": "CO",
	 "name": "Larimer County (CO)",
	 "stateId": "08"
  },
  "08067": {
	 "stateAbbr": "CO",
	 "name": "La Plata County (CO)",
	 "stateId": "08"
  },
  "08065": {
	 "stateAbbr": "CO",
	 "name": "Lake County (CO)",
	 "stateId": "08"
  },
  "08063": {
	 "stateAbbr": "CO",
	 "name": "Kit Carson County (CO)",
	 "stateId": "08"
  },
  "08061": {
	 "stateAbbr": "CO",
	 "name": "Kiowa County (CO)",
	 "stateId": "08"
  },
  "08085": {
	 "stateAbbr": "CO",
	 "name": "Montrose County (CO)",
	 "stateId": "08"
  },
  "08087": {
	 "stateAbbr": "CO",
	 "name": "Morgan County (CO)",
	 "stateId": "08"
  },
  "08081": {
	 "stateAbbr": "CO",
	 "name": "Moffat County (CO)",
	 "stateId": "08"
  },
  "08083": {
	 "stateAbbr": "CO",
	 "name": "Montezuma County (CO)",
	 "stateId": "08"
  },
  "08089": {
	 "stateAbbr": "CO",
	 "name": "Otero County (CO)",
	 "stateId": "08"
  },
  "02122": {
	 "stateAbbr": "AK",
	 "name": "Kenai Peninsula Borough (AK)",
	 "stateId": "02"
  },
  "06007": {
	 "stateAbbr": "CA",
	 "name": "Butte County (CA)",
	 "stateId": "06"
  },
  "06005": {
	 "stateAbbr": "CA",
	 "name": "Amador County (CA)",
	 "stateId": "06"
  },
  "06003": {
	 "stateAbbr": "CA",
	 "name": "Alpine County (CA)",
	 "stateId": "06"
  },
  "06001": {
	 "stateAbbr": "CA",
	 "name": "Alameda County (CA)",
	 "stateId": "06"
  },
  "06009": {
	 "stateAbbr": "CA",
	 "name": "Calaveras County (CA)",
	 "stateId": "06"
  },
  "02016": {
	 "stateAbbr": "AK",
	 "name": "Aleutians West Census Area (AK)",
	 "stateId": "02"
  },
  "02013": {
	 "stateAbbr": "AK",
	 "name": "Aleutians East Borough (AK)",
	 "stateId": "02"
  },
  "02240": {
	 "stateAbbr": "AK",
	 "name": "Southeast Fairbanks Census Area (AK)",
	 "stateId": "02"
  },
  "05029": {
	 "stateAbbr": "AR",
	 "name": "Conway County (AR)",
	 "stateId": "05"
  },
  "05021": {
	 "stateAbbr": "AR",
	 "name": "Clay County (AR)",
	 "stateId": "05"
  },
  "05023": {
	 "stateAbbr": "AR",
	 "name": "Cleburne County (AR)",
	 "stateId": "05"
  },
  "05025": {
	 "stateAbbr": "AR",
	 "name": "Cleveland County (AR)",
	 "stateId": "05"
  },
  "05027": {
	 "stateAbbr": "AR",
	 "name": "Columbia County (AR)",
	 "stateId": "05"
  },
  "01049": {
	 "stateAbbr": "AL",
	 "name": "DeKalb County (AL)",
	 "stateId": "01"
  },
  "05115": {
	 "stateAbbr": "AR",
	 "name": "Pope County (AR)",
	 "stateId": "05"
  },
  "05117": {
	 "stateAbbr": "AR",
	 "name": "Prairie County (AR)",
	 "stateId": "05"
  },
  "05111": {
	 "stateAbbr": "AR",
	 "name": "Poinsett County (AR)",
	 "stateId": "05"
  },
  "05113": {
	 "stateAbbr": "AR",
	 "name": "Polk County (AR)",
	 "stateId": "05"
  },
  "05119": {
	 "stateAbbr": "AR",
	 "name": "Pulaski County (AR)",
	 "stateId": "05"
  },
  "08079": {
	 "stateAbbr": "CO",
	 "name": "Mineral County (CO)",
	 "stateId": "08"
  },
  "08071": {
	 "stateAbbr": "CO",
	 "name": "Las Animas County (CO)",
	 "stateId": "08"
  },
  "08073": {
	 "stateAbbr": "CO",
	 "name": "Lincoln County (CO)",
	 "stateId": "08"
  },
  "08075": {
	 "stateAbbr": "CO",
	 "name": "Logan County (CO)",
	 "stateId": "08"
  },
  "08077": {
	 "stateAbbr": "CO",
	 "name": "Mesa County (CO)",
	 "stateId": "08"
  },
  "08097": {
	 "stateAbbr": "CO",
	 "name": "Pitkin County (CO)",
	 "stateId": "08"
  },
  "08095": {
	 "stateAbbr": "CO",
	 "name": "Phillips County (CO)",
	 "stateId": "08"
  },
  "08093": {
	 "stateAbbr": "CO",
	 "name": "Park County (CO)",
	 "stateId": "08"
  },
  "08091": {
	 "stateAbbr": "CO",
	 "name": "Ouray County (CO)",
	 "stateId": "08"
  },
  "08099": {
	 "stateAbbr": "CO",
	 "name": "Prowers County (CO)",
	 "stateId": "08"
  },
  "06011": {
	 "stateAbbr": "CA",
	 "name": "Colusa County (CA)",
	 "stateId": "06"
  },
  "06013": {
	 "stateAbbr": "CA",
	 "name": "Contra Costa County (CA)",
	 "stateId": "06"
  },
  "06015": {
	 "stateAbbr": "CA",
	 "name": "Del Norte County (CA)",
	 "stateId": "06"
  },
  "06017": {
	 "stateAbbr": "CA",
	 "name": "El Dorado County (CA)",
	 "stateId": "06"
  },
  "06019": {
	 "stateAbbr": "CA",
	 "name": "Fresno County (CA)",
	 "stateId": "06"
  },
  "02068": {
	 "stateAbbr": "AK",
	 "name": "Denali Borough (AK)",
	 "stateId": "02"
  },
  "02060": {
	 "stateAbbr": "AK",
	 "name": "Bristol Bay Borough (AK)",
	 "stateId": "02"
  },
  "06087": {
	 "stateAbbr": "CA",
	 "name": "Santa Cruz County (CA)",
	 "stateId": "06"
  },
  "06085": {
	 "stateAbbr": "CA",
	 "name": "Santa Clara County (CA)",
	 "stateId": "06"
  },
  "01077": {
	 "stateAbbr": "AL",
	 "name": "Lauderdale County (AL)",
	 "stateId": "01"
  },
  "01075": {
	 "stateAbbr": "AL",
	 "name": "Lamar County (AL)",
	 "stateId": "01"
  },
  "01071": {
	 "stateAbbr": "AL",
	 "name": "Jackson County (AL)",
	 "stateId": "01"
  },
  "02275": {
	 "stateAbbr": "AK",
	 "name": "Wrangell City and Borough (AK)",
	 "stateId": "02"
  },
  "01095": {
	 "stateAbbr": "AL",
	 "name": "Marshall County (AL)",
	 "stateId": "01"
  },
  "01097": {
	 "stateAbbr": "AL",
	 "name": "Mobile County (AL)",
	 "stateId": "01"
  },
  "01091": {
	 "stateAbbr": "AL",
	 "name": "Marengo County (AL)",
	 "stateId": "01"
  },
  "01093": {
	 "stateAbbr": "AL",
	 "name": "Marion County (AL)",
	 "stateId": "01"
  },
  "01099": {
	 "stateAbbr": "AL",
	 "name": "Monroe County (AL)",
	 "stateId": "01"
  },
  "06083": {
	 "stateAbbr": "CA",
	 "name": "Santa Barbara County (CA)",
	 "stateId": "06"
  },
  "06081": {
	 "stateAbbr": "CA",
	 "name": "San Mateo County (CA)",
	 "stateId": "06"
  },
  "02070": {
	 "stateAbbr": "AK",
	 "name": "Dillingham Census Area (AK)",
	 "stateId": "02"
  },
  "05099": {
	 "stateAbbr": "AR",
	 "name": "Nevada County (AR)",
	 "stateId": "05"
  },
  "02261": {
	 "stateAbbr": "AK",
	 "name": "Valdez-Cordova Census Area (AK)",
	 "stateId": "02"
  },
  "01069": {
	 "stateAbbr": "AL",
	 "name": "Houston County (AL)",
	 "stateId": "01"
  },
  "01061": {
	 "stateAbbr": "AL",
	 "name": "Geneva County (AL)",
	 "stateId": "01"
  },
  "01063": {
	 "stateAbbr": "AL",
	 "name": "Greene County (AL)",
	 "stateId": "01"
  },
  "01065": {
	 "stateAbbr": "AL",
	 "name": "Hale County (AL)",
	 "stateId": "01"
  },
  "01067": {
	 "stateAbbr": "AL",
	 "name": "Henry County (AL)",
	 "stateId": "01"
  },
  "01087": {
	 "stateAbbr": "AL",
	 "name": "Macon County (AL)",
	 "stateId": "01"
  },
  "01085": {
	 "stateAbbr": "AL",
	 "name": "Lowndes County (AL)",
	 "stateId": "01"
  },
  "01083": {
	 "stateAbbr": "AL",
	 "name": "Limestone County (AL)",
	 "stateId": "01"
  },
  "01081": {
	 "stateAbbr": "AL",
	 "name": "Lee County (AL)",
	 "stateId": "01"
  },
  "01089": {
	 "stateAbbr": "AL",
	 "name": "Madison County (AL)",
	 "stateId": "01"
  },
  "05149": {
	 "stateAbbr": "AR",
	 "name": "Yell County (AR)",
	 "stateId": "05"
  },
  "05147": {
	 "stateAbbr": "AR",
	 "name": "Woodruff County (AR)",
	 "stateId": "05"
  },
  "02020": {
	 "stateAbbr": "AK",
	 "name": "Anchorage Municipality (AK)",
	 "stateId": "02"
  },
  "01009": {
	 "stateAbbr": "AL",
	 "name": "Blount County (AL)",
	 "stateId": "01"
  },
  "02270": {
	 "stateAbbr": "AK",
	 "name": "Wade Hampton Census Area (AK)",
	 "stateId": "02"
  },
  "05091": {
	 "stateAbbr": "AR",
	 "name": "Miller County (AR)",
	 "stateId": "05"
  },
  "05095": {
	 "stateAbbr": "AR",
	 "name": "Monroe County (AR)",
	 "stateId": "05"
  },
  "05097": {
	 "stateAbbr": "AR",
	 "name": "Montgomery County (AR)",
	 "stateId": "05"
  },
  "05145": {
	 "stateAbbr": "AR",
	 "name": "White County (AR)",
	 "stateId": "05"
  },
  "05143": {
	 "stateAbbr": "AR",
	 "name": "Washington County (AR)",
	 "stateId": "05"
  },
  "05141": {
	 "stateAbbr": "AR",
	 "name": "Van Buren County (AR)",
	 "stateId": "05"
  },
  "05049": {
	 "stateAbbr": "AR",
	 "name": "Fulton County (AR)",
	 "stateId": "05"
  },
  "05047": {
	 "stateAbbr": "AR",
	 "name": "Franklin County (AR)",
	 "stateId": "05"
  },
  "02050": {
	 "stateAbbr": "AK",
	 "name": "Bethel Census Area (AK)",
	 "stateId": "02"
  },
  "02130": {
	 "stateAbbr": "AK",
	 "name": "Ketchikan Gateway Borough (AK)",
	 "stateId": "02"
  },
  "05089": {
	 "stateAbbr": "AR",
	 "name": "Marion County (AR)",
	 "stateId": "05"
  },
  "05083": {
	 "stateAbbr": "AR",
	 "name": "Logan County (AR)",
	 "stateId": "05"
  },
  "05081": {
	 "stateAbbr": "AR",
	 "name": "Little River County (AR)",
	 "stateId": "05"
  },
  "05087": {
	 "stateAbbr": "AR",
	 "name": "Madison County (AR)",
	 "stateId": "05"
  },
  "05085": {
	 "stateAbbr": "AR",
	 "name": "Lonoke County (AR)",
	 "stateId": "05"
  },
  "01079": {
	 "stateAbbr": "AL",
	 "name": "Lawrence County (AL)",
	 "stateId": "01"
  },
  "08125": {
	 "stateAbbr": "CO",
	 "name": "Yuma County (CO)",
	 "stateId": "08"
  },
  "08123": {
	 "stateAbbr": "CO",
	 "name": "Weld County (CO)",
	 "stateId": "08"
  },
  "08121": {
	 "stateAbbr": "CO",
	 "name": "Washington County (CO)",
	 "stateId": "08"
  },
  "02195": {
	 "stateAbbr": "AK",
	 "name": "Petersburg Census Area (AK)",
	 "stateId": "02"
  },
  "02198": {
	 "stateAbbr": "AK",
	 "name": "Prince of Wales-Hyder Census Area (AK)",
	 "stateId": "02"
  },
  "01043": {
	 "stateAbbr": "AL",
	 "name": "Cullman County (AL)",
	 "stateId": "01"
  },
  "08119": {
	 "stateAbbr": "CO",
	 "name": "Teller County (CO)",
	 "stateId": "08"
  },
  "08113": {
	 "stateAbbr": "CO",
	 "name": "San Miguel County (CO)",
	 "stateId": "08"
  },
  "08111": {
	 "stateAbbr": "CO",
	 "name": "San Juan County (CO)",
	 "stateId": "08"
  },
  "08117": {
	 "stateAbbr": "CO",
	 "name": "Summit County (CO)",
	 "stateId": "08"
  },
  "08115": {
	 "stateAbbr": "CO",
	 "name": "Sedgwick County (CO)",
	 "stateId": "08"
  },
  "09015": {
	 "stateAbbr": "CT",
	 "name": "Windham County (CT)",
	 "stateId": "09"
  },
  "09011": {
	 "stateAbbr": "CT",
	 "name": "New London County (CT)",
	 "stateId": "09"
  },
  "09013": {
	 "stateAbbr": "CT",
	 "name": "Tolland County (CT)",
	 "stateId": "09"
  },
  "02180": {
	 "stateAbbr": "AK",
	 "name": "Nome Census Area (AK)",
	 "stateId": "02"
  },
  "02185": {
	 "stateAbbr": "AK",
	 "name": "North Slope Borough (AK)",
	 "stateId": "02"
  },
  "02188": {
	 "stateAbbr": "AK",
	 "name": "Northwest Arctic Borough (AK)",
	 "stateId": "02"
  },
  "01073": {
	 "stateAbbr": "AL",
	 "name": "Jefferson County (AL)",
	 "stateId": "01"
  },
  "02220": {
	 "stateAbbr": "AK",
	 "name": "Sitka City and Borough (AK)",
	 "stateId": "02"
  },
  "01041": {
	 "stateAbbr": "AL",
	 "name": "Crenshaw County (AL)",
	 "stateId": "01"
  },
  "01047": {
	 "stateAbbr": "AL",
	 "name": "Dallas County (AL)",
	 "stateId": "01"
  },
  "04009": {
	 "stateAbbr": "AZ",
	 "name": "Graham County (AZ)",
	 "stateId": "04"
  },
  "04001": {
	 "stateAbbr": "AZ",
	 "name": "Apache County (AZ)",
	 "stateId": "04"
  },
  "04003": {
	 "stateAbbr": "AZ",
	 "name": "Cochise County (AZ)",
	 "stateId": "04"
  },
  "04005": {
	 "stateAbbr": "AZ",
	 "name": "Coconino County (AZ)",
	 "stateId": "04"
  },
  "04007": {
	 "stateAbbr": "AZ",
	 "name": "Gila County (AZ)",
	 "stateId": "04"
  },
  "08105": {
	 "stateAbbr": "CO",
	 "name": "Rio Grande County (CO)",
	 "stateId": "08"
  },
  "08107": {
	 "stateAbbr": "CO",
	 "name": "Routt County (CO)",
	 "stateId": "08"
  },
  "08101": {
	 "stateAbbr": "CO",
	 "name": "Pueblo County (CO)",
	 "stateId": "08"
  },
  "08103": {
	 "stateAbbr": "CO",
	 "name": "Rio Blanco County (CO)",
	 "stateId": "08"
  },
  "08109": {
	 "stateAbbr": "CO",
	 "name": "Saguache County (CO)",
	 "stateId": "08"
  },
  "02150": {
	 "stateAbbr": "AK",
	 "name": "Kodiak Island Borough (AK)",
	 "stateId": "02"
  },
  "02230": {
	 "stateAbbr": "AK",
	 "name": "Skagway Municipality (AK)",
	 "stateId": "02"
  },
  "05059": {
	 "stateAbbr": "AR",
	 "name": "Hot Spring County (AR)",
	 "stateId": "05"
  },
  "05055": {
	 "stateAbbr": "AR",
	 "name": "Greene County (AR)",
	 "stateId": "05"
  },
  "05057": {
	 "stateAbbr": "AR",
	 "name": "Hempstead County (AR)",
	 "stateId": "05"
  },
  "05051": {
	 "stateAbbr": "AR",
	 "name": "Garland County (AR)",
	 "stateId": "05"
  },
  "05053": {
	 "stateAbbr": "AR",
	 "name": "Grant County (AR)",
	 "stateId": "05"
  },
  "08009": {
	 "stateAbbr": "CO",
	 "name": "Baca County (CO)",
	 "stateId": "08"
  },
  "08005": {
	 "stateAbbr": "CO",
	 "name": "Arapahoe County (CO)",
	 "stateId": "08"
  },
  "08007": {
	 "stateAbbr": "CO",
	 "name": "Archuleta County (CO)",
	 "stateId": "08"
  },
  "08001": {
	 "stateAbbr": "CO",
	 "name": "Adams County (CO)",
	 "stateId": "08"
  },
  "08003": {
	 "stateAbbr": "CO",
	 "name": "Alamosa County (CO)",
	 "stateId": "08"
  },
  "04019": {
	 "stateAbbr": "AZ",
	 "name": "Pima County (AZ)",
	 "stateId": "04"
  },
  "04012": {
	 "stateAbbr": "AZ",
	 "name": "La Paz County (AZ)",
	 "stateId": "04"
  },
  "04013": {
	 "stateAbbr": "AZ",
	 "name": "Maricopa County (AZ)",
	 "stateId": "04"
  },
  "04011": {
	 "stateAbbr": "AZ",
	 "name": "Greenlee County (AZ)",
	 "stateId": "04"
  },
  "04017": {
	 "stateAbbr": "AZ",
	 "name": "Navajo County (AZ)",
	 "stateId": "04"
  },
  "04015": {
	 "stateAbbr": "AZ",
	 "name": "Mohave County (AZ)",
	 "stateId": "04"
  },
  "02090": {
	 "stateAbbr": "AK",
	 "name": "Fairbanks North Star Borough (AK)",
	 "stateId": "02"
  },
  "06089": {
	 "stateAbbr": "CA",
	 "name": "Shasta County (CA)",
	 "stateId": "06"
  },
  "05129": {
	 "stateAbbr": "AR",
	 "name": "Searcy County (AR)",
	 "stateId": "05"
  },
  "05123": {
	 "stateAbbr": "AR",
	 "name": "St. Francis County (AR)",
	 "stateId": "05"
  },
  "06065": {
	 "stateAbbr": "CA",
	 "name": "Riverside County (CA)",
	 "stateId": "06"
  },
  "06067": {
	 "stateAbbr": "CA",
	 "name": "Sacramento County (CA)",
	 "stateId": "06"
  },
  "06061": {
	 "stateAbbr": "CA",
	 "name": "Placer County (CA)",
	 "stateId": "06"
  },
  "06063": {
	 "stateAbbr": "CA",
	 "name": "Plumas County (CA)",
	 "stateId": "06"
  },
  "06069": {
	 "stateAbbr": "CA",
	 "name": "San Benito County (CA)",
	 "stateId": "06"
  },
  "05045": {
	 "stateAbbr": "AR",
	 "name": "Faulkner County (AR)",
	 "stateId": "05"
  },
  "05043": {
	 "stateAbbr": "AR",
	 "name": "Drew County (AR)",
	 "stateId": "05"
  },
  "05041": {
	 "stateAbbr": "AR",
	 "name": "Desha County (AR)",
	 "stateId": "05"
  },
  "04027": {
	 "stateAbbr": "AZ",
	 "name": "Yuma County (AZ)",
	 "stateId": "04"
  },
  "04025": {
	 "stateAbbr": "AZ",
	 "name": "Yavapai County (AZ)",
	 "stateId": "04"
  },
  "04023": {
	 "stateAbbr": "AZ",
	 "name": "Santa Cruz County (AZ)",
	 "stateId": "04"
  },
  "04021": {
	 "stateAbbr": "AZ",
	 "name": "Pinal County (AZ)",
	 "stateId": "04"
  },
  "08019": {
	 "stateAbbr": "CO",
	 "name": "Clear Creek County (CO)",
	 "stateId": "08"
  },
  "08017": {
	 "stateAbbr": "CO",
	 "name": "Cheyenne County (CO)",
	 "stateId": "08"
  },
  "08014": {
	 "stateAbbr": "CO",
	 "name": "Broomfield County (CO)",
	 "stateId": "08"
  },
  "08015": {
	 "stateAbbr": "CO",
	 "name": "Chaffee County (CO)",
	 "stateId": "08"
  },
  "08013": {
	 "stateAbbr": "CO",
	 "name": "Boulder County (CO)",
	 "stateId": "08"
  },
  "08011": {
	 "stateAbbr": "CO",
	 "name": "Bent County (CO)",
	 "stateId": "08"
  },
  "06099": {
	 "stateAbbr": "CA",
	 "name": "Stanislaus County (CA)",
	 "stateId": "06"
  },
  "06091": {
	 "stateAbbr": "CA",
	 "name": "Sierra County (CA)",
	 "stateId": "06"
  },
  "06093": {
	 "stateAbbr": "CA",
	 "name": "Siskiyou County (CA)",
	 "stateId": "06"
  },
  "06095": {
	 "stateAbbr": "CA",
	 "name": "Solano County (CA)",
	 "stateId": "06"
  },
  "06097": {
	 "stateAbbr": "CA",
	 "name": "Sonoma County (CA)",
	 "stateId": "06"
  },
  "02170": {
	 "stateAbbr": "AK",
	 "name": "Matanuska-Susitna Borough (AK)",
	 "stateId": "02"
  },
  "06077": {
	 "stateAbbr": "CA",
	 "name": "San Joaquin County (CA)",
	 "stateId": "06"
  },
  "06075": {
	 "stateAbbr": "CA",
	 "name": "San Francisco County (CA)",
	 "stateId": "06"
  },
  "06073": {
	 "stateAbbr": "CA",
	 "name": "San Diego County (CA)",
	 "stateId": "06"
  },
  "06071": {
	 "stateAbbr": "CA",
	 "name": "San Bernardino County (CA)",
	 "stateId": "06"
  },
  "06079": {
	 "stateAbbr": "CA",
	 "name": "San Luis Obispo County (CA)",
	 "stateId": "06"
  },
  "05079": {
	 "stateAbbr": "AR",
	 "name": "Lincoln County (AR)",
	 "stateId": "05"
  },
  "05073": {
	 "stateAbbr": "AR",
	 "name": "Lafayette County (AR)",
	 "stateId": "05"
  },
  "05071": {
	 "stateAbbr": "AR",
	 "name": "Johnson County (AR)",
	 "stateId": "05"
  },
  "05077": {
	 "stateAbbr": "AR",
	 "name": "Lee County (AR)",
	 "stateId": "05"
  },
  "05075": {
	 "stateAbbr": "AR",
	 "name": "Lawrence County (AR)",
	 "stateId": "05"
  },
  "01019": {
	 "stateAbbr": "AL",
	 "name": "Cherokee County (AL)",
	 "stateId": "01"
  },
  "01015": {
	 "stateAbbr": "AL",
	 "name": "Calhoun County (AL)",
	 "stateId": "01"
  },
  "01017": {
	 "stateAbbr": "AL",
	 "name": "Chambers County (AL)",
	 "stateId": "01"
  },
  "01011": {
	 "stateAbbr": "AL",
	 "name": "Bullock County (AL)",
	 "stateId": "01"
  },
  "01013": {
	 "stateAbbr": "AL",
	 "name": "Butler County (AL)",
	 "stateId": "01"
  },
  "09007": {
	 "stateAbbr": "CT",
	 "name": "Middlesex County (CT)",
	 "stateId": "09"
  },
  "08029": {
	 "stateAbbr": "CO",
	 "name": "Delta County (CO)",
	 "stateId": "08"
  },
  "09005": {
	 "stateAbbr": "CT",
	 "name": "Litchfield County (CT)",
	 "stateId": "09"
  },
  "09003": {
	 "stateAbbr": "CT",
	 "name": "Hartford County (CT)",
	 "stateId": "09"
  },
  "09001": {
	 "stateAbbr": "CT",
	 "name": "Fairfield County (CT)",
	 "stateId": "09"
  },
  "08023": {
	 "stateAbbr": "CO",
	 "name": "Costilla County (CO)",
	 "stateId": "08"
  },
  "08021": {
	 "stateAbbr": "CO",
	 "name": "Conejos County (CO)",
	 "stateId": "08"
  },
  "08027": {
	 "stateAbbr": "CO",
	 "name": "Custer County (CO)",
	 "stateId": "08"
  },
  "08025": {
	 "stateAbbr": "CO",
	 "name": "Crowley County (CO)",
	 "stateId": "08"
  },
  "09009": {
	 "stateAbbr": "CT",
	 "name": "New Haven County (CT)",
	 "stateId": "09"
  },
  "01121": {
	 "stateAbbr": "AL",
	 "name": "Talladega County (AL)",
	 "stateId": "01"
  },
  "01123": {
	 "stateAbbr": "AL",
	 "name": "Tallapoosa County (AL)",
	 "stateId": "01"
  },
  "01125": {
	 "stateAbbr": "AL",
	 "name": "Tuscaloosa County (AL)",
	 "stateId": "01"
  },
  "01127": {
	 "stateAbbr": "AL",
	 "name": "Walker County (AL)",
	 "stateId": "01"
  },
  "02164": {
	 "stateAbbr": "AK",
	 "name": "Lake and Peninsula Borough (AK)",
	 "stateId": "02"
  },
  "06043": {
	 "stateAbbr": "CA",
	 "name": "Mariposa County (CA)",
	 "stateId": "06"
  },
  "06041": {
	 "stateAbbr": "CA",
	 "name": "Marin County (CA)",
	 "stateId": "06"
  },
  "06047": {
	 "stateAbbr": "CA",
	 "name": "Merced County (CA)",
	 "stateId": "06"
  },
  "06045": {
	 "stateAbbr": "CA",
	 "name": "Mendocino County (CA)",
	 "stateId": "06"
  },
  "06049": {
	 "stateAbbr": "CA",
	 "name": "Modoc County (CA)",
	 "stateId": "06"
  },
  "05065": {
	 "stateAbbr": "AR",
	 "name": "Izard County (AR)",
	 "stateId": "05"
  },
  "05067": {
	 "stateAbbr": "AR",
	 "name": "Jackson County (AR)",
	 "stateId": "05"
  },
  "05061": {
	 "stateAbbr": "AR",
	 "name": "Howard County (AR)",
	 "stateId": "05"
  },
  "05063": {
	 "stateAbbr": "AR",
	 "name": "Independence County (AR)",
	 "stateId": "05"
  },
  "02282": {
	 "stateAbbr": "AK",
	 "name": "Yakutat City and Borough (AK)",
	 "stateId": "02"
  },
  "05069": {
	 "stateAbbr": "AR",
	 "name": "Jefferson County (AR)",
	 "stateId": "05"
  },
  "01007": {
	 "stateAbbr": "AL",
	 "name": "Bibb County (AL)",
	 "stateId": "01"
  },
  "01005": {
	 "stateAbbr": "AL",
	 "name": "Barbour County (AL)",
	 "stateId": "01"
  },
  "01003": {
	 "stateAbbr": "AL",
	 "name": "Baldwin County (AL)",
	 "stateId": "01"
  },
  "01001": {
	 "stateAbbr": "AL",
	 "name": "Autauga County (AL)",
	 "stateId": "01"
  },
  "01133": {
	 "stateAbbr": "AL",
	 "name": "Winston County (AL)",
	 "stateId": "01"
  },
  "01131": {
	 "stateAbbr": "AL",
	 "name": "Wilcox County (AL)",
	 "stateId": "01"
  },
  "08035": {
	 "stateAbbr": "CO",
	 "name": "Douglas County (CO)",
	 "stateId": "08"
  },
  "08037": {
	 "stateAbbr": "CO",
	 "name": "Eagle County (CO)",
	 "stateId": "08"
  },
  "08031": {
	 "stateAbbr": "CO",
	 "name": "Denver County (CO)",
	 "stateId": "08"
  },
  "08033": {
	 "stateAbbr": "CO",
	 "name": "Dolores County (CO)",
	 "stateId": "08"
  },
  "08039": {
	 "stateAbbr": "CO",
	 "name": "Elbert County (CO)",
	 "stateId": "08"
  },
  "02110": {
	 "stateAbbr": "AK",
	 "name": "Juneau City and Borough (AK)",
	 "stateId": "02"
  },
  "06059": {
	 "stateAbbr": "CA",
	 "name": "Orange County (CA)",
	 "stateId": "06"
  },
  "06055": {
	 "stateAbbr": "CA",
	 "name": "Napa County (CA)",
	 "stateId": "06"
  },
  "06057": {
	 "stateAbbr": "CA",
	 "name": "Nevada County (CA)",
	 "stateId": "06"
  },
  "06051": {
	 "stateAbbr": "CA",
	 "name": "Mono County (CA)",
	 "stateId": "06"
  },
  "06053": {
	 "stateAbbr": "CA",
	 "name": "Monterey County (CA)",
	 "stateId": "06"
  },
  "05125": {
	 "stateAbbr": "AR",
	 "name": "Saline County (AR)",
	 "stateId": "05"
  },
  "05127": {
	 "stateAbbr": "AR",
	 "name": "Scott County (AR)",
	 "stateId": "05"
  },
  "05121": {
	 "stateAbbr": "AR",
	 "name": "Randolph County (AR)",
	 "stateId": "05"
  },
  "05011": {
	 "stateAbbr": "AR",
	 "name": "Bradley County (AR)",
	 "stateId": "05"
  },
  "05013": {
	 "stateAbbr": "AR",
	 "name": "Calhoun County (AR)",
	 "stateId": "05"
  },
  "05015": {
	 "stateAbbr": "AR",
	 "name": "Carroll County (AR)",
	 "stateId": "05"
  },
  "05017": {
	 "stateAbbr": "AR",
	 "name": "Chicot County (AR)",
	 "stateId": "05"
  },
  "05019": {
	 "stateAbbr": "AR",
	 "name": "Clark County (AR)",
	 "stateId": "05"
  },
  "02290": {
	 "stateAbbr": "AK",
	 "name": "Yukon-Koyukuk Census Area (AK)",
	 "stateId": "02"
  },
  "01039": {
	 "stateAbbr": "AL",
	 "name": "Covington County (AL)",
	 "stateId": "01"
  },
  "01033": {
	 "stateAbbr": "AL",
	 "name": "Colbert County (AL)",
	 "stateId": "01"
  },
  "01031": {
	 "stateAbbr": "AL",
	 "name": "Coffee County (AL)",
	 "stateId": "01"
  },
  "01037": {
	 "stateAbbr": "AL",
	 "name": "Coosa County (AL)",
	 "stateId": "01"
  },
  "01035": {
	 "stateAbbr": "AL",
	 "name": "Conecuh County (AL)",
	 "stateId": "01"
  },
  "01107": {
	 "stateAbbr": "AL",
	 "name": "Pickens County (AL)",
	 "stateId": "01"
  },
  "01105": {
	 "stateAbbr": "AL",
	 "name": "Perry County (AL)",
	 "stateId": "01"
  },
  "01103": {
	 "stateAbbr": "AL",
	 "name": "Morgan County (AL)",
	 "stateId": "01"
  },
  "01101": {
	 "stateAbbr": "AL",
	 "name": "Montgomery County (AL)",
	 "stateId": "01"
  },
  "01109": {
	 "stateAbbr": "AL",
	 "name": "Pike County (AL)",
	 "stateId": "01"
  },
  "08041": {
	 "stateAbbr": "CO",
	 "name": "El Paso County (CO)",
	 "stateId": "08"
  },
  "08043": {
	 "stateAbbr": "CO",
	 "name": "Fremont County (CO)",
	 "stateId": "08"
  },
  "08045": {
	 "stateAbbr": "CO",
	 "name": "Garfield County (CO)",
	 "stateId": "08"
  },
  "08047": {
	 "stateAbbr": "CO",
	 "name": "Gilpin County (CO)",
	 "stateId": "08"
  },
  "08049": {
	 "stateAbbr": "CO",
	 "name": "Grand County (CO)",
	 "stateId": "08"
  }
}

export { stateFIPs, allFIPs }