import { Routes, Route } from 'react-router-dom';
import { Container } from 'components/main/style';
import MainLayout from 'components/layouts/main-layout';
import Tab1 from 'components/UI/tabs/tab-1';
import Tab2 from 'components/UI/tabs/tab-2';

function App() {
  return (
    <>
      <Container>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route path="tab1" element={<Tab1 />} />
            <Route path="tab2" element={<Tab2 />} />
            <Route path="*" element={<Tab1 />} />
          </Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
