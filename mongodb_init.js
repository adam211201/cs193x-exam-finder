db = new Mongo().getDB("examfinder");
db.dropDatabase();

/* Username: admin
 * Password: ilovedogs
 */
db.users.insertOne({
  _id: ObjectId("6229955fd7673c03b21e1963"),
  id: '85be5c3e-8bd6-49b4-bfc1-9db114644ae2',
  username: 'admin',
  password: '0xWzw20lWQcI9pO21Zyrr3eVCiS+jjiu8tVI/asEP8g=',
  salt: 'sRO/B09Wfso=',
  favourites: [
    'a1eefc1d-ae2b-4a15-83a4-fe9b5c8ea517',
    '4707f6e8-e471-459d-88bf-e1029645ca61'
  ]
});

/* Insert two example errors. */
db.errors.insertMany([
  {
    _id: ObjectId("622f058c8afc0c85456d7af6"),
    id: '26c63dcd-97ca-4ce2-8d17-ba56396f8b86',
    subject: 'Example #1',
    description: 'Link is wrong.'
  },
  {
    _id: ObjectId("622f05918afc0c85456d7af7"),
    id: 'a2c432c1-14d1-445e-8b37-bea463d3030e',
    subject: 'Example #2',
    description: 'Link is wrong.'
  }
]);

/* Insert all the exam records. */
db.exams.insertMany([
  {
    _id: ObjectId("622ef38343b63ff57cf0f4b6"),
    id: '98f5b3bb-5fa6-42fa-b8c0-46477fc24ab4',
    language: 'eng',
    certificate: 'lc',
    level: 'hl',
    subject: 'latin',
    year: 2012,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2012/LC032ALP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2012/LC032ALP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef38343b63ff57cf0f4b7"),
    id: 'ac8ce91e-8c46-4d7c-bab6-2c26215705de',
    language: 'eng',
    certificate: 'lc',
    level: 'ol',
    subject: 'latin',
    year: 2012,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2012/LC032GLP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2012/LC032GLP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef38343b63ff57cf0f4b8"),
    id: '2072ae42-7631-43da-9458-99c9e076eddd',
    language: 'gae',
    certificate: 'lc',
    level: 'hl',
    subject: 'latin',
    year: 2012,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2012/LC032ALP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2012/LC032ALP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef38343b63ff57cf0f4b9"),
    id: 'cf0b57fc-60c3-4583-af9c-e1190a53d76d',
    language: 'gae',
    certificate: 'lc',
    level: 'ol',
    subject: 'latin',
    year: 2012,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2012/LC032GLP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2012/LC032GLP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef38343b63ff57cf0f4ba"),
    id: 'b2d3b725-0668-4688-8474-d638539869b7',
    language: 'eng',
    certificate: 'lc',
    level: 'hl',
    subject: 'latin',
    year: 2013,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2013/LC032ALP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2013/LC032ALP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef38343b63ff57cf0f4bb"),
    id: 'ecbaf12e-2ca0-4842-b444-0af76cde9828',
    language: 'eng',
    certificate: 'lc',
    level: 'ol',
    subject: 'latin',
    year: 2013,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2013/LC032GLP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2013/LC032GLP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef38343b63ff57cf0f4bc"),
    id: 'a58a0c79-a242-4b60-9652-613339f39251',
    language: 'gae',
    certificate: 'lc',
    level: 'hl',
    subject: 'latin',
    year: 2013,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2013/LC032ALP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2013/LC032ALP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef38343b63ff57cf0f4bd"),
    id: '740d12da-9ef7-4504-a66f-49c2dad3fe20',
    language: 'gae',
    certificate: 'lc',
    level: 'ol',
    subject: 'latin',
    year: 2013,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2013/LC032GLP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2013/LC032GLP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef38343b63ff57cf0f4be"),
    id: '905b102f-b3c5-40c3-af7b-8c3619c172df',
    language: 'eng',
    certificate: 'lc',
    level: 'hl',
    subject: 'latin',
    year: 2014,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2014/LC032ALP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2014/LC032ALP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef38343b63ff57cf0f4bf"),
    id: '8628ed59-0cb1-45b6-aef8-c3a2501a0ddc',
    language: 'eng',
    certificate: 'lc',
    level: 'ol',
    subject: 'latin',
    year: 2014,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2014/LC032GLP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2014/LC032GLP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef38343b63ff57cf0f4c0"),
    id: 'ee99c33c-4235-4b2d-a367-806b4e75c69b',
    language: 'gae',
    certificate: 'lc',
    level: 'hl',
    subject: 'latin',
    year: 2014,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2014/LC032ALP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2014/LC032ALP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef38343b63ff57cf0f4c1"),
    id: '72cbb7d7-f9e5-401a-a2b1-d55d177b724c',
    language: 'gae',
    certificate: 'lc',
    level: 'ol',
    subject: 'latin',
    year: 2014,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2014/LC032GLP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2014/LC032GLP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef38343b63ff57cf0f4c2"),
    id: '97cd984f-315b-445c-b8e8-9629ea537705',
    language: 'eng',
    certificate: 'lc',
    level: 'hl',
    subject: 'latin',
    year: 2015,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2015/LC032ALP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2015/LC032ALP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef38343b63ff57cf0f4c3"),
    id: '97e0be9a-9827-415f-a6f8-adcf2ad9479f',
    language: 'eng',
    certificate: 'lc',
    level: 'ol',
    subject: 'latin',
    year: 2015,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2015/LC032GLP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2015/LC032GLP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef38343b63ff57cf0f4c4"),
    id: '9c1ad9ae-98d3-41b7-9b54-d6b7c80f0af8',
    language: 'gae',
    certificate: 'lc',
    level: 'hl',
    subject: 'latin',
    year: 2015,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2015/LC032ALP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2015/LC032ALP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef38343b63ff57cf0f4c5"),
    id: '0c843dea-44b0-4273-b58e-7f63a733211f',
    language: 'gae',
    certificate: 'lc',
    level: 'ol',
    subject: 'latin',
    year: 2015,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2015/LC032GLP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2015/LC032GLP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef38343b63ff57cf0f4c6"),
    id: 'a421d8dc-62a6-4712-960b-176037a6f4b4',
    language: 'eng',
    certificate: 'lc',
    level: 'hl',
    subject: 'latin',
    year: 2016,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2016/LC032ALP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2016/LC032ALP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef38343b63ff57cf0f4c7"),
    id: '638ae76b-167d-4253-94bd-f31d9cc415d4',
    language: 'eng',
    certificate: 'lc',
    level: 'ol',
    subject: 'latin',
    year: 2016,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2016/LC032GLP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2016/LC032GLP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef38343b63ff57cf0f4c8"),
    id: '36f5fc21-399e-482d-b0e0-96fbe377cad6',
    language: 'gae',
    certificate: 'lc',
    level: 'hl',
    subject: 'latin',
    year: 2016,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2016/LC032ALP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2016/LC032ALP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef38343b63ff57cf0f4c9"),
    id: 'a3126807-b9bb-4f18-962e-a9f645cc991e',
    language: 'gae',
    certificate: 'lc',
    level: 'ol',
    subject: 'latin',
    year: 2016,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2016/LC032GLP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2016/LC032GLP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef38343b63ff57cf0f4ca"),
    id: 'df3c8c6a-704d-4e6e-b270-3f6114a2bb2e',
    language: 'eng',
    certificate: 'lc',
    level: 'hl',
    subject: 'latin',
    year: 2017,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2017/LC032ALP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2017/LC032ALP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef38343b63ff57cf0f4cb"),
    id: '28e9637d-ba97-4643-a4f2-540f27d3f9e1',
    language: 'eng',
    certificate: 'lc',
    level: 'ol',
    subject: 'latin',
    year: 2017,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2017/LC032GLP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2017/LC032GLP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef38343b63ff57cf0f4cc"),
    id: '13c7aa18-c60e-45a6-b188-4a67e8ded73f',
    language: 'gae',
    certificate: 'lc',
    level: 'hl',
    subject: 'latin',
    year: 2017,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2017/LC032ALP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2017/LC032ALP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef38343b63ff57cf0f4cd"),
    id: '3d69189f-503e-40c6-b08c-b7cfe4e2e88e',
    language: 'gae',
    certificate: 'lc',
    level: 'ol',
    subject: 'latin',
    year: 2017,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2017/LC032GLP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2017/LC032GLP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef38343b63ff57cf0f4ce"),
    id: '4d2ce08d-8a3d-457c-a719-cacd035adde2',
    language: 'eng',
    certificate: 'lc',
    level: 'hl',
    subject: 'latin',
    year: 2018,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2018/LC032ALP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2018/LC032ALP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef38343b63ff57cf0f4cf"),
    id: 'f6f71765-5315-424b-a3ba-ad474f49f0d9',
    language: 'eng',
    certificate: 'lc',
    level: 'ol',
    subject: 'latin',
    year: 2018,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2018/LC032GLP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2018/LC032GLP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef38343b63ff57cf0f4d0"),
    id: 'c8875525-8b71-45b9-bb2f-27747dc24fbf',
    language: 'gae',
    certificate: 'lc',
    level: 'hl',
    subject: 'latin',
    year: 2018,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2018/LC032ALP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2018/LC032ALP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef38343b63ff57cf0f4d1"),
    id: '4e9103e4-76ef-46df-9968-bbf6dfd64478',
    language: 'gae',
    certificate: 'lc',
    level: 'ol',
    subject: 'latin',
    year: 2018,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2018/LC032GLP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2018/LC032GLP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef38343b63ff57cf0f4d2"),
    id: 'baa04e1f-5eae-4668-8825-11a40f07be37',
    language: 'eng',
    certificate: 'lc',
    level: 'hl',
    subject: 'latin',
    year: 2019,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2019/LC032ALP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2019/LC032ALP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef38343b63ff57cf0f4d3"),
    id: '6dd826d4-5feb-4e8d-84a3-b1387e8597d4',
    language: 'eng',
    certificate: 'lc',
    level: 'ol',
    subject: 'latin',
    year: 2019,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2019/LC032GLP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2019/LC032GLP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef38343b63ff57cf0f4d4"),
    id: 'c5f6e9bf-667a-40bb-a288-dcb18bb98cc7',
    language: 'gae',
    certificate: 'lc',
    level: 'hl',
    subject: 'latin',
    year: 2019,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2019/LC032ALP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2019/LC032ALP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef38343b63ff57cf0f4d5"),
    id: 'c8968efd-77f2-4cf4-b7b9-2d651cb1fa4e',
    language: 'gae',
    certificate: 'lc',
    level: 'ol',
    subject: 'latin',
    year: 2019,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2019/LC032GLP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2019/LC032GLP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef3db43b63ff57cf0f4d6"),
    id: 'd0872f72-e3f9-40a7-a181-f992b1adc236',
    language: 'eng',
    certificate: 'lc',
    level: 'hl',
    subject: 'economics',
    year: 2012,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2012/LC034ALP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2012/LC034ALP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef3db43b63ff57cf0f4d7"),
    id: '40d6a925-ea05-4759-9477-b6fd4f1ff7e5',
    language: 'eng',
    certificate: 'lc',
    level: 'ol',
    subject: 'economics',
    year: 2012,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2012/LC034GLP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2012/LC034GLP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef3db43b63ff57cf0f4d8"),
    id: '07ca0730-e4b9-4649-a66a-1568a6d765ff',
    language: 'gae',
    certificate: 'lc',
    level: 'hl',
    subject: 'economics',
    year: 2012,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2012/LC034ALP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2012/LC034ALP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef3db43b63ff57cf0f4d9"),
    id: 'a726500e-31fc-4806-83ce-d371e9dbd287',
    language: 'gae',
    certificate: 'lc',
    level: 'ol',
    subject: 'economics',
    year: 2012,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2012/LC034GLP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2012/LC034GLP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef3db43b63ff57cf0f4da"),
    id: 'b81c599b-6552-4ee7-ae58-11bf97bec6ba',
    language: 'eng',
    certificate: 'lc',
    level: 'hl',
    subject: 'economics',
    year: 2013,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2013/LC034ALP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2013/LC034ALP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef3db43b63ff57cf0f4db"),
    id: '6dc17fe1-b8b7-4940-9852-e1fcc3f5447e',
    language: 'eng',
    certificate: 'lc',
    level: 'ol',
    subject: 'economics',
    year: 2013,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2013/LC034GLP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2013/LC034GLP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef3db43b63ff57cf0f4dc"),
    id: '0fb11a4a-cc63-4c53-9eb1-fe8e8ff4152c',
    language: 'gae',
    certificate: 'lc',
    level: 'hl',
    subject: 'economics',
    year: 2013,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2013/LC034ALP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2013/LC034ALP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef3db43b63ff57cf0f4dd"),
    id: '2638d737-fb17-474c-be12-f4dec2e7dbdb',
    language: 'gae',
    certificate: 'lc',
    level: 'ol',
    subject: 'economics',
    year: 2013,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2013/LC034GLP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2013/LC034GLP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef3db43b63ff57cf0f4de"),
    id: '7668b7fc-8691-4982-9f1c-d7c0d418b6e2',
    language: 'eng',
    certificate: 'lc',
    level: 'hl',
    subject: 'economics',
    year: 2014,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2014/LC034ALP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2014/LC034ALP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef3db43b63ff57cf0f4df"),
    id: '4339347e-1785-4789-a121-c647ac8b58fc',
    language: 'eng',
    certificate: 'lc',
    level: 'ol',
    subject: 'economics',
    year: 2014,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2014/LC034GLP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2014/LC034GLP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef3db43b63ff57cf0f4e0"),
    id: '525088fa-f898-491f-8fc5-c1f554079607',
    language: 'gae',
    certificate: 'lc',
    level: 'hl',
    subject: 'economics',
    year: 2014,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2014/LC034ALP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2014/LC034ALP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef3db43b63ff57cf0f4e1"),
    id: '590bd44e-9a53-428a-b5e4-0c736616d85d',
    language: 'gae',
    certificate: 'lc',
    level: 'ol',
    subject: 'economics',
    year: 2014,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2014/LC034GLP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2014/LC034GLP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef3db43b63ff57cf0f4e2"),
    id: '3a31c1ab-5b27-4c1c-8849-283e1d16b4e6',
    language: 'eng',
    certificate: 'lc',
    level: 'hl',
    subject: 'economics',
    year: 2015,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2015/LC034ALP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2015/LC034ALP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef3db43b63ff57cf0f4e3"),
    id: '58c704db-6b99-440d-ab24-766b7676d187',
    language: 'eng',
    certificate: 'lc',
    level: 'ol',
    subject: 'economics',
    year: 2015,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2015/LC034GLP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2015/LC034GLP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef3db43b63ff57cf0f4e4"),
    id: '4f4531c0-1307-4f17-8384-7a36fcd704c1',
    language: 'gae',
    certificate: 'lc',
    level: 'hl',
    subject: 'economics',
    year: 2015,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2015/LC034ALP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2015/LC034ALP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef3db43b63ff57cf0f4e5"),
    id: '4f35b515-a48d-4a64-b4c3-8ee86d440d67',
    language: 'gae',
    certificate: 'lc',
    level: 'ol',
    subject: 'economics',
    year: 2015,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2015/LC034GLP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2015/LC034GLP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef3db43b63ff57cf0f4e6"),
    id: '271db803-e573-472d-9436-9b3de2738151',
    language: 'eng',
    certificate: 'lc',
    level: 'hl',
    subject: 'economics',
    year: 2016,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2016/LC034ALP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2016/LC034ALP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef3db43b63ff57cf0f4e7"),
    id: '373f6108-e576-4221-9926-e2112097718b',
    language: 'eng',
    certificate: 'lc',
    level: 'ol',
    subject: 'economics',
    year: 2016,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2016/LC034GLP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2016/LC034GLP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef3db43b63ff57cf0f4e8"),
    id: '1c5f3af5-51bf-43c6-bdc6-c1e242a3b225',
    language: 'gae',
    certificate: 'lc',
    level: 'hl',
    subject: 'economics',
    year: 2016,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2016/LC034ALP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2016/LC034ALP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef3db43b63ff57cf0f4e9"),
    id: '17ee337d-b109-438d-a7d9-10a205e0479c',
    language: 'gae',
    certificate: 'lc',
    level: 'ol',
    subject: 'economics',
    year: 2016,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2016/LC034GLP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2016/LC034GLP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef3db43b63ff57cf0f4ea"),
    id: '30740f5c-c28f-407d-8fc4-e7d72e864189',
    language: 'eng',
    certificate: 'lc',
    level: 'hl',
    subject: 'economics',
    year: 2017,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2017/LC034ALP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2017/LC034ALP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef3db43b63ff57cf0f4eb"),
    id: '41729bcd-11d7-4a8a-9184-6669d506f382',
    language: 'eng',
    certificate: 'lc',
    level: 'ol',
    subject: 'economics',
    year: 2017,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2017/LC034GLP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2017/LC034GLP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef3db43b63ff57cf0f4ec"),
    id: '9bd6a58d-a22d-4457-8016-716a3d76f8b0',
    language: 'gae',
    certificate: 'lc',
    level: 'hl',
    subject: 'economics',
    year: 2017,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2017/LC034ALP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2017/LC034ALP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef3db43b63ff57cf0f4ed"),
    id: '0a938086-2cb0-44cc-84af-bfeddb457be4',
    language: 'gae',
    certificate: 'lc',
    level: 'ol',
    subject: 'economics',
    year: 2017,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2017/LC034GLP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2017/LC034GLP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef3db43b63ff57cf0f4ee"),
    id: '2af01e1c-abd4-4774-95df-330522bdfd7c',
    language: 'eng',
    certificate: 'lc',
    level: 'hl',
    subject: 'economics',
    year: 2018,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2018/LC034ALP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2018/LC034ALP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef3db43b63ff57cf0f4ef"),
    id: 'c008f8fb-8b11-4fb5-8110-d6b9de1a26d2',
    language: 'eng',
    certificate: 'lc',
    level: 'ol',
    subject: 'economics',
    year: 2018,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2018/LC034GLP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2018/LC034GLP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef3db43b63ff57cf0f4f0"),
    id: '8eb00e8e-829e-430f-b18e-c8a20e2f5fbe',
    language: 'gae',
    certificate: 'lc',
    level: 'hl',
    subject: 'economics',
    year: 2018,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2018/LC034ALP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2018/LC034ALP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef3db43b63ff57cf0f4f1"),
    id: '95fefa93-df86-488d-a5a6-5d7429c4b034',
    language: 'gae',
    certificate: 'lc',
    level: 'ol',
    subject: 'economics',
    year: 2018,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2018/LC034GLP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2018/LC034GLP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef3db43b63ff57cf0f4f2"),
    id: '4707f6e8-e471-459d-88bf-e1029645ca61',
    language: 'eng',
    certificate: 'lc',
    level: 'hl',
    subject: 'economics',
    year: 2019,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2019/LC034ALP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2019/LC034ALP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef3db43b63ff57cf0f4f3"),
    id: '79daef44-b512-4e46-af3c-1dea90dbd6f8',
    language: 'eng',
    certificate: 'lc',
    level: 'ol',
    subject: 'economics',
    year: 2019,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2019/LC034GLP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2019/LC034GLP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef3db43b63ff57cf0f4f4"),
    id: '3acee21d-cc8f-4202-99ee-8655d9759eea',
    language: 'gae',
    certificate: 'lc',
    level: 'hl',
    subject: 'economics',
    year: 2019,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2019/LC034ALP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2019/LC034ALP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef3db43b63ff57cf0f4f5"),
    id: '089d3630-2f78-4fab-a127-cda611495b59',
    language: 'gae',
    certificate: 'lc',
    level: 'ol',
    subject: 'economics',
    year: 2019,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2019/LC034GLP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2019/LC034GLP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef40b43b63ff57cf0f4f6"),
    id: '551492e7-aaf1-4e74-9cd1-3435ead8a3d5',
    language: 'eng',
    certificate: 'lc',
    level: 'hl',
    subject: 'physics',
    year: 2012,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2012/LC021ALP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2012/LC021ALP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef40b43b63ff57cf0f4f7"),
    id: 'c16f7308-2780-4c4a-b1b8-df340f039cdc',
    language: 'eng',
    certificate: 'lc',
    level: 'ol',
    subject: 'physics',
    year: 2012,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2012/LC021GLP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2012/LC021GLP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef40b43b63ff57cf0f4f8"),
    id: 'd4b57b2e-7726-40b2-b2ba-516d6598c1dc',
    language: 'gae',
    certificate: 'lc',
    level: 'hl',
    subject: 'physics',
    year: 2012,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2012/LC021ALP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2012/LC021ALP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef40b43b63ff57cf0f4f9"),
    id: '7bf9eedb-9866-491b-8110-f413e7bd7b13',
    language: 'gae',
    certificate: 'lc',
    level: 'ol',
    subject: 'physics',
    year: 2012,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2012/LC021GLP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2012/LC021GLP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef40b43b63ff57cf0f4fa"),
    id: '073ba696-5d10-48f0-a71d-206889026178',
    language: 'eng',
    certificate: 'lc',
    level: 'hl',
    subject: 'physics',
    year: 2013,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2013/LC021ALP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2013/LC021ALP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef40b43b63ff57cf0f4fb"),
    id: '30b68219-5e6e-4c4e-a3cb-0369058f8fb9',
    language: 'eng',
    certificate: 'lc',
    level: 'ol',
    subject: 'physics',
    year: 2013,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2013/LC021GLP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2013/LC021GLP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef40b43b63ff57cf0f4fc"),
    id: 'abe4f94b-665d-4ab0-933a-cf3c143fe607',
    language: 'gae',
    certificate: 'lc',
    level: 'hl',
    subject: 'physics',
    year: 2013,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2013/LC021ALP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2013/LC021ALP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef40b43b63ff57cf0f4fd"),
    id: 'ba93bac1-0eaa-40b5-a27f-1856e3fecbda',
    language: 'gae',
    certificate: 'lc',
    level: 'ol',
    subject: 'physics',
    year: 2013,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2013/LC021GLP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2013/LC021GLP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef40b43b63ff57cf0f4fe"),
    id: '00befb1d-9a9a-4586-9a17-20da7393d0a3',
    language: 'eng',
    certificate: 'lc',
    level: 'hl',
    subject: 'physics',
    year: 2014,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2014/LC021ALP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2014/LC021ALP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef40b43b63ff57cf0f4ff"),
    id: '65b9d52b-7966-4350-8434-2d5347a4b690',
    language: 'eng',
    certificate: 'lc',
    level: 'ol',
    subject: 'physics',
    year: 2014,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2014/LC021GLP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2014/LC021GLP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef40b43b63ff57cf0f500"),
    id: 'a1eefc1d-ae2b-4a15-83a4-fe9b5c8ea517',
    language: 'gae',
    certificate: 'lc',
    level: 'hl',
    subject: 'physics',
    year: 2014,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2014/LC021ALP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2014/LC021ALP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef40b43b63ff57cf0f501"),
    id: '183f46ff-3cbf-4a99-9f18-6e5c5b5fe05e',
    language: 'gae',
    certificate: 'lc',
    level: 'ol',
    subject: 'physics',
    year: 2014,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2014/LC021GLP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2014/LC021GLP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef40b43b63ff57cf0f502"),
    id: '6a5b0ea3-07e9-45f3-98bf-307b654d5056',
    language: 'eng',
    certificate: 'lc',
    level: 'hl',
    subject: 'physics',
    year: 2015,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2015/LC021ALP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2015/LC021ALP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef40b43b63ff57cf0f503"),
    id: 'd4df650b-824c-4a14-9474-a1e4f55a9e40',
    language: 'eng',
    certificate: 'lc',
    level: 'ol',
    subject: 'physics',
    year: 2015,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2015/LC021GLP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2015/LC021GLP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef40b43b63ff57cf0f504"),
    id: 'f13355f2-7c63-47be-9185-4839b6b5c50d',
    language: 'gae',
    certificate: 'lc',
    level: 'hl',
    subject: 'physics',
    year: 2015,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2015/LC021ALP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2015/LC021ALP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef40b43b63ff57cf0f505"),
    id: '15f395d2-5f81-4092-8660-ef7acdc30a3c',
    language: 'gae',
    certificate: 'lc',
    level: 'ol',
    subject: 'physics',
    year: 2015,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2015/LC021GLP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2015/LC021GLP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef40b43b63ff57cf0f506"),
    id: '437fdcc2-2aa1-46f5-ac37-2aaca25eea66',
    language: 'eng',
    certificate: 'lc',
    level: 'hl',
    subject: 'physics',
    year: 2016,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2016/LC021ALP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2016/LC021ALP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef40b43b63ff57cf0f507"),
    id: '599e2636-3b82-4cbe-93f1-b6c214cc4a1c',
    language: 'eng',
    certificate: 'lc',
    level: 'ol',
    subject: 'physics',
    year: 2016,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2016/LC021GLP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2016/LC021GLP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef40b43b63ff57cf0f508"),
    id: 'ea663370-56e2-48fc-b9ce-18f5e8969daa',
    language: 'gae',
    certificate: 'lc',
    level: 'hl',
    subject: 'physics',
    year: 2016,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2016/LC021ALP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2016/LC021ALP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef40b43b63ff57cf0f509"),
    id: 'baa8cf6b-c89c-4096-bfe1-e491a14842c6',
    language: 'gae',
    certificate: 'lc',
    level: 'ol',
    subject: 'physics',
    year: 2016,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2016/LC021GLP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2016/LC021GLP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef40b43b63ff57cf0f50a"),
    id: '52fce2d9-6e43-400c-9475-d75095f6a8f6',
    language: 'eng',
    certificate: 'lc',
    level: 'hl',
    subject: 'physics',
    year: 2017,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2017/LC021ALP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2017/LC021ALP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef40b43b63ff57cf0f50b"),
    id: '58da309d-6ec1-4ab9-bcd2-ac7fc63e7a10',
    language: 'eng',
    certificate: 'lc',
    level: 'ol',
    subject: 'physics',
    year: 2017,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2017/LC021GLP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2017/LC021GLP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef40b43b63ff57cf0f50c"),
    id: 'dfb7d12a-aaeb-4c0c-a040-100136b56da9',
    language: 'gae',
    certificate: 'lc',
    level: 'hl',
    subject: 'physics',
    year: 2017,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2017/LC021ALP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2017/LC021ALP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef40b43b63ff57cf0f50d"),
    id: 'c42a1dde-8094-460d-b4e9-c8fe90a1735d',
    language: 'gae',
    certificate: 'lc',
    level: 'ol',
    subject: 'physics',
    year: 2017,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2017/LC021GLP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2017/LC021GLP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef40b43b63ff57cf0f50e"),
    id: 'ed2920c1-1de8-4d19-9fd4-a1f53b42aabc',
    language: 'eng',
    certificate: 'lc',
    level: 'hl',
    subject: 'physics',
    year: 2018,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2018/LC021ALP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2018/LC021ALP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef40b43b63ff57cf0f50f"),
    id: '2723c765-4324-433a-9517-b0a34a27e5a6',
    language: 'eng',
    certificate: 'lc',
    level: 'ol',
    subject: 'physics',
    year: 2018,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2018/LC021GLP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2018/LC021GLP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef40b43b63ff57cf0f510"),
    id: '2ae65105-d0d0-46ab-b215-f51023db4f3c',
    language: 'gae',
    certificate: 'lc',
    level: 'hl',
    subject: 'physics',
    year: 2018,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2018/LC021ALP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2018/LC021ALP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef40b43b63ff57cf0f511"),
    id: '12e0ba48-c9ca-48eb-8b72-1964a637829c',
    language: 'gae',
    certificate: 'lc',
    level: 'ol',
    subject: 'physics',
    year: 2018,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2018/LC021GLP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2018/LC021GLP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef40b43b63ff57cf0f512"),
    id: '385601e8-176f-4de4-b715-55eefb53fb39',
    language: 'eng',
    certificate: 'lc',
    level: 'hl',
    subject: 'physics',
    year: 2019,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2019/LC021ALP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2019/LC021ALP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef40b43b63ff57cf0f513"),
    id: '8b66b325-340b-40e6-a5af-2ff058d472e8',
    language: 'eng',
    certificate: 'lc',
    level: 'ol',
    subject: 'physics',
    year: 2019,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2019/LC021GLP000EV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2019/LC021GLP000EV.pdf'
    }
  },
  {
    _id: ObjectId("622ef40b43b63ff57cf0f514"),
    id: '10acbdc5-e5ba-4116-bb60-d161a513863d',
    language: 'gae',
    certificate: 'lc',
    level: 'hl',
    subject: 'physics',
    year: 2019,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2019/LC021ALP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2019/LC021ALP000IV.pdf'
    }
  },
  {
    _id: ObjectId("622ef40b43b63ff57cf0f515"),
    id: '974dd0aa-5321-499d-b99e-2feeb5fbbf96',
    language: 'gae',
    certificate: 'lc',
    level: 'ol',
    subject: 'physics',
    year: 2019,
    papers: {
      exam: 'https://www.examinations.ie/archive/exampapers/2019/LC021GLP000IV.pdf',
      markingScheme: 'https://www.examinations.ie/archive/markingschemes/2019/LC021GLP000IV.pdf'
    }
  }
]);