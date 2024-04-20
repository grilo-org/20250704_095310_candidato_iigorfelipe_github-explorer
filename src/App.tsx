import { AppRoutes } from './routes';
import AppThemeProvider from './contexts/theme/provider';
import GithubProvider from './contexts/github/provider';
import Header from './components/Header';

const App = () => {
  return (
    <AppThemeProvider>
      <GithubProvider>
        <Header />
        <AppRoutes />
      </GithubProvider>
    </AppThemeProvider>
  );
};

export default App;
