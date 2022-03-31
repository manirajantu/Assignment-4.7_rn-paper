import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import App from './App';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
    font: 'sans-serif-medium',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}