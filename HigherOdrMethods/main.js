//array 1
const companies = [
  {
    name: "Company One",
    category: "Finance",
    start: 1989,
    end: 2004
  },
  {
    name: "Company Two",
    category: "Retail",
    start: 1992,
    end: 2008
  },
  {
    name: "Company Three",
    category: "Auto",
    start: 1999,
    end: 2007
  },
  {
    name: "Company Four",
    category: "Retail",
    start: 1989,
    end: 2010
  },
  {
    name: "Company Five",
    category: "Technology",
    start: 2009,
    end: 2014
  },
  {
    name: "Company Six",
    category: "Finance",
    start: 1987,
    end: 2010
  },
  {
    name: "Company Seven",
    category: "Auto",
    start: 1986,
    end: 1996
  },
  {
    name: "Company Eight",
    category: "Technology",
    start: 2011,
    end: 2016
  },
  {
    name: "Company Nine",
    category: "Retail",
    start: 1981,
    end: 1989
  }
];

//array 2
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//forloop

for (let i = 0; i < companies.length; i++) {
  //console.log(companies[i]);
}

//forEach loop
//takes a call back function
companies.forEach(function(company, index, companies) {
  //console.log(company);
  //console.log(company.name)
});

//filter
//allows us to filter from an array

let canDrive = [];

for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    canDrive.push(ages[i]);
  }
}

//console.log(canDrive);
const canTravel = ages.filter(function(age) {
  if (age >= 21) {
    return true;
  }
});

//filter(arrow function)
const canTravelArrowFunc = ages.filter(age => age >= 21);
//ES6 ARROW FUNCTIONS

//console.log(canTravel)
//console.log(canTravelArrowFunc);

//filter retail companies

const retailCompanies = companies.filter(function(company) {
  if (company.category === "Retail") {
    return true;
  }
});

const retailCompaniesArrowFunc = companies.filter(
  company => company.category === "Retail"
);
//console.log(retailCompanies);
//console.log(retailCompaniesArrowFunc);

//Get 80s companies
//by caleb
const companyEightes = companies.filter(company => company.start < "1990");

//console.log(companyEightes);

//BY Brad

const eightiesCompanies = companies.filter(
  company => company.start >= 1980 && company.start < 1990
);

//console.log(eightiesCompanies);

//companies that lasted ten years

const lastedTenYears = companies.filter(
  company => company.end - company.start >= 10
);

//console.log(lastedTenYears);

//map

//helps you create a new array from a current array

//Create array of company names

/*
const companyNames = companies.map(function(company) {
  return company.name;
});

console.log(companyNames);


*/

//remeber that all this is a way of looping through
const testMap = companies.map(function(company) {
  return `${company.name}[${company.start}-${company.end}]`;
});

const testCompanyArrowfunc = companies.map(
  company => `${company.name}[${company.start}-${company.end}]`
);

//console.log(testMap);
//console.log(testCompanyArrowfunc);

const agesSquare = ages.map(age => Math.sqrt(age));
const ageTimesTwo = ages.map(age => age * 2);

const ageMap = ages.map(age => Math.sqrt(age)).map(age => age * 2);

//console.log(ageMap);
//console.log(agesSquare);
//console.log(ageTimesTwo);

//sort

const sortedCompanies = companies.sort(function(c1, c2) {
  if (c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});

const sortedCompaniesArrowFunc = companies.sort((a, b) =>
  a.start > b.start ? 1 : -1
);

//console.log(sortedCompanies);
//console.log(sortedCompaniesArrowFunc);

//sort ages

//const sortAges = ages.sort((a, b) => a - b);

//const sortAgesDescending = ages.sort((a, b) => b - a);

//console.log(sortAges);
//console.log(sortAgesDescending);

//reduce

//adding all the ages together

let ageSum = 0;

for (let i = 0; i < ages.length; i++) {
  //console.log(ages[i]);
  ageSum += ages[i];
  //console.log(ageSum);
}

//console.log(ageSum);

//using reduce to calculate ages sum
//Higher order array methods employ
//synchromous callbacks and not asynchronous callbacks

const ageSumReduce = ages.reduce(function(total, age) {
  return total + age;
}, 0);

const ageSumReduceArrowfunc = ages.reduce((total, age) => total + age, 0);

//total must be initialised to zero as in the above example
//console.log(ageSumReduce);
//console.log(ageSumReduceArrowfunc);

//Get total years for all companies

const totalYears = companies.reduce(function(total, company) {
  return total + (company.end - company.start);
}, 0);

//arrowfunction

const totalYearsArrowFunc = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);
//console.log(totalYears);
//console.log(totalYearsArrowFunc);

//Combined Methods

const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);
