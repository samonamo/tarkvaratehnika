export class App {
configureRouter(config, router) {
        this.router = router;
        config.title = 'My Aurelia application';
        config.map([
          { route: ['', 'home'],       name: 'home',       moduleId: 'home/index' },
          { route: 'people',            name: 'people',      moduleId: 'people/people', nav: true}
        ]);
      }
}
