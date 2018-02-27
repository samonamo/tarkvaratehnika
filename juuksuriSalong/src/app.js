export class App {
configureRouter(config, router) {
        this.router = router;
        config.title = 'My Aurelia application';
        config.map([
          { route: ['', 'home'],       name: 'home',       moduleId: 'home/index' , title:"Pealeht", nav: true},
          { route: 'people',            name: 'people',      moduleId: 'people/people',	title:"Registreeri", nav: true},
          { route: 'login',            name: 'login',      moduleId: 'login/login',	title:"Sisse logimine", nav: true}
        ]);
      }
}
