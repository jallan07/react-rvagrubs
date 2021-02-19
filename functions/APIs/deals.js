exports.getAllDeals = (request, response) => {
  deals = [
    {
      id: '1',
      headline: 'Buy two drinks get an entree for free',
      body: 'blah blah',
      restaurant: 'Mezzah'
    },
    {
      id: '2',
      headline: '50% OFF',
      body: 'try our new....',
      restaurant: 'Chicken Fiesta'
    }
  ];
  return response.json(deals);
};
