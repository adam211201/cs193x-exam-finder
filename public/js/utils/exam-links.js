import { v4 as uuidv4 } from "uuid";

/* Helper function that generates links to the associated exams based on passed in data. */
const createLinks = ({ subjects, years, languages, levels, certificates }) => {
  const links = [];

  for (const subject in subjects) {
    const subjectValue = subjects[subject];

    for (const year of years) {
      for (const language in languages) {
        const languageValue = languages[language];

        for (const level in levels) {
          const levelValue = levels[level];
          
          for (const certificate in certificates) {
            const certificateValue = certificates[certificate];

            links.push({
              id: uuidv4(),
              language,
              certificate,
              level,
              subject,
              year,
              papers: {
                exam: `https://www.examinations.ie/archive/exampapers/${year}/${certificateValue}${subjectValue}${levelValue}P000${languageValue}.pdf`,
                markingScheme: `https://www.examinations.ie/archive/markingschemes/${year}/${certificateValue}${subjectValue}${levelValue}P000${languageValue}.pdf`
              }
            });
          }
        }
      }
    }
  }

  return links;
}

/* This is sample data to fill in to the createLinks function. */

// const linksInfo = {
//   subjects: {
//     // "latin": "032"
//     // "economics": "034"
//     // "physics": "021"
//   },
//   years: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
//   languages: {
//     "eng": "EV",
//     "gae": "IV"
//   },
//   levels: {
//     "hl": "AL",
//     "ol": "GL"
//   },
//   certificates: {
//     "lc": "LC"    
//   }
// };
// console.log(JSON.stringify(createLinks(linksInfo)));

export default createLinks;