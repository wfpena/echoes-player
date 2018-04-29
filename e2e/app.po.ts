import { browser, element, by } from 'protractor';

export class EchoesPlayerPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitle() {
    return browser.getTitle();
  }

  getTitleInput() {
    return element(by.css('input[formcontrolname=title]'));
  }

  getVideoResults() {
    //browser.pause();
    // browser.wait(function() {
    //   return element(by.css('youtube-videos')).isPresent().then(function(present) {
    //     return present;
    //   })
    // });
    browser.wait(element(by.css('youtube-videos')).isPresent());
    return element.all(by.css('youtube-videos youtube-list .youtube-list-item'));
  }

  // getTalkText(index: number) {
  //   return this.getTalks().get(index).getText();
  // }
}
