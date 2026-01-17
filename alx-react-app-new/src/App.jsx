import './App.css';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <Header />
      <UserProfile name="john" age={23} bio="React developer from Benin City" />
      <MainContent />
      <div style={{ marginTop: '20px' }}>
        <Counter />
