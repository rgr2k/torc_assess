export class SearchPage {
    private readonly searchInput = '#search_form_input_homepage';
    private readonly searchButton = '#search_button_homepage';
    private readonly linksWrapper = '#links_wrapper';
    private readonly firstResultLink = '[data-testid="result-title-a"]';

    navigateTo() {
        cy.visit('/');
    }

    search(query: string) {
        cy.get(this.searchInput).type(query);
        cy.get(this.searchButton).click();
    }

    expectLinksWrapperToBeVisible() {
        cy.get(this.linksWrapper).should('be.visible');
    }

    expectFirstResultLinkToHaveHref(href: string) {
        cy.get(this.firstResultLink).should('have.attr', 'href', href);
    }
}
