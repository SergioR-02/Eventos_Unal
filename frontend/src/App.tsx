import { ThemeProvider } from './context/ThemeContext';
import AppMain from './components/AppMain';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-page text-text transition-colors flex flex-col">
        <AppMain />
      </div>
    </ThemeProvider>
  );
}
