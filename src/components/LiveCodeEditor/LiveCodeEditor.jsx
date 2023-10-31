import { liveEditSnippets } from "@/data/liveEditSnippets"
import Playground from "@agney/playground"

export default function LiveCodeEditor({ id }) {
  return <Playground id="playground" initialSnippet={liveEditSnippets[id]} />
}
