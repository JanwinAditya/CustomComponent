import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

function LearnReact(){
    return(
        <main>
            <img src="react-logo.png" width="40" />
            <h1>Why excited to learn React?</h1>
            <ol>
                <li>A very famous front-end Framework</li>
                <li>High demand in job Market</li>
                <li>Composable</li>
                <li>Declarative</li>
            </ol>
         </main>
        )
}
root.render(
    <LearnReact />
)
