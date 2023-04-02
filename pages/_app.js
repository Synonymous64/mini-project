import '@/styles/globals.css'

// INTERNLA IMPORT

import { ChatAppProvider } from '../Context/ChatAppContext';
import { NavBar } from '../Components/index';

const App = ({ Component, pageProps }) => (
  <div>
    <ChatAppProvider>
      <NavBar />
      <Component {...pageProps} />
    </ChatAppProvider>
  </div>
)

export default App;