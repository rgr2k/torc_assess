/// <reference types="cypress" />

import { SearchPage } from '../../pages/searchPage'

describe('Search engine test', () => {
  const searchPage = new SearchPage();

  beforeEach(() => {
    searchPage.navigateTo();
  });

  it('should navigate to the football API website', () => {
    searchPage.search('The dev-friendly football API');
    searchPage.expectLinksWrapperToBeVisible();
    searchPage.expectFirstResultLinkToHaveHref('https://www.football-data.org/');
  });
});
