import { RouteObject, createBrowserRouter, redirect } from 'react-router-dom';

const routes: Array<RouteObject> = [
  {
    path: '/',
    lazy: async () => {
      const StartPage = await import('./App').then(comp => comp.App);
      return { Component: StartPage };
    },
    children: [
      {
        index: true,
        loader: () => {
          return redirect('/home');
        }
      },
      {
        path: 'home',
        lazy: async () => {
          const HomePage = await import('./pages/home/home.page').then(comp => comp.HomePage);
          return { Component: HomePage };
        }
      },
      {
        path: 'about',
        lazy: async () => {
          const AboutPage = await import('./pages/about/about.page').then(comp => comp.AboutPage);
          return { Component: AboutPage };
        }
      },
      {
        path: 'resume',
        lazy: async () => {
          const ResumePage = await import('./pages/resume/resume.page').then(comp => comp.ResumePage);
          return { Component: ResumePage };
        }
      },
      {
        path: 'portfolio',
        lazy: async () => {
          const PortfolioPage = await import('./pages/portfolio/portfolio.page').then(comp => comp.PortfolioPage);
          return { Component: PortfolioPage };
        }
      },
      {
        path: 'service',
        lazy: async () => {
          const ServicePage = await import('./pages/service/service.page').then(comp => comp.ServicePage);
          return { Component: ServicePage };
        }
      },
      {
        path: 'contact',
        lazy: async () => {
          const ContactPage = await import('./pages/contact/contact.page').then(comp => comp.ContactPage);
          return { Component: ContactPage };
        }
      }
    ]
  }
];

export const appRoutes = createBrowserRouter(routes);