describe('angular-metas test through provider', function(){

    it('gets the app open', function(){
        browser.getProcessedConfig().then(function(config){
            browser.get(config.testSiteAddress);
        });
    });

    it('uses defaults metas in index', function(){
        checkMetaTag('title', 'Default title');
        checkMetaTag('description', '');
        checkMetaTag('author', 'Will Smith');
    });

    it('uses view-a metas in view-a', function(){
        element(by.css('.view-a')).click();
        checkMetaTag('title', 'View A');
        checkMetaTag('description', 'This is view A description');
        checkMetaTag('author', 'Will Smith');
    });

    it('uses view-b metas in view-b', function(){
        element(by.css('.view-b')).click();
        checkMetaTag('title', 'View B');
        checkMetaTag('description', 'This is view B description');
        checkMetaTag('author', 'Will Smith');
    });

    it('uses view-c metas in view-c', function(){
        element(by.css('.view-c')).click();
        checkMetaTag('title', 'View C');
        checkMetaTag('description', '');
        checkMetaTag('author', 'John Doe');
    });

    it('uses defaults metas in index after getting back to defaults', function(){
        element(by.css('.view-default')).click();
        checkMetaTag('title', 'Default title');
        checkMetaTag('description', '');
        checkMetaTag('author', 'Will Smith');
    });

});

function getMetaTag(tagName){
    return element(by.css('meta[name="'+ tagName +'"]')).getAttribute('content');
};
function checkMetaTag(tagName, tagContent){
    var metaTagContent = getMetaTag(tagName);
    expect(metaTagContent === tagContent);
};
