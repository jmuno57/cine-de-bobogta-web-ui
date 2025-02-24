export const Routes = {
  Root: {
    path: '/',
    analytics: 'dashboard',
    headerInfo: {
      title: '',
      hiddenClose: 'false',
      hiddenBack: 'true'
    }
  },
  simulator: {
    path: '/simulator',
    analytics: 'simulator',
    headerInfo: {
      title: '',
      hiddenClose: 'false',
      hiddenBack: 'false'
    }
    // noRequireLayout: true, * Esta propiedad permite que se tome el contenedor completo de la pantalla.
  },
  summary: {
    path: '/summary',
    analytics: 'summary',
    headerInfo: {
      title: '',
      hiddenClose: 'false',
      hiddenBack: 'false'
    }
    // noRequireHeader: true, * Esta propiedad oculta completamente el header
  },
  payment_options: {
    path: '/payment_options',
    analytics: 'payment_options',
    headerInfo: {
      title: '',
      hiddenClose: 'false',
      hiddenBack: 'false'
    }
    // noRequireHeader: true, * Esta propiedad oculta completamente el header
  }
};
