class Page {

    get btnAceito () { return $('//button[@class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc"]') }
    get searchBoxInput () { return $('//div/input[@id="searchboxinput"]')}
    get searchButton () { return $('//div/button[@id="searchbox-searchbutton"]')}
    get headlineText () { return $('//div//h1[@class="x3AX1-LfntMc-header-title-title gm2-headline-5"]')}
    get directionsIcon () { return $('//div[@class="etWJQ etWJQ-text csAe4e-y1XlWb-QBLLGd pChizd vqxL8-haDnnc"]')}
    get verifyDestination () { return $('//div[@id="directions-searchbox-1"]//input')}

    open () {
        return browser.url(`https://www.google.com/maps/`)
    }
}

export default new Page();

