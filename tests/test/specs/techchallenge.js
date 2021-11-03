import Page from '../pageobjects/Page'

describe('Technical Challenge', () => {
    it('Should validate Dublin as destination', async () => {
        await Page.open();
        await Page.btnAceito.isClickable();
        await Page.btnAceito.click();
        await expect (browser).toHaveTitle('Google Maps')
        await expect (browser).toHaveUrlContaining('https://www.google.com/maps/')
        await Page.searchBoxInput.setValue('Dublin');
        await Page.searchButton.click();
        await expect(Page.headlineText).toHaveText('Dublin');
        await Page.directionsIcon.isClickable();
        await Page.directionsIcon.click();
        await Page.verifyDestination.click(); 
        const r = Page.verifyDestination;
        await expect(r).toHaveValueContaining('Dublin')
    });
});


