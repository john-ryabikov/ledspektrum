import { lights } from '../../data/data'

import LedLight from './LedLight'

export default function LedLights() {
  return (
    <div className="block-3__ledlights">
        {lights.map((light) => (
            <LedLight key={light.id} light={light}/>
        ))}
    </div>
  )
}
