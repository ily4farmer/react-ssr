import {createRoot} from 'react-dom/client'
import { App } from './App'


const root = document.getElementById('root')


if (!root) {
    throw Error('not find root')
}


const container = createRoot(root)


container.render(<App/>)